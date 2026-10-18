const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const math=require('../assets/compass-math.js');
const event=(alpha,beta=0,gamma=0)=>({alpha,beta,gamma,absolute:true});
const near=(a,b)=>assert.ok(Math.abs(a-b)<1e-6,`${a} != ${b}`);
test('Four compass directions in natural portrait orientation',()=>{
  near(math.headingFromEvent(event(0)),0); near(math.headingFromEvent(event(270)),90);
  near(math.headingFromEvent(event(180)),180); near(math.headingFromEvent(event(90)),270);
});
test('Screen rotation, tilt projection, wrap-around',()=>{
  near(math.headingFromEvent(event(0),90),90); near(math.headingFromEvent(event(0),270),270);
  near(math.headingFromEvent(event(315,30,20)),45);
  near(math.headingFromEvent(event(359)),1);
  near(math.headingFromEvent({webkitCompassHeading:350},90),80);
});
test('Reject relative orientation, invalid values and vertical ambiguity',()=>{
  assert.equal(math.headingFromEvent({...event(45),absolute:false}),null);
  assert.equal(math.headingFromEvent(event(null)),null);
  assert.equal(math.headingFromEvent(event(NaN)),null);
  assert.equal(math.headingFromEvent(event(0,90)),null);
  assert.equal(math.headingFromEvent({webkitCompassHeading:20,webkitCompassAccuracy:-1}),null);
});
function harness(permission) {
  const elements=new Map(),listeners=new Map();
  function el(id) { if(!elements.has(id)) elements.set(id,{textContent:'',classList:{add(){},remove(){},contains(){return false;}},focus(){},addEventListener(){},querySelectorAll(){return[];}});return elements.get(id); }
  const window={isSecureContext:true,addEventListener(n,f){listeners.set(n,f);},removeEventListener(n){listeners.delete(n);}};
  let gpsSuccess,gpsError,cleared=[];
  const document={getElementById:el,addEventListener(){},activeElement:el('initial')};
  const ctx={window,document,CompassMath:math,location:{protocol:'https:'},screen:{orientation:{angle:0}},DeviceOrientationEvent:permission?{requestPermission:permission}:{},
    navigator:{geolocation:{watchPosition(ok,err){gpsSuccess=ok;gpsError=err;return 4;},clearWatch(id){cleared.push(id);}}},
    elSensorBadge:el('sensor-badge'),sensorActive:false,targetHeading:123,isDragging:false,autoSpinActive:false,targetTiltX:0,targetTiltZ:0,
    updateAutoSpinBtn(){},closeTools(){},showToast(){},setTimeout(){return 1;},clearTimeout(){},setInterval(){return 2;},Date,console};
  vm.createContext(ctx);
  const app=fs.readFileSync(require.resolve('../assets/app.js'),'utf8');
  const section=app.slice(app.indexOf('    // 9. Hardware:'),app.indexOf('    // 10. MAIN RENDER'));
  vm.runInContext(section,ctx);
  return {ctx,run:code=>vm.runInContext(code,ctx),listeners,el,getGps:()=>gpsSuccess,getGpsError:()=>gpsError,cleared};
}
test('No listeners until requested; stop prevents late sensor updates',()=>{
  const h=harness(); assert.equal(h.listeners.has('deviceorientation'),false);
  h.run('startSensor()');h.run('handleOrientation({alpha:270,beta:0,gamma:0,absolute:true})');near(h.ctx.targetHeading,90);
  h.run('stopSensor()');h.run('handleOrientation({alpha:180,beta:0,gamma:0,absolute:true})');near(h.ctx.targetHeading,90);
  assert.equal(h.listeners.has('deviceorientation'),false);
});
test('GPS never overwrites compass, stop clears watcher and ignores late fix',()=>{
  const h=harness(); h.run('startGps()');const cb=h.getGps();
  cb({coords:{latitude:-33,longitude:-70,accuracy:10,heading:222,speed:20}});
  near(h.ctx.targetHeading,123); assert.match(h.el('gps-coord-readout').textContent,/-33/);
  h.run('stopGps()');cb({coords:{latitude:33,longitude:70,accuracy:10}});
  assert.equal(h.el('gps-badge').textContent,'📍 위치 꺼짐');assert.deepEqual(h.cleared,[4]);
});
test('Late iOS permission grant cannot restart a cancelled sensor',async()=>{
  let resolve;const h=harness(()=>new Promise(r=>resolve=r));
  h.run('startSensor()');h.run('stopSensor()');resolve('granted');await Promise.resolve();
  assert.equal(h.listeners.has('deviceorientation'),false);
});
test('Opening settings during a sensor stream does not close settings',()=>{
  const h=harness();let closed=0;h.el('permission-modal').classList.add=()=>closed++;
  h.run('startSensor()');h.run('handleOrientation({alpha:0,beta:0,gamma:0,absolute:true})');assert.equal(closed,1);
  h.run('openPermissionModal()');h.run('handleOrientation({alpha:1,beta:0,gamma:0,absolute:true})');assert.equal(closed,1);
});
