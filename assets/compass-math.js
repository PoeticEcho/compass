/* Screen-top projection onto the horizontal plane. No invented declination. */
(function (root) {
  'use strict';
  const normalize = deg => ((deg % 360) + 360) % 360;
  function headingFromEvent(event, screenAngle = 0) {
    if (!Number.isFinite(screenAngle)) return null;
    if (Number.isFinite(event.webkitCompassHeading) && event.webkitCompassHeading >= 0) {
      if (Number.isFinite(event.webkitCompassAccuracy) && event.webkitCompassAccuracy < 0) return null;
      return normalize(event.webkitCompassHeading + screenAngle);
    }
    if (event.absolute !== true || ![event.alpha, event.beta, event.gamma].every(Number.isFinite)) return null;
    const [a,b,g,t] = [event.alpha,event.beta,event.gamma,screenAngle].map(v => v * Math.PI / 180);
    const ca=Math.cos(a), sa=Math.sin(a), cb=Math.cos(b), sb=Math.sin(b), cg=Math.cos(g), sg=Math.sin(g);
    const east=(ca*cg-sa*sb*sg)*Math.sin(t)-sa*cb*Math.cos(t);
    const north=(sa*cg+ca*sb*sg)*Math.sin(t)+ca*cb*Math.cos(t);
    if (Math.hypot(east,north)<0.25) return null;
    return normalize(Math.atan2(east,north)*180/Math.PI);
  }
  const api={normalize,headingFromEvent};
  if (typeof module !== 'undefined' && module.exports) module.exports=api;
  else root.CompassMath=api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
