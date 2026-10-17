const {test}=require('node:test');const assert=require('node:assert/strict');const vm=require('node:vm');const fs=require('node:fs');
test('Full app startup remains usable when WebGL context creation fails',()=>{
 const elements=new Map();let canvasAdded=false;
 const context=new Proxy({}, {get:(obj,key)=>{if(key==='createRadialGradient'||key==='createLinearGradient')return ()=>({addColorStop(){}});if(key==='measureText')return ()=>({width:20});return obj[key]??(()=>{});},set:(obj,key,value)=>{obj[key]=value;return true;}});
 const element=(id)=>{if(!elements.has(id))elements.set(id,{textContent:'',value:'',style:{setProperty(){}},classList:{add(){},remove(){},toggle(){},contains(){return false;}},addEventListener(){},appendChild(node){if(id==='canvas-container'&&node.kind==='canvas')canvasAdded=true;},setAttribute(){},focus(){},getBoundingClientRect(){return{bottom:150,height:100};},clientWidth:1000,getContext(){return context;}});return elements.get(id);};
 const document={getElementById:element,createElement(kind){return{...element(Symbol()),kind};},querySelectorAll(){return[];},querySelector(){return null;},addEventListener(){},documentElement:element('root'),hidden:false,activeElement:element('active')};
 const THREE={...require('../assets/three-r128.min.js'),WebGLRenderer:class{constructor(){throw new Error('No WebGL');}}};
 const window={innerWidth:1000,innerHeight:900,devicePixelRatio:1,isSecureContext:true,addEventListener(){},removeEventListener(){}};
 const sandbox={THREE,document,window,CompassMath:require('../assets/compass-math.js'),screen:{orientation:{angle:0}},location:{protocol:'https:'},navigator:{},DeviceOrientationEvent:{},ResizeObserver:class{observe(){}},requestAnimationFrame(){},setTimeout(){},clearTimeout(){},setInterval(){},console:{log(){},warn(){},error(error){throw error;}},performance};
 vm.createContext(sandbox);vm.runInContext(fs.readFileSync(require.resolve('../assets/app.js'),'utf8'),sandbox);
 assert.equal(typeof window.onload,'function');window.onload();assert.equal(canvasAdded,true);assert.equal(element('heading-deg').textContent,'0°');
});
