(()=>{var xn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Mf=0,qh=1,bf=2;var Ba=1,Af=2,Fr=3,bs=0,En=1,_n=2,Ii=0,Br=1,Ha=2,Yh=3,Kh=4,wf=5;var Gs=100,Tf=101,Ef=102,Rf=103,Pf=104,Cf=200,If=201,Df=202,Nf=203,jh=204,Zh=205,Uf=206,Lf=207,Of=208,Ff=209,Bf=210,Hf=211,zf=212,kf=213,Vf=214,Bo=0,Ho=1,zo=2,br=3,ko=4,Vo=5,Go=6,Wo=7,Jh=0,Gf=1,Wf=2,gi=0,Qh=1,$h=2,tu=3,za=4,eu=5,nu=6,iu=7;var su=300,As=301,Ws=302,wl=303,Tl=304,ka=306,Xo=1e3,Pi=1001,qo=1002,tn=1003,Xf=1004;var Va=1005;var cn=1006,El=1007;var ws=1008;var Un=1009,ru=1010,au=1011,Hr=1012,Rl=1013,xi=1014,_i=1015,yi=1016,Pl=1017,Cl=1018,zr=1020,ou=35902,lu=35899,cu=1021,hu=1022,ei=1023,Ci=1026,Ts=1027,uu=1028,Il=1029,Es=1030,Dl=1031;var Nl=1033,Ga=33776,Wa=33777,Xa=33778,qa=33779,Ul=35840,Ll=35841,Ol=35842,Fl=35843,Bl=36196,Hl=37492,zl=37496,kl=37488,Vl=37489,Ya=37490,Gl=37491,Wl=37808,Xl=37809,ql=37810,Yl=37811,Kl=37812,jl=37813,Zl=37814,Jl=37815,Ql=37816,$l=37817,tc=37818,ec=37819,nc=37820,ic=37821,sc=36492,rc=36494,ac=36495,oc=36283,lc=36284,Ka=36285,cc=36286;var ga=2300,Yo=2301,Oo=2302,Bh=2303,Hh=2400,zh=2401,kh=2402;var qf=3200;var hc=0,Yf=1,Ki="",mn="srgb",xa="srgb-linear",_a="linear",he="srgb";var Fo=7680;var Kf=519,jf=512,Zf=513,Jf=514,uc=515,Qf=516,$f=517,dc=518,tp=519,ep=35044;var du="300 es",pi=2e3,Ar=2001;function ig(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function sg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ya(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function np(){let n=ya("canvas");return n.style.display="block",n}var Xd={},wr=null;function fu(...n){let t="THREE."+n.shift();wr?wr("log",t,...n):console.log(t,...n)}function ip(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ut(...n){n=ip(n);let t="THREE."+n.shift();if(wr)wr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Bt(...n){n=ip(n);let t="THREE."+n.shift();if(wr)wr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Fs(...n){let t=n.join(" ");t in Xd||(Xd[t]=!0,Ut(...n))}function sp(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var rp={[Bo]:Ho,[zo]:Go,[ko]:Wo,[br]:Vo,[Ho]:Bo,[Go]:zo,[Wo]:ko,[Vo]:br},mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qd=1234567,da=Math.PI/180,Tr=180/Math.PI;function kr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fn[n&255]+fn[n>>8&255]+fn[n>>16&255]+fn[n>>24&255]+"-"+fn[t&255]+fn[t>>8&255]+"-"+fn[t>>16&15|64]+fn[t>>24&255]+"-"+fn[e&63|128]+fn[e>>8&255]+"-"+fn[e>>16&255]+fn[e>>24&255]+fn[i&255]+fn[i>>8&255]+fn[i>>16&255]+fn[i>>24&255]).toLowerCase()}function Yt(n,t,e){return Math.max(t,Math.min(e,n))}function pu(n,t){return(n%t+t)%t}function rg(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function ag(n,t,e){return n!==t?(e-n)/(t-n):0}function fa(n,t,e){return(1-e)*n+e*t}function og(n,t,e,i){return fa(n,t,1-Math.exp(-e*i))}function lg(n,t=1){return t-Math.abs(pu(n,t*2)-t)}function cg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function hg(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function ug(n,t){return n+Math.floor(Math.random()*(t-n+1))}function dg(n,t){return n+Math.random()*(t-n)}function fg(n){return n*(.5-Math.random())}function pg(n){n!==void 0&&(qd=n);let t=qd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mg(n){return n*da}function gg(n){return n*Tr}function xg(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function _g(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function yg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function vg(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),p=r((t-i)/2),u=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*p,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*p,o*c);break;case"ZXZ":n.set(l*p,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*h,o*c);break;default:Ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var ni={DEG2RAD:da,RAD2DEG:Tr,generateUUID:kr,clamp:Yt,euclideanModulo:pu,mapLinear:rg,inverseLerp:ag,lerp:fa,damp:og,pingpong:lg,smoothstep:cg,smootherstep:hg,randInt:ug,randFloat:dg,randFloatSpread:fg,seededRandom:pg,degToRad:mg,radToDeg:gg,isPowerOfTwo:xg,ceilPowerOfTwo:_g,floorPowerOfTwo:yg,setQuaternionFromProperEuler:vg,normalize:bn,denormalize:Sr},vu=class vu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vu.prototype.isVector2=!0;var xt=vu,ze=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],p=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(p!==y||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+p*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let d=1-o;if(m<.9995){let b=Math.acos(m),E=Math.sin(b);d=Math.sin(d*b)/E,o=Math.sin(o*b)/E,l=l*d+u*o,c=c*d+f*o,h=h*d+g*o,p=p*d+y*o}else{l=l*d+u*o,c=c*d+f*o,h=h*d+g*o,p=p*d+y*o;let b=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=b,c*=b,h*=b,p*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=p}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],p=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*p+l*f-c*u,t[e+1]=l*g+h*u+c*p-o*f,t[e+2]=c*g+h*f+o*u-l*p,t[e+3]=h*g-o*p-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),p=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*p+c*f*g,this._y=c*f*p-u*h*g,this._z=c*h*g+u*f*p,this._w=c*h*p-u*f*g;break;case"YXZ":this._x=u*h*p+c*f*g,this._y=c*f*p-u*h*g,this._z=c*h*g-u*f*p,this._w=c*h*p+u*f*g;break;case"ZXY":this._x=u*h*p-c*f*g,this._y=c*f*p+u*h*g,this._z=c*h*g+u*f*p,this._w=c*h*p-u*f*g;break;case"ZYX":this._x=u*h*p-c*f*g,this._y=c*f*p+u*h*g,this._z=c*h*g-u*f*p,this._w=c*h*p+u*f*g;break;case"YZX":this._x=u*h*p+c*f*g,this._y=c*f*p+u*h*g,this._z=c*h*g-u*f*p,this._w=c*h*p-u*f*g;break;case"XZY":this._x=u*h*p-c*f*g,this._y=c*f*p-u*h*g,this._z=c*h*g+u*f*p,this._w=c*h*p+u*f*g;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],p=e[10],u=i+o+p;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>p){let f=2*Math.sqrt(1+i-o-p);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>p){let f=2*Math.sqrt(1+o-i-p);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+p-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Su=class Su{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Yd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),p=2*(r*i-a*e);return this.x=e+l*c+a*p-o*h,this.y=i+l*h+o*c-r*p,this.z=s+l*p+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return dh.copy(this).projectOnVector(t),this.sub(dh)}reflect(t){return this.sub(dh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Yt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Su.prototype.isVector3=!0;var I=Su,dh=new I,Yd=new ze,Mu=class Mu{constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],p=i[7],u=i[2],f=i[5],g=i[8],y=s[0],m=s[3],d=s[6],b=s[1],E=s[4],S=s[7],M=s[2],A=s[5],R=s[8];return r[0]=a*y+o*b+l*M,r[3]=a*m+o*E+l*A,r[6]=a*d+o*S+l*R,r[1]=c*y+h*b+p*M,r[4]=c*m+h*E+p*A,r[7]=c*d+h*S+p*R,r[2]=u*y+f*b+g*M,r[5]=u*m+f*E+g*A,r[8]=u*d+f*S+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*p+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=p*y,t[1]=(s*c-h*i)*y,t[2]=(o*i-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(i*l-c*e)*y,t[8]=(a*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(fh.makeScale(t,e)),this}rotate(t){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(fh.makeRotation(-t)),this}translate(t,e){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(fh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Mu.prototype.isMatrix3=!0;var zt=Mu,fh=new zt,Kd=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jd=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sg(){let n={enabled:!0,workingColorSpace:xa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===he&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===he&&(s.r=Mr(s.r),s.g=Mr(s.g),s.b=Mr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ki?_a:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[xa]:{primaries:t,whitePoint:i,transfer:_a,toXYZ:Kd,fromXYZ:jd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:mn},outputColorSpaceConfig:{drawingBufferColorSpace:mn}},[mn]:{primaries:t,whitePoint:i,transfer:he,toXYZ:Kd,fromXYZ:jd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:mn}}}),n}var $t=Sg();function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Mr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var lr,Ko=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{lr===void 0&&(lr=ya("canvas")),lr.width=t.width,lr.height=t.height;let s=lr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=lr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ya("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Wi(e[i]/255)*255):e[i]=Wi(e[i]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Mg=0,Er=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mg++}),this.uuid=kr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ph(s[a].image)):r.push(ph(s[a]))}else r=ph(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function ph(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ko.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}var bg=0,mh=new I,wn=class n extends mi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Pi,s=Pi,r=cn,a=ws,o=ei,l=Un,c=n.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=kr(),this.name="",this.source=new Er(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(mh).x}get height(){return this.source.getSize(mh).y}get depth(){return this.source.getSize(mh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==su)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xo:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xo:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=su;wn.DEFAULT_ANISOTROPY=1;var bu=class bu{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],p=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(h-u)<.01&&Math.abs(p-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,S=(f+1)/2,M=(d+1)/2,A=(h+u)/4,R=(p+y)/4,_=(g+m)/4;return E>S&&E>M?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=A/i,r=R/i):S>M?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=A/s,r=_/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=R/r,s=_/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(p-y)*(p-y)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(p-y)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Yt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bu.prototype.isVector4=!0;var Pe=bu,jo=class extends mi{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new wn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Er(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends jo{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},va=class extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zo=class extends wn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Al=class Al{constructor(t,e,i,s,r,a,o,l,c,h,p,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,p,u,f,g,y,m)}set(t,e,i,s,r,a,o,l,c,h,p,u,f,g,y,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=p,d[14]=u,d[3]=f,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Al().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/cr.setFromMatrixColumn(t,0).length(),r=1/cr.setFromMatrixColumn(t,1).length(),a=1/cr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*p,g=o*h,y=o*p;e[0]=l*h,e[4]=-l*p,e[8]=c,e[1]=f+g*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*p,g=c*h,y=c*p;e[0]=u+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*p,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*p,g=c*h,y=c*p;e[0]=u-y*o,e[4]=-a*p,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*p,g=o*h,y=o*p;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+y,e[1]=l*p,e[5]=y*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-u*p,e[8]=g*p+f,e[1]=p,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*p+g,e[10]=u-y*p}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-p,e[8]=c*h,e[1]=u*p+y,e[5]=a*h,e[9]=f*p-g,e[2]=g*p-f,e[6]=o*h,e[10]=y*p+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ag,t,wg)}lookAt(t,e,i){let s=this.elements;return Gn.subVectors(t,e),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),cs.crossVectors(i,Gn),cs.lengthSq()===0&&(Math.abs(i.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),cs.crossVectors(i,Gn)),cs.normalize(),po.crossVectors(Gn,cs),s[0]=cs.x,s[4]=po.x,s[8]=Gn.x,s[1]=cs.y,s[5]=po.y,s[9]=Gn.y,s[2]=cs.z,s[6]=po.z,s[10]=Gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],p=i[5],u=i[9],f=i[13],g=i[2],y=i[6],m=i[10],d=i[14],b=i[3],E=i[7],S=i[11],M=i[15],A=s[0],R=s[4],_=s[8],w=s[12],P=s[1],L=s[5],O=s[9],B=s[13],C=s[2],k=s[6],q=s[10],j=s[14],st=s[3],Y=s[7],tt=s[11],nt=s[15];return r[0]=a*A+o*P+l*C+c*st,r[4]=a*R+o*L+l*k+c*Y,r[8]=a*_+o*O+l*q+c*tt,r[12]=a*w+o*B+l*j+c*nt,r[1]=h*A+p*P+u*C+f*st,r[5]=h*R+p*L+u*k+f*Y,r[9]=h*_+p*O+u*q+f*tt,r[13]=h*w+p*B+u*j+f*nt,r[2]=g*A+y*P+m*C+d*st,r[6]=g*R+y*L+m*k+d*Y,r[10]=g*_+y*O+m*q+d*tt,r[14]=g*w+y*B+m*j+d*nt,r[3]=b*A+E*P+S*C+M*st,r[7]=b*R+E*L+S*k+M*Y,r[11]=b*_+E*O+S*q+M*tt,r[15]=b*w+E*B+S*j+M*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],p=t[6],u=t[10],f=t[14],g=t[3],y=t[7],m=t[11],d=t[15],b=l*f-c*u,E=o*f-c*p,S=o*u-l*p,M=a*f-c*h,A=a*u-l*h,R=a*p-o*h;return e*(y*b-m*E+d*S)-i*(g*b-m*M+d*A)+s*(g*E-y*M+d*R)-r*(g*S-y*A+m*R)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],p=t[9],u=t[10],f=t[11],g=t[12],y=t[13],m=t[14],d=t[15],b=e*o-i*a,E=e*l-s*a,S=e*c-r*a,M=i*l-s*o,A=i*c-r*o,R=s*c-r*l,_=h*y-p*g,w=h*m-u*g,P=h*d-f*g,L=p*m-u*y,O=p*d-f*y,B=u*d-f*m,C=b*B-E*O+S*L+M*P-A*w+R*_;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/C;return t[0]=(o*B-l*O+c*L)*k,t[1]=(s*O-i*B-r*L)*k,t[2]=(y*R-m*A+d*M)*k,t[3]=(u*A-p*R-f*M)*k,t[4]=(l*P-a*B-c*w)*k,t[5]=(e*B-s*P+r*w)*k,t[6]=(m*S-g*R-d*E)*k,t[7]=(h*R-u*S+f*E)*k,t[8]=(a*O-o*P+c*_)*k,t[9]=(i*P-e*O-r*_)*k,t[10]=(g*A-y*S+d*b)*k,t[11]=(p*S-h*A-f*b)*k,t[12]=(o*w-a*L-l*_)*k,t[13]=(e*L-i*w+s*_)*k,t[14]=(y*E-g*M-m*b)*k,t[15]=(h*M-p*E+u*b)*k,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,p=o+o,u=r*c,f=r*h,g=r*p,y=a*h,m=a*p,d=o*p,b=l*c,E=l*h,S=l*p,M=i.x,A=i.y,R=i.z;return s[0]=(1-(y+d))*M,s[1]=(f+S)*M,s[2]=(g-E)*M,s[3]=0,s[4]=(f-S)*A,s[5]=(1-(u+d))*A,s[6]=(m+b)*A,s[7]=0,s[8]=(g+E)*R,s[9]=(m-b)*R,s[10]=(1-(u+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=cr.set(s[0],s[1],s[2]).length(),o=cr.set(s[4],s[5],s[6]).length(),l=cr.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ui.copy(this);let c=1/a,h=1/o,p=1/l;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=p,ui.elements[9]*=p,ui.elements[10]*=p,e.setFromRotationMatrix(ui),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=pi,l=!1){let c=this.elements,h=2*r/(e-t),p=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===pi)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ar)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=p,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=pi,l=!1){let c=this.elements,h=2/(e-t),p=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===pi)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ar)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=p,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Al.prototype.isMatrix4=!0;var Me=Al,cr=new I,ui=new Me,Ag=new I(0,0,0),wg=new I(1,1,1),cs=new I,po=new I,Gn=new I,Zd=new Me,Jd=new ze,Xi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],p=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Zd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zd,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jd.setFromEuler(this),this.setFromQuaternion(Jd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xi.DEFAULT_ORDER="XYZ";var Rr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tg=0,Qd=new I,hr=new ze,Hi=new Me,mo=new I,oa=new I,Eg=new I,Rg=new ze,$d=new I(1,0,0),tf=new I(0,1,0),ef=new I(0,0,1),nf={type:"added"},Pg={type:"removed"},ur={type:"childadded",child:null},gh={type:"childremoved",child:null},en=class n extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new I,e=new Xi,i=new ze,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Me},normalMatrix:{value:new zt}}),this.matrix=new Me,this.matrixWorld=new Me,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,e){return hr.setFromAxisAngle(t,e),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis($d,t)}rotateY(t){return this.rotateOnAxis(tf,t)}rotateZ(t){return this.rotateOnAxis(ef,t)}translateOnAxis(t,e){return Qd.copy(t).applyQuaternion(this.quaternion),this.position.add(Qd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($d,t)}translateY(t){return this.translateOnAxis(tf,t)}translateZ(t){return this.translateOnAxis(ef,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?mo.copy(t):mo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(oa,mo,this.up):Hi.lookAt(mo,oa,this.up),this.quaternion.setFromRotationMatrix(Hi),s&&(Hi.extractRotation(s.matrixWorld),hr.setFromRotationMatrix(Hi),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Bt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nf),ur.child=t,this.dispatchEvent(ur),ur.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pg),gh.child=t,this.dispatchEvent(gh),gh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nf),ur.child=t,this.dispatchEvent(ur),ur.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,t,Eg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,Rg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let p=l[c];r(t.shapes,p)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),p=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};en.DEFAULT_UP=new I(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xe=class extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cg={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,i),d=this._getHandJoint(c,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],u=h.position.distanceTo(p.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Xe;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hs={h:0,s:0,l:0},go={h:0,s:0,l:0};function xh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var kt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$t.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=$t.workingColorSpace){return this.r=t,this.g=e,this.b=i,$t.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=$t.workingColorSpace){if(t=pu(t,1),e=Yt(e,0,1),i=Yt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=xh(a,r,t+1/3),this.g=xh(a,r,t),this.b=xh(a,r,t-1/3)}return $t.colorSpaceToWorking(this,s),this}setStyle(t,e=mn){function i(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mn){let i=ap[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mn){return $t.workingToColorSpace(pn.copy(this),t),Math.round(Yt(pn.r*255,0,255))*65536+Math.round(Yt(pn.g*255,0,255))*256+Math.round(Yt(pn.b*255,0,255))}getHexString(t=mn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$t.workingColorSpace){$t.workingToColorSpace(pn.copy(this),e);let i=pn.r,s=pn.g,r=pn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let p=a-o;switch(c=h<=.5?p/(a+o):p/(2-a-o),a){case i:l=(s-r)/p+(s<r?6:0);break;case s:l=(r-i)/p+2;break;case r:l=(i-s)/p+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=$t.workingColorSpace){return $t.workingToColorSpace(pn.copy(this),e),t.r=pn.r,t.g=pn.g,t.b=pn.b,t}getStyle(t=mn){$t.workingToColorSpace(pn.copy(this),t);let e=pn.r,i=pn.g,s=pn.b;return t!==mn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(hs),this.setHSL(hs.h+t,hs.s+e,hs.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(hs),t.getHSL(go);let i=fa(hs.h,go.h,e),s=fa(hs.s,go.s,e),r=fa(hs.l,go.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new kt;kt.NAMES=ap;var Sa=class extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xi,this.environmentIntensity=1,this.environmentRotation=new Xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},di=new I,zi=new I,_h=new I,ki=new I,dr=new I,fr=new I,sf=new I,yh=new I,vh=new I,Sh=new I,Mh=new Pe,bh=new Pe,Ah=new Pe,ps=class n{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),di.subVectors(t,e),s.cross(di);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){di.subVectors(s,e),zi.subVectors(i,e),_h.subVectors(t,e);let a=di.dot(di),o=di.dot(zi),l=di.dot(_h),c=zi.dot(zi),h=zi.dot(_h),p=a*c-o*o;if(p===0)return r.set(0,0,0),null;let u=1/p,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return Mh.setScalar(0),bh.setScalar(0),Ah.setScalar(0),Mh.fromBufferAttribute(t,e),bh.fromBufferAttribute(t,i),Ah.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Mh,r.x),a.addScaledVector(bh,r.y),a.addScaledVector(Ah,r.z),a}static isFrontFacing(t,e,i,s){return di.subVectors(i,e),zi.subVectors(t,e),di.cross(zi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return di.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),di.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;dr.subVectors(s,i),fr.subVectors(r,i),yh.subVectors(t,i);let l=dr.dot(yh),c=fr.dot(yh);if(l<=0&&c<=0)return e.copy(i);vh.subVectors(t,s);let h=dr.dot(vh),p=fr.dot(vh);if(h>=0&&p<=h)return e.copy(s);let u=l*p-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(dr,a);Sh.subVectors(t,r);let f=dr.dot(Sh),g=fr.dot(Sh);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(fr,o);let m=h*g-f*p;if(m<=0&&p-h>=0&&f-g>=0)return sf.subVectors(r,s),o=(p-h)/(p-h+(f-g)),e.copy(s).addScaledVector(sf,o);let d=1/(m+y+u);return a=y*d,o=u*d,e.copy(i).addScaledVector(dr,a).addScaledVector(fr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Tn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(fi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(fi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=fi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,fi):fi.fromBufferAttribute(r,a),fi.applyMatrix4(t.matrixWorld),this.expandByPoint(fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xo.copy(i.boundingBox)),xo.applyMatrix4(t.matrixWorld),this.union(xo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fi),fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(la),_o.subVectors(this.max,la),pr.subVectors(t.a,la),mr.subVectors(t.b,la),gr.subVectors(t.c,la),us.subVectors(mr,pr),ds.subVectors(gr,mr),Ns.subVectors(pr,gr);let e=[0,-us.z,us.y,0,-ds.z,ds.y,0,-Ns.z,Ns.y,us.z,0,-us.x,ds.z,0,-ds.x,Ns.z,0,-Ns.x,-us.y,us.x,0,-ds.y,ds.x,0,-Ns.y,Ns.x,0];return!wh(e,pr,mr,gr,_o)||(e=[1,0,0,0,1,0,0,0,1],!wh(e,pr,mr,gr,_o))?!1:(yo.crossVectors(us,ds),e=[yo.x,yo.y,yo.z],wh(e,pr,mr,gr,_o))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Vi=[new I,new I,new I,new I,new I,new I,new I,new I],fi=new I,xo=new Tn,pr=new I,mr=new I,gr=new I,us=new I,ds=new I,Ns=new I,la=new I,_o=new I,yo=new I,Us=new I;function wh(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Us.fromArray(n,r);let o=s.x*Math.abs(Us.x)+s.y*Math.abs(Us.y)+s.z*Math.abs(Us.z),l=t.dot(Us),c=e.dot(Us),h=i.dot(Us);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var We=new I,vo=new xt,Ig=0,$n=class extends mi{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ig++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ep,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)vo.fromBufferAttribute(this,e),vo.applyMatrix3(t),this.setXY(e,vo.x,vo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Sr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=bn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sr(e,this.array)),e}setX(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sr(e,this.array)),e}setY(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sr(e,this.array)),e}setW(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),i=bn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),i=bn(i,this.array),s=bn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),i=bn(i,this.array),s=bn(s,this.array),r=bn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ma=class extends $n{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ba=class extends $n{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var de=class extends $n{constructor(t,e,i){super(new Float32Array(t),e,i)}},Dg=new Tn,ca=new I,Th=new I,Bs=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Dg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ca.subVectors(t,this.center);let e=ca.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ca,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Th.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ca.copy(t.center).add(Th)),this.expandByPoint(ca.copy(t.center).sub(Th))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ng=0,Qn=new Me,Eh=new en,xr=new I,Wn=new Tn,ha=new Tn,$e=new I,Ue=class n extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ig(t)?ba:Ma)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Qn.makeRotationFromQuaternion(t),this.applyMatrix4(Qn),this}rotateX(t){return Qn.makeRotationX(t),this.applyMatrix4(Qn),this}rotateY(t){return Qn.makeRotationY(t),this.applyMatrix4(Qn),this}rotateZ(t){return Qn.makeRotationZ(t),this.applyMatrix4(Qn),this}translate(t,e,i){return Qn.makeTranslation(t,e,i),this.applyMatrix4(Qn),this}scale(t,e,i){return Qn.makeScale(t,e,i),this.applyMatrix4(Qn),this}lookAt(t){return Eh.lookAt(t),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new de(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Wn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ha.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(Wn.min,ha.min),Wn.expandByPoint($e),$e.addVectors(Wn.max,ha.max),Wn.expandByPoint($e)):(Wn.expandByPoint(ha.min),Wn.expandByPoint(ha.max))}Wn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared($e));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$e.fromBufferAttribute(o,c),l&&(xr.fromBufferAttribute(t,c),$e.add(xr)),s=Math.max(s,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new $n(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<i.count;_++)o[_]=new I,l[_]=new I;let c=new I,h=new I,p=new I,u=new xt,f=new xt,g=new xt,y=new I,m=new I;function d(_,w,P){c.fromBufferAttribute(i,_),h.fromBufferAttribute(i,w),p.fromBufferAttribute(i,P),u.fromBufferAttribute(r,_),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,P),h.sub(c),p.sub(c),f.sub(u),g.sub(u);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(p,-f.y).multiplyScalar(L),m.copy(p).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[_].add(y),o[w].add(y),o[P].add(y),l[_].add(m),l[w].add(m),l[P].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,w=b.length;_<w;++_){let P=b[_],L=P.start,O=P.count;for(let B=L,C=L+O;B<C;B+=3)d(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let E=new I,S=new I,M=new I,A=new I;function R(_){M.fromBufferAttribute(s,_),A.copy(M);let w=o[_];E.copy(w),E.sub(M.multiplyScalar(M.dot(w))).normalize(),S.crossVectors(A,w);let L=S.dot(l[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,L)}for(let _=0,w=b.length;_<w;++_){let P=b[_],L=P.start,O=P.count;for(let B=L,C=L+O;B<C;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new $n(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,p=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,p=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let d=0;d<h;d++)u[g++]=c[f++]}return new $n(u,h,p)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,p=c.length;h<p;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let p=0,u=c.length;p<u;p++){let f=c[p];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],p=r[c];for(let u=0,f=p.length;u<f;u++)h.push(p[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let p=a[c];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Rh=new I,Ug=new I,Lg=new zt,An=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Rh.subVectors(i,e).cross(Ug.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Rh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Lg.getNormalMatrix(t),s=this.coplanarPoint(Rh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Og=0,qi=class extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Og++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=Br,this.side=bs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jh,this.blendDst=Zh,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fo,this.stencilZFail=Fo,this.stencilZPass=Fo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new An().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new xt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Gi=new I,Ph=new I,So=new I,Mo=new I,ms=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gi.copy(this.origin).addScaledVector(this.direction,e),Gi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Ph.copy(t).add(e).multiplyScalar(.5),So.copy(e).sub(t).normalize(),Mo.copy(this.origin).sub(Ph);let r=t.distanceTo(e)*.5,a=-this.direction.dot(So),o=Mo.dot(this.direction),l=-Mo.dot(So),c=Mo.lengthSq(),h=Math.abs(1-a*a),p,u,f,g;if(h>0)if(p=a*l-o,u=a*o-l,g=r*h,p>=0)if(u>=-g)if(u<=g){let y=1/h;p*=y,u*=y,f=p*(p+a*u+2*o)+u*(a*p+u+2*l)+c}else u=r,p=Math.max(0,-(a*u+o)),f=-p*p+u*(u+2*l)+c;else u=-r,p=Math.max(0,-(a*u+o)),f=-p*p+u*(u+2*l)+c;else u<=-g?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-l),r),f=-p*p+u*(u+2*l)+c):u<=g?(p=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-l),r),f=-p*p+u*(u+2*l)+c);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),f=-p*p+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Ph).addScaledVector(So,u),f}intersectSphere(t,e){if(t.radius<0)return null;Gi.subVectors(t.center,this.origin);let i=Gi.dot(this.direction),s=Gi.dot(Gi)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-u.z)*p,l=(t.max.z-u.z)*p):(o=(t.max.z-u.z)*p,l=(t.min.z-u.z)*p),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Gi)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,p=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,y=e.y-a.y,m=e.z-a.z,d=i.x-a.x,b=i.y-a.y,E=i.z-a.z,S=Math.abs(l),M=Math.abs(c),A=Math.abs(h),R,_,w,P,L,O,B,C,k,q,j,st;if(S>=M&&S>=A?(w=l,O=p,k=g,st=d,l>=0?(R=c,_=h,P=u,L=f,B=y,C=m,q=b,j=E):(R=h,_=c,P=f,L=u,B=m,C=y,q=E,j=b)):M>=A?(w=c,O=u,k=y,st=b,c>=0?(R=h,_=l,P=f,L=p,B=m,C=g,q=E,j=d):(R=l,_=h,P=p,L=f,B=g,C=m,q=d,j=E)):(w=h,O=f,k=m,st=E,h>=0?(R=l,_=c,P=p,L=u,B=g,C=y,q=d,j=b):(R=c,_=l,P=u,L=p,B=y,C=g,q=b,j=d)),w===0)return null;let Y=R/w,tt=_/w,nt=1/w,Dt=P-Y*O,wt=L-tt*O,_e=B-Y*k,ee=C-tt*k,re=q-Y*st,Z=j-tt*st,et=re*ee-Z*_e,Mt=Dt*Z-wt*re,Vt=_e*wt-ee*Dt;if(s){if(et<0||Mt<0||Vt<0)return null}else if((et<0||Mt<0||Vt<0)&&(et>0||Mt>0||Vt>0))return null;let vt=et+Mt+Vt;if(vt===0)return null;let jt=nt*(et*O+Mt*k+Vt*st);return(vt>0?jt<0:jt>0)?null:this.at(jt/vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ke=class extends qi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.combine=Jh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},rf=new Me,Ls=new ms,bo=new Bs,af=new I,Ao=new I,wo=new I,To=new I,Ch=new I,Eo=new I,of=new I,Ro=new I,ge=class extends en{constructor(t=new Ue,e=new ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Eo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],p=r[l];h!==0&&(Ch.fromBufferAttribute(p,t),a?Eo.addScaledVector(Ch,h):Eo.addScaledVector(Ch.sub(e),h))}e.add(Eo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(r),Ls.copy(t.ray).recast(t.near),!(bo.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(bo,af)===null||Ls.origin.distanceToSquared(af)>(t.far-t.near)**2))&&(rf.copy(r).invert(),Ls.copy(t.ray).applyMatrix4(rf),!(i.boundingBox!==null&&Ls.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ls)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],d=a[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=b,M=E;S<M;S+=3){let A=o.getX(S),R=o.getX(S+1),_=o.getX(S+2);s=Po(this,d,t,i,c,h,p,A,R,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,d=y;m<d;m+=3){let b=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);s=Po(this,a,t,i,c,h,p,b,E,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],d=a[m.materialIndex],b=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=b,M=E;S<M;S+=3){let A=S,R=S+1,_=S+2;s=Po(this,d,t,i,c,h,p,A,R,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,d=y;m<d;m+=3){let b=m,E=m+1,S=m+2;s=Po(this,a,t,i,c,h,p,b,E,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Fg(n,t,e,i,s,r,a,o){let l;if(t.side===En?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===bs,o),l===null)return null;Ro.copy(o),Ro.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ro);return c<e.near||c>e.far?null:{distance:c,point:Ro.clone(),object:n}}function Po(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,Ao),n.getVertexPosition(l,wo),n.getVertexPosition(c,To);let h=Fg(n,t,e,i,Ao,wo,To,of);if(h){let p=new I;ps.getBarycoord(of,Ao,wo,To,p),s&&(h.uv=ps.getInterpolatedAttribute(s,o,l,c,p,new xt)),r&&(h.uv1=ps.getInterpolatedAttribute(r,o,l,c,p,new xt)),a&&(h.normal=ps.getInterpolatedAttribute(a,o,l,c,p,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};ps.getNormal(Ao,wo,To,u.normal),h.face=u,h.barycoord=p}return h}var Jo=class extends wn{constructor(t=null,e=1,i=1,s,r,a,o,l,c=tn,h=tn,p,u){super(null,a,o,l,c,h,s,r,p,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Os=new Bs,Bg=new xt(.5,.5),Co=new I,Cr=class{constructor(t=new An,e=new An,i=new An,s=new An,r=new An,a=new An){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=pi,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],p=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],d=r[11],b=r[12],E=r[13],S=r[14],M=r[15];if(s[0].setComponents(c-a,f-h,d-g,M-b).normalize(),s[1].setComponents(c+a,f+h,d+g,M+b).normalize(),s[2].setComponents(c+o,f+p,d+y,M+E).normalize(),s[3].setComponents(c-o,f-p,d-y,M-E).normalize(),i)s[4].setComponents(l,u,m,S).normalize(),s[5].setComponents(c-l,f-u,d-m,M-S).normalize();else if(s[4].setComponents(c-l,f-u,d-m,M-S).normalize(),e===pi)s[5].setComponents(c+l,f+u,d+m,M+S).normalize();else if(e===Ar)s[5].setComponents(l,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Os)}intersectsSprite(t){Os.center.set(0,0,0);let e=Bg.distanceTo(t.center);return Os.radius=.7071067811865476+e,Os.applyMatrix4(t.matrixWorld),this.intersectsSphere(Os)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Co.x=s.normal.x>0?t.max.x:t.min.x,Co.y=s.normal.y>0?t.max.y:t.min.y,Co.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Co)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var gs=class extends qi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Qo=new I,$o=new I,lf=new Me,ua=new ms,Io=new Bs,Ih=new I,cf=new I,Hs=class extends en{constructor(t=new Ue,e=new gs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Qo.fromBufferAttribute(e,s-1),$o.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Qo.distanceTo($o);t.setAttribute("lineDistance",new de(i,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(s),Io.radius+=r,t.ray.intersectsSphere(Io)===!1)return;lf.copy(s).invert(),ua.copy(t.ray).applyMatrix4(lf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let d=h.getX(y),b=h.getX(y+1),E=Do(this,t,ua,l,d,b,y);E&&e.push(E)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(f),d=Do(this,t,ua,l,y,m,g-1);d&&e.push(d)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let d=Do(this,t,ua,l,y,y+1,y);d&&e.push(d)}if(this.isLineLoop){let y=Do(this,t,ua,l,g-1,f,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Do(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(Qo.fromBufferAttribute(o,s),$o.fromBufferAttribute(o,r),e.distanceSqToSegment(Qo,$o,Ih,cf)>i)return;Ih.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ih);if(!(c<t.near||c>t.far))return{distance:c,point:cf.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Aa=class extends wn{constructor(t=[],e=As,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},wa=class extends wn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xs=class extends wn{constructor(t,e,i=xi,s,r,a,o=tn,l=tn,c,h=Ci,p=1){if(h!==Ci&&h!==Ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:p};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Er(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},tl=class extends xs{constructor(t,e=xi,i=As,s,r,a=tn,o=tn,l,c=Ci){let h={width:t,height:t,depth:1},p=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ta=class extends wn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ir=class n extends Ue{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],p=[],u=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(p,2));function g(y,m,d,b,E,S,M,A,R,_,w){let P=S/R,L=M/_,O=S/2,B=M/2,C=A/2,k=R+1,q=_+1,j=0,st=0,Y=new I;for(let tt=0;tt<q;tt++){let nt=tt*L-B;for(let Dt=0;Dt<k;Dt++){let wt=Dt*P-O;Y[y]=wt*b,Y[m]=nt*E,Y[d]=C,c.push(Y.x,Y.y,Y.z),Y[y]=0,Y[m]=0,Y[d]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),p.push(Dt/R),p.push(1-tt/_),j+=1}}for(let tt=0;tt<_;tt++)for(let nt=0;nt<R;nt++){let Dt=u+nt+k*tt,wt=u+nt+k*(tt+1),_e=u+(nt+1)+k*(tt+1),ee=u+(nt+1)+k*tt;l.push(Dt,wt,ee),l.push(wt,_e,ee),st+=6}o.addGroup(f,st,w),f+=st,u+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var zs=class n extends Ue{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],u=[],f=[],g=0,y=[],m=i/2,d=0;b(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new de(p,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(f,2));function b(){let S=new I,M=new I,A=0,R=(e-t)/i;for(let _=0;_<=r;_++){let w=[],P=_/r,L=P*(e-t)+t;for(let O=0;O<=s;O++){let B=O/s,C=B*l+o,k=Math.sin(C),q=Math.cos(C);M.x=L*k,M.y=-P*i+m,M.z=L*q,p.push(M.x,M.y,M.z),S.set(k,R,q).normalize(),u.push(S.x,S.y,S.z),f.push(B,1-P),w.push(g++)}y.push(w)}for(let _=0;_<s;_++)for(let w=0;w<r;w++){let P=y[w][_],L=y[w+1][_],O=y[w+1][_+1],B=y[w][_+1];(t>0||w!==0)&&(h.push(P,L,B),A+=3),(e>0||w!==r-1)&&(h.push(L,O,B),A+=3)}c.addGroup(d,A,0),d+=A}function E(S){let M=g,A=new xt,R=new I,_=0,w=S===!0?t:e,P=S===!0?1:-1;for(let O=1;O<=s;O++)p.push(0,m*P,0),u.push(0,P,0),f.push(.5,.5),g++;let L=g;for(let O=0;O<=s;O++){let C=O/s*l+o,k=Math.cos(C),q=Math.sin(C);R.x=w*q,R.y=m*P,R.z=w*k,p.push(R.x,R.y,R.z),u.push(0,P,0),A.x=k*.5+.5,A.y=q*.5*P+.5,f.push(A.x,A.y),g++}for(let O=0;O<s;O++){let B=M+O,C=L+O;S===!0?h.push(C,C+1,B):h.push(C+1,C,B),_+=3}c.addGroup(d,_,S===!0?1:2),d+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Dr=class n extends zs{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ti=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ut("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new xt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new I,s=[],r=[],a=[],o=new I,l=new Me;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Yt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Yt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ea=class extends ti{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new xt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*p+this.aX,c=u*p+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},el=class extends Ea{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function mu(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,p){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+p)+(l-o)/p;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var hf=new I,uf=new I,Dh=new mu,Nh=new mu,Uh=new mu,ks=class extends ti{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(uf.subVectors(s[0],s[1]).add(s[0]),c=uf);let p=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(hf.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=hf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(p),f),y=Math.pow(p.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Dh.initNonuniformCatmullRom(c.x,p.x,u.x,h.x,g,y,m),Nh.initNonuniformCatmullRom(c.y,p.y,u.y,h.y,g,y,m),Uh.initNonuniformCatmullRom(c.z,p.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Dh.initCatmullRom(c.x,p.x,u.x,h.x,this.tension),Nh.initCatmullRom(c.y,p.y,u.y,h.y,this.tension),Uh.initCatmullRom(c.z,p.z,u.z,h.z,this.tension));return i.set(Dh.calc(l),Nh.calc(l),Uh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function df(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function Hg(n,t){let e=1-n;return e*e*t}function zg(n,t){return 2*(1-n)*n*t}function kg(n,t){return n*n*t}function pa(n,t,e,i){return Hg(n,t)+zg(n,e)+kg(n,i)}function Vg(n,t){let e=1-n;return e*e*e*t}function Gg(n,t){let e=1-n;return 3*e*e*n*t}function Wg(n,t){return 3*(1-n)*n*n*t}function Xg(n,t){return n*n*n*t}function ma(n,t,e,i,s){return Vg(n,t)+Gg(n,e)+Wg(n,i)+Xg(n,s)}var nl=class extends ti{constructor(t=new xt,e=new xt,i=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new xt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ma(t,s.x,r.x,a.x,o.x),ma(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},il=class extends ti{constructor(t=new I,e=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ma(t,s.x,r.x,a.x,o.x),ma(t,s.y,r.y,a.y,o.y),ma(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sl=class extends ti{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rl=class extends ti{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},al=class extends ti{constructor(t=new xt,e=new xt,i=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new xt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(pa(t,s.x,r.x,a.x),pa(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ra=class extends ti{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(pa(t,s.x,r.x,a.x),pa(t,s.y,r.y,a.y),pa(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ol=class extends ti{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],p=s[a>s.length-3?s.length-1:a+2];return i.set(df(o,l.x,c.x,h.x,p.x),df(o,l.y,c.y,h.y,p.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new xt().fromArray(s))}return this}},qg=Object.freeze({__proto__:null,ArcCurve:el,CatmullRomCurve3:ks,CubicBezierCurve:nl,CubicBezierCurve3:il,EllipseCurve:Ea,LineCurve:sl,LineCurve3:rl,QuadraticBezierCurve:al,QuadraticBezierCurve3:Ra,SplineCurve:ol});var Yi=class n extends Ue{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,p=t/o,u=e/l,f=[],g=[],y=[],m=[];for(let d=0;d<h;d++){let b=d*u-a;for(let E=0;E<c;E++){let S=E*p-r;g.push(S,-b,0),y.push(0,0,1),m.push(E/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){let E=b+c*d,S=b+c*(d+1),M=b+1+c*(d+1),A=b+1+c*d;f.push(E,S,A),f.push(S,M,A)}this.setIndex(f),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(y,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var Pa=class n extends Ue{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],p=new I,u=new I,f=[],g=[],y=[],m=[];for(let d=0;d<=i;d++){let b=[],E=d/i,S=a+E*o,M=t*Math.cos(S),A=Math.sqrt(t*t-M*M),R=0;d===0&&a===0?R=.5/e:d===i&&l===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){let w=_/e,P=s+w*r;p.x=-A*Math.cos(P),p.y=M,p.z=A*Math.sin(P),g.push(p.x,p.y,p.z),u.copy(p).normalize(),y.push(u.x,u.y,u.z),m.push(w+R,1-E),b.push(c++)}h.push(b)}for(let d=0;d<i;d++)for(let b=0;b<e;b++){let E=h[d][b+1],S=h[d][b],M=h[d+1][b],A=h[d+1][b+1];(d!==0||a>0)&&f.push(E,S,A),(d!==i-1||l<Math.PI)&&f.push(S,M,A)}this.setIndex(f),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(y,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Nr=class n extends Ue{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],p=[],u=new I,f=new I,g=new I;for(let y=0;y<=i;y++){let m=a+y/i*o;for(let d=0;d<=s;d++){let b=d/s*r;f.x=(t+e*Math.cos(m))*Math.cos(b),f.y=(t+e*Math.cos(m))*Math.sin(b),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),p.push(d/s),p.push(y/i)}}for(let y=1;y<=i;y++)for(let m=1;m<=s;m++){let d=(s+1)*y+m-1,b=(s+1)*(y-1)+m-1,E=(s+1)*(y-1)+m,S=(s+1)*y+m;l.push(d,b,S),l.push(b,E,S)}this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var Ur=class n extends Ue{constructor(t=new Ra(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new xt,h=new I,p=[],u=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new de(p,3)),this.setAttribute("normal",new de(u,3)),this.setAttribute("uv",new de(f,2));function y(){for(let E=0;E<e;E++)m(E);m(r===!1?e:0),b(),d()}function m(E){h=t.getPointAt(E/e,h);let S=a.normals[E],M=a.binormals[E];for(let A=0;A<=s;A++){let R=A/s*Math.PI*2,_=Math.sin(R),w=-Math.cos(R);l.x=w*S.x+_*M.x,l.y=w*S.y+_*M.y,l.z=w*S.z+_*M.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,p.push(o.x,o.y,o.z)}}function d(){for(let E=1;E<=e;E++)for(let S=1;S<=s;S++){let M=(s+1)*(E-1)+(S-1),A=(s+1)*E+(S-1),R=(s+1)*E+S,_=(s+1)*(E-1)+S;g.push(M,A,_),g.push(A,R,_)}}function b(){for(let E=0;E<=e;E++)for(let S=0;S<=s;S++)c.x=E/e,c.y=S/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new qg[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Xs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(ff(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(ff(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function yn(n){let t={};for(let e=0;e<n.length;e++){let i=Xs(n[e]);for(let s in i)t[s]=i[s]}return t}function ff(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Yg(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function gu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:$t.workingColorSpace}var op={clone:Xs,merge:yn},Kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xn=class extends qi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kg,this.fragmentShader=jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=Yg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new kt().setHex(s.value);break;case"v2":this.uniforms[i].value=new xt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Pe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new zt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Me().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ll=class extends Xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Vs=class extends qi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hc,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var cl=class extends qi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},hl=class extends qi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var Ca=class extends gs{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function _r(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Lh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var _s=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ul=class extends _s{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hh,endingEnd:Hh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zh:r=t,o=2*e-i;break;case kh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case zh:a=t,l=2*i-e;break;case kh:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),y=g*g,m=y*g,d=-u*m+2*u*y-u*g,b=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,E=(-1-f)*m+(1.5+f)*y+.5*g,S=f*m-f*y;for(let M=0;M!==o;++M)r[M]=d*a[h+M]+b*a[c+M]+E*a[l+M]+S*a[p+M];return r}},dl=class extends _s{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),p=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*p+a[l+u]*h;return r}},fl=class extends _s{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},pl=class extends _s{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,p=this.outTangents;if(!h||!p){let g=(i-e)/(s-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],d=f*u+g*2,b=p[d],E=p[d+1],S=t*u+g*2,M=h[S],A=h[S+1],R=Jg(i,e,b,M,s);r[g]=lp(R,y,E,A,m)}return r}};function lp(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Zg(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Jg(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=lp(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Zg(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var qn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=_r(e,this.TimeBufferType),this.values=_r(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:_r(t.times,Array),values:_r(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Lh(t.settings)&&(i.settings={inTangents:_r(t.settings.inTangents,Array),outTangents:_r(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new fl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new pl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ga:e=this.InterpolantFactoryMethodDiscrete;break;case Yo:e=this.InterpolantFactoryMethodLinear;break;case Oo:e=this.InterpolantFactoryMethodSmooth;break;case Bh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ut("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ga;case this.InterpolantFactoryMethodLinear:return Yo;case this.InterpolantFactoryMethodSmooth:return Oo;case this.InterpolantFactoryMethodBezier:return Bh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Lh(this.settings)&&(pf(this.settings.inTangents,t),pf(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Bt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Bt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Bt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Bt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&sg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Bt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Oo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let p=o*i,u=p-i,f=p+i;for(let g=0;g!==i;++g){let y=e[p+g];if(y!==e[u+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let p=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[p+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Lh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function pf(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}qn.prototype.ValueTypeName="";qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=Yo;var ys=class extends qn{constructor(t,e,i){super(t,e,i)}};ys.prototype.ValueTypeName="bool";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=ga;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;var ml=class extends qn{constructor(t,e,i,s){super(t,e,i,s)}};ml.prototype.ValueTypeName="color";var gl=class extends qn{constructor(t,e,i,s){super(t,e,i,s)}};gl.prototype.ValueTypeName="number";var xl=class extends _s{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)ze.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ia=class extends qn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new xl(this.times,this.values,this.getValueSize(),t)}};Ia.prototype.ValueTypeName="quaternion";Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var vs=class extends qn{constructor(t,e,i){super(t,e,i)}};vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=ga;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends qn{constructor(t,e,i,s){super(t,e,i,s)}};_l.prototype.ValueTypeName="vector";var yl=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,p){return c.push(h,p),this},this.removeHandler=function(h){let p=c.indexOf(h);return p!==-1&&c.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=c.length;p<u;p+=2){let f=c[p],g=c[p+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cp=new yl,vl=class{constructor(t){this.manager=t!==void 0?t:cp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};vl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Da=class extends en{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Na=class extends Da{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Oh=new Me,mf=new I,gf=new I,Sl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new Me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cr,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;mf.setFromMatrixPosition(t.matrixWorld),e.position.copy(mf),gf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gf),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Oh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Oh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Ar||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Oh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},No=new I,Uo=new ze,Ri=new I,Ua=class extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Me,this.projectionMatrix=new Me,this.projectionMatrixInverse=new Me,this.coordinateSystem=pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(No,Uo,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Uo,Ri.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(No,Uo,Ri),Ri.x===1&&Ri.y===1&&Ri.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Uo,Ri.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fs=new I,xf=new xt,_f=new xt,gn=class extends Ua{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Tr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(da*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(da*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fs.x,fs.y).multiplyScalar(-t/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fs.x,fs.y).multiplyScalar(-t/fs.z)}getViewSize(t,e){return this.getViewBounds(t,xf,_f),e.subVectors(_f,xf)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(da*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Lr=class extends Ua{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Vh=class extends Sl{constructor(){super(new Lr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Or=class extends Da{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Vh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var yr=-90,vr=1,Ml=class extends en{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new gn(yr,vr,t,e);s.layers=this.layers,this.add(s);let r=new gn(yr,vr,t,e);r.layers=this.layers,this.add(r);let a=new gn(yr,vr,t,e);a.layers=this.layers,this.add(a);let o=new gn(yr,vr,t,e);o.layers=this.layers,this.add(o);let l=new gn(yr,vr,t,e);l.layers=this.layers,this.add(l);let c=new gn(yr,vr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,p=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(p,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},bl=class extends gn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var xu="\\[\\]\\.:\\/",Qg=new RegExp("["+xu+"]","g"),_u="[^"+xu+"]",$g="[^"+xu.replace("\\.","")+"]",t0=/((?:WC+[\/:])*)/.source.replace("WC",_u),e0=/(WCOD+)?/.source.replace("WCOD",$g),n0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_u),i0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_u),s0=new RegExp("^"+t0+e0+n0+i0+"$"),r0=["material","materials","bones","map"],Gh=class{constructor(t,e,i){let s=i||Te.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Te=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Qg,"")}static parseTrackName(t){let e=s0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);r0.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Bt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Bt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Bt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Bt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Bt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Bt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Bt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Bt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Te.Composite=Gh;Te.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Te.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Te.prototype.GetterByBindingType=[Te.prototype._getValue_direct,Te.prototype._getValue_array,Te.prototype._getValue_arrayElement,Te.prototype._getValue_toArray];Te.prototype.SetterByBindingTypeAndVersioning=[[Te.prototype._setValue_direct,Te.prototype._setValue_direct_setNeedsUpdate,Te.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_array,Te.prototype._setValue_array_setNeedsUpdate,Te.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_arrayElement,Te.prototype._setValue_arrayElement_setNeedsUpdate,Te.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Te.prototype._setValue_fromArray,Te.prototype._setValue_fromArray_setNeedsUpdate,Te.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var EM=new Float32Array(1);var yf=new Me,La=class{constructor(t,e,i=0,s=1/0){this.ray=new ms(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new Rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Bt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yf),this}intersectObject(t,e=!0,i=[]){return Wh(t,this,i,e),i.sort(vf),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Wh(t[s],this,i,e);return i.sort(vf),i}};function vf(n,t){return n.distance-t.distance}function Wh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let a=0,o=r.length;a<o;a++)Wh(r[a],t,e,!0)}}var Ss=class{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Yt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Yt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Au=class Au{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Au.prototype.isMatrix2=!0;var Xh=Au;var Sf=new I,Lo,Fh,Oa=class extends en{constructor(t=new I(0,0,1),e=new I(0,0,0),i=1,s=16776960,r=i*.2,a=r*.2){super(),this.type="ArrowHelper",Lo===void 0&&(Lo=new Ue,Lo.setAttribute("position",new de([0,0,0,0,1,0],3)),Fh=new Dr(.5,1,5,1),Fh.translate(0,-.5,0)),this.position.copy(e),this.line=new Hs(Lo,new gs({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new ge(Fh,new ke({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(i,r,a)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Sf.set(t.z,0,-t.x).normalize();let e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Sf,e)}}setLength(t,e=t*.2,i=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(i,e,i),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){super.dispose(),this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}};var Fa=class extends mi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function yu(n,t,e,i){let s=a0(i);switch(e){case cu:return n*t;case uu:return n*t/s.components*s.byteLength;case Il:return n*t/s.components*s.byteLength;case Es:return n*t*2/s.components*s.byteLength;case Dl:return n*t*2/s.components*s.byteLength;case hu:return n*t*3/s.components*s.byteLength;case ei:return n*t*4/s.components*s.byteLength;case Nl:return n*t*4/s.components*s.byteLength;case Ga:case Wa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xa:case qa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ll:case Fl:return Math.max(n,16)*Math.max(t,8)/4;case Ul:case Ol:return Math.max(n,8)*Math.max(t,8)/2;case Bl:case Hl:case kl:case Vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case zl:case Ya:case Gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case ql:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case jl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case $l:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ic:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case sc:case rc:case ac:return Math.ceil(n/4)*Math.ceil(t/4)*16;case oc:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ka:case cc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function a0(n){switch(n){case Un:case ru:return{byteLength:1,components:1};case Hr:case au:case yi:return{byteLength:2,components:1};case Pl:case Cl:return{byteLength:2,components:4};case xi:case Rl:case _i:return{byteLength:4,components:1};case ou:case lu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ip(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function l0(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,p=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,l,c){let h=l.array,p=l.updateRanges;if(n.bindBuffer(c,o),p.length===0)n.bufferSubData(c,0,h);else{p.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<p.length;f++){let g=p[u],y=p[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,p[u]=y)}p.length=u+1;for(let f=0,g=p.length;f<g;f++){let y=p[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,u0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,p0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,m0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,g0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,v0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,M0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,b0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,D0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,N0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,U0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,L0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,F0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,H0="gl_FragColor = linearToOutputTexel( gl_FragColor );",z0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,k0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,j0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,J0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Q0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ex=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,nx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ix=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ax=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ox=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ux=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,px=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_x=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,yx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ax=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ex=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Kx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$x=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,i_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,s_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,r_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,l_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,c_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,g_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,x_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,__=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,R_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,P_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,C_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,I_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,D_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,U_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,B_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,H_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,V_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:c0,alphahash_pars_fragment:h0,alphamap_fragment:u0,alphamap_pars_fragment:d0,alphatest_fragment:f0,alphatest_pars_fragment:p0,aomap_fragment:m0,aomap_pars_fragment:g0,batching_pars_vertex:x0,batching_vertex:_0,begin_vertex:y0,beginnormal_vertex:v0,bsdfs:S0,iridescence_fragment:M0,bumpmap_pars_fragment:b0,clipping_planes_fragment:A0,clipping_planes_pars_fragment:w0,clipping_planes_pars_vertex:T0,clipping_planes_vertex:E0,color_fragment:R0,color_pars_fragment:P0,color_pars_vertex:C0,color_vertex:I0,common:D0,cube_uv_reflection_fragment:N0,defaultnormal_vertex:U0,displacementmap_pars_vertex:L0,displacementmap_vertex:O0,emissivemap_fragment:F0,emissivemap_pars_fragment:B0,colorspace_fragment:H0,colorspace_pars_fragment:z0,envmap_fragment:k0,envmap_common_pars_fragment:V0,envmap_pars_fragment:G0,envmap_pars_vertex:W0,envmap_physical_pars_fragment:ex,envmap_vertex:X0,fog_vertex:q0,fog_pars_vertex:Y0,fog_fragment:K0,fog_pars_fragment:j0,gradientmap_pars_fragment:Z0,lightmap_pars_fragment:J0,lights_lambert_fragment:Q0,lights_lambert_pars_fragment:$0,lights_pars_begin:tx,lights_toon_fragment:nx,lights_toon_pars_fragment:ix,lights_phong_fragment:sx,lights_phong_pars_fragment:rx,lights_physical_fragment:ax,lights_physical_pars_fragment:ox,lights_fragment_begin:lx,lights_fragment_maps:cx,lights_fragment_end:hx,lightprobes_pars_fragment:ux,logdepthbuf_fragment:dx,logdepthbuf_pars_fragment:fx,logdepthbuf_pars_vertex:px,logdepthbuf_vertex:mx,map_fragment:gx,map_pars_fragment:xx,map_particle_fragment:_x,map_particle_pars_fragment:yx,metalnessmap_fragment:vx,metalnessmap_pars_fragment:Sx,morphinstance_vertex:Mx,morphcolor_vertex:bx,morphnormal_vertex:Ax,morphtarget_pars_vertex:wx,morphtarget_vertex:Tx,normal_fragment_begin:Ex,normal_fragment_maps:Rx,normal_pars_fragment:Px,normal_pars_vertex:Cx,normal_vertex:Ix,normalmap_pars_fragment:Dx,clearcoat_normal_fragment_begin:Nx,clearcoat_normal_fragment_maps:Ux,clearcoat_pars_fragment:Lx,iridescence_pars_fragment:Ox,opaque_fragment:Fx,packing:Bx,premultiplied_alpha_fragment:Hx,project_vertex:zx,dithering_fragment:kx,dithering_pars_fragment:Vx,roughnessmap_fragment:Gx,roughnessmap_pars_fragment:Wx,shadowmap_pars_fragment:Xx,shadowmap_pars_vertex:qx,shadowmap_vertex:Yx,shadowmask_pars_fragment:Kx,skinbase_vertex:jx,skinning_pars_vertex:Zx,skinning_vertex:Jx,skinnormal_vertex:Qx,specularmap_fragment:$x,specularmap_pars_fragment:t_,tonemapping_fragment:e_,tonemapping_pars_fragment:n_,transmission_fragment:i_,transmission_pars_fragment:s_,uv_pars_fragment:r_,uv_pars_vertex:a_,uv_vertex:o_,worldpos_vertex:l_,background_vert:c_,background_frag:h_,backgroundCube_vert:u_,backgroundCube_frag:d_,cube_vert:f_,cube_frag:p_,depth_vert:m_,depth_frag:g_,distance_vert:x_,distance_frag:__,equirect_vert:y_,equirect_frag:v_,linedashed_vert:S_,linedashed_frag:M_,meshbasic_vert:b_,meshbasic_frag:A_,meshlambert_vert:w_,meshlambert_frag:T_,meshmatcap_vert:E_,meshmatcap_frag:R_,meshnormal_vert:P_,meshnormal_frag:C_,meshphong_vert:I_,meshphong_frag:D_,meshphysical_vert:N_,meshphysical_frag:U_,meshtoon_vert:L_,meshtoon_frag:O_,points_vert:F_,points_frag:B_,shadow_vert:H_,shadow_frag:z_,sprite_vert:k_,sprite_frag:V_},ft={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},Ni={basic:{uniforms:yn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:yn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:yn([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:yn([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:yn([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new kt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:yn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:yn([ft.points,ft.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:yn([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:yn([ft.common,ft.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:yn([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:yn([ft.sprite,ft.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:yn([ft.common,ft.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:yn([ft.lights,ft.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Ni.physical={uniforms:yn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var fc={r:0,b:0,g:0},G_=new Me,Dp=new zt;Dp.set(-1,0,0,0,1,0,0,0,1);function W_(n,t,e,i,s,r){let a=new kt(0),o=s===!0?0:1,l,c,h=null,p=0,u=null;function f(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){let S=b.backgroundBlurriness>0;E=t.get(E,S)}return E}function g(b){let E=!1,S=f(b);S===null?m(a,o):S&&S.isColor&&(m(S,1),E=!0);let M=n.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(b,E){let S=f(E);S&&(S.isCubeTexture||S.mapping===ka)?(c===void 0&&(c=new ge(new Ir(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Xs(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(G_.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Dp),c.material.toneMapped=$t.getTransfer(S.colorSpace)!==he,(h!==S||p!==S.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ge(new Yi(2,2),new Xn({name:"BackgroundMaterial",uniforms:Xs(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:bs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=$t.getTransfer(S.colorSpace)!==he,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,p=S.version,u=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,E){b.getRGB(fc,gu(n)),e.buffers.color.setClear(fc.r,fc.g,fc.b,E,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,E=1){a.set(b),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:y,dispose:d}}function X_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(L,O,B,C,k){let q=!1,j=p(L,C,B,O);r!==j&&(r=j,c(r.object)),q=f(L,C,B,k),q&&g(L,C,B,k),k!==null&&t.update(k,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,S(L,O,B,C),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function p(L,O,B,C){let k=C.wireframe===!0,q=i[O.id];q===void 0&&(q={},i[O.id]=q);let j=L.isInstancedMesh===!0?L.id:0,st=q[j];st===void 0&&(st={},q[j]=st);let Y=st[B.id];Y===void 0&&(Y={},st[B.id]=Y);let tt=Y[k];return tt===void 0&&(tt=u(l()),Y[k]=tt),tt}function u(L){let O=[],B=[],C=[];for(let k=0;k<e;k++)O[k]=0,B[k]=0,C[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:B,attributeDivisors:C,object:L,attributes:{},index:null}}function f(L,O,B,C){let k=r.attributes,q=O.attributes,j=0,st=B.getAttributes();for(let Y in st)if(st[Y].location>=0){let nt=k[Y],Dt=q[Y];if(Dt===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(Dt=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(Dt=L.instanceColor)),nt===void 0||nt.attribute!==Dt||Dt&&nt.data!==Dt.data)return!0;j++}return r.attributesNum!==j||r.index!==C}function g(L,O,B,C){let k={},q=O.attributes,j=0,st=B.getAttributes();for(let Y in st)if(st[Y].location>=0){let nt=q[Y];nt===void 0&&(Y==="instanceMatrix"&&L.instanceMatrix&&(nt=L.instanceMatrix),Y==="instanceColor"&&L.instanceColor&&(nt=L.instanceColor));let Dt={};Dt.attribute=nt,nt&&nt.data&&(Dt.data=nt.data),k[Y]=Dt,j++}r.attributes=k,r.attributesNum=j,r.index=C}function y(){let L=r.newAttributes;for(let O=0,B=L.length;O<B;O++)L[O]=0}function m(L){d(L,0)}function d(L,O){let B=r.newAttributes,C=r.enabledAttributes,k=r.attributeDivisors;B[L]=1,C[L]===0&&(n.enableVertexAttribArray(L),C[L]=1),k[L]!==O&&(n.vertexAttribDivisor(L,O),k[L]=O)}function b(){let L=r.newAttributes,O=r.enabledAttributes;for(let B=0,C=O.length;B<C;B++)O[B]!==L[B]&&(n.disableVertexAttribArray(B),O[B]=0)}function E(L,O,B,C,k,q,j){j===!0?n.vertexAttribIPointer(L,O,B,k,q):n.vertexAttribPointer(L,O,B,C,k,q)}function S(L,O,B,C){y();let k=C.attributes,q=B.getAttributes(),j=O.defaultAttributeValues;for(let st in q){let Y=q[st];if(Y.location>=0){let tt=k[st];if(tt===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor)),tt!==void 0){let nt=tt.normalized,Dt=tt.itemSize,wt=t.get(tt);if(wt===void 0)continue;let _e=wt.buffer,ee=wt.type,re=wt.bytesPerElement,Z=ee===n.INT||ee===n.UNSIGNED_INT||tt.gpuType===Rl;if(tt.isInterleavedBufferAttribute){let et=tt.data,Mt=et.stride,Vt=tt.offset;if(et.isInstancedInterleavedBuffer){for(let vt=0;vt<Y.locationSize;vt++)d(Y.location+vt,et.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let vt=0;vt<Y.locationSize;vt++)m(Y.location+vt);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let vt=0;vt<Y.locationSize;vt++)E(Y.location+vt,Dt/Y.locationSize,ee,nt,Mt*re,(Vt+Dt/Y.locationSize*vt)*re,Z)}else{if(tt.isInstancedBufferAttribute){for(let et=0;et<Y.locationSize;et++)d(Y.location+et,tt.meshPerAttribute);L.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let et=0;et<Y.locationSize;et++)m(Y.location+et);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let et=0;et<Y.locationSize;et++)E(Y.location+et,Dt/Y.locationSize,ee,nt,Dt*re,Dt/Y.locationSize*et*re,Z)}}else if(j!==void 0){let nt=j[st];if(nt!==void 0)switch(nt.length){case 2:n.vertexAttrib2fv(Y.location,nt);break;case 3:n.vertexAttrib3fv(Y.location,nt);break;case 4:n.vertexAttrib4fv(Y.location,nt);break;default:n.vertexAttrib1fv(Y.location,nt)}}}}b()}function M(){w();for(let L in i){let O=i[L];for(let B in O){let C=O[B];for(let k in C){let q=C[k];for(let j in q)h(q[j].object),delete q[j];delete C[k]}}delete i[L]}}function A(L){if(i[L.id]===void 0)return;let O=i[L.id];for(let B in O){let C=O[B];for(let k in C){let q=C[k];for(let j in q)h(q[j].object),delete q[j];delete C[k]}}delete i[L.id]}function R(L){for(let O in i){let B=i[O];for(let C in B){let k=B[C];if(k[L.id]===void 0)continue;let q=k[L.id];for(let j in q)h(q[j].object),delete q[j];delete k[L.id]}}}function _(L){for(let O in i){let B=i[O],C=L.isInstancedMesh===!0?L.id:0,k=B[C];if(k!==void 0){for(let q in k){let j=k[q];for(let st in j)h(j[st].object),delete j[st];delete k[q]}delete B[C],Object.keys(B).length===0&&delete i[O]}}}function w(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function q_(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Y_(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==ei&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let _=R===yi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Un&&R!==_i&&!_&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Ut("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let p=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:S,maxSamples:M,samples:A}}function K_(n){let t=this,e=null,i=0,s=!1,r=!1,a=new An,o=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let f=p.length!==0||u||i!==0||s;return s=u,i=p.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){e=h(p,u,0)},this.setState=function(p,u,f){let g=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,d=n.get(p);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:i,E=b*4,S=d.clippingState||null;l.value=S,S=h(g,u,E,f);for(let M=0;M!==E;++M)S[M]=e[M];d.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(p,u,f,g){let y=p!==null?p.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let d=f+y*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,S=f;E!==y;++E,S+=4)a.copy(p[E]).applyMatrix4(b,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var Gr=4,j_=6,Z_=20,J_=256,ja=new Lr,hp=new kt,wu=null,Tu=0,Eu=0,Ru=!1,Q_=new I,qs=new I,mc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Q_}=r;wu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Eu=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(wu,Tu,Eu),this._renderer.xr.enabled=Ru,t.scissorTest=!1,Vr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===As||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),Eu=this._renderer.getActiveMipmapLevel(),Ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:yi,format:ei,colorSpace:xa,depthBuffer:!1},s=up(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=up(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=$_(r)),this._blurMaterial=ey(r,t,e),this._ggxMaterial=ty(r,t,e)}return s}_compileMaterial(t){let e=new ge(new Ue,t);this._renderer.compile(e,ja)}_sceneToCubeUV(t,e,i,s,r){let l=new gn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,f=p.toneMapping;p.getClearColor(hp),p.toneMapping=gi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ge(new Ir,new ke({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,d=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,d=!0):(m.color.copy(hp),d=!0);for(let E=0;E<6;E++){let S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let M=this._cubeSize;Vr(s,S*M,E>2?M:0,M,M),p.setRenderTarget(s),d&&p.render(y,l),p.render(t,l)}p.toneMapping=f,p.autoClear=u,t.background=b}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===As||t.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Vr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,ja)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),p=Math.sqrt(c*c-h*h),u=c*1.25,f=p*u,{_lodMax:g}=this,y=this._sizeLods[i],m=3*y*(i>g-Gr?i-g+Gr:0),d=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Vr(r,m,d,3*y,2*y),s.setRenderTarget(r),s.render(o,ja),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Vr(t,m,d,3*y,2*y),s.setRenderTarget(t),s.render(o,ja)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-Gr?s-this._lodMax+Gr:0),u=4*(this._cubeSize-h);Vr(e,p,u,3*h,2*h),a.setRenderTarget(e),a.render(l,ja)}};function $_(n){let t=[],e=[],i=n,s=n-Gr+1+j_;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],p=6,u=6,f=3,g=new Float32Array(f*u*p),y=new Float32Array(f*u*p);for(let d=0;d<p;d++){let b=d%3*2/3-1,E=d>2?0:-1,S=[b,E,0,b+2/3,E,0,b+2/3,E+1,0,b,E,0,b+2/3,E+1,0,b,E+1,0];g.set(S,f*u*d);for(let M=0;M<u;M++){let A=h[M*2]*2-1,R=h[M*2+1]*2-1;d===0?qs.set(1,R,A):d===1?qs.set(-A,1,-R):d===2?qs.set(-A,R,1):d===3?qs.set(-1,R,-A):d===4?qs.set(-A,-1,R):qs.set(A,R,-1),qs.toArray(y,(d*u+M)*f)}}let m=new Ue;m.setAttribute("position",new $n(g,f)),m.setAttribute("outputDirection",new $n(y,f)),e.push(new ge(m,null)),i>Gr&&i--}return{lodMeshes:e,sizeLods:t}}function up(n,t,e){let i=new Nn(n,t,e);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function ty(n,t,e){return new Xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:J_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function ey(n,t,e){return new Xn({name:"SphericalGaussianBlur",defines:{SAMPLES:Z_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function dp(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function fp(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function _c(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var gc=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Aa(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ir(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:Ii});r.uniforms.tEquirect.value=e;let a=new ge(s,r),o=e.minFilter;return e.minFilter===ws&&(e.minFilter=cn),new Ml(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function ny(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===wl||f===Tl)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new gc(g.height);return y.fromEquirectangularTexture(n,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===wl||f===Tl,y=f===As||f===Ws;if(g||y){let m=e.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new mc(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return g&&b&&b.height>0||y&&b&&l(b)?(i===null&&(i=new mc(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===wl?u.mapping=As:f===Tl&&(u.mapping=Ws),u}function l(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function p(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function iy(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Fs("WebGLRenderer: "+i+" extension not supported."),s}}}function sy(n,t,e,i){let s={},r=new WeakMap;function a(p){let u=p.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(p){let u=p.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(p){let u=[],f=p.index,g=p.attributes.position,y=0;if(g===void 0)return;if(f!==null){let b=f.array;y=f.version;for(let E=0,S=b.length;E<S;E+=3){let M=b[E+0],A=b[E+1],R=b[E+2];u.push(M,A,A,R,R,M)}}else{let b=g.array;y=g.version;for(let E=0,S=b.length/3-1;E<S;E+=3){let M=E+0,A=E+1,R=E+2;u.push(M,A,A,R,R,M)}}let m=new(g.count>=65535?ba:Ma)(u,1);m.version=y;let d=r.get(p);d&&t.remove(d),r.set(p,m)}function h(p){let u=r.get(p);if(u){let f=p.index;f!==null&&u.version<f.version&&c(p)}else c(p);return r.get(p)}return{get:o,update:l,getWireframeAttribute:h}}function ry(n,t,e){let i;function s(p){i=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function l(p,u){n.drawElements(i,u,r,p*a),e.update(u,i,1)}function c(p,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,p*a,f),e.update(u,i,f))}function h(p,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,p,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];e.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ay(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:Bt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function oy(n,t,e){let i=new WeakMap,s=new Pe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==p){let w=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let S=o.attributes.position.count*E,M=1;S>t.maxTextureSize&&(M=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let A=new Float32Array(S*M*4*p),R=new va(A,S,M,p);R.type=_i,R.needsUpdate=!0;let _=E*4;for(let P=0;P<p;P++){let L=m[P],O=d[P],B=b[P],C=S*M*4*P;for(let k=0;k<L.count;k++){let q=k*_;f===!0&&(s.fromBufferAttribute(L,k),A[C+q+0]=s.x,A[C+q+1]=s.y,A[C+q+2]=s.z,A[C+q+3]=0),g===!0&&(s.fromBufferAttribute(O,k),A[C+q+4]=s.x,A[C+q+5]=s.y,A[C+q+6]=s.z,A[C+q+7]=0),y===!0&&(s.fromBufferAttribute(B,k),A[C+q+8]=s.x,A[C+q+9]=s.y,A[C+q+10]=s.z,A[C+q+11]=B.itemSize===4?s.w:1)}}u={count:p,texture:R,size:new xt(S,M)},i.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function ly(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,p=c.geometry,u=t.get(c,p);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var cy={[Qh]:"LINEAR_TONE_MAPPING",[$h]:"REINHARD_TONE_MAPPING",[tu]:"CINEON_TONE_MAPPING",[za]:"ACES_FILMIC_TONE_MAPPING",[nu]:"AGX_TONE_MAPPING",[iu]:"NEUTRAL_TONE_MAPPING",[eu]:"CUSTOM_TONE_MAPPING"};function hy(n,t,e,i,s,r){let a=new Nn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Ue;c.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new de([0,2,0,0,2,0],2));let h=new ll({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new ge(c,h),u=new Lr(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,d=null,b=[],E=!1;this.setSize=function(S,M){a.setSize(S,M),o!==null&&o.setSize(S,M),l!==null&&l.setSize(S,M);for(let A=0;A<b.length;A++){let R=b[A];R.setSize&&R.setSize(S,M)}},this.setEffects=function(S){b=S,E=b.length>0&&b[0].isRenderPass===!0;let M=a.width,A=a.height;b.length>0&&o===null&&(o=new Nn(M,A,{type:yi,depthBuffer:!1,stencilBuffer:!1}),l=new Nn(M,A,{type:yi,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<b.length;R++){let _=b[R];_.setSize&&_.setSize(M,A)}},this.begin=function(S,M){if(y||S.toneMapping===gi&&b.length===0)return!1;if(d=M,M!==null){let A=M.width,R=M.height;(a.width!==A||a.height!==R)&&this.setSize(A,R)}return E===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=gi,!0},this.hasRenderPass=function(){return E},this.end=function(S,M){S.toneMapping=m,y=!0;let A=a,R=o;for(let _=0;_<b.length;_++){let w=b[_];w.enabled!==!1&&(w.render(S,R,A,M),w.needsSwap!==!1&&(A=R,R=R===o?l:o))}if(f!==S.outputColorSpace||g!==S.toneMapping){f=S.outputColorSpace,g=S.toneMapping,h.defines={},$t.getTransfer(f)===he&&(h.defines.SRGB_TRANSFER="");let _=cy[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(d),S.render(p,u),d=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Np=new wn,Iu=new xs(1,1),Up=new va,Lp=new Zo,Op=new Aa,pp=[],mp=[],gp=new Float32Array(16),xp=new Float32Array(9),_p=new Float32Array(4);function Xr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=pp[s];if(r===void 0&&(r=new Float32Array(s),pp[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ke(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function je(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function yc(n,t){let e=mp[t];e===void 0&&(e=new Int32Array(t),mp[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function uy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function dy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2fv(this.addr,t),je(e,t)}}function fy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ke(e,t))return;n.uniform3fv(this.addr,t),je(e,t)}}function py(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4fv(this.addr,t),je(e,t)}}function my(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,i))return;_p.set(i),n.uniformMatrix2fv(this.addr,!1,_p),je(e,i)}}function gy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,i))return;xp.set(i),n.uniformMatrix3fv(this.addr,!1,xp),je(e,i)}}function xy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ke(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if(Ke(e,i))return;gp.set(i),n.uniformMatrix4fv(this.addr,!1,gp),je(e,i)}}function _y(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function yy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2iv(this.addr,t),je(e,t)}}function vy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3iv(this.addr,t),je(e,t)}}function Sy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4iv(this.addr,t),je(e,t)}}function My(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function by(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ke(e,t))return;n.uniform2uiv(this.addr,t),je(e,t)}}function Ay(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ke(e,t))return;n.uniform3uiv(this.addr,t),je(e,t)}}function wy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ke(e,t))return;n.uniform4uiv(this.addr,t),je(e,t)}}function Ty(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Iu.compareFunction=e.isReversedDepthBuffer()?dc:uc,r=Iu):r=Np,e.setTexture2D(t||r,s)}function Ey(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Lp,s)}function Ry(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Op,s)}function Py(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Up,s)}function Cy(n){switch(n){case 5126:return uy;case 35664:return dy;case 35665:return fy;case 35666:return py;case 35674:return my;case 35675:return gy;case 35676:return xy;case 5124:case 35670:return _y;case 35667:case 35671:return yy;case 35668:case 35672:return vy;case 35669:case 35673:return Sy;case 5125:return My;case 36294:return by;case 36295:return Ay;case 36296:return wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ty;case 35679:case 36299:case 36307:return Ey;case 35680:case 36300:case 36308:case 36293:return Ry;case 36289:case 36303:case 36311:case 36292:return Py}}function Iy(n,t){n.uniform1fv(this.addr,t)}function Dy(n,t){let e=Xr(t,this.size,2);n.uniform2fv(this.addr,e)}function Ny(n,t){let e=Xr(t,this.size,3);n.uniform3fv(this.addr,e)}function Uy(n,t){let e=Xr(t,this.size,4);n.uniform4fv(this.addr,e)}function Ly(n,t){let e=Xr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Oy(n,t){let e=Xr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Fy(n,t){let e=Xr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function By(n,t){n.uniform1iv(this.addr,t)}function Hy(n,t){n.uniform2iv(this.addr,t)}function zy(n,t){n.uniform3iv(this.addr,t)}function ky(n,t){n.uniform4iv(this.addr,t)}function Vy(n,t){n.uniform1uiv(this.addr,t)}function Gy(n,t){n.uniform2uiv(this.addr,t)}function Wy(n,t){n.uniform3uiv(this.addr,t)}function Xy(n,t){n.uniform4uiv(this.addr,t)}function qy(n,t,e){let i=this.cache,s=t.length,r=yc(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),je(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Iu:a=Np;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Yy(n,t,e){let i=this.cache,s=t.length,r=yc(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Lp,r[a])}function Ky(n,t,e){let i=this.cache,s=t.length,r=yc(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Op,r[a])}function jy(n,t,e){let i=this.cache,s=t.length,r=yc(e,s);Ke(i,r)||(n.uniform1iv(this.addr,r),je(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Up,r[a])}function Zy(n){switch(n){case 5126:return Iy;case 35664:return Dy;case 35665:return Ny;case 35666:return Uy;case 35674:return Ly;case 35675:return Oy;case 35676:return Fy;case 5124:case 35670:return By;case 35667:case 35671:return Hy;case 35668:case 35672:return zy;case 35669:case 35673:return ky;case 5125:return Vy;case 36294:return Gy;case 36295:return Wy;case 36296:return Xy;case 35678:case 36198:case 36298:case 36306:case 35682:return qy;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return Ky;case 36289:case 36303:case 36311:case 36292:return jy}}var Du=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Cy(e.type)}},Nu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zy(e.type)}},Uu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},Pu=/(\w+)(\])?(\[|\.)?/g;function yp(n,t){n.seq.push(t),n.map[t.id]=t}function Jy(n,t,e){let i=n.name,s=i.length;for(Pu.lastIndex=0;;){let r=Pu.exec(i),a=Pu.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){yp(e,c===void 0?new Du(o,n,t):new Nu(o,n,t));break}else{let p=e.map[o];p===void 0&&(p=new Uu(o),yp(e,p)),e=p}}}var Wr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Jy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function vp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Qy=37297,$y=0;function tv(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Sp=new zt;function ev(n){$t._getMatrix(Sp,$t.workingColorSpace,n);let t=`mat3( ${Sp.elements.map(e=>e.toFixed(4))} )`;switch($t.getTransfer(n)){case _a:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Mp(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+tv(n.getShaderSource(t),o)}else return r}function nv(n,t){let e=ev(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var iv={[Qh]:"Linear",[$h]:"Reinhard",[tu]:"Cineon",[za]:"ACESFilmic",[nu]:"AgX",[iu]:"Neutral",[eu]:"Custom"};function sv(n,t){let e=iv[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var pc=new I;function rv(){$t.getLuminanceCoefficients(pc);let n=pc.x.toFixed(4),t=pc.y.toFixed(4),e=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function av(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ja).join(`
`)}function ov(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function lv(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ja(n){return n!==""}function bp(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ap(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lu(n){return n.replace(cv,uv)}var hv=new Map;function uv(n,t){let e=Kt[t];if(e===void 0){let i=hv.get(t);if(i!==void 0)e=Kt[i],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Lu(e)}var dv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wp(n){return n.replace(dv,fv)}function fv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Tp(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var pv={[Ba]:"SHADOWMAP_TYPE_PCF",[Fr]:"SHADOWMAP_TYPE_VSM"};function mv(n){return pv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var gv={[As]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[ka]:"ENVMAP_TYPE_CUBE_UV"};function xv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":gv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var _v={[Ws]:"ENVMAP_MODE_REFRACTION"};function yv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":_v[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var vv={[Jh]:"ENVMAP_BLENDING_MULTIPLY",[Gf]:"ENVMAP_BLENDING_MIX",[Wf]:"ENVMAP_BLENDING_ADD"};function Sv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":vv[n.combine]||"ENVMAP_BLENDING_NONE"}function Mv(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function bv(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=mv(e),c=xv(e),h=yv(e),p=Sv(e),u=Mv(e),f=av(e),g=ov(r),y=s.createProgram(),m,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ja).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ja).join(`
`),d.length>0&&(d+=`
`)):(m=[Tp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ja).join(`
`),d=[Tp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?Kt.tonemapping_pars_fragment:"",e.toneMapping!==gi?sv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,nv("linearToOutputTexel",e.outputColorSpace),rv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ja).join(`
`)),a=Lu(a),a=bp(a,e),a=Ap(a,e),o=Lu(o),o=bp(o,e),o=Ap(o,e),a=wp(a),o=wp(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let E=b+m+a,S=b+d+o,M=vp(s,s.VERTEX_SHADER,E),A=vp(s,s.FRAGMENT_SHADER,S);s.attachShader(y,M),s.attachShader(y,A),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(L){if(n.debug.checkShaderErrors){let O=s.getProgramInfoLog(y)||"",B=s.getShaderInfoLog(M)||"",C=s.getShaderInfoLog(A)||"",k=O.trim(),q=B.trim(),j=C.trim(),st=!0,Y=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(st=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,M,A);else{let tt=Mp(s,M,"vertex"),nt=Mp(s,A,"fragment");Bt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+tt+`
`+nt)}else k!==""?Ut("WebGLProgram: Program Info Log:",k):(q===""||j==="")&&(Y=!1);Y&&(L.diagnostics={runnable:st,programLog:k,vertexShader:{log:q,prefix:m},fragmentShader:{log:j,prefix:d}})}s.deleteShader(M),s.deleteShader(A),_=new Wr(s,y),w=lv(s,y)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,Qy)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$y++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=A,this}var Av=0,Ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Fu(t),e.set(t,i)),i}},Fu=class{constructor(t){this.id=Av++,this.code=t,this.usedTimes=0}};function wv(n){return n===Es||n===Ya||n===Ka}function Tv(n,t,e,i,s,r){let a=new Rr,o=new Ou,l=new Set,c=[],h=new Map,p=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,w,P,L,O,B){let C=L.fog,k=O.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,st=t.get(_.envMap||q,j),Y=st&&st.mapping===ka?st.image.height:null,tt=f[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&Ut("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let nt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Dt=nt!==void 0?nt.length:0,wt=0;k.morphAttributes.position!==void 0&&(wt=1),k.morphAttributes.normal!==void 0&&(wt=2),k.morphAttributes.color!==void 0&&(wt=3);let _e,ee,re,Z;if(tt){let ve=Ni[tt];_e=ve.vertexShader,ee=ve.fragmentShader}else{_e=_.vertexShader,ee=_.fragmentShader;let ve=o.getVertexShaderStage(_),le=o.getFragmentShaderStage(_);o.update(_,ve,le),re=ve.id,Z=le.id}let et=n.getRenderTarget(),Mt=n.state.buffers.depth.getReversed(),Vt=O.isInstancedMesh===!0,vt=O.isBatchedMesh===!0,jt=!!_.map,Ye=!!_.matcap,Zt=!!st,se=!!_.aoMap,ye=!!_.lightMap,Qt=!!_.bumpMap&&_.wireframe===!1,Re=!!_.normalMap,Qe=!!_.displacementMap,Dn=!!_.emissiveMap,Ce=!!_.metalnessMap,Ve=!!_.roughnessMap,U=_.anisotropy>0,un=_.clearcoat>0,ue=_.dispersion>0,T=_.retroreflectivity>0,x=_.iridescence>0,F=_.sheen>0,V=_.transmission>0,K=U&&!!_.anisotropyMap,rt=un&&!!_.clearcoatMap,ot=un&&!!_.clearcoatNormalMap,J=un&&!!_.clearcoatRoughnessMap,$=x&&!!_.iridescenceMap,lt=x&&!!_.iridescenceThicknessMap,Rt=F&&!!_.sheenColorMap,dt=F&&!!_.sheenRoughnessMap,ct=!!_.specularMap,Pt=!!_.specularColorMap,Ft=!!_.specularIntensityMap,Wt=V&&!!_.transmissionMap,N=V&&!!_.thicknessMap,ht=!!_.gradientMap,Q=!!_.alphaMap,ut=_.alphaTest>0,_t=!!_.alphaHash,it=!!_.extensions,It=gi;_.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(It=n.toneMapping);let Tt={shaderID:tt,shaderType:_.type,shaderName:_.name,vertexShader:_e,fragmentShader:ee,defines:_.defines,customVertexShaderID:re,customFragmentShaderID:Z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:vt,batchingColor:vt&&O._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&O.instanceColor!==null,instancingMorph:Vt&&O.morphTexture!==null,outputColorSpace:et===null?n.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:$t.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:jt,matcap:Ye,envMap:Zt,envMapMode:Zt&&st.mapping,envMapCubeUVHeight:Y,aoMap:se,lightMap:ye,bumpMap:Qt,normalMap:Re,displacementMap:Qe,emissiveMap:Dn,normalMapObjectSpace:Re&&_.normalMapType===Yf,normalMapTangentSpace:Re&&_.normalMapType===hc,packedNormalMap:Re&&_.normalMapType===hc&&wv(_.normalMap.format),metalnessMap:Ce,roughnessMap:Ve,anisotropy:U,anisotropyMap:K,clearcoat:un,clearcoatMap:rt,clearcoatNormalMap:ot,clearcoatRoughnessMap:J,dispersion:ue,retroreflection:T,iridescence:x,iridescenceMap:$,iridescenceThicknessMap:lt,sheen:F,sheenColorMap:Rt,sheenRoughnessMap:dt,specularMap:ct,specularColorMap:Pt,specularIntensityMap:Ft,transmission:V,transmissionMap:Wt,thicknessMap:N,gradientMap:ht,opaque:_.transparent===!1&&_.blending===Br&&_.alphaToCoverage===!1,alphaMap:Q,alphaTest:ut,alphaHash:_t,combine:_.combine,mapUv:jt&&g(_.map.channel),aoMapUv:se&&g(_.aoMap.channel),lightMapUv:ye&&g(_.lightMap.channel),bumpMapUv:Qt&&g(_.bumpMap.channel),normalMapUv:Re&&g(_.normalMap.channel),displacementMapUv:Qe&&g(_.displacementMap.channel),emissiveMapUv:Dn&&g(_.emissiveMap.channel),metalnessMapUv:Ce&&g(_.metalnessMap.channel),roughnessMapUv:Ve&&g(_.roughnessMap.channel),anisotropyMapUv:K&&g(_.anisotropyMap.channel),clearcoatMapUv:rt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ot&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:dt&&g(_.sheenRoughnessMap.channel),specularMapUv:ct&&g(_.specularMap.channel),specularColorMapUv:Pt&&g(_.specularColorMap.channel),specularIntensityMapUv:Ft&&g(_.specularIntensityMap.channel),transmissionMapUv:Wt&&g(_.transmissionMap.channel),thicknessMapUv:N&&g(_.thicknessMap.channel),alphaMapUv:Q&&g(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Re||U),vertexNormals:!!k.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!k.attributes.uv&&(jt||Q),fog:!!C,useFog:_.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||k.attributes.normal===void 0&&Re===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Mt,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Dt,morphTextureStride:wt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:It,decodeVideoTexture:jt&&_.map.isVideoTexture===!0&&$t.getTransfer(_.map.colorSpace)===he,decodeVideoTextureEmissive:Dn&&_.emissiveMap.isVideoTexture===!0&&$t.getTransfer(_.emissiveMap.colorSpace)===he,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===_n,flipSided:_.side===En,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:it&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&_.extensions.multiDraw===!0||vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Tt.vertexUv1s=l.has(1),Tt.vertexUv2s=l.has(2),Tt.vertexUv3s=l.has(3),l.clear(),Tt}function m(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)w.push(P),w.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(d(w,_),b(w,_),w.push(n.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function d(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function b(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function E(_){let w=f[_.type],P;if(w){let L=Ni[w];P=op.clone(L.uniforms)}else P=_.uniforms;return P}function S(_,w){let P=h.get(w);return P!==void 0?++P.usedTimes:(P=new bv(n,w,_,s),c.push(P),h.set(w,P)),P}function M(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:E,acquireProgram:S,releaseProgram:M,releaseShaderCache:A,programs:c,dispose:R}}function Ev(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Rv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Ep(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Rp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,y,m,d){let b=n[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:d},n[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=g,b.materialVariant=a(u),b.groupOrder=y,b.renderOrder=u.renderOrder,b.z=m,b.group=d),t++,b}function l(u,f,g,y,m,d,b){b.reversedDepth===!0&&(m=-m);let E=o(u,f,g,y,m,d);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,f,g,y,m,d){let b=o(u,f,g,y,m,d);g.transmission>0?i.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,f){e.length>1&&e.sort(u||Rv),i.length>1&&i.sort(f||Ep),s.length>1&&s.sort(f||Ep)}function p(){for(let u=t,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:p,sort:h}}function Pv(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Rp,n.set(i,[a])):s>=r.length?(a=new Rp,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Cv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new kt};break;case"SpotLight":e={position:new I,direction:new I,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function Iv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Dv=0;function Nv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Uv(n){let t=new Cv,e=Iv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new Me,a=new Me;function o(c){let h=0,p=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,g=0,y=0,m=0,d=0,b=0,E=0,S=0,M=0,A=0,R=0,_=0,w=0,P=0;c.sort(Nv);for(let O=0,B=c.length;O<B;O++){let C=c[O],k=C.color,q=C.intensity,j=C.distance,st=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Es?st=C.shadow.map.texture:st=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=k.r*q,p+=k.g*q,u+=k.b*q;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(C.sh.coefficients[Y],q);P++}else if(C.isSunLight){let Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let tt=C.shadow,nt=e.get(C);nt.shadowIntensity=tt.intensity,nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),i.sunShadow[g]=nt,i.sunShadowMap[g]=st;let Dt=tt.getViewportCount();for(let wt=0;wt<Dt;wt++)i.sunShadowMatrix[y+wt]=tt.getMatrix(wt),i.sunShadowCascade[y+wt]=tt._cascadeData[wt];y+=Dt,g++}i.sun[f]=Y,f++}else if(C.isDirectionalLight){let Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let tt=C.shadow,nt=e.get(C);nt.shadowIntensity=tt.intensity,nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,i.directionalShadow[m]=nt,i.directionalShadowMap[m]=st,i.directionalShadowMatrix[m]=C.shadow.matrix,M++}i.directional[m]=Y,m++}else if(C.isSpotLight){let Y=t.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(k).multiplyScalar(q),Y.distance=j,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,i.spot[b]=Y;let tt=C.shadow;if(C.map&&(i.spotLightMap[_]=C.map,_++,tt.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[b]=tt.matrix,C.castShadow){let nt=e.get(C);nt.shadowIntensity=tt.intensity,nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,i.spotShadow[b]=nt,i.spotShadowMap[b]=st,R++}b++}else if(C.isRectAreaLight){let Y=t.get(C);Y.color.copy(k).multiplyScalar(q),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),i.rectArea[E]=Y,E++}else if(C.isPointLight){let Y=t.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){let tt=C.shadow,nt=e.get(C);nt.shadowIntensity=tt.intensity,nt.shadowBias=tt.bias,nt.shadowNormalBias=tt.normalBias,nt.shadowRadius=tt.radius,nt.shadowMapSize=tt.mapSize,nt.shadowCameraNear=tt.camera.near,nt.shadowCameraFar=tt.camera.far,i.pointShadow[d]=nt,i.pointShadowMap[d]=st,i.pointShadowMatrix[d]=C.shadow.matrix,A++}i.point[d]=Y,d++}else if(C.isHemisphereLight){let Y=t.get(C);Y.skyColor.copy(C.color).multiplyScalar(q),Y.groundColor.copy(C.groundColor).multiplyScalar(q),i.hemi[S]=Y,S++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;let L=i.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==d||L.spotLength!==b||L.rectAreaLength!==E||L.hemiLength!==S||L.numSunShadows!==g||L.numDirectionalShadows!==M||L.numPointShadows!==A||L.numSpotShadows!==R||L.numSpotMaps!==_||L.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=m,i.spot.length=b,i.rectArea.length=E,i.point.length=d,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+_-w,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,L.sunLength=f,L.directionalLength=m,L.pointLength=d,L.spotLength=b,L.rectAreaLength=E,L.hemiLength=S,L.numSunShadows=g,L.numDirectionalShadows=M,L.numPointShadows=A,L.numSpotShadows=R,L.numSpotMaps=_,L.numLightProbes=P,i.version=Dv++)}function l(c,h){let p=0,u=0,f=0,g=0,y=0,m=0,d=h.matrixWorldInverse;for(let b=0,E=c.length;b<E;b++){let S=c[b];if(S.isSunLight){let M=i.sun[p];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(d),p++}else if(S.isDirectionalLight){let M=i.directional[u];M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),u++}else if(S.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),g++}else if(S.isRectAreaLight){let M=i.rectArea[y];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(d),a.identity(),r.copy(S.matrixWorld),r.premultiply(d),a.extractRotation(r),M.halfWidth.set(S.width*.5,0,0),M.halfHeight.set(0,S.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(S.matrixWorld),M.position.applyMatrix4(d),f++}else if(S.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(S.matrixWorld),M.direction.transformDirection(d),m++}}}return{setup:o,setupView:l,state:i}}function Pp(n){let t=new Uv(n),e=[],i=[],s=[];function r(u){p.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let p={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Lv(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Pp(n),t.set(s,[o])):r>=a.length?(o=new Pp(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Ov=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Bv=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Hv=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Cp=new Me,Za=new I,Cu=new I;function zv(n,t,e){let i=new Cr,s=new xt,r=new xt,a=new Pe,o=new cl,l=new hl,c={},h=e.maxTextureSize,p={[bs]:En,[En]:bs,[_n]:_n},u=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:Ov,fragmentShader:Fv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ue;g.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ge(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ba;let d=this.type;this.render=function(A,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Af&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ba);let w=n.getRenderTarget(),P=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Ii),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let B=d!==this.type;B&&R.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(k=>k.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,k=A.length;C<k;C++){let q=A[C],j=q.shadow;if(j===void 0){Ut("WebGLShadowMap:",q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let st=j.getFrameExtents();s.multiply(st),r.copy(j.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,j.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,j.mapSize.y=r.y));let Y=n.state.buffers.depth.getReversed();if(j.camera._reversedDepth=Y,j.map===null||B===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Fr){if(q.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new Nn(s.x,s.y,{format:Es,type:yi,minFilter:cn,magFilter:cn,generateMipmaps:!1}),j.map.texture.name=q.name+".shadowMap",j.map.depthTexture=new xs(s.x,s.y,_i),j.map.depthTexture.name=q.name+".shadowMapDepth",j.map.depthTexture.format=Ci,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=tn,j.map.depthTexture.magFilter=tn}else q.isPointLight?(j.map=new gc(s.x),j.map.depthTexture=new tl(s.x,xi)):(j.map=new Nn(s.x,s.y),j.map.depthTexture=new xs(s.x,s.y,xi)),j.map.depthTexture.name=q.name+".shadowMap",j.map.depthTexture.format=Ci,this.type===Ba?(j.map.depthTexture.compareFunction=Y?dc:uc,j.map.depthTexture.minFilter=cn,j.map.depthTexture.magFilter=cn):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=tn,j.map.depthTexture.magFilter=tn);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==s.x||j.map.height!==s.y)&&j.map.setSize(s.x,s.y);let tt=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();q.isPointLight!==!0&&j.updateMatrices(q,_);for(let nt=0;nt<tt;nt++){let Dt=j.getCamera(nt);if(q.isPointLight){let wt=j.camera,_e=j.matrix,ee=q.distance||wt.far;ee!==wt.far&&(wt.far=ee,wt.updateProjectionMatrix()),Za.setFromMatrixPosition(q.matrixWorld),wt.position.copy(Za),Cu.copy(wt.position),Cu.add(Bv[nt]),wt.up.copy(Hv[nt]),wt.lookAt(Cu),wt.updateMatrixWorld(),_e.makeTranslation(-Za.x,-Za.y,-Za.z),Cp.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Cp,wt.coordinateSystem,wt.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)n.setRenderTarget(j.map,nt),n.clear();else{nt===0&&(n.setRenderTarget(j.map),n.clear());let wt=j.getViewport(nt);a.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),O.viewport(a)}i=j.getFrustum(nt),S(R,_,Dt,q,this.type)}j.isPointLightShadow!==!0&&this.type===Fr&&b(j,_),j.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(w,P,L)};function b(A,R){let _=t.update(y);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new Nn(s.x,s.y,{format:Es,type:yi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(R,null,_,u,y,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(R,null,_,f,y,null)}function E(A,R,_,w){let P=null,L=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)P=L;else if(P=_.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let O=P.uuid,B=R.uuid,C=c[O];C===void 0&&(C={},c[O]=C);let k=C[B];k===void 0&&(k=P.clone(),C[B]=k,R.addEventListener("dispose",M)),P=k}if(P.visible=R.visible,P.wireframe=R.wireframe,w===Fr?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:p[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=n.properties.get(P);O.light=_}return P}function S(A,R,_,w,P){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&P===Fr)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);let B=t.update(A),C=A.material;if(Array.isArray(C)){let k=B.groups;for(let q=0,j=k.length;q<j;q++){let st=k[q],Y=C[st.materialIndex];if(Y&&Y.visible){let tt=E(A,Y,w,P);A.onBeforeShadow(n,A,R,_,B,tt,st),n.renderBufferDirect(_,null,B,tt,A,st),A.onAfterShadow(n,A,R,_,B,tt,st)}}}else if(C.visible){let k=E(A,C,w,P);A.onBeforeShadow(n,A,R,_,B,k,null),n.renderBufferDirect(_,null,B,k,A,null),A.onAfterShadow(n,A,R,_,B,k,null)}}let O=A.children;for(let B=0,C=O.length;B<C;B++)S(O[B],R,_,w,P)}function M(A){A.target.removeEventListener("dispose",M);for(let _ in c){let w=c[_],P=A.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function kv(n,t){function e(){let N=!1,ht=new Pe,Q=null,ut=new Pe(0,0,0,0);return{setMask:function(_t){Q!==_t&&!N&&(n.colorMask(_t,_t,_t,_t),Q=_t)},setLocked:function(_t){N=_t},setClear:function(_t,it,It,Tt,ve){ve===!0&&(_t*=Tt,it*=Tt,It*=Tt),ht.set(_t,it,It,Tt),ut.equals(ht)===!1&&(n.clearColor(_t,it,It,Tt),ut.copy(ht))},reset:function(){N=!1,Q=null,ut.set(-1,0,0,0)}}}function i(){let N=!1,ht=!1,Q=null,ut=null,_t=null;return{setReversed:function(it){if(ht!==it){let It=t.get("EXT_clip_control");it?It.clipControlEXT(It.LOWER_LEFT_EXT,It.ZERO_TO_ONE_EXT):It.clipControlEXT(It.LOWER_LEFT_EXT,It.NEGATIVE_ONE_TO_ONE_EXT),ht=it;let Tt=_t;_t=null,this.setClear(Tt)}},getReversed:function(){return ht},setTest:function(it){it?et(n.DEPTH_TEST):Mt(n.DEPTH_TEST)},setMask:function(it){Q!==it&&!N&&(n.depthMask(it),Q=it)},setFunc:function(it){if(ht&&(it=rp[it]),ut!==it){switch(it){case Bo:n.depthFunc(n.NEVER);break;case Ho:n.depthFunc(n.ALWAYS);break;case zo:n.depthFunc(n.LESS);break;case br:n.depthFunc(n.LEQUAL);break;case ko:n.depthFunc(n.EQUAL);break;case Vo:n.depthFunc(n.GEQUAL);break;case Go:n.depthFunc(n.GREATER);break;case Wo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ut=it}},setLocked:function(it){N=it},setClear:function(it){_t!==it&&(_t=it,ht&&(it=1-it),n.clearDepth(it))},reset:function(){N=!1,Q=null,ut=null,_t=null,ht=!1}}}function s(){let N=!1,ht=null,Q=null,ut=null,_t=null,it=null,It=null,Tt=null,ve=null;return{setTest:function(le){N||(le?et(n.STENCIL_TEST):Mt(n.STENCIL_TEST))},setMask:function(le){ht!==le&&!N&&(n.stencilMask(le),ht=le)},setFunc:function(le,hi,Ti){(Q!==le||ut!==hi||_t!==Ti)&&(n.stencilFunc(le,hi,Ti),Q=le,ut=hi,_t=Ti)},setOp:function(le,hi,Ti){(it!==le||It!==hi||Tt!==Ti)&&(n.stencilOp(le,hi,Ti),it=le,It=hi,Tt=Ti)},setLocked:function(le){N=le},setClear:function(le){ve!==le&&(n.clearStencil(le),ve=le)},reset:function(){N=!1,ht=null,Q=null,ut=null,_t=null,it=null,It=null,Tt=null,ve=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},p={},u={},f=new WeakMap,g=[],y=null,m=!1,d=null,b=null,E=null,S=null,M=null,A=null,R=null,_=new kt(0,0,0),w=0,P=!1,L=null,O=null,B=null,C=null,k=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,st=0,Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(Y)[1]),j=st>=1):Y.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),j=st>=2);let tt=null,nt={},Dt=n.getParameter(n.SCISSOR_BOX),wt=n.getParameter(n.VIEWPORT),_e=new Pe().fromArray(Dt),ee=new Pe().fromArray(wt);function re(N,ht,Q,ut){let _t=new Uint8Array(4),it=n.createTexture();n.bindTexture(N,it),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let It=0;It<Q;It++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(ht,0,n.RGBA,1,1,ut,0,n.RGBA,n.UNSIGNED_BYTE,_t):n.texImage2D(ht+It,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_t);return it}let Z={};Z[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(n.DEPTH_TEST),a.setFunc(br),Qt(!1),Re(qh),et(n.CULL_FACE),se(Ii);function et(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function Mt(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Vt(N,ht){return u[N]!==ht?(n.bindFramebuffer(N,ht),u[N]=ht,N===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ht),N===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ht),!0):!1}function vt(N,ht){let Q=g,ut=!1;if(N){Q=f.get(ht),Q===void 0&&(Q=[],f.set(ht,Q));let _t=N.textures;if(Q.length!==_t.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let it=0,It=_t.length;it<It;it++)Q[it]=n.COLOR_ATTACHMENT0+it;Q.length=_t.length,ut=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,ut=!0);ut&&n.drawBuffers(Q)}function jt(N){return y!==N?(n.useProgram(N),y=N,!0):!1}let Ye={[Gs]:n.FUNC_ADD,[Tf]:n.FUNC_SUBTRACT,[Ef]:n.FUNC_REVERSE_SUBTRACT};Ye[Rf]=n.MIN,Ye[Pf]=n.MAX;let Zt={[Cf]:n.ZERO,[If]:n.ONE,[Df]:n.SRC_COLOR,[jh]:n.SRC_ALPHA,[Bf]:n.SRC_ALPHA_SATURATE,[Of]:n.DST_COLOR,[Uf]:n.DST_ALPHA,[Nf]:n.ONE_MINUS_SRC_COLOR,[Zh]:n.ONE_MINUS_SRC_ALPHA,[Ff]:n.ONE_MINUS_DST_COLOR,[Lf]:n.ONE_MINUS_DST_ALPHA,[Hf]:n.CONSTANT_COLOR,[zf]:n.ONE_MINUS_CONSTANT_COLOR,[kf]:n.CONSTANT_ALPHA,[Vf]:n.ONE_MINUS_CONSTANT_ALPHA};function se(N,ht,Q,ut,_t,it,It,Tt,ve,le){if(N===Ii){m===!0&&(Mt(n.BLEND),m=!1);return}if(m===!1&&(et(n.BLEND),m=!0),N!==wf){if(N!==d||le!==P){if((b!==Gs||M!==Gs)&&(n.blendEquation(n.FUNC_ADD),b=Gs,M=Gs),le)switch(N){case Br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ha:n.blendFunc(n.ONE,n.ONE);break;case Yh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Bt("WebGLState: Invalid blending: ",N);break}else switch(N){case Br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ha:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Yh:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kh:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",N);break}E=null,S=null,A=null,R=null,_.set(0,0,0),w=0,d=N,P=le}return}_t=_t||ht,it=it||Q,It=It||ut,(ht!==b||_t!==M)&&(n.blendEquationSeparate(Ye[ht],Ye[_t]),b=ht,M=_t),(Q!==E||ut!==S||it!==A||It!==R)&&(n.blendFuncSeparate(Zt[Q],Zt[ut],Zt[it],Zt[It]),E=Q,S=ut,A=it,R=It),(Tt.equals(_)===!1||ve!==w)&&(n.blendColor(Tt.r,Tt.g,Tt.b,ve),_.copy(Tt),w=ve),d=N,P=!1}function ye(N,ht){N.side===_n?Mt(n.CULL_FACE):et(n.CULL_FACE);let Q=N.side===En;ht&&(Q=!Q),Qt(Q),N.blending===Br&&N.transparent===!1?se(Ii):se(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ut=N.stencilWrite;o.setTest(ut),ut&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Dn(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?et(n.SAMPLE_ALPHA_TO_COVERAGE):Mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(N){L!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),L=N)}function Re(N){N!==Mf?(et(n.CULL_FACE),N!==O&&(N===qh?n.cullFace(n.BACK):N===bf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Mt(n.CULL_FACE),O=N}function Qe(N){N!==B&&(j&&n.lineWidth(N),B=N)}function Dn(N,ht,Q){N?(et(n.POLYGON_OFFSET_FILL),(C!==ht||k!==Q)&&(C=ht,k=Q,a.getReversed()&&(ht=-ht),n.polygonOffset(ht,Q))):Mt(n.POLYGON_OFFSET_FILL)}function Ce(N){N?et(n.SCISSOR_TEST):Mt(n.SCISSOR_TEST)}function Ve(N){N===void 0&&(N=n.TEXTURE0+q-1),tt!==N&&(n.activeTexture(N),tt=N)}function U(N,ht,Q){Q===void 0&&(tt===null?Q=n.TEXTURE0+q-1:Q=tt);let ut=nt[Q];ut===void 0&&(ut={type:void 0,texture:void 0},nt[Q]=ut),(ut.type!==N||ut.texture!==ht)&&(tt!==Q&&(n.activeTexture(Q),tt=Q),n.bindTexture(N,ht||Z[N]),ut.type=N,ut.texture=ht)}function un(){let N=nt[tt];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ue(){try{n.compressedTexImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function x(){try{n.texSubImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function F(){try{n.texSubImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function V(){try{n.compressedTexSubImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function rt(){try{n.texStorage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function ot(){try{n.texStorage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function J(){try{n.texImage2D(...arguments)}catch(N){Bt("WebGLState:",N)}}function $(){try{n.texImage3D(...arguments)}catch(N){Bt("WebGLState:",N)}}function lt(N){return p[N]!==void 0?p[N]:n.getParameter(N)}function Rt(N,ht){p[N]!==ht&&(n.pixelStorei(N,ht),p[N]=ht)}function dt(N){_e.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),_e.copy(N))}function ct(N){ee.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),ee.copy(N))}function Pt(N,ht){let Q=c.get(ht);Q===void 0&&(Q=new WeakMap,c.set(ht,Q));let ut=Q.get(N);ut===void 0&&(ut=n.getUniformBlockIndex(ht,N.name),Q.set(N,ut))}function Ft(N,ht){let ut=c.get(ht).get(N);l.get(ht)!==ut&&(n.uniformBlockBinding(ht,ut,N.__bindingPointIndex),l.set(ht,ut))}function Wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},p={},tt=null,nt={},u={},f=new WeakMap,g=[],y=null,m=!1,d=null,b=null,E=null,S=null,M=null,A=null,R=null,_=new kt(0,0,0),w=0,P=!1,L=null,O=null,B=null,C=null,k=null,_e.set(0,0,n.canvas.width,n.canvas.height),ee.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:Mt,bindFramebuffer:Vt,drawBuffers:vt,useProgram:jt,setBlending:se,setMaterial:ye,setFlipSided:Qt,setCullFace:Re,setLineWidth:Qe,setPolygonOffset:Dn,setScissorTest:Ce,activeTexture:Ve,bindTexture:U,unbindTexture:un,compressedTexImage2D:ue,compressedTexImage3D:T,texImage2D:J,texImage3D:$,pixelStorei:Rt,getParameter:lt,updateUBOMapping:Pt,uniformBlockBinding:Ft,texStorage2D:rt,texStorage3D:ot,texSubImage2D:x,texSubImage3D:F,compressedTexSubImage2D:V,compressedTexSubImage3D:K,scissor:dt,viewport:ct,reset:Wt}}function Vv(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap,p=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,x){return g?new OffscreenCanvas(T,x):ya("canvas")}function m(T,x,F){let V=1,K=ue(T);if((K.width>F||K.height>F)&&(V=F/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let rt=Math.floor(V*K.width),ot=Math.floor(V*K.height);u===void 0&&(u=y(rt,ot));let J=x?y(rt,ot):u;return J.width=rt,J.height=ot,J.getContext("2d").drawImage(T,0,0,rt,ot),Ut("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+rt+"x"+ot+")."),J}else return"data"in T&&Ut("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function d(T){return T.generateMipmaps}function b(T){n.generateMipmap(T)}function E(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(T,x,F,V,K,rt=!1){if(T!==null){if(n[T]!==void 0)return n[T];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ot;V&&(ot=t.get("EXT_texture_norm16"),ot||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===n.RED&&(F===n.FLOAT&&(J=n.R32F),F===n.HALF_FLOAT&&(J=n.R16F),F===n.UNSIGNED_BYTE&&(J=n.R8),F===n.UNSIGNED_SHORT&&ot&&(J=ot.R16_EXT),F===n.SHORT&&ot&&(J=ot.R16_SNORM_EXT)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(J=n.R8UI),F===n.UNSIGNED_SHORT&&(J=n.R16UI),F===n.UNSIGNED_INT&&(J=n.R32UI),F===n.BYTE&&(J=n.R8I),F===n.SHORT&&(J=n.R16I),F===n.INT&&(J=n.R32I)),x===n.RG&&(F===n.FLOAT&&(J=n.RG32F),F===n.HALF_FLOAT&&(J=n.RG16F),F===n.UNSIGNED_BYTE&&(J=n.RG8),F===n.UNSIGNED_SHORT&&ot&&(J=ot.RG16_EXT),F===n.SHORT&&ot&&(J=ot.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(J=n.RG8UI),F===n.UNSIGNED_SHORT&&(J=n.RG16UI),F===n.UNSIGNED_INT&&(J=n.RG32UI),F===n.BYTE&&(J=n.RG8I),F===n.SHORT&&(J=n.RG16I),F===n.INT&&(J=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(J=n.RGB8UI),F===n.UNSIGNED_SHORT&&(J=n.RGB16UI),F===n.UNSIGNED_INT&&(J=n.RGB32UI),F===n.BYTE&&(J=n.RGB8I),F===n.SHORT&&(J=n.RGB16I),F===n.INT&&(J=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),F===n.UNSIGNED_INT&&(J=n.RGBA32UI),F===n.BYTE&&(J=n.RGBA8I),F===n.SHORT&&(J=n.RGBA16I),F===n.INT&&(J=n.RGBA32I)),x===n.RGB&&(F===n.UNSIGNED_SHORT&&ot&&(J=ot.RGB16_EXT),F===n.SHORT&&ot&&(J=ot.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(J=n.R11F_G11F_B10F)),x===n.RGBA){let $=rt?_a:$t.getTransfer(K);F===n.FLOAT&&(J=n.RGBA32F),F===n.HALF_FLOAT&&(J=n.RGBA16F),F===n.UNSIGNED_BYTE&&(J=$===he?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&ot&&(J=ot.RGBA16_EXT),F===n.SHORT&&ot&&(J=ot.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function M(T,x){let F;return T?x===null||x===xi||x===zr?F=n.DEPTH24_STENCIL8:x===_i?F=n.DEPTH32F_STENCIL8:x===Hr&&(F=n.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xi||x===zr?F=n.DEPTH_COMPONENT24:x===_i?F=n.DEPTH_COMPONENT32F:x===Hr&&(F=n.DEPTH_COMPONENT16),F}function A(T,x){return d(T)===!0||T.isFramebufferTexture&&T.minFilter!==tn&&T.minFilter!==cn?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function R(T){let x=T.target;x.removeEventListener("dispose",R),w(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&p.delete(x)}function _(T){let x=T.target;x.removeEventListener("dispose",_),L(x)}function w(T){let x=i.get(T);if(x.__webglInit===void 0)return;let F=T.source,V=f.get(F);if(V){let K=V[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&P(T),Object.keys(V).length===0&&f.delete(F)}i.remove(T)}function P(T){let x=i.get(T);n.deleteTexture(x.__webglTexture);let F=T.source,V=f.get(F);delete V[x.__cacheKey],a.memory.textures--}function L(T){let x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(x.__webglFramebuffer[V]))for(let K=0;K<x.__webglFramebuffer[V].length;K++)n.deleteFramebuffer(x.__webglFramebuffer[V][K]);else n.deleteFramebuffer(x.__webglFramebuffer[V]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[V])}else{if(Array.isArray(x.__webglFramebuffer))for(let V=0;V<x.__webglFramebuffer.length;V++)n.deleteFramebuffer(x.__webglFramebuffer[V]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let V=0;V<x.__webglColorRenderbuffer.length;V++)x.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[V]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let F=T.textures;for(let V=0,K=F.length;V<K;V++){let rt=i.get(F[V]);rt.__webglTexture&&(n.deleteTexture(rt.__webglTexture),a.memory.textures--),i.remove(F[V])}i.remove(T)}let O=0;function B(){O=0}function C(){return O}function k(T){O=T}function q(){let T=O;return T>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,T}function j(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function st(T,x){let F=i.get(T);if(T.isVideoTexture&&U(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&F.__version!==T.version){let V=T.image;if(V===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Mt(F,T,x);return}}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function Y(T,x){let F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Mt(F,T,x);return}else T.isExternalTexture&&(F.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function tt(T,x){let F=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){Mt(F,T,x);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function nt(T,x){let F=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&F.__version!==T.version){Vt(F,T,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}let Dt={[Xo]:n.REPEAT,[Pi]:n.CLAMP_TO_EDGE,[qo]:n.MIRRORED_REPEAT},wt={[tn]:n.NEAREST,[Xf]:n.NEAREST_MIPMAP_NEAREST,[Va]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[El]:n.LINEAR_MIPMAP_NEAREST,[ws]:n.LINEAR_MIPMAP_LINEAR},_e={[jf]:n.NEVER,[tp]:n.ALWAYS,[Zf]:n.LESS,[uc]:n.LEQUAL,[Jf]:n.EQUAL,[dc]:n.GEQUAL,[Qf]:n.GREATER,[$f]:n.NOTEQUAL};function ee(T,x){if(x.type===_i&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===cn||x.magFilter===El||x.magFilter===Va||x.magFilter===ws||x.minFilter===cn||x.minFilter===El||x.minFilter===Va||x.minFilter===ws)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Dt[x.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Dt[x.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Dt[x.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,wt[x.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,wt[x.minFilter]),x.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,_e[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===tn||x.minFilter!==Va&&x.minFilter!==ws||x.type===_i&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function re(T,x){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",R));let V=x.source,K=f.get(V);K===void 0&&(K={},f.set(V,K));let rt=j(x);if(rt!==T.__cacheKey){K[rt]===void 0&&(K[rt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[rt].usedTimes++;let ot=K[T.__cacheKey];ot!==void 0&&(K[T.__cacheKey].usedTimes--,ot.usedTimes===0&&P(x)),T.__cacheKey=rt,T.__webglTexture=K[rt].texture}return F}function Z(T,x,F){return Math.floor(Math.floor(T/F)/x)}function et(T,x,F,V){let rt=T.updateRanges;if(rt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,F,V,x.data);else{rt.sort((Rt,dt)=>Rt.start-dt.start);let ot=0;for(let Rt=1;Rt<rt.length;Rt++){let dt=rt[ot],ct=rt[Rt],Pt=dt.start+dt.count,Ft=Z(ct.start,x.width,4),Wt=Z(dt.start,x.width,4);ct.start<=Pt+1&&Ft===Wt&&Z(ct.start+ct.count-1,x.width,4)===Ft?dt.count=Math.max(dt.count,ct.start+ct.count-dt.start):(++ot,rt[ot]=ct)}rt.length=ot+1;let J=e.getParameter(n.UNPACK_ROW_LENGTH),$=e.getParameter(n.UNPACK_SKIP_PIXELS),lt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let Rt=0,dt=rt.length;Rt<dt;Rt++){let ct=rt[Rt],Pt=Math.floor(ct.start/4),Ft=Math.ceil(ct.count/4),Wt=Pt%x.width,N=Math.floor(Pt/x.width),ht=Ft,Q=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Wt),e.pixelStorei(n.UNPACK_SKIP_ROWS,N),e.texSubImage2D(n.TEXTURE_2D,0,Wt,N,ht,Q,F,V,x.data)}T.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,J),e.pixelStorei(n.UNPACK_SKIP_PIXELS,$),e.pixelStorei(n.UNPACK_SKIP_ROWS,lt)}}function Mt(T,x,F){let V=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(V=n.TEXTURE_3D);let K=re(T,x),rt=x.source;e.bindTexture(V,T.__webglTexture,n.TEXTURE0+F);let ot=i.get(rt);if(rt.version!==ot.__version||K===!0){if(e.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let Q=$t.getPrimaries($t.workingColorSpace),ut=x.colorSpace===Ki?null:$t.getPrimaries(x.colorSpace),_t=x.colorSpace===Ki||Q===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let $=m(x.image,!1,s.maxTextureSize);$=un(x,$);let lt=r.convert(x.format,x.colorSpace),Rt=r.convert(x.type),dt=S(x.internalFormat,lt,Rt,x.normalized,x.colorSpace,x.isVideoTexture);ee(V,x);let ct,Pt=x.mipmaps,Ft=x.isVideoTexture!==!0,Wt=ot.__version===void 0||K===!0,N=rt.dataReady,ht=A(x,$);if(x.isDepthTexture)dt=M(x.format===Ts,x.type),Wt&&(Ft?e.texStorage2D(n.TEXTURE_2D,1,dt,$.width,$.height):e.texImage2D(n.TEXTURE_2D,0,dt,$.width,$.height,0,lt,Rt,null));else if(x.isDataTexture)if(Pt.length>0){Ft&&Wt&&e.texStorage2D(n.TEXTURE_2D,ht,dt,Pt[0].width,Pt[0].height);for(let Q=0,ut=Pt.length;Q<ut;Q++)ct=Pt[Q],Ft?N&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ct.width,ct.height,lt,Rt,ct.data):e.texImage2D(n.TEXTURE_2D,Q,dt,ct.width,ct.height,0,lt,Rt,ct.data);x.generateMipmaps=!1}else Ft?(Wt&&e.texStorage2D(n.TEXTURE_2D,ht,dt,$.width,$.height),N&&et(x,$,lt,Rt)):e.texImage2D(n.TEXTURE_2D,0,dt,$.width,$.height,0,lt,Rt,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ft&&Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,dt,Pt[0].width,Pt[0].height,$.depth);for(let Q=0,ut=Pt.length;Q<ut;Q++)if(ct=Pt[Q],x.format!==ei)if(lt!==null)if(Ft){if(N)if(x.layerUpdates.size>0){let _t=yu(ct.width,ct.height,x.format,x.type);for(let it of x.layerUpdates){let It=ct.data.subarray(it*_t/ct.data.BYTES_PER_ELEMENT,(it+1)*_t/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,it,ct.width,ct.height,1,lt,It)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ct.width,ct.height,$.depth,lt,ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,dt,ct.width,ct.height,$.depth,0,ct.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?N&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ct.width,ct.height,$.depth,lt,Rt,ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Q,dt,ct.width,ct.height,$.depth,0,lt,Rt,ct.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Ft&&Wt&&e.texStorage2D(n.TEXTURE_2D,ht,dt,Pt[0].width,Pt[0].height);for(let Q=0,ut=Pt.length;Q<ut;Q++)ct=Pt[Q],x.format!==ei?lt!==null?Ft?N&&e.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ct.width,ct.height,lt,ct.data):e.compressedTexImage2D(n.TEXTURE_2D,Q,dt,ct.width,ct.height,0,ct.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?N&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,ct.width,ct.height,lt,Rt,ct.data):e.texImage2D(n.TEXTURE_2D,Q,dt,ct.width,ct.height,0,lt,Rt,ct.data)}else if(x.isDataArrayTexture)if(Ft){if(Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ht,dt,$.width,$.height,$.depth),N)if(x.layerUpdates.size>0){let Q=yu($.width,$.height,x.format,x.type);for(let ut of x.layerUpdates){let _t=$.data.subarray(ut*Q/$.data.BYTES_PER_ELEMENT,(ut+1)*Q/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ut,$.width,$.height,1,lt,Rt,_t)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,lt,Rt,$.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,dt,$.width,$.height,$.depth,0,lt,Rt,$.data);else if(x.isData3DTexture)Ft?(Wt&&e.texStorage3D(n.TEXTURE_3D,ht,dt,$.width,$.height,$.depth),N&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,lt,Rt,$.data)):e.texImage3D(n.TEXTURE_3D,0,dt,$.width,$.height,$.depth,0,lt,Rt,$.data);else if(x.isFramebufferTexture){if(Wt)if(Ft)e.texStorage2D(n.TEXTURE_2D,ht,dt,$.width,$.height);else{let Q=$.width,ut=$.height;for(let _t=0;_t<ht;_t++)e.texImage2D(n.TEXTURE_2D,_t,dt,Q,ut,0,lt,Rt,null),Q>>=1,ut>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let Q=n.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),$.parentNode!==Q){Q.appendChild($),p.add(x),Q.onpaint=ut=>{let _t=ut.changedElements;for(let it of p)_t.includes(it.image)&&(it.needsUpdate=!0)},Q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,$);else{let _t=n.RGBA,it=n.RGBA,It=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,_t,it,It,$)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(Ft&&Wt){let Q=ue(Pt[0]);e.texStorage2D(n.TEXTURE_2D,ht,dt,Q.width,Q.height)}for(let Q=0,ut=Pt.length;Q<ut;Q++)ct=Pt[Q],Ft?N&&e.texSubImage2D(n.TEXTURE_2D,Q,0,0,lt,Rt,ct):e.texImage2D(n.TEXTURE_2D,Q,dt,lt,Rt,ct);x.generateMipmaps=!1}else if(Ft){if(Wt){let Q=ue($);e.texStorage2D(n.TEXTURE_2D,ht,dt,Q.width,Q.height)}N&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt,Rt,$)}else e.texImage2D(n.TEXTURE_2D,0,dt,lt,Rt,$);d(x)&&b(V),ot.__version=rt.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Vt(T,x,F){if(x.image.length!==6)return;let V=re(T,x),K=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+F);let rt=i.get(K);if(K.version!==rt.__version||V===!0){e.activeTexture(n.TEXTURE0+F);let ot=$t.getPrimaries($t.workingColorSpace),J=x.colorSpace===Ki?null:$t.getPrimaries(x.colorSpace),$=x.colorSpace===Ki||ot===J?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let lt=x.isCompressedTexture||x.image[0].isCompressedTexture,Rt=x.image[0]&&x.image[0].isDataTexture,dt=[];for(let it=0;it<6;it++)!lt&&!Rt?dt[it]=m(x.image[it],!0,s.maxCubemapSize):dt[it]=Rt?x.image[it].image:x.image[it],dt[it]=un(x,dt[it]);let ct=dt[0],Pt=r.convert(x.format,x.colorSpace),Ft=r.convert(x.type),Wt=S(x.internalFormat,Pt,Ft,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,ht=rt.__version===void 0||V===!0,Q=K.dataReady,ut=A(x,ct);ee(n.TEXTURE_CUBE_MAP,x);let _t;if(lt){N&&ht&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Wt,ct.width,ct.height);for(let it=0;it<6;it++){_t=dt[it].mipmaps;for(let It=0;It<_t.length;It++){let Tt=_t[It];x.format!==ei?Pt!==null?N?Q&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,0,0,Tt.width,Tt.height,Pt,Tt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,Wt,Tt.width,Tt.height,0,Tt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,0,0,Tt.width,Tt.height,Pt,Ft,Tt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It,Wt,Tt.width,Tt.height,0,Pt,Ft,Tt.data)}}}else{if(_t=x.mipmaps,N&&ht){_t.length>0&&ut++;let it=ue(dt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,Wt,it.width,it.height)}for(let it=0;it<6;it++)if(Rt){N?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,dt[it].width,dt[it].height,Pt,Ft,dt[it].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Wt,dt[it].width,dt[it].height,0,Pt,Ft,dt[it].data);for(let It=0;It<_t.length;It++){let ve=_t[It].image[it].image;N?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,0,0,ve.width,ve.height,Pt,Ft,ve.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,Wt,ve.width,ve.height,0,Pt,Ft,ve.data)}}else{N?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Pt,Ft,dt[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Wt,Pt,Ft,dt[it]);for(let It=0;It<_t.length;It++){let Tt=_t[It];N?Q&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,0,0,Pt,Ft,Tt.image[it]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+it,It+1,Wt,Pt,Ft,Tt.image[it])}}}d(x)&&b(n.TEXTURE_CUBE_MAP),rt.__version=K.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function vt(T,x,F,V,K,rt){let ot=r.convert(F.format,F.colorSpace),J=r.convert(F.type),$=S(F.internalFormat,ot,J,F.normalized,F.colorSpace),lt=i.get(x),Rt=i.get(F);if(Rt.__renderTarget=x,!lt.__hasExternalTextures){let dt=Math.max(1,x.width>>rt),ct=Math.max(1,x.height>>rt);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,rt,$,dt,ct,x.depth,0,ot,J,null):e.texImage2D(K,rt,$,dt,ct,0,ot,J,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),Ve(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,K,Rt.__webglTexture,0,Ce(x)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,K,Rt.__webglTexture,rt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function jt(T,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,T),x.depthBuffer){let V=x.depthTexture,K=V&&V.isDepthTexture?V.type:null,rt=M(x.stencilBuffer,K),ot=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ve(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce(x),rt,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce(x),rt,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,rt,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,T)}else{let V=x.textures;for(let K=0;K<V.length;K++){let rt=V[K],ot=r.convert(rt.format,rt.colorSpace),J=r.convert(rt.type),$=S(rt.internalFormat,ot,J,rt.normalized,rt.colorSpace);Ve(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce(x),$,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce(x),$,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,$,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ye(T,x,F){let V=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(x.depthTexture);if(K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V){if(K.__webglInit===void 0&&(K.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),ee(n.TEXTURE_CUBE_MAP,x.depthTexture);let lt=r.convert(x.depthTexture.format),Rt=r.convert(x.depthTexture.type),dt;x.depthTexture.format===Ci?dt=n.DEPTH_COMPONENT24:x.depthTexture.format===Ts&&(dt=n.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,dt,x.width,x.height,0,lt,Rt,null)}}else st(x.depthTexture,0);let rt=K.__webglTexture,ot=Ce(x),J=V?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,$=x.depthTexture.format===Ts?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ci)Ve(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,J,rt,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,$,J,rt,0);else if(x.depthTexture.format===Ts)Ve(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,J,rt,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,$,J,rt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Zt(T){let x=i.get(T),F=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let V=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),V){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=V}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let V=0;V<6;V++)Ye(x.__webglFramebuffer[V],T,V);else{let V=T.texture.mipmaps;V&&V.length>0?Ye(x.__webglFramebuffer[0],T,0):Ye(x.__webglFramebuffer,T,0)}else if(F){x.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[V]),x.__webglDepthbuffer[V]===void 0)x.__webglDepthbuffer[V]=n.createRenderbuffer(),jt(x.__webglDepthbuffer[V],T,!1);else{let K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,rt)}}else{let V=T.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),jt(x.__webglDepthbuffer,T,!1);else{let K=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,rt=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,rt),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,rt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function se(T,x,F){let V=i.get(T);x!==void 0&&vt(V.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Zt(T)}function ye(T){let x=T.texture,F=i.get(T),V=i.get(x);T.addEventListener("dispose",_);let K=T.textures,rt=T.isWebGLCubeRenderTarget===!0,ot=K.length>1;if(ot||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=x.version,a.memory.textures++),rt){F.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[J]=[];for(let $=0;$<x.mipmaps.length;$++)F.__webglFramebuffer[J][$]=n.createFramebuffer()}else F.__webglFramebuffer[J]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)F.__webglFramebuffer[J]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(ot)for(let J=0,$=K.length;J<$;J++){let lt=i.get(K[J]);lt.__webglTexture===void 0&&(lt.__webglTexture=n.createTexture(),a.memory.textures++)}if(T.samples>0&&Ve(T)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){let $=K[J];F.__webglColorRenderbuffer[J]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[J]);let lt=r.convert($.format,$.colorSpace),Rt=r.convert($.type),dt=S($.internalFormat,lt,Rt,$.normalized,$.colorSpace,T.isXRRenderTarget===!0),ct=Ce(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,dt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+J,n.RENDERBUFFER,F.__webglColorRenderbuffer[J])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),jt(F.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(rt){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),ee(n.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps&&x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)vt(F.__webglFramebuffer[J][$],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else vt(F.__webglFramebuffer[J],T,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);d(x)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let J=0,$=K.length;J<$;J++){let lt=K[J],Rt=i.get(lt),dt=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(dt=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,Rt.__webglTexture),ee(dt,lt),vt(F.__webglFramebuffer,T,lt,n.COLOR_ATTACHMENT0+J,dt,0),d(lt)&&b(dt)}e.unbindTexture()}else{let J=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(J=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(J,V.__webglTexture),ee(J,x),x.mipmaps&&x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)vt(F.__webglFramebuffer[$],T,x,n.COLOR_ATTACHMENT0,J,$);else vt(F.__webglFramebuffer,T,x,n.COLOR_ATTACHMENT0,J,0);d(x)&&b(J),e.unbindTexture()}T.depthBuffer&&Zt(T)}function Qt(T){let x=T.textures;for(let F=0,V=x.length;F<V;F++){let K=x[F];if(d(K)){let rt=E(T),ot=i.get(K).__webglTexture;e.bindTexture(rt,ot),b(rt),e.unbindTexture()}}}let Re=[],Qe=[];function Dn(T){if(T.samples>0){if(Ve(T)===!1){let x=T.textures,F=T.width,V=T.height,K=n.COLOR_BUFFER_BIT,rt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=i.get(T),J=x.length>1;if(J)for(let lt=0;lt<x.length;lt++)e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);let $=T.texture.mipmaps;$&&$.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let lt=0;lt<x.length;lt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),J){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);let Rt=i.get(x[lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Rt,0)}n.blitFramebuffer(0,0,F,V,0,0,F,V,K,n.NEAREST),l===!0&&(Re.length=0,Qe.length=0,Re.push(n.COLOR_ATTACHMENT0+lt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(Re.push(rt),Qe.push(rt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Qe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),J)for(let lt=0;lt<x.length;lt++){e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);let Rt=i.get(x[lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,Rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let x=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Ce(T){return Math.min(s.maxSamples,T.samples)}function Ve(T){let x=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function U(T){let x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function un(T,x){let F=T.colorSpace,V=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==xa&&F!==Ki&&($t.getTransfer(F)===he?(V!==ei||K!==Un)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",F)),x}function ue(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.getTextureUnits=C,this.setTextureUnits=k,this.setTexture2D=st,this.setTexture2DArray=Y,this.setTexture3D=tt,this.setTextureCube=nt,this.rebindTextures=se,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=Dn,this.setupDepthRenderbuffer=Zt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Ve,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Gv(n,t){function e(i,s=Ki){let r,a=$t.getTransfer(s);if(i===Un)return n.UNSIGNED_BYTE;if(i===Pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Cl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===ou)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===lu)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ru)return n.BYTE;if(i===au)return n.SHORT;if(i===Hr)return n.UNSIGNED_SHORT;if(i===Rl)return n.INT;if(i===xi)return n.UNSIGNED_INT;if(i===_i)return n.FLOAT;if(i===yi)return n.HALF_FLOAT;if(i===cu)return n.ALPHA;if(i===hu)return n.RGB;if(i===ei)return n.RGBA;if(i===Ci)return n.DEPTH_COMPONENT;if(i===Ts)return n.DEPTH_STENCIL;if(i===uu)return n.RED;if(i===Il)return n.RED_INTEGER;if(i===Es)return n.RG;if(i===Dl)return n.RG_INTEGER;if(i===Nl)return n.RGBA_INTEGER;if(i===Ga||i===Wa||i===Xa||i===qa)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ul||i===Ll||i===Ol||i===Fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ul)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bl||i===Hl||i===zl||i===kl||i===Vl||i===Ya||i===Gl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Bl||i===Hl)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===kl)return r.COMPRESSED_R11_EAC;if(i===Vl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ya)return r.COMPRESSED_RG11_EAC;if(i===Gl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wl||i===Xl||i===ql||i===Yl||i===Kl||i===jl||i===Zl||i===Jl||i===Ql||i===$l||i===tc||i===ec||i===nc||i===ic)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Wl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ql)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jl)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ql)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===$l)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ec)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nc)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ic)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sc||i===rc||i===ac)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===sc)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oc||i===lc||i===Ka||i===cc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===oc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Wv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Xv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Ta(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Xn({vertexShader:Wv,fragmentShader:Xv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new Yi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hu=class extends mi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,p=null,u=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new Bu,d={},b=e.getContextAttributes(),E=null,S=null,M=[],A=[],R=new xt,_=null,w=null,P=new gn;P.viewport=new Pe;let L=new gn;L.viewport=new Pe;let O=[P,L],B=new bl,C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let et=M[Z];return et===void 0&&(et=new Pr,M[Z]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Z){let et=M[Z];return et===void 0&&(et=new Pr,M[Z]=et),et.getGripSpace()},this.getHand=function(Z){let et=M[Z];return et===void 0&&(et=new Pr,M[Z]=et),et.getHandSpace()};function q(Z){let et=A.indexOf(Z.inputSource);if(et===-1)return;let Mt=M[et];Mt!==void 0&&(Mt.update(Z.inputSource,Z.frame,c||a),Mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function j(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",st);for(let Z=0;Z<M.length;Z++){let et=A[Z];et!==null&&(A[Z]=null,M[Z].disconnect(et))}C=null,k=null,m.reset();for(let Z in d)delete d[Z];if(t.setRenderTarget(E),f=null,u=null,p=null,s=null,S=null,re.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),w!==null){let Z=w.camera;Z.fov=w.fov,Z.zoom=w.zoom,Z.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,i.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",j),s.addEventListener("inputsourceschange",st),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Vt=null,vt=null;b.depth&&(vt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Mt=b.stencil?Ts:Ci,Vt=b.stencil?zr:xi);let jt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(jt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new Nn(u.textureWidth,u.textureHeight,{format:ei,type:Un,depthTexture:new xs(u.textureWidth,u.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Mt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Mt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Nn(f.framebufferWidth,f.framebufferHeight,{format:ei,type:Un,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),re.setContext(s),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(Z){for(let et=0;et<Z.removed.length;et++){let Mt=Z.removed[et],Vt=A.indexOf(Mt);Vt>=0&&(A[Vt]=null,M[Vt].disconnect(Mt))}for(let et=0;et<Z.added.length;et++){let Mt=Z.added[et],Vt=A.indexOf(Mt);if(Vt===-1){for(let jt=0;jt<M.length;jt++)if(jt>=A.length){A.push(Mt),Vt=jt;break}else if(A[jt]===null){A[jt]=Mt,Vt=jt;break}if(Vt===-1)break}let vt=M[Vt];vt&&vt.connect(Mt)}}let Y=new I,tt=new I;function nt(Z,et,Mt){Y.setFromMatrixPosition(et.matrixWorld),tt.setFromMatrixPosition(Mt.matrixWorld);let Vt=Y.distanceTo(tt),vt=et.projectionMatrix.elements,jt=Mt.projectionMatrix.elements,Ye=vt[14]/(vt[10]-1),Zt=vt[14]/(vt[10]+1),se=(vt[9]+1)/vt[5],ye=(vt[9]-1)/vt[5],Qt=(vt[8]-1)/vt[0],Re=(jt[8]+1)/jt[0],Qe=Ye*Qt,Dn=Ye*Re,Ce=Vt/(-Qt+Re),Ve=Ce*-Qt;if(et.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ve),Z.translateZ(Ce),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),vt[10]===-1)Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{let U=Ye+Ce,un=Zt+Ce,ue=Qe-Ve,T=Dn+(Vt-Ve),x=se*Zt/un*U,F=ye*Zt/un*U;Z.projectionMatrix.makePerspective(ue,T,x,F,U,un),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Dt(Z,et){et===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(et.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let et=Z.near,Mt=Z.far;m.texture!==null&&(m.depthNear>0&&(et=m.depthNear),m.depthFar>0&&(Mt=m.depthFar)),B.near=L.near=P.near=et,B.far=L.far=P.far=Mt,(C!==B.near||k!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),C=B.near,k=B.far),B.layers.mask=Z.layers.mask|6,P.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;let Vt=Z.parent,vt=B.cameras;Dt(B,Vt);for(let jt=0;jt<vt.length;jt++)Dt(vt[jt],Vt);vt.length===2?nt(B,P,L):B.projectionMatrix.copy(P.projectionMatrix),w===null&&Z.isPerspectiveCamera&&(w={camera:Z,fov:Z.fov,zoom:Z.zoom}),wt(Z,B,Vt)};function wt(Z,et,Mt){Mt===null?Z.matrix.copy(et.matrixWorld):(Z.matrix.copy(Mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(et.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(et.projectionMatrix),Z.projectionMatrixInverse.copy(et.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Tr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(Z){return d[Z]};let _e=null;function ee(Z,et){if(h=et.getViewerPose(c||a),g=et,h!==null){let Mt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Vt=!1;Mt.length!==B.cameras.length&&(B.cameras.length=0,Vt=!0);for(let Zt=0;Zt<Mt.length;Zt++){let se=Mt[Zt],ye=null;if(f!==null)ye=f.getViewport(se);else{let Re=p.getViewSubImage(u,se);ye=Re.viewport,Zt===0&&(t.setRenderTargetTextures(S,Re.colorTexture,Re.depthStencilTexture),t.setRenderTarget(S))}let Qt=O[Zt];Qt===void 0&&(Qt=new gn,Qt.layers.enable(Zt),Qt.viewport=new Pe,O[Zt]=Qt),Qt.matrix.fromArray(se.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(se.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(ye.x,ye.y,ye.width,ye.height),Zt===0&&(B.matrix.copy(Qt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Vt===!0&&B.cameras.push(Qt)}let vt=s.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){p=i.getBinding();let Zt=p.getDepthInformation(Mt[0]);Zt&&Zt.isValid&&Zt.texture&&m.init(Zt,s.renderState)}if(vt&&vt.includes("camera-access")&&y){t.state.unbindTexture(),p=i.getBinding();for(let Zt=0;Zt<Mt.length;Zt++){let se=Mt[Zt].camera;if(se){let ye=d[se];ye||(ye=new Ta,d[se]=ye);let Qt=p.getCameraImage(se);ye.sourceTexture=Qt}}}}for(let Mt=0;Mt<M.length;Mt++){let Vt=A[Mt],vt=M[Mt];Vt!==null&&vt!==void 0&&vt.update(Vt,et,c||a)}_e&&_e(Z,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}let re=new Ip;re.setAnimationLoop(ee),this.setAnimationLoop=function(Z){_e=Z},this.dispose=function(){}}},qv=new Me,Fp=new zt;Fp.set(-1,0,0,0,1,0,0,0,1);function Yv(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,gu(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,E,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),p(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&f(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,b,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===En&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===En&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let b=t.get(d),E=b.envMap,S=b.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(qv.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Fp),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=E*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===En&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let b=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Kv(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,M){let A=M.program;i.uniformBlockBinding(S,A)}function c(S,M){let A=s[S.id];A===void 0&&(m(S),A=h(S),s[S.id]=A,S.addEventListener("dispose",b));let R=M.program;i.updateUBOMapping(S,R);let _=t.render.frame;r[S.id]!==_&&(u(S),r[S.id]=_)}function h(S){let M=p();S.__bindingPointIndex=M;let A=n.createBuffer(),R=S.__size,_=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,R,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,A),A}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let M=s[S.id],A=S.uniforms,R=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let _=0,w=A.length;_<w;_++){let P=A[_];if(Array.isArray(P))for(let L=0,O=P.length;L<O;L++)f(P[L],_,L,R);else f(P,_,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,M,A,R){if(y(S,M,A,R)===!0){let _=S.__offset,w=S.value;if(Array.isArray(w)){let P=0;for(let L=0;L<w.length;L++){let O=w[L],B=d(O);g(O,S.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,S.__data)}}function g(S,M,A){typeof S=="number"||typeof S=="boolean"?M[0]=S:S.isMatrix3?(M[0]=S.elements[0],M[1]=S.elements[1],M[2]=S.elements[2],M[3]=0,M[4]=S.elements[3],M[5]=S.elements[4],M[6]=S.elements[5],M[7]=0,M[8]=S.elements[6],M[9]=S.elements[7],M[10]=S.elements[8],M[11]=0):ArrayBuffer.isView(S)?M.set(new S.constructor(S.buffer,S.byteOffset,M.length)):S.toArray(M,A)}function y(S,M,A,R){let _=S.value,w=M+"_"+A;if(R[w]===void 0)return typeof _=="number"||typeof _=="boolean"?R[w]=_:ArrayBuffer.isView(_)?R[w]=_.slice():R[w]=_.clone(),!0;{let P=R[w];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return R[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(S){let M=S.uniforms,A=0,R=16;for(let w=0,P=M.length;w<P;w++){let L=Array.isArray(M[w])?M[w]:[M[w]];for(let O=0,B=L.length;O<B;O++){let C=L[O],k=Array.isArray(C.value)?C.value:[C.value];for(let q=0,j=k.length;q<j;q++){let st=k[q],Y=d(st),tt=A%R,nt=tt%Y.boundary,Dt=tt+nt;A+=nt,Dt!==0&&R-Dt<Y.storage&&(A+=R-Dt),C.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=A,A+=Y.storage}}}let _=A%R;return _>0&&(A+=R-_),S.__size=A,S.__cache={},this}function d(S){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",S),M}function b(S){let M=S.target;M.removeEventListener("dispose",b);let A=a.indexOf(M.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function E(){for(let S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var jv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Di=null;function Zv(){return Di===null&&(Di=new Jo(jv,16,16,Es,yi),Di.name="DFG_LUT",Di.minFilter=cn,Di.magFilter=cn,Di.wrapS=Pi,Di.wrapT=Pi,Di.generateMipmaps=!1,Di.needsUpdate=!0),Di}var xc=class{constructor(t={}){let{canvas:e=np(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Un}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=f,m=new Set([Nl,Dl,Il]),d=new Set([Un,xi,Hr,zr,Pl,Cl]),b=new Uint32Array(4),E=new Int32Array(4),S=new I,M=null,A=null,R=[],_=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,O=null,B=null,C=null,k=null;this._outputColorSpace=mn;let q=0,j=0,st=null,Y=-1,tt=null,nt=new Pe,Dt=new Pe,wt=null,_e=new kt(0),ee=0,re=e.width,Z=e.height,et=1,Mt=null,Vt=null,vt=new Pe(0,0,re,Z),jt=new Pe(0,0,re,Z),Ye=!1,Zt=new Cr,se=!1,ye=!1,Qt=new Me,Re=new I,Qe=new Pe,Dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ce=!1;function Ve(){return st===null?et:1}let U=i;function un(v,D){return e.getContext(v,D)}let ue,T,x,F,V,K,rt,ot,J,$,lt,Rt,dt,ct,Pt,Ft,Wt,N,ht,Q,ut,_t,it;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",le,!1),e.addEventListener("webglcontextcreationerror",hi,!1),U===null){let D="webgl2";if(U=un(D,v),U===null)throw un(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}It()}catch(v){throw e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",hi,!1),Bt("WebGLRenderer: "+v.message),v}function It(){ue=new iy(U),ue.init(),ut=new Gv(U,ue),T=new Y_(U,ue,t,ut),x=new kv(U,ue),T.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),B=U.createFramebuffer(),C=U.createFramebuffer(),k=U.createFramebuffer(),F=new ay(U),V=new Ev,K=new Vv(U,ue,x,V,T,ut,F),rt=new ny(P),ot=new l0(U),_t=new X_(U,ot),J=new sy(U,ot,F,_t),$=new ly(U,J,ot,_t,F),N=new oy(U,T,K),Pt=new K_(V),lt=new Tv(P,rt,ue,T,_t,Pt),Rt=new Yv(P,V),dt=new Pv,ct=new Lv(ue),Wt=new W_(P,rt,x,$,g,l),Ft=new zv(P,$,T),it=new Kv(U,F,T,x),ht=new q_(U,ue,F),Q=new ry(U,ue,F),F.programs=lt.programs,P.capabilities=T,P.extensions=ue,P.properties=V,P.renderLists=dt,P.shadowMap=Ft,P.state=x,P.info=F}y!==Un&&(w=new hy(y,e.width,e.height,o,s,r));let Tt=new Hu(P,U);this.xr=Tt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let v=ue.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ue.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(v){v!==void 0&&(et=v,this.setSize(re,Z,!1))},this.getSize=function(v){return v.set(re,Z)},this.setSize=function(v,D,G=!0){if(Tt.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}re=v,Z=D,e.width=Math.floor(v*et),e.height=Math.floor(D*et),G===!0&&(e.style.width=v+"px",e.style.height=D+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,v,D)},this.getDrawingBufferSize=function(v){return v.set(re*et,Z*et).floor()},this.setDrawingBufferSize=function(v,D,G){re=v,Z=D,et=G,e.width=Math.floor(v*G),e.height=Math.floor(D*G),this.setViewport(0,0,v,D)},this.setEffects=function(v){if(y===Un){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let D=0;D<v.length;D++)if(v[D].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(nt)},this.getViewport=function(v){return v.copy(vt)},this.setViewport=function(v,D,G,H){v.isVector4?vt.set(v.x,v.y,v.z,v.w):vt.set(v,D,G,H),x.viewport(nt.copy(vt).multiplyScalar(et).round())},this.getScissor=function(v){return v.copy(jt)},this.setScissor=function(v,D,G,H){v.isVector4?jt.set(v.x,v.y,v.z,v.w):jt.set(v,D,G,H),x.scissor(Dt.copy(jt).multiplyScalar(et).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(v){x.setScissorTest(Ye=v)},this.setOpaqueSort=function(v){Mt=v},this.setTransparentSort=function(v){Vt=v},this.getClearColor=function(v){return v.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(v=!0,D=!0,G=!0){let H=0;if(v){let z=!1;if(st!==null){let mt=st.texture.format;z=m.has(mt)}if(z){let mt=st.texture.type,St=d.has(mt),pt=Wt.getClearColor(),bt=Wt.getClearAlpha(),Et=pt.r,qt=pt.g,Jt=pt.b;St?(b[0]=Et,b[1]=qt,b[2]=Jt,b[3]=bt,U.clearBufferuiv(U.COLOR,0,b)):(E[0]=Et,E[1]=qt,E[2]=Jt,E[3]=bt,U.clearBufferiv(U.COLOR,0,E))}else H|=U.COLOR_BUFFER_BIT}D&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),O=v},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",le,!1),e.removeEventListener("webglcontextcreationerror",hi,!1),Wt.dispose(),dt.dispose(),ct.dispose(),V.dispose(),rt.dispose(),$.dispose(),_t.dispose(),it.dispose(),lt.dispose(),Tt.dispose(),Tt.removeEventListener("sessionstart",Od),Tt.removeEventListener("sessionend",Fd),Ds.stop()};function ve(v){v.preventDefault(),fu("WebGLRenderer: Context Lost."),L=!0}function le(){fu("WebGLRenderer: Context Restored."),L=!1;let v=F.autoReset,D=Ft.enabled,G=Ft.autoUpdate,H=Ft.needsUpdate,z=Ft.type;It(),F.autoReset=v,Ft.enabled=D,Ft.autoUpdate=G,Ft.needsUpdate=H,Ft.type=z}function hi(v){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ti(v){let D=v.target;D.removeEventListener("dispose",Ti),Zm(D)}function Zm(v){Jm(v),V.remove(v)}function Jm(v){let D=V.get(v).programs;D!==void 0&&(D.forEach(function(G){lt.releaseProgram(G)}),v.isShaderMaterial&&lt.releaseShaderCache(v))}this.renderBufferDirect=function(v,D,G,H,z,mt){D===null&&(D=Dn);let St=z.isMesh&&z.matrixWorld.determinantAffine()<0,pt=tg(v,D,G,H,z);x.setMaterial(H,St);let bt=G.index,Et=1;if(H.wireframe===!0){if(bt=J.getWireframeAttribute(G),bt===void 0)return;Et=2}let qt=G.drawRange,Jt=G.attributes.position,At=qt.start*Et,ce=(qt.start+qt.count)*Et;mt!==null&&(At=Math.max(At,mt.start*Et),ce=Math.min(ce,(mt.start+mt.count)*Et)),bt!==null?(At=Math.max(At,0),ce=Math.min(ce,bt.count)):Jt!=null&&(At=Math.max(At,0),ce=Math.min(ce,Jt.count));let Ge=ce-At;if(Ge<0||Ge===1/0)return;_t.setup(z,H,pt,G,bt);let we,me=ht;if(bt!==null&&(we=ot.get(bt),me=Q,me.setIndex(we)),z.isMesh)H.wireframe===!0?(x.setLineWidth(H.wireframeLinewidth*Ve()),me.setMode(U.LINES)):me.setMode(U.TRIANGLES);else if(z.isLine){let dn=H.linewidth;dn===void 0&&(dn=1),x.setLineWidth(dn*Ve()),z.isLineSegments?me.setMode(U.LINES):z.isLineLoop?me.setMode(U.LINE_LOOP):me.setMode(U.LINE_STRIP)}else z.isPoints?me.setMode(U.POINTS):z.isSprite&&me.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))me.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let dn=z._multiDrawStarts,yt=z._multiDrawCounts,Mn=z._multiDrawCount,ne=bt?ot.get(bt).bytesPerElement:1,Jn=V.get(H).currentProgram.getUniforms();for(let Ei=0;Ei<Mn;Ei++)Jn.setValue(U,"_gl_DrawID",Ei),me.render(dn[Ei]/ne,yt[Ei])}else if(z.isInstancedMesh)me.renderInstances(At,Ge,z.count);else if(G.isInstancedBufferGeometry){let dn=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,yt=Math.min(G.instanceCount,dn);me.renderInstances(At,Ge,yt)}else me.render(At,Ge)};function Ld(v,D,G,H){O!==null&&v.isNodeMaterial&&O.setObject(H,v),se===!0&&Pt.setState(v,G,!1),v.transparent===!0&&v.side===_n&&v.forceSinglePass===!1?(v.side=En,v.needsUpdate=!0,fo(v,D,H),v.side=bs,v.needsUpdate=!0,fo(v,D,H),v.side=_n):fo(v,D,H)}this.compile=function(v,D,G=null){G===null&&(G=v),O!==null&&O.renderStart(v,D,G),A=ct.get(G),A.init(D),_.push(A),G.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(A.pushLight(z),z.castShadow&&A.pushShadow(z))}),v!==G&&v.traverseVisible(function(z){z.isLight&&z.layers.test(D.layers)&&(A.pushLight(z),z.castShadow&&A.pushShadow(z))}),A.setupLights(),O!==null&&O.updateLights(A.state.lightsArray),ye=this.localClippingEnabled,se=Pt.init(this.clippingPlanes,ye),se===!0&&Pt.setGlobalState(this.clippingPlanes,D),O!==null&&Ft.render(A.state.shadowsArray,G,D);let H=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let mt=z.material;if(mt)if(Array.isArray(mt))for(let St=0;St<mt.length;St++){let pt=mt[St];Ld(pt,G,D,z),H.add(pt)}else Ld(mt,G,D,z),H.add(mt)}),A=_.pop(),O!==null&&O.renderEnd(),H},this.compileAsync=function(v,D,G=null){let H=this.compile(v,D,G);return new Promise(z=>{function mt(){if(H.forEach(function(St){let bt=V.get(St).currentProgram;(bt===void 0||bt.isReady())&&H.delete(St)}),H.size===0){z(v);return}setTimeout(mt,10)}ue.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let hh=null;function Qm(v){hh&&hh(v)}function Od(){Ds.stop()}function Fd(){Ds.start()}let Ds=new Ip;Ds.setAnimationLoop(Qm),typeof self<"u"&&Ds.setContext(self),this.setAnimationLoop=function(v){hh=v,Tt.setAnimationLoop(v),v===null?Ds.stop():Ds.start()},Tt.addEventListener("sessionstart",Od),Tt.addEventListener("sessionend",Fd),this.render=function(v,D){if(D!==void 0&&D.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(v,D);let G=Tt.enabled===!0&&Tt.isPresenting===!0,H=w!==null&&(st===null||G)&&w.begin(P,st);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Tt.enabled===!0&&Tt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Tt.cameraAutoUpdate===!0&&Tt.updateCamera(D),D=Tt.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,D,st),A=ct.get(v,_.length),A.init(D),A.state.textureUnits=K.getTextureUnits(),_.push(A),Qt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Zt.setFromProjectionMatrix(Qt,pi,D.reversedDepth),ye=this.localClippingEnabled,se=Pt.init(this.clippingPlanes,ye),M=dt.get(v,R.length),M.init(),R.push(M),Tt.enabled===!0&&Tt.isPresenting===!0){let St=P.xr.getDepthSensingMesh();St!==null&&uh(St,D,-1/0,P.sortObjects)}uh(v,D,0,P.sortObjects),M.finish(),O!==null&&O.updateLights(A.state.lightsArray),P.sortObjects===!0&&M.sort(Mt,Vt),Ce=Tt.enabled===!1||Tt.isPresenting===!1||Tt.hasDepthSensing()===!1,Ce&&Wt.addToRenderList(M,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Pt.beginShadows();let z=A.state.shadowsArray;if(Ft.render(z,v,D),se===!0&&Pt.endShadows(),(H&&w.hasRenderPass())===!1){let St=M.opaque,pt=M.transmissive;if(A.setupLights(),D.isArrayCamera){let bt=D.cameras;if(pt.length>0)for(let Et=0,qt=bt.length;Et<qt;Et++){let Jt=bt[Et];Hd(St,pt,v,Jt)}Ce&&Wt.render(v);for(let Et=0,qt=bt.length;Et<qt;Et++){let Jt=bt[Et];Bd(M,v,Jt,Jt.viewport)}}else pt.length>0&&Hd(St,pt,v,D),Ce&&Wt.render(v),Bd(M,v,D)}st!==null&&j===0&&(K.updateMultisampleRenderTarget(st),K.updateRenderTargetMipmap(st)),H&&w.end(P),v.isScene===!0&&v.onAfterRender(P,v,D),_t.resetDefaultState(),Y=-1,tt=null,_.pop(),_.length>0?(A=_[_.length-1],K.setTextureUnits(A.state.textureUnits),se===!0&&Pt.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,O!==null&&O.renderEnd()};function uh(v,D,G,H){if(v.visible===!1)return;if(v.layers.test(D.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(D);else if(v.isLightProbeGrid)A.pushLightProbeGrid(v);else if(v.isLight)A.pushLight(v),v.castShadow&&A.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(Zt)){H&&Qe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Qt);let St=$.update(v),pt=v.material;pt.visible&&M.push(v,St,pt,G,Qe.z,null,D)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(Zt))){let St=$.update(v),pt=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Qe.copy(v.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Qe.copy(St.boundingSphere.center)),Qe.applyMatrix4(v.matrixWorld).applyMatrix4(Qt)),Array.isArray(pt)){let bt=St.groups;for(let Et=0,qt=bt.length;Et<qt;Et++){let Jt=bt[Et],At=pt[Jt.materialIndex];At&&At.visible&&M.push(v,St,At,G,Qe.z,Jt,D)}}else pt.visible&&M.push(v,St,pt,G,Qe.z,null,D)}}let mt=v.children;for(let St=0,pt=mt.length;St<pt;St++)uh(mt[St],D,G,H)}function Bd(v,D,G,H){let{opaque:z,transmissive:mt,transparent:St}=v;A.setupLightsView(G),se===!0&&Pt.setGlobalState(P.clippingPlanes,G),H&&x.viewport(nt.copy(H)),z.length>0&&uo(z,D,G),mt.length>0&&uo(mt,D,G),St.length>0&&uo(St,D,G),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Hd(v,D,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){let At=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new Nn(1,1,{generateMipmaps:!0,type:At?yi:Un,minFilter:ws,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$t.workingColorSpace})}let mt=A.state.transmissionRenderTarget[H.id],St=H.viewport||nt;mt.setSize(St.z*P.transmissionResolutionScale,St.w*P.transmissionResolutionScale);let pt=P.getRenderTarget(),bt=P.getActiveCubeFace(),Et=P.getActiveMipmapLevel();P.setRenderTarget(mt),P.getClearColor(_e),ee=P.getClearAlpha(),ee<1&&P.setClearColor(16777215,.5),P.clear(),Ce&&Wt.render(G);let qt=P.toneMapping;P.toneMapping=gi;let Jt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),se===!0&&Pt.setGlobalState(P.clippingPlanes,H),uo(v,G,H),K.updateMultisampleRenderTarget(mt),K.updateRenderTargetMipmap(mt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let ce=0,Ge=D.length;ce<Ge;ce++){let we=D[ce],{object:me,geometry:dn,material:yt,group:Mn}=we;if(yt.side===_n&&me.layers.test(H.layers)){let ne=yt.side;yt.side=En,yt.needsUpdate=!0,zd(me,G,H,dn,yt,Mn),yt.side=ne,yt.needsUpdate=!0,At=!0}}At===!0&&(K.updateMultisampleRenderTarget(mt),K.updateRenderTargetMipmap(mt))}P.setRenderTarget(pt,bt,Et),P.setClearColor(_e,ee),Jt!==void 0&&(H.viewport=Jt),P.toneMapping=qt}function uo(v,D,G){let H=D.isScene===!0?D.overrideMaterial:null;for(let z=0,mt=v.length;z<mt;z++){let St=v[z],{object:pt,geometry:bt,group:Et}=St,qt=St.material;qt.allowOverride===!0&&H!==null&&(qt=H),pt.layers.test(G.layers)&&zd(pt,D,G,bt,qt,Et)}}function zd(v,D,G,H,z,mt){O!==null&&z.isNodeMaterial&&O.setObject(v,z),v.onBeforeRender(P,D,G,H,z,mt),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(P,D,G,H,v,mt),z.transparent===!0&&z.side===_n&&z.forceSinglePass===!1?(z.side=En,z.needsUpdate=!0,P.renderBufferDirect(G,D,H,z,v,mt),z.side=bs,z.needsUpdate=!0,P.renderBufferDirect(G,D,H,z,v,mt),z.side=_n):P.renderBufferDirect(G,D,H,z,v,mt),v.onAfterRender(P,D,G,H,z,mt)}function fo(v,D,G){D.isScene!==!0&&(D=Dn);let H=V.get(v),z=A.state.lights,mt=A.state.shadowsArray,St=z.state.version,pt=lt.getParameters(v,z.state,mt,D,G,A.state.lightProbeGridArray),bt=lt.getProgramCacheKey(pt),Et=H.programs;H.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?D.environment:null,H.fog=D.fog;let qt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;H.envMap=rt.get(v.envMap||H.environment,qt),H.envMapRotation=H.environment!==null&&v.envMap===null?D.environmentRotation:v.envMapRotation,Et===void 0&&(v.addEventListener("dispose",Ti),Et=new Map,H.programs=Et);let Jt=Et.get(bt);if(Jt!==void 0){if(H.currentProgram===Jt&&H.lightsStateVersion===St)return Vd(v,pt),Jt}else pt.uniforms=lt.getUniforms(v),O!==null&&v.isNodeMaterial&&O.build(v,G,pt),v.onBeforeCompile(pt,P),Jt=lt.acquireProgram(pt,bt),Et.set(bt,Jt),H.uniforms=pt.uniforms;let At=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(At.clippingPlanes=Pt.uniform),Vd(v,pt),H.needsLights=ng(v),H.lightsStateVersion=St,H.needsLights&&(At.ambientLightColor.value=z.state.ambient,At.lightProbe.value=z.state.probe,At.sunLights.value=z.state.sun,At.sunLightShadows.value=z.state.sunShadow,At.directionalLights.value=z.state.directional,At.directionalLightShadows.value=z.state.directionalShadow,At.spotLights.value=z.state.spot,At.spotLightShadows.value=z.state.spotShadow,At.rectAreaLights.value=z.state.rectArea,At.ltc_1.value=z.state.rectAreaLTC1,At.ltc_2.value=z.state.rectAreaLTC2,At.pointLights.value=z.state.point,At.pointLightShadows.value=z.state.pointShadow,At.hemisphereLights.value=z.state.hemi,At.sunShadowMatrix.value=z.state.sunShadowMatrix,At.sunShadowCascade.value=z.state.sunShadowCascade,At.directionalShadowMatrix.value=z.state.directionalShadowMatrix,At.spotLightMatrix.value=z.state.spotLightMatrix,At.spotLightMap.value=z.state.spotLightMap,At.pointShadowMatrix.value=z.state.pointShadowMatrix),H.lightProbeGrid=A.state.lightProbeGridArray.length>0,H.currentProgram=Jt,H.uniformsList=null,Jt}function kd(v){if(v.uniformsList===null){let D=v.currentProgram.getUniforms();v.uniformsList=Wr.seqWithValue(D.seq,v.uniforms)}return v.uniformsList}function Vd(v,D){let G=V.get(v);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function $m(v,D){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;S.setFromMatrixPosition(D.matrixWorld);for(let G=0,H=v.length;G<H;G++){let z=v[G];if(z.texture!==null&&z.boundingBox.containsPoint(S))return z}return null}function tg(v,D,G,H,z){D.isScene!==!0&&(D=Dn),K.resetTextureUnits();let mt=D.fog,St=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?D.environment:null,pt=st===null?P.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:$t.workingColorSpace,bt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Et=rt.get(H.envMap||St,bt),qt=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Jt=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),At=!!G.morphAttributes.position,ce=!!G.morphAttributes.normal,Ge=!!G.morphAttributes.color,we=gi;H.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(we=P.toneMapping);let me=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,dn=me!==void 0?me.length:0,yt=V.get(H),Mn=A.state.lights;if(se===!0&&(ye===!0||v!==tt)){let Se=v===tt&&H.id===Y;Pt.setState(H,v,Se)}let ne=!1;H.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Mn.state.version||yt.outputColorSpace!==pt||z.isBatchedMesh&&yt.batching===!1||!z.isBatchedMesh&&yt.batching===!0||z.isBatchedMesh&&yt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&yt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&yt.instancing===!1||!z.isInstancedMesh&&yt.instancing===!0||z.isSkinnedMesh&&yt.skinning===!1||!z.isSkinnedMesh&&yt.skinning===!0||z.isInstancedMesh&&yt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&yt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&yt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&yt.instancingMorph===!1&&z.morphTexture!==null||yt.envMap!==Et||H.fog===!0&&yt.fog!==mt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==Pt.numPlanes||yt.numIntersection!==Pt.numIntersection)||yt.vertexAlphas!==qt||yt.vertexTangents!==Jt||yt.morphTargets!==At||yt.morphNormals!==ce||yt.morphColors!==Ge||yt.toneMapping!==we||yt.morphTargetsCount!==dn||!!yt.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(ne=!0):(ne=!0,yt.__version=H.version);let Jn=yt.currentProgram;ne===!0&&(Jn=fo(H,D,z),O&&H.isNodeMaterial&&O.onUpdateProgram(H,Jn,yt));let Ei=!1,as=!1,ar=!1,pe=Jn.getUniforms(),He=yt.uniforms;if(x.useProgram(Jn.program)&&(Ei=!0,as=!0,ar=!0),H.id!==Y&&(Y=H.id,as=!0),yt.needsLights){let Se=$m(A.state.lightProbeGridArray,z);yt.lightProbeGrid!==Se&&(yt.lightProbeGrid=Se,as=!0)}if(Ei||tt!==v){x.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),pe.setValue(U,"projectionMatrix",v.projectionMatrix),pe.setValue(U,"viewMatrix",v.matrixWorldInverse);let ls=pe.map.cameraPosition;ls!==void 0&&ls.setValue(U,Re.setFromMatrixPosition(v.matrixWorld)),T.logarithmicDepthBuffer&&pe.setValue(U,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&pe.setValue(U,"isOrthographic",v.isOrthographicCamera===!0),tt!==v&&(tt=v,as=!0,ar=!0)}if(yt.needsLights&&(Mn.state.sunShadowMap.length>0&&pe.setValue(U,"sunShadowMap",Mn.state.sunShadowMap,K),Mn.state.directionalShadowMap.length>0&&pe.setValue(U,"directionalShadowMap",Mn.state.directionalShadowMap,K),Mn.state.spotShadowMap.length>0&&pe.setValue(U,"spotShadowMap",Mn.state.spotShadowMap,K),Mn.state.pointShadowMap.length>0&&pe.setValue(U,"pointShadowMap",Mn.state.pointShadowMap,K)),z.isSkinnedMesh){pe.setOptional(U,z,"bindMatrix"),pe.setOptional(U,z,"bindMatrixInverse");let Se=z.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),pe.setValue(U,"boneTexture",Se.boneTexture,K))}z.isBatchedMesh&&(pe.setOptional(U,z,"batchingTexture"),pe.setValue(U,"batchingTexture",z._matricesTexture,K),pe.setOptional(U,z,"batchingIdTexture"),pe.setValue(U,"batchingIdTexture",z._indirectTexture,K),pe.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&pe.setValue(U,"batchingColorTexture",z._colorsTexture,K));let os=G.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0)&&N.update(z,G,Jn),(as||yt.receiveShadow!==z.receiveShadow)&&(yt.receiveShadow=z.receiveShadow,pe.setValue(U,"receiveShadow",z.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&D.environment!==null&&(He.envMapIntensity.value=D.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=Zv()),as){if(pe.setValue(U,"toneMappingExposure",P.toneMappingExposure),yt.needsLights&&eg(He,ar),mt&&H.fog===!0&&Rt.refreshFogUniforms(He,mt),Rt.refreshMaterialUniforms(He,H,et,Z,A.state.transmissionRenderTarget[v.id]),yt.needsLights&&yt.lightProbeGrid){let Se=yt.lightProbeGrid;He.probesSH.value=Se.texture,He.probesMin.value.copy(Se.boundingBox.min),He.probesMax.value.copy(Se.boundingBox.max),He.probesResolution.value.copy(Se.resolution)}Wr.upload(U,kd(yt),He,K)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Wr.upload(U,kd(yt),He,K),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&pe.setValue(U,"center",z.center),pe.setValue(U,"modelViewMatrix",z.modelViewMatrix),pe.setValue(U,"normalMatrix",z.normalMatrix),pe.setValue(U,"modelMatrix",z.matrixWorld),H.uniformsGroups!==void 0){let Se=H.uniformsGroups;for(let ls=0,or=Se.length;ls<or;ls++){let Wd=Se[ls];it.update(Wd,Jn),it.bind(Wd,Jn)}}return Jn}function eg(v,D){v.ambientLightColor.needsUpdate=D,v.lightProbe.needsUpdate=D,v.sunLights.needsUpdate=D,v.sunLightShadows.needsUpdate=D,v.directionalLights.needsUpdate=D,v.directionalLightShadows.needsUpdate=D,v.pointLights.needsUpdate=D,v.pointLightShadows.needsUpdate=D,v.spotLights.needsUpdate=D,v.spotLightShadows.needsUpdate=D,v.rectAreaLights.needsUpdate=D,v.hemisphereLights.needsUpdate=D}function ng(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(v,D,G){let H=V.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),V.get(v.texture).__webglTexture=D,V.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:G,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,D){let G=V.get(v);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(v,D=0,G=0){st=v,q=D,j=G;let H=null,z=!1,mt=!1;if(v){let pt=V.get(v);if(pt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(U.FRAMEBUFFER,pt.__webglFramebuffer),nt.copy(v.viewport),Dt.copy(v.scissor),wt=v.scissorTest,x.viewport(nt),x.scissor(Dt),x.setScissorTest(wt),Y=-1;return}else if(pt.__webglFramebuffer===void 0)K.setupRenderTarget(v);else if(pt.__hasExternalTextures)K.rebindTextures(v,V.get(v.texture).__webglTexture,V.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let qt=v.depthTexture;if(pt.__boundDepthTexture!==qt){if(qt!==null&&V.has(qt)&&(v.width!==qt.image.width||v.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(v)}}let bt=v.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(mt=!0);let Et=V.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Et[D])?H=Et[D][G]:H=Et[D],z=!0):v.samples>0&&K.useMultisampledRTT(v)===!1?H=V.get(v).__webglMultisampledFramebuffer:Array.isArray(Et)?H=Et[G]:H=Et,nt.copy(v.viewport),Dt.copy(v.scissor),wt=v.scissorTest}else nt.copy(vt).multiplyScalar(et).floor(),Dt.copy(jt).multiplyScalar(et).floor(),wt=Ye;if(G!==0&&(H=B),x.bindFramebuffer(U.FRAMEBUFFER,H)&&x.drawBuffers(v,H),x.viewport(nt),x.scissor(Dt),x.setScissorTest(wt),z){let pt=V.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,pt.__webglTexture,G)}else if(mt){let pt=D;for(let bt=0;bt<v.textures.length;bt++){let Et=V.get(v.textures[bt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+bt,Et.__webglTexture,G,pt)}}else if(v!==null&&G!==0){let pt=V.get(v.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pt.__webglTexture,G)}Y=-1};function Gd(v){let D=V.get(v);return(D.__readFormat!==v.format||D.__readType!==v.type)&&(D.__readFormat=v.format,D.__readType=v.type,D.__formatReadable=T.textureFormatReadable(v.format),D.__typeReadable=T.textureTypeReadable(v.type)),D}this.readRenderTargetPixels=function(v,D,G,H,z,mt,St,pt=0){if(!(v&&v.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=V.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&St!==void 0&&(bt=bt[St]),bt){x.bindFramebuffer(U.FRAMEBUFFER,bt);try{let Et=v.textures[pt],qt=Et.format,Jt=Et.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pt);let At=Gd(Et);if(At.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=v.width-H&&G>=0&&G<=v.height-z&&U.readPixels(D,G,H,z,ut.convert(qt),ut.convert(Jt),mt)}finally{let Et=st!==null?V.get(st).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(v,D,G,H,z,mt,St,pt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=V.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&St!==void 0&&(bt=bt[St]),bt)if(D>=0&&D<=v.width-H&&G>=0&&G<=v.height-z){x.bindFramebuffer(U.FRAMEBUFFER,bt);let Et=v.textures[pt],qt=Et.format,Jt=Et.type;v.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pt);let At=Gd(Et);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ce=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ce),U.bufferData(U.PIXEL_PACK_BUFFER,mt.byteLength,U.STREAM_READ),U.readPixels(D,G,H,z,ut.convert(qt),ut.convert(Jt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Ge=st!==null?V.get(st).__webglFramebuffer:null;x.bindFramebuffer(U.FRAMEBUFFER,Ge);let we=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await sp(U,we,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ce),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,mt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ce),U.deleteSync(we),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,D=null,G=0){let H=Math.pow(2,-G),z=Math.floor(v.image.width*H),mt=Math.floor(v.image.height*H),St=D!==null?D.x:0,pt=D!==null?D.y:0;K.setTexture2D(v,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,St,pt,z,mt),x.unbindTexture()},this.copyTextureToTexture=function(v,D,G=null,H=null,z=0,mt=0){let St,pt,bt,Et,qt,Jt,At,ce,Ge,we=v.isCompressedTexture?v.mipmaps[mt]:v.image;if(G!==null)St=G.max.x-G.min.x,pt=G.max.y-G.min.y,bt=G.isBox3?G.max.z-G.min.z:1,Et=G.min.x,qt=G.min.y,Jt=G.isBox3?G.min.z:0;else{let He=Math.pow(2,-z);St=Math.floor(we.width*He),pt=Math.floor(we.height*He),v.isDataArrayTexture?bt=we.depth:v.isData3DTexture?bt=Math.floor(we.depth*He):bt=1,Et=0,qt=0,Jt=0}H!==null?(At=H.x,ce=H.y,Ge=H.z):(At=0,ce=0,Ge=0);let me=ut.convert(D.format),dn=ut.convert(D.type),yt;D.isData3DTexture?(K.setTexture3D(D,0),yt=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(K.setTexture2DArray(D,0),yt=U.TEXTURE_2D_ARRAY):(K.setTexture2D(D,0),yt=U.TEXTURE_2D),x.activeTexture(U.TEXTURE0),x.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),x.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),x.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let Mn=x.getParameter(U.UNPACK_ROW_LENGTH),ne=x.getParameter(U.UNPACK_IMAGE_HEIGHT),Jn=x.getParameter(U.UNPACK_SKIP_PIXELS),Ei=x.getParameter(U.UNPACK_SKIP_ROWS),as=x.getParameter(U.UNPACK_SKIP_IMAGES);x.pixelStorei(U.UNPACK_ROW_LENGTH,we.width),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,we.height),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Et),x.pixelStorei(U.UNPACK_SKIP_ROWS,qt),x.pixelStorei(U.UNPACK_SKIP_IMAGES,Jt);let ar=v.isDataArrayTexture||v.isData3DTexture,pe=D.isDataArrayTexture||D.isData3DTexture;if(v.isDepthTexture){let He=V.get(v),os=V.get(D),Se=V.get(He.__renderTarget),ls=V.get(os.__renderTarget);x.bindFramebuffer(U.READ_FRAMEBUFFER,Se.__webglFramebuffer),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,ls.__webglFramebuffer);for(let or=0;or<bt;or++)ar&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(v).__webglTexture,z,Jt+or),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(D).__webglTexture,mt,Ge+or)),U.blitFramebuffer(Et,qt,St,pt,At,ce,St,pt,U.DEPTH_BUFFER_BIT,U.NEAREST);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||V.has(v)){let He=V.get(v),os=V.get(D);x.bindFramebuffer(U.READ_FRAMEBUFFER,C),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,k);for(let Se=0;Se<bt;Se++)ar?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,He.__webglTexture,z,Jt+Se):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,He.__webglTexture,z),pe?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,os.__webglTexture,mt,Ge+Se):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,os.__webglTexture,mt),z!==0?U.blitFramebuffer(Et,qt,St,pt,At,ce,St,pt,U.COLOR_BUFFER_BIT,U.NEAREST):pe?U.copyTexSubImage3D(yt,mt,At,ce,Ge+Se,Et,qt,St,pt):U.copyTexSubImage2D(yt,mt,At,ce,Et,qt,St,pt);x.bindFramebuffer(U.READ_FRAMEBUFFER,null),x.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else pe?v.isDataTexture||v.isData3DTexture?U.texSubImage3D(yt,mt,At,ce,Ge,St,pt,bt,me,dn,we.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(yt,mt,At,ce,Ge,St,pt,bt,me,we.data):U.texSubImage3D(yt,mt,At,ce,Ge,St,pt,bt,me,dn,we):v.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,mt,At,ce,St,pt,me,dn,we.data):v.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,mt,At,ce,we.width,we.height,me,we.data):U.texSubImage2D(U.TEXTURE_2D,mt,At,ce,St,pt,me,dn,we);x.pixelStorei(U.UNPACK_ROW_LENGTH,Mn),x.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ne),x.pixelStorei(U.UNPACK_SKIP_PIXELS,Jn),x.pixelStorei(U.UNPACK_SKIP_ROWS,Ei),x.pixelStorei(U.UNPACK_SKIP_IMAGES,as),mt===0&&D.generateMipmaps&&U.generateMipmap(yt),x.unbindTexture()},this.initRenderTarget=function(v){V.get(v).__webglFramebuffer===void 0&&K.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?K.setTextureCube(v,0):v.isData3DTexture?K.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?K.setTexture2DArray(v,0):K.setTexture2D(v,0),x.unbindTexture()},this.resetState=function(){q=0,j=0,st=null,x.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=$t._getDrawingBufferColorSpace(t),e.unpackColorSpace=$t._getUnpackColorSpace()}};var Bp={type:"change"},ku={type:"start"},zp={type:"end"},vc=new ms,Hp=new An,Qv=Math.cos(70*ni.DEG2RAD),Ze=new I,Ln=2*Math.PI,fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zu=1e-6,Sc=class extends Fa{constructor(t,e=null){super(t,e),this.state=fe.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xn.ROTATE,MIDDLE:xn.DOLLY,RIGHT:xn.PAN},this.touches={ONE:Ms.ROTATE,TWO:Ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new ze,this._lastTargetPosition=new I,this._quat=new ze().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ss,this._sphericalDelta=new Ss,this._scale=1,this._panOffset=new I,this._rotateStart=new xt,this._rotateEnd=new xt,this._rotateDelta=new xt,this._panStart=new xt,this._panEnd=new xt,this._panDelta=new xt,this._dollyStart=new xt,this._dollyEnd=new xt,this._dollyDelta=new xt,this._dollyDirection=new I,this._mouse=new xt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=tS.bind(this),this._onPointerDown=$v.bind(this),this._onPointerUp=eS.bind(this),this._onContextMenu=lS.bind(this),this._onMouseWheel=sS.bind(this),this._onKeyDown=rS.bind(this),this._onTouchStart=aS.bind(this),this._onTouchMove=oS.bind(this),this._onMouseDown=nS.bind(this),this._onMouseMove=iS.bind(this),this._interceptControlDown=cS.bind(this),this._interceptControlUp=hS.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=fe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bp),this.update(),this.state=fe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Ze.copy(e).sub(this.target),Ze.applyQuaternion(this._quat),this._spherical.setFromVector3(Ze),this.autoRotate&&this.state===fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ln:i>Math.PI&&(i-=Ln),s<-Math.PI?s+=Ln:s>Math.PI&&(s-=Ln),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ze.setFromSpherical(this._spherical),Ze.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ze),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ze.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ze.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(vc.origin.copy(this.object.position),vc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(vc.direction))<Qv?this.object.lookAt(this.target):(Hp.setFromNormalAndCoplanarPoint(this.object.up,this.target),vc.intersectPlane(Hp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>zu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zu||this._lastTargetPosition.distanceToSquared(this.target)>zu?(this.dispatchEvent(Bp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ln/60*this.autoRotateSpeed*t:Ln/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ze.setFromMatrixColumn(e,0),Ze.multiplyScalar(-t),this._panOffset.add(Ze)}_panUp(t,e){this.screenSpacePanning===!0?Ze.setFromMatrixColumn(e,1):(Ze.setFromMatrixColumn(e,0),Ze.crossVectors(this.object.up,Ze)),Ze.multiplyScalar(t),this._panOffset.add(Ze)}_pan(t,e){let i=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ze.copy(s).sub(this.target);let r=Ze.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ln*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Ln*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ln*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new xt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function $v(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function tS(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function eS(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(zp),this.state=fe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function nS(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case xn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=fe.DOLLY;break;case xn.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=fe.ROTATE}break;case xn.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=fe.PAN}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(ku)}function iS(n){switch(this.state){case fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function sS(n){this.enabled===!1||this.enableZoom===!1||this.state!==fe.NONE||(n.preventDefault(),this.dispatchEvent(ku),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(zp))}function rS(n){this.enabled!==!1&&this._handleKeyDown(n)}function aS(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case Ms.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=fe.TOUCH_ROTATE;break;case Ms.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=fe.TOUCH_PAN;break;default:this.state=fe.NONE}break;case 2:switch(this.touches.TWO){case Ms.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=fe.TOUCH_DOLLY_PAN;break;case Ms.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=fe.TOUCH_DOLLY_ROTATE;break;default:this.state=fe.NONE}break;default:this.state=fe.NONE}this.state!==fe.NONE&&this.dispatchEvent(ku)}function oS(n){switch(this._trackPointer(n),this.state){case fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=fe.NONE}}function lS(n){this.enabled!==!1&&n.preventDefault()}function cS(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function hS(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var oe=Object.freeze([{x:1,y:566},{x:6,y:482},{x:12,y:411}].map(Object.freeze)),ae=Object.freeze({w:-10,b:550}),si=Object.freeze({w:5,b:580}),ji=Object.freeze({w:1/288,b:.5}),Vw=Object.freeze({months:12,rate:.5}),Qa=Object.freeze({w:Object.freeze([-25,8]),b:Object.freeze([430,650])}),Zi=80,Vp=57,ie=Object.freeze({surface:21,demoW:26,demoB:32,prepare:38,descent:41,firstStep:44,secondStep:45.5,thirdStep:47,settled:54}),Vu=Object.freeze([{id:"w",label:"W\uB9CC",start:ie.demoW,end:ie.demoB},{id:"b",label:"b\uB9CC",start:ie.demoB,end:ie.prepare}].map(Object.freeze)),Lt=(n,t=0,e=1)=>Math.max(t,Math.min(e,n)),Ie=n=>{let t=Lt(n);return t*t*(3-2*t)},ii=(n,t,e)=>n+(t-n)*Lt(e),Rn=(n,t,e)=>Ie((n-t)/(e-t));function Yn(n,t){return oe.reduce((e,i)=>e+(n*i.x+t-i.y)**2,0)/oe.length}function Yr(n,t){let e=0,i=0;for(let s of oe){let r=n*s.x+t-s.y;e+=2*s.x*r/oe.length,i+=2*r/oe.length}return{w:e,b:i}}function Gu(n,t){let e=Yr(n,t);return{w:n-ji.w*e.w,b:t-ji.b*e.b}}function uS(n=si,t=Zi){let e=[{w:n.w,b:n.b}];for(let i=0;i<t;i++){let s=e[e.length-1];e.push(Gu(s.w,s.b))}return e}var Wu=oe.reduce((n,t)=>n+t.x,0)/oe.length,Gp=oe.reduce((n,t)=>n+t.y,0)/oe.length,dS=oe.reduce((n,t)=>n+(t.x-Wu)**2,0),fS=oe.reduce((n,t)=>n+(t.x-Wu)*(t.y-Gp),0),kp=fS/dS,$a=Object.freeze({w:kp,b:Gp-kp*Wu}),Mc=Object.freeze(uS().map(Object.freeze)),qr=Object.freeze([{id:"prediction",label:"\uC608\uCE21\uC120",start:0,end:9,title:"\uD558\uB098\uC758 \uC2DD\uC774 \uB9CC\uB4DC\uB294 \uC9C1\uC120",caption:"W\uB294 \uAE30\uC6B8\uAE30\uB97C, b\uB294 \uC9C1\uC120\uC758 \uB192\uC774\uB97C \uBC14\uAFC9\uB2C8\uB2E4."},{id:"residuals",label:"\uC624\uCC28\uC640 MSE",start:9,end:21,title:"\uC138 \uC608\uCE21\uC758 \uC624\uCC28\uB97C \uD558\uB098\uC758 \uAC12\uC73C\uB85C",caption:"\uC138 \uC624\uCC28\uB97C \uC81C\uACF1\uD574 \uD3C9\uADE0 \uB0B4\uBA74 \uC774 \uC9C1\uC120\uC758 MSE\uAC00 \uB429\uB2C8\uB2E4."},{id:"surface",label:"\uC190\uC2E4 \uACE1\uBA74",start:ie.surface,end:ie.descent,title:"\uC9C1\uC120 \uD558\uB098\uAC00 \uACE1\uBA74 \uC704 \uC810 \uD558\uB098\uB85C",caption:"W\xB7b\uAC00 \uC815\uD574\uC9C0\uBA74, \uADF8 \uC9C1\uC120\uC758 MSE\uAC00 \uACE1\uBA74\uC758 \uB192\uC774\uAC00 \uB429\uB2C8\uB2E4."},{id:"descent",label:"\uACBD\uC0AC\uD558\uAC15",start:ie.descent,end:Vp,title:"\uC190\uC2E4\uC774 \uC904\uC5B4\uB4DC\uB294 \uCABD\uC73C\uB85C \uC870\uC815\uD558\uAE30",caption:"\uACE1\uBA74 \uC704\uC758 W\xB7b\uB97C \uAC31\uC2E0\uD558\uBA74 \uC608\uCE21\uC120\uACFC \uC624\uCC28\uB3C4 \uD568\uAED8 \uBC14\uB01D\uB2C8\uB2E4."}].map(Object.freeze));function pS(n){return n<=ie.descent?0:n<ie.firstStep?Rn(n,ie.descent,ie.firstStep):n<ie.secondStep?1+Rn(n,ie.firstStep,ie.secondStep):n<ie.thirdStep?2+Rn(n,ie.secondStep,ie.thirdStep):n<ie.settled?3+77*Rn(n,ie.thirdStep,ie.settled):Zi}function mS(n){return n<1?"6\uAC1C\uC6D4\uC758 \uC608\uCE21\uC740 490\uB2EC\uB7EC. \uC774 \uAC12\uC740 \uC9C1\uC120 \uC704 \uD55C \uC810\uC785\uB2C8\uB2E4.":n<3?"W\uB97C \uBC14\uAFB8\uBA74, \uAC19\uC740 \uAE30\uAC04\uC5D0 \uB300\uD55C \uC608\uCE21\uC774 \uAE30\uC6B8\uAE30\uB97C \uB530\uB77C \uB2EC\uB77C\uC9D1\uB2C8\uB2E4.":n<5?"b\uB97C \uBC14\uAFB8\uBA74 \uC9C1\uC120 \uC804\uCCB4\uAC00 \uC704\uC544\uB798\uB85C \uC6C0\uC9C1\uC785\uB2C8\uB2E4.":n<9?"W = \u221210, b = 550\uC73C\uB85C \uB3CC\uC544\uC640 \uC2E4\uC81C \uAC00\uACA9\uACFC \uBE44\uAD50\uD569\uB2C8\uB2E4.":n<13?"\uC608\uCE21\uACFC \uC2E4\uC81C \uAC00\uACA9\uC758 \uCC28\uC774\uB294 \u22121, +8, \u221211\uB2EC\uB7EC\uC785\uB2C8\uB2E4.":n<17?"\uAC01 \uC624\uCC28\uB97C \uC81C\uACF1\uD558\uBA74 1, 64, 121. \uD070 \uC624\uCC28\uAC00 \uB354 \uD06C\uAC8C \uBC18\uC601\uB429\uB2C8\uB2E4.":n<21?"MSE = (1 + 64 + 121) \xF7 3 = 62\uB2EC\uB7EC\xB2. \uC774 \uC9C1\uC120\uC758 \uC624\uCC28\uB97C \uC218 \uD558\uB098\uB85C \uB098\uD0C0\uB0C5\uB2C8\uB2E4.":n<ie.demoW?"W\xB7b\uAC00 \uC815\uD574\uC9C0\uBA74 \uC608\uCE21\uC120 \uD558\uB098\uC640 MSE \uB192\uC774 \uD558\uB098\uAC00 \uC815\uD574\uC9D1\uB2C8\uB2E4.":n<ie.demoB?"\uC9C1\uC120\uC740 \uC808\uD3B8\uC744 \uC911\uC2EC\uC73C\uB85C \uAE30\uC6B8\uACE0, \uACE1\uBA74\uC758 \uC810\uC740 \uBE68\uAC04 W \uACBD\uB85C\uB97C \uB530\uB77C \uC6C0\uC9C1\uC785\uB2C8\uB2E4.":n<ie.prepare?"\uC9C1\uC120\uC740 \uD3C9\uD589 \uC774\uB3D9\uD558\uACE0, \uACE1\uBA74\uC758 \uC810\uC740 \uD30C\uB780 b \uACBD\uB85C\uB97C \uB530\uB77C \uC6C0\uC9C1\uC785\uB2C8\uB2E4.":n<ie.descent?"\uD559\uC2B5 \uC2DC\uC791\uAC12 W = 5, b = 580\uC744 \uC900\uBE44\uD569\uB2C8\uB2E4.":n<ie.firstStep?"\uAC19\uC740 \uC2DC\uC791\uC810\uC5D0\uC11C \uAD6C\uD55C \uB450 \uAE30\uC6B8\uAE30\uB85C W\uC640 b\uB97C \uD55C \uBC88 \uAC31\uC2E0\uD569\uB2C8\uB2E4.":n<ie.thirdStep?"\uAC31\uC2E0\uC744 \uBC18\uBCF5\uD558\uBA74 \uACE1\uBA74\uC758 \uC810, \uAC00\uACA9 \uC9C1\uC120, \uC138 \uC624\uCC28\uAC00 \uD568\uAED8 \uC6C0\uC9C1\uC785\uB2C8\uB2E4.":n<ie.settled?"\uAC31\uC2E0\uD560 \uB54C\uB9C8\uB2E4 MSE\uAC00 \uC904\uC5B4\uB4E4\uBA70, W\uC640 b\uAC00 \uB0AE\uC740 \uACE8\uC9DC\uAE30\uB85C \uBAA8\uC785\uB2C8\uB2E4.":"80\uD68C \uAC31\uC2E0 \uD6C4 MSE\uB294 \uC57D 40.66\uB2EC\uB7EC\xB2. \uBAA8\uB4E0 \uC810\uC744 \uC815\uD655\uD788 \uC9C0\uB098\uC9C0 \uC54A\uC544\uB3C4 \uC804\uCCB4 \uC81C\uACF1\uC624\uCC28\uAC00 \uAC00\uC7A5 \uC791\uC740 \uC9C1\uC120\uC744 \uCC3E\uC2B5\uB2C8\uB2E4."}function Wp(n){let t=Lt(Number.isNaN(Number(n))?0:Number(n),0,Vp),e=ae.w,i=ae.b,s=pS(t),r=Vu.find(h=>t>=h.start&&t<h.end),a=r?{axis:r.id,fixed:ae,baseline:ae}:null;if(t<9){e=ii(ae.w,-3,Rn(t,1,3)),i=ii(ae.b,610,Rn(t,3,5));let h=Rn(t,5,7);e=ii(e,ae.w,h),i=ii(i,ae.b,h)}else if(r?.id==="w"){let h=Rn(t,26.6,29),p=Rn(t,29.6,31.6);e=ii(ii(ae.w,5,h),ae.w,p)}else if(r?.id==="b"){let h=Rn(t,32.6,35),p=Rn(t,35.6,37.6);i=ii(ii(ae.b,450,h),ae.b,p)}else if(t>=ie.prepare&&t<ie.descent){let h=Rn(t,ie.prepare,40.5);e=ii(ae.w,si.w,h),i=ii(ae.b,si.b,h)}else if(t>=ie.descent){let h=Math.min(Zi-1,Math.floor(s)),p=s-h;e=ii(Mc[h].w,Mc[h+1].w,p),i=ii(Mc[h].b,Mc[h+1].b,p)}let o=qr.find(h=>t<h.end)||qr[qr.length-1],l=r?.id==="w"?"b\uB294 \uADF8\uB300\uB85C, W\uB9CC \uBC14\uAFB8\uBA74":r?.id==="b"?"W\uB294 \uADF8\uB300\uB85C, b\uB9CC \uBC14\uAFB8\uBA74":o.title,c=6;return{t,w:e,b:i,x:c,y:e*c+i,mse:Yn(e,i),phase:o.id,chapter:o,heading:l,caption:mS(t),iteration:s,parameterDemo:a,reveal:{residuals:Rn(t,9,12),squares:Rn(t,13,17),surface:Rn(t,21,26),path:s/Zi}}}var bc=Object.freeze({duration:6,heading:"\uC120\uD615\uD68C\uADC0",caption:"\uC774\uBC88\uC5D0\uB294 \uC120\uD615 \uD68C\uADC0\uB97C \uC2DC\uAC01\uD654\uD574\uC11C \uC54C\uC544\uBCF4\uB294 \uC2DC\uAC04\uC744 \uAC00\uC838\uBCF4\uB3C4\uB85D \uD558\uACA0\uC2B5\uB2C8\uB2E4."}),Si=Object.freeze({start:bc.duration,duration:19,heading:"\uC911\uACE0\uD3F0 \uAC00\uACA9 \uC608\uCE21",steps:Object.freeze([Object.freeze({end:15,caption:"\uC544\uC774\uD3F0 15 128GB\uC758 \uCD9C\uC2DC \uD6C4 1\uAC1C\uC6D4, 6\uAC1C\uC6D4, 12\uAC1C\uC6D4 \uC911\uACE0 \uAC00\uACA9\uC785\uB2C8\uB2E4."}),Object.freeze({end:20,caption:"\uAC00\uB85C\uCD95\uC740 \uCD9C\uC2DC \uD6C4 \uAE30\uAC04, \uC138\uB85C\uCD95\uC740 \uC911\uACE0 \uAC00\uACA9\uC785\uB2C8\uB2E4. \uAE30\uAC04\uC774 \uC9C0\uB0A0\uC218\uB85D \uAC00\uACA9\uC774 \uC5B4\uB5BB\uAC8C \uBCC0\uD558\uB294\uC9C0 \uBCF4\uC138\uC694."}),Object.freeze({end:25,caption:"\uC774 \uC138 \uC810\uC73C\uB85C, \uCD9C\uC2DC \uD6C4 \uAE30\uAC04\uC744 \uB123\uC73C\uBA74 \uAC00\uACA9\uC744 \uB0B4\uB193\uB294 \uC608\uCE21\uD568\uC218\uB97C \uB9CC\uB4E4\uC5B4 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4."})])}),Ji=Si.start+Si.duration,qu=Yr(si.w,si.b).w,vi=Object.freeze({w:si.w-ji.w*qu,b:si.b}),Yu=Yr(vi.w,vi.b).b,Ac=Object.freeze({w:vi.w,b:vi.b-ji.b*Yu}),vn=Object.freeze((()=>{let n=[si,vi,Ac];for(;n.length<=Zi;){let t=n.at(-1);n.push(Gu(t.w,t.b))}return n.map(t=>Object.freeze({w:t.w,b:t.b}))})()),wc=Object.freeze({w:Object.freeze({from:si.w,rate:ji.w,gradient:qu,delta:ji.w*qu,to:vi.w,mseBefore:Yn(si.w,si.b),mseAfter:Yn(vi.w,vi.b)}),b:Object.freeze({from:vi.b,rate:ji.b,gradient:Yu,delta:ji.b*Yu,to:Ac.b,mseBefore:Yn(vi.w,vi.b),mseAfter:Yn(Ac.w,Ac.b)})}),Ui=Object.freeze([[0,1,5,"\uCD9C\uC2DC \uD6C4 6\uAC1C\uC6D4 \uB41C \uC911\uACE0\uD3F0\uC758 \uC608\uCE21\uAC12\uC740 490\uB2EC\uB7EC\uC785\uB2C8\uB2E4. \uC774 \uAC12\uC740 \uC608\uCE21\uD568\uC218 \uC704\uC758 \uD55C \uC810\uC785\uB2C8\uB2E4."],[1,3,4,"W\uB97C \uBC14\uAFB8\uBA74 \uC608\uCE21\uD568\uC218\uC758 \uAE30\uC6B8\uAE30\uAC00 \uBC14\uB00C\uACE0, \uAC19\uC740 6\uAC1C\uC6D4\uC758 \uC608\uCE21\uAC12\uB3C4 \uB2EC\uB77C\uC9D1\uB2C8\uB2E4."],[3,5,3,"b \uAC12\uC774 \uBCC0\uD558\uBA74 \uC608\uCE21\uD568\uC218\uC758 \uC704\uCE58\uAC00 \uC704\uC544\uB798\uB85C \uBC14\uB01D\uB2C8\uB2E4."],[5,9,4,"W = \u221210, b = 550\uC73C\uB85C \uB3CC\uC544\uC640 \uC2E4\uC81C \uAC00\uACA9\uACFC \uBE44\uAD50\uD574 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4."],[9,13,4,"\uC608\uCE21\uAC12\uACFC \uC2E4\uC81C \uAC00\uACA9\uC758 \uCC28\uC774\uB294 \u221226, +8, +19\uB2EC\uB7EC\uC785\uB2C8\uB2E4."],[13,13,4.5,"\uC774 \uC9C1\uC120\uC774 \uC5BC\uB9C8\uB098 \uD2C0\uB838\uB294\uC9C0 \uC624\uCC28\uB97C \uBAA8\uC544 \uACC4\uC0B0\uD558\uB294 \uC2DD\uC774 MSE\uC785\uB2C8\uB2E4.","mseIntro"],[13,13,4.5,"\uC27D\uAC8C \uB9D0\uD558\uBA74, \uAC01 \uC624\uCC28 \uC81C\uACF1\uB4E4\uC758 \uD3C9\uADE0\uAC12\uC744 \uAD6C\uD558\uAE30\uB9CC \uD558\uBA74 \uB429\uB2C8\uB2E4.","mseExpand"],[13,13,6.5,"\uC624\uCC28 \uD558\uB098\uB97C \uD655\uB300\uD574 \uBCF4\uACA0\uC2B5\uB2C8\uB2E4. \u221226\uC744 \uD55C \uBCC0\uC73C\uB85C \uD558\uB294 \uC815\uC0AC\uAC01\uD615\uC758 \uB113\uC774\uB294 (\u221226)\xB2 = 676\uC785\uB2C8\uB2E4.","squareFocus",!0],[13,17,6,"\uB098\uBA38\uC9C0 \uC624\uCC28\uB3C4 \uC81C\uACF1\uD558\uBA74 64, 361\uC785\uB2C8\uB2E4. \uD070 \uC624\uCC28\uAC00 \uB354 \uD06C\uAC8C \uBC18\uC601\uB429\uB2C8\uB2E4.","squareRest",!0],[17,21,6,"MSE = (676 + 64 + 361) \xF7 3 = 367\uB2EC\uB7EC\xB2. \uC774 \uC608\uCE21\uD568\uC218\uC758 \uC624\uCC28\uB97C \uC22B\uC790 \uD558\uB098\uB85C \uB098\uD0C0\uB0B8 \uAC12\uC785\uB2C8\uB2E4."],[21,26,6,"W\uC640 b\uAC00 \uC815\uD574\uC9C0\uBA74 \uC608\uCE21\uD568\uC218 \uD558\uB098\uC640 MSE \uD558\uB098\uAC00 \uC815\uD574\uC9D1\uB2C8\uB2E4. \uADF8 MSE\uB97C \uACE1\uBA74\uC758 \uB192\uC774\uB85C \uB098\uD0C0\uB0C5\uB2C8\uB2E4."],[26,32,5,"W\uB9CC \uBC14\uAFB8\uBA74 \uC608\uCE21\uD568\uC218\uAC00 \uAE30\uC6B8\uACE0, \uACE1\uBA74\uC758 \uC810\uC740 \uBE68\uAC04 W \uACBD\uB85C\uB97C \uB530\uB77C \uC6C0\uC9C1\uC785\uB2C8\uB2E4."],[32,38,5,"b\uB9CC \uBC14\uAFB8\uBA74 \uC608\uCE21\uD568\uC218\uAC00 \uC704\uC544\uB798\uB85C \uC6C0\uC9C1\uC774\uACE0, \uACE1\uBA74\uC758 \uC810\uC740 \uD30C\uB780 b \uACBD\uB85C\uB97C \uB530\uB77C \uC6C0\uC9C1\uC785\uB2C8\uB2E4."],[38,41,3,"\uD559\uC2B5\uC740 \uC784\uC758\uB85C \uC815\uD55C W = 5, b = 580\uC5D0\uC11C \uC2DC\uC791\uD569\uB2C8\uB2E4."],[41,41,5.5,"W\uC640 b\uB294 \u201C\uD604\uC7AC \uAC12 \u2212 \uD559\uC2B5\uB960 \xD7 \uAE30\uC6B8\uAE30\u201D\uB85C \uACE0\uCE69\uB2C8\uB2E4. \uD559\uC2B5\uB960\uC740 \uD55C \uBC88\uC5D0 \uC5BC\uB9C8\uB098 \uC6C0\uC9C1\uC77C\uC9C0 \uC815\uD558\uB294 \uAC12\uC785\uB2C8\uB2E4.","rule"],[41,41,6,"\uBA3C\uC800 W\uB97C \uD55C \uBC88 \uACE0\uCE69\uB2C8\uB2E4. \uD604\uC7AC W = 5, \uD559\uC2B5\uB960 1/288, W \uBC29\uD5A5 \uAE30\uC6B8\uAE30 2,356.67\uC744 \uB123\uC2B5\uB2C8\uB2E4.","wIn",!0],[41,41,5,"\uD559\uC2B5\uB960 \xD7 \uAE30\uC6B8\uAE30\uB294 \uC57D 8.18\uC774\uBBC0\uB85C, \uC0C8 W\uB294 5 \u2212 8.18 = \u22123.18\uC785\uB2C8\uB2E4.","wCalc",!0],[41,41,5,"W\uB9CC \u22123.18\uB85C \uBC14\uAFB8\uBA74 \uC608\uCE21\uD568\uC218\uAC00 \uAE30\uC6B8\uACE0, MSE\uB294 23,062\uC5D0\uC11C \uC57D 7,818\uB85C \uC904\uC5B4\uB4ED\uB2C8\uB2E4.","wApply",!0],[41,41,6,"\uC774\uBC88\uC5D0\uB294 b\uB97C \uACE0\uCE69\uB2C8\uB2E4. \uBC14\uB010 W\uC5D0\uC11C \uB2E4\uC2DC \uAD6C\uD55C b \uBC29\uD5A5 \uAE30\uC6B8\uAE30\uB294 147.02, \uD559\uC2B5\uB960\uC740 0.5\uC785\uB2C8\uB2E4.","bIn",!0],[41,41,5,"0.5 \xD7 147.02 = 73.51\uC774\uBBC0\uB85C, \uC0C8 b\uB294 580 \u2212 73.51 = 506.49\uC785\uB2C8\uB2E4.","bCalc",!0],[41,41,5,"b\uB9CC 506.49\uB85C \uBC14\uAFB8\uBA74 \uC608\uCE21\uD568\uC218\uAC00 \uC544\uB798\uB85C \uB0B4\uB824\uAC00\uACE0, MSE\uB294 \uC57D 2,414\uB85C \uC904\uC5B4\uB4ED\uB2C8\uB2E4.","bApply",!0],[41,47,6,"\uC774\uC81C \uAC19\uC740 \uACC4\uC0B0\uC744 W\uC640 b\uC5D0 \uD568\uAED8 \uBC18\uBCF5\uD569\uB2C8\uB2E4. \uACE1\uBA74\uC758 \uC810, \uC608\uCE21\uD568\uC218, \uC138 \uC624\uCC28\uAC00 \uD568\uAED8 \uC6C0\uC9C1\uC785\uB2C8\uB2E4.","repeat",!0],[47,54,6,"\uAC31\uC2E0\uD560 \uB54C\uB9C8\uB2E4 MSE\uAC00 \uC904\uC5B4\uB4E4\uACE0, W\uC640 b\uAC00 \uACE1\uBA74\uC758 \uAC00\uC7A5 \uB0AE\uC740 \uACF3\uC73C\uB85C \uBAA8\uC785\uB2C8\uB2E4."],[54,57,8,"80\uD68C \uAC31\uC2E0 \uD6C4 MSE\uB294 \uC57D 40.66\uB2EC\uB7EC\xB2\uC785\uB2C8\uB2E4. \uC138 \uC810\uC744 \uBAA8\uB450 \uC9C0\uB098\uC9C0\uB294 \uC54A\uC9C0\uB9CC, \uC624\uCC28 \uC81C\uACF1\uC758 \uD3C9\uADE0\uC774 \uAC00\uC7A5 \uC791\uC740 \uC608\uCE21\uD568\uC218\uC785\uB2C8\uB2E4."]].map(([n,t,e,i,s=null,r=!1])=>Object.freeze({from:n,to:t,seconds:e,caption:i,id:s,draft:r}))),Qi=[];Ui.reduce((n,t)=>(Qi.push(n),n+t.seconds),Ji);var Cn=Qi.at(-1)+Ui.at(-1).seconds,Pn=n=>Qi[Ui.findIndex(t=>t.id===n)];var Xp=Qi.at(-1)+2.5,ri=Object.freeze({start:Pn("mseIntro"),expand:Pn("mseExpand"),squares:Pn("squareFocus")}),Ku=Object.freeze({sum:Object.freeze([ri.expand+.2,ri.expand+1.3]),fraction:Object.freeze([ri.expand+2.4,ri.expand+3.5])}),Le=Object.freeze({focus:Pn("squareFocus"),out:Pn("squareRest"),fly:Pn("squareRest")+2.8,arrive:Pn("squareRest")+5}),Oe=Object.freeze({start:Pn("rule"),w:Pn("wIn"),wCalc:Pn("wCalc"),wApply:Pn("wApply"),b:Pn("bIn"),bCalc:Pn("bCalc"),bApply:Pn("bApply"),apply:Pn("repeat")}),Gw=Object.freeze(Ui.filter(n=>n.draft).map(n=>n.caption));function xS(n){if(n<=Ji)return 0;for(let t=Ui.length-1;t>=0;t--)if(n>=Qi[t]){let e=Ui[t];return e.to===e.from?e.from:Math.min(e.to,e.from+(n-Qi[t])/e.seconds*(e.to-e.from))}return 0}function $i(n){for(let t=0;t<Ui.length;t++){let e=Ui[t];if(n<=e.to)return e.to===e.from?Qi[t]:Qi[t]+(n-e.from)/(e.to-e.from)*e.seconds}return Cn}var nn=Object.freeze(Object.fromEntries(Object.entries(ie).map(([n,t])=>[n,$i(t)]))),_S=["\uC120\uD615\uD68C\uADC0\uB85C \uAC00\uACA9 \uC608\uCE21\uD558\uAE30","\uC624\uCC28\uC640 MSE","\uC190\uC2E4 \uACE1\uBA74","\uACBD\uC0AC\uD558\uAC15\uBC95"],On=Object.freeze(qr.map((n,t)=>Object.freeze({...n,label:t===0?"\uC608\uCE21\uD568\uC218":n.label,title:_S[t],start:t===0?0:$i(n.start),end:$i(n.end)}))),to=Object.freeze(Vu.map(n=>Object.freeze({...n,start:$i(n.start),end:$i(n.end)}))),Xu=(n,t,e)=>Lt((n-t)/e);function yS(n){if(n>=Ji+.6)return null;let t=n>=Si.start?Xu(n,Si.start,1.2):1;return{pulse:t<1?Math.sin(Math.PI*t):0,axes:n>=Si.steps[0].end&&n<Si.steps[1].end?1:0,line:Ie(Xu(n,Si.steps[1].end,1.6)),prediction:Ie(Xu(n,Ji,.6))}}function vS(n,t){let e=Oe,i=(r,a)=>Ie((n-r)/a);if(n<e.wApply+.6)return 0;if(n<e.b)return i(e.wApply+.6,2.6);if(n<e.bApply+.6)return 1;if(n<e.apply)return 1+i(e.bApply+.6,2.6);let s=t;return s<44?2+Ie((s-41)/3):s<47?3+Ie((s-44)/3):s<54?4+76*Ie((s-47)/7):Zi}function SS(n){let t=Math.min(Zi-1,Math.floor(n)),e=n-t,i=vn[t],s=vn[t+1];return{w:i.w+(s.w-i.w)*e,b:i.b+(s.b-i.b)*e}}function ts(n){let t=Lt(Number.isNaN(Number(n))?0:Number(n),0,Cn),e=xS(t),i=Wp(e),s=i;if(t>=Oe.start){let h=vS(t,e),p=SS(h);s={...i,w:p.w,b:p.b,y:p.w*i.x+p.b,mse:Yn(p.w,p.b),iteration:h,reveal:{...i.reveal,path:h/Zi}}}let r=On[qr.indexOf(s.chapter)],a=t<bc.duration,o=!a&&t<Ji,l=Ui.findLastIndex((h,p)=>t>=Qi[p]),c=a?bc.caption:o?Si.steps.find(h=>t<h.end).caption:Ui[Math.max(0,l)].caption;return{...s,t,contentTime:e,intro:a,setup:o,chapter:r,caption:c,scene:yS(t),heading:a?bc.heading:o?Si.heading:s.parameterDemo?s.parameterDemo.axis==="w"?"W\uB9CC \uBC14\uAFB8\uAE30":"b\uB9CC \uBC14\uAFB8\uAE30":r.title}}var qp="data:image/jpeg;base64,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";var at=n=>document.getElementById(n),W=(n=0,t=0,e=0)=>new I(n,t,e),X={w:16740989,b:6925311,line:6939333,loss:12229375,ink:15133429,muted:8162725,grid:3358802},ad=n=>Math.floor(n/60)+":"+String(Math.floor(n)%60).padStart(2,"0"),qe=n=>"#"+n.toString(16).padStart(6,"0"),Fe=(n,t=2)=>Number(n.toFixed(t)).toLocaleString("en-US",{maximumFractionDigits:t}).replace("-","\u2212"),Sn=new Sa;Sn.background=new kt(854807);var te=new gn(40,1,.1,180),is=at("world"),gt={time:0,playing:!1,experiment:null,freeCamera:!1,speed:1,view:"lesson"},Ae=ts(0),be,Ot,xe=null,ln="wide",Yp=0,Kp=0,rn=null,MS=!1,bS=[],Cc=[],hn=new Set,AS=new Set(["KeyW","KeyA","KeyS","KeyD","KeyQ","KeyE"]),Qc=matchMedia("(prefers-reduced-motion: reduce)").matches;window.lessonBundleReady=!0;var jr=!!window.lessonEarlyPlay;function lm(){if(!Ot){jr=!jr,at("play").textContent=jr?"\u2161":"\u25B6",at("mode").textContent=jr?"\uC900\uBE44\uB418\uBA74 \uC7AC\uC0DD\uD569\uB2C8\uB2E4":"\uC7AC\uC0DD\uD558\uAC70\uB098 \uC7A5\uBA74\uC744 \uC120\uD0DD\uD558\uC138\uC694";return}rs(!1),Ud(),Bn()}at("play").addEventListener("click",lm);addEventListener("keydown",n=>{!Ot&&n.code==="Space"&&!n.repeat&&!n.target.closest?.("input,select,textarea,button")&&(n.preventDefault(),lm())});var Nt=new Xe,Gt=new Xe,$c=new Xe,th=new Xe,eh=new Xe;Sn.add(th,eh,$c);th.add(Nt);eh.add(Gt);var yd={graph:W(-6.4,1.5,-1.9),surface:W(5.2,2,0)};Nt.position.copy(yd.graph).negate();Gt.position.copy(yd.surface).negate();var od={graph:{yaw:0,pitch:0,x:0,y:0,z:0},surface:{yaw:-45,pitch:0,x:.4,y:.2,z:0}},nr={graph:{...od.graph},surface:{...od.surface}},Oc={yaw:[-90,90],pitch:[-30,30],x:[-3,3],y:[-3,3],z:[-3,3]},In=!1,kn="surface",bi=null,jp=new La,Xt=(n,t)=>W(-10.2+n*.64,(t-250)*.011,-1.9),wS=new Pa(1,20,12),TS=new zs(1,1,1,10);var ir=Math.max(...[-25,8].flatMap(n=>[430,650].map(t=>Yn(n,t)))),Ee=(n,t,e=1)=>W(5.2+(n+25)/33*8.1-4.05,.18+Yn(n,t)/ir*5.5*e,3.8-(t-430)/220*7.6),cm=[],vd=(n,t={})=>new Vs({color:n,roughness:.52,metalness:.04,...t});function Is(n,t,e,i,s){let r=new ge(wS,vd(e,{emissive:e,emissiveIntensity:.18}));return r.position.copy(t),r.scale.setScalar(i),n.add(r),s&&(r.userData.kind=s,bS.push(r)),r}function wi(n,t,e=.024){let i=new ge(TS,vd(t));return i.userData.r=e,n.add(i),i}function ss(n,t,e){let i=t.distanceTo(e);n.position.copy(t).add(e).multiplyScalar(.5),n.scale.set(n.userData.r,i,n.userData.r),i>1e-6&&n.quaternion.setFromUnitVectors(W(0,1,0),e.clone().sub(t).normalize()),n.visible=i>1e-6}function ci(n,t,e,i=1){let s=new Hs(new Ue().setFromPoints(t),new gs({color:e,transparent:!0,opacity:i,depthWrite:!1}));return n.add(s),s}function ju(n,t){n.geometry.attributes.position.count!==t.length?(n.geometry.dispose(),n.geometry=new Ue().setFromPoints(t)):(t.forEach((e,i)=>n.geometry.attributes.position.setXYZ(i,e.x,e.y,e.z)),n.geometry.attributes.position.needsUpdate=!0,n.geometry.computeBoundingSphere())}function ia(n,t,e,i,s=1400,r=200){let a=document.createElement("canvas");a.width=s,a.height=r;let o=a.getContext("2d"),l=new wa(a);l.colorSpace=mn,l.anisotropy=4;let c=new ge(new Yi(e,i),new ke({map:l,transparent:!0,depthWrite:!1,side:_n,toneMapped:!1}));c.position.copy(t),n.add(c);let h={mesh:c,ctx:o,canvas:a,texture:l,key:"",set(p,u=X.ink,f=92,g=0){let y=p+"|"+Math.round(g*8);if(this.key!==y){if(this.key=y,o.clearRect(0,0,s,r),o.textAlign="center",o.textBaseline="middle",o.font=`500 ${f}px Pretendard, sans-serif`,g>.02){let m=Math.min(s-16,o.measureText(p).width+f*.9),d=Math.min(r-12,f*1.35);o.save(),o.beginPath(),o.roundRect((s-m)/2,(r-d)/2,m,d,d*.28),o.strokeStyle=qe(u),o.globalAlpha=.35+.65*g,o.lineWidth=Math.max(3,f*.05),o.shadowColor=qe(u),o.shadowBlur=f*.45*g,o.stroke(),o.restore()}o.fillStyle=qe(u),o.fillText(p,s/2,r/2),this.textW=o.measureText(p).width/s*e,l.needsUpdate=!0}}};return cm.push(h),h}function Ne(n,t,e,i=2,s=.36,r=X.muted){let a=ia(n,e,i,s,Math.round(i/s*160),160);return a.set(t,r,128),a}function Tc(n,t){n.visible=t>.001,n.traverse(e=>{e.material&&(e.material.transparent=!0,e.material.opacity=t*(e.userData.baseOpacity??1),e.material.depthWrite=!1)})}function ld(n,t,e,i,s,r=88,a=53){let o=[...Fe(t)],l=h=>h==="."||h===","?a*.35:h==="\u2212"?a*.7:a,c=e-o.reduce((h,p)=>h+l(p),0)/2;n.font=`600 ${r}px Pretendard`,n.fillStyle=qe(s),n.textAlign="center";for(let h of o){let p=l(h);n.fillText(h,c+p/2,i),c+=p}}Sn.add(new Na(12966399,1384499,2));var hm=new Or(16777215,2.4);hm.position.set(-8,16,10);Sn.add(hm);var um=new Or(8809471,2);um.position.set(12,7,-9);Sn.add(um);for(let n=-12;n<=11;n+=1)ci(Sn,[W(n,-.6,-6),W(n,-.6,5)],2371651,.15);for(let n=-6;n<=5;n+=1)ci(Sn,[W(-12,-.6,n),W(11,-.6,n)],2371651,.15);var jn=new Xe;Nt.add(jn);for(let n of[0,3,6,9,12])ci(jn,[Xt(n,250),Xt(n,750)],X.grid,.4),Ne(jn,String(n),Xt(n,220),.55,.28);var dm=[];for(let n of[300,400,500,600,700])ci(jn,[Xt(0,n),Xt(12,n)],X.grid,.5),dm.push(Ne(jn,String(n),Xt(-.65,n),.72,.28));var fm=wi(jn,6912918,.016);ss(fm,Xt(0,250),Xt(12.5,250));var pm=wi(jn,6912918,.016);ss(pm,Xt(0,250),Xt(0,765));Ne(jn,"\uC2E4\uC81C \uAC00\uACA9\uACFC \uC608\uCE21\uD568\uC218",W(-6.4,6.35,-1.9),5.4,.43,X.ink);var ES=Ne(jn,"\uB2EC\uB7EC",Xt(-.15,790),1.2,.32),RS=Ne(jn,"\uCD9C\uC2DC \uD6C4 \uAC1C\uC6D4",Xt(10.6,200),2.2,.3),Ic=[],cd=oe.map((n,t)=>{let e=Is(Nt,Xt(n.x,n.y),X.ink,.087);return Ic.push(Ne(Nt,`${n.y}`,Xt(n.x,n.y).add(W(.13,.27,.015)),.8,.27,X.ink)),e}),Je={center:W(-15.3,2.05,-1.9),w:4.7,h:4.5,px:[940,900]},De={rows:[6.3,7.3,8.3],rowFor:1,graphIn:9.3,xmark:[10.1,11.5,12.9],lead:.45,flyFor:1,fadeFrom:14.4,fadeTo:15};De.fly=De.xmark.map(n=>n+De.lead);var es=16764784,Ec=(n,t,e)=>n<t||n>t+e?0:Math.sin(Math.PI*(n-t)/e),Zu=(n,t,e)=>new kt(n).lerp(new kt(t),Lt(e,0,1)).getHex(),oi=ia(Nt,Je.center,Je.w,Je.h,...Je.px);oi.mesh.material.depthTest=!1;oi.mesh.renderOrder=4;var hd=[];(function(){let{ctx:t,canvas:e,texture:i}=oi,s=e.width,r=e.height,a=new Image,o=oe.map(()=>({row:0,x:0})),l=()=>{if(t.clearRect(0,0,s,r),t.save(),t.beginPath(),t.roundRect(4,4,s-8,r-8,28),t.fillStyle="#18152c",t.fill(),t.lineWidth=3,t.strokeStyle="#2c3a52",t.stroke(),t.clip(),a.complete&&a.naturalWidth){let h=Math.max(s/a.naturalWidth,420/a.naturalHeight),p=a.naturalWidth*h,u=a.naturalHeight*h;t.save(),t.beginPath(),t.rect(0,0,s,420),t.clip(),t.drawImage(a,(s-p)/2,(420-u)/2,p,u),t.restore()}t.restore(),t.textBaseline="alphabetic",on(t,"iPhone 15 128GB \uC911\uACE0 \uB9E4\uC785\uAC00",48,492,42,X.ink,600,"left"),hd.length=0,oe.forEach((c,h)=>{let p=578+h*84,{row:u,x:f}=o[h];u>.02&&(t.save(),t.beginPath(),t.roundRect(28,p-58,s-56,80,14),t.fillStyle=qe(X.line),t.globalAlpha=.16*u,t.fill(),t.globalAlpha=.9*u,t.lineWidth=3,t.strokeStyle=qe(X.line),t.stroke(),t.restore());let g=`\uCD9C\uC2DC \uD6C4 ${c.x}\uAC1C\uC6D4`;if(f>.02){let d=an(t,g,40);t.save(),t.beginPath(),t.roundRect(36,p-48,d+24,60,12),t.fillStyle=qe(es),t.globalAlpha=.18*f,t.fill(),t.globalAlpha=.95*f,t.lineWidth=3,t.strokeStyle=qe(es),t.stroke(),t.restore()}on(t,g,48,p,40,f>.02?Zu(X.muted,es,f):Zu(X.muted,X.ink,u),f>.5||u>.5?600:500,"left"),on(t,`${c.y}\uB2EC\uB7EC`,s-48,p,46,Zu(X.ink,X.line,u),600,"right");let y=s-48-an(t,`${c.y}\uB2EC\uB7EC`,46,600)/2,m=p-16;hd.push(W((y/s-.5)*Je.w,(.5-m/r)*Je.h,0).add(Je.center)),h<2&&(t.fillStyle="#26324a",t.fillRect(48,p+30,s-96,2))}),on(t,"SellCell(\uBBF8\uAD6D) \uC2DC\uC138 \xB7 \uC0AC\uC9C4 Wikimedia Commons CC BY-SA 4.0",48,r-36,24,X.muted,500,"left"),i.needsUpdate=!0};a.onload=l,a.src=qp,l(),oi.highlight=c=>{let h=c.map(p=>Math.round(p.row*6)+"."+Math.round(p.x*6)).join(",");h!==oi.hlKey&&(oi.hlKey=h,o=c,l())}})();var mm=oe.map(n=>{let t=wi(Nt,es,.016);t.material=new ke({color:es,toneMapped:!1});let e=Is(Nt,Xt(n.x,250),es,.07);e.material=new ke({color:es,toneMapped:!1});let i=Ne(Nt,`${n.x}\uAC1C\uC6D4`,Xt(n.x,250).add(W(0,.32,.02)),1.1,.3,es);return{guide:t,tick:e,tag:i}}),gm=oe.map(n=>{let t=Ne(Nt,`${n.y}`,W(),1.2,.36,X.ink);return t.mesh.material.depthTest=!1,t.mesh.renderOrder=5,t.set(`${n.y}`,X.ink,128,1),t}),Fn=wi(Nt,X.line,.031),Ks=wi(Nt,X.line,.1);Ks.material=new ke({color:X.line,transparent:!0,opacity:0,depthWrite:!1,blending:Ha,toneMapped:!1});var sa=new Hs(new Ue().setFromPoints([Xt(0,ae.b),Xt(12,ae.w*12+ae.b)]),new Ca({color:X.ink,transparent:!0,opacity:.32,dashSize:.12,gapSize:.09,depthWrite:!1}));sa.computeLineDistances();sa.position.z=.025;sa.visible=!1;Nt.add(sa);var Ps=Is(Nt,Xt(12,400),X.w,.12,"w"),Cs=Is(Nt,Xt(0,580),X.b,.115,"b"),ud=Ne(Nt,"W",W(),.55,.32,X.w),dd=Ne(Nt,"b",W(),.5,.32,X.b),no=Is(Nt,Xt(6,490),X.line,.1,"x"),Sd=ci(Nt,[Xt(6,250),Xt(6,490)],X.line,.45);Sd.userData.baseOpacity=.45;var Md=Ne(Nt,"\uCD9C\uC2DC \uD6C4 6\uAC1C\uC6D4 \u2192 490\uB2EC\uB7EC",W(),4.6,.35,X.line),nh=W(-6.3,8.35,-1.9),Be=ia(Nt,nh.clone(),7.9,1.05,1800,240),ih=new Xe;Nt.add(ih);var ro=oe.map(()=>wi(ih,X.loss,.028)),Dc=oe.map(()=>Ne(ih,"",W(),1.15,.32,X.loss)),Fc=new Xe;Nt.add(Fc);var PS=n=>Ht.anchors?Nt.worldToLocal(Ht.mesh.localToWorld(Ht.anchors[n].clone())):W(1.9+n*2.3,4.5,-1.9),Zp=new Yi(1,1),bd=0,xm=.011,CS=1.45,Ad=(n,t,e)=>t*n.x+e-n.y;function _m(){let n=oe[bd],t=Ad(n,ae.w,ae.b),e=Math.abs(t)*xm,i=Xt(n.x,0).x,s=Xt(n.x,n.y+t/2).y,r=i-.62,a=i+e+1.12;return{x:(r+a)/2,y:s,w:a-r,h:e+.55}}var Zr=oe.map((n,t)=>{let e=new Xe;Fc.add(e);let i=new ge(Zp,new ke({color:X.loss,transparent:!0,opacity:.2,side:_n,depthWrite:!1}));i.userData.baseOpacity=.16,e.add(i);let s=[0,1,2,3].map(()=>{let a=new ge(Zp,new ke({color:X.loss,transparent:!0,side:_n,depthWrite:!1,toneMapped:!1}));return a.userData.baseOpacity=.9,a.position.z=.002,e.add(a),a}),r=Ne(Fc,"",W(1.9+t*2.3,3.45,-1.9),2.5,.35,X.loss);return{g:e,fill:i,bars:s,tag:r,index:t}});function IS(n,t,e,i=Math.max(.004,Math.min(.03,Math.min(t,e)*.07))){let s=Math.min(.5,i/t),r=Math.min(.5,i/e),[a,o,l,c]=n.bars;a.position.set(0,.5-r/2,.002),a.scale.set(1,r,1),o.position.set(0,-.5+r/2,.002),o.scale.set(1,r,1),l.position.set(-.5+s/2,0,.002),l.scale.set(s,1,1),c.position.set(.5-s/2,0,.002),c.scale.set(s,1,1)}var Vn={w:9.6,h:1.13},DS=2.6,NS=1.25,US=1.55,Bc=()=>ln==="narrow"?NS:US,Ht=ia(Sn,W(),Vn.w,Vn.h,2200,260),ym=W(6.7,3.4,-1.9),vm=W(-6.3,9.65,-1.9),LS=W(5.3,nh.y-.2,-2.2),fd=.75,wd=.85,OS=W(8.7,-9,-20),FS=1574/1800*7.9;function Sm(){if(ln==="narrow")return{p:Gt.localToWorld(LS.clone()),q:Gt.getWorldQuaternion(new ze)};let n=FS/2+.8+Vn.w*wd*Bc()/2;return{p:Nt.localToWorld(nh.clone().add(W(n,0,0))),q:Nt.getWorldQuaternion(new ze)}}function BS(n,t,e,i){let s=[];for(let r of[-e/2,e/2])for(let a of[-i/2,i/2])s.push(W(r,a,0).applyQuaternion(t).add(n));return s}var Mm=()=>ln==="narrow"?1:DS,$r=new Xe;Gt.add($r);var sn=60,bm=[],Am=[],wm=[];for(let n=0;n<=sn;n++)for(let t=0;t<=sn;t++){let e=-25+33*t/sn,i=430+220*n/sn,s=Ee(e,i);bm.push(s.x,s.y,s.z);let r=Math.min(1,Math.sqrt(Yn(e,i)/ir)),a=new kt(X.line).lerp(new kt(8417748),Math.min(1,r*1.7)).lerp(new kt(14133748),Math.max(0,(r-.5)*1.4));if(Am.push(a.r,a.g,a.b),t<sn&&n<sn){let o=n*(sn+1)+t;wm.push(o,o+1,o+sn+1,o+1,o+sn+2,o+sn+1)}}var co=new Ue;co.setAttribute("position",new de(bm,3));co.setAttribute("color",new de(Am,3));co.setIndex(wm);co.computeVertexNormals();var sh=new ge(co,new Vs({vertexColors:!0,side:_n,transparent:!0,opacity:.62,roughness:.7,metalness:.08,depthWrite:!1}));sh.userData.baseOpacity=.62;$r.add(sh);var Tm=[];for(let n=0;n<=sn;n+=4){let t=[];for(let i=0;i<=sn;i++)t.push(Ee(-25+33*i/sn,430+220*n/sn).add(W(0,.012,0)));let e=ci($r,t,12629744,.21);e.userData.baseOpacity=.21,Tm.push(e)}for(let n=0;n<=sn;n+=4){let t=[];for(let i=0;i<=sn;i++)t.push(Ee(-25+33*n/sn,430+220*i/sn).add(W(0,.012,0)));let e=ci($r,t,12629744,.21);e.userData.baseOpacity=.21,Tm.push(e)}var Zn=new Xe;Gt.add(Zn);for(let[n,t,e]of[[W(1.15,0,3.8),W(9.7,0,3.8),X.w],[W(1.15,0,3.8),W(1.15,0,-4.15),X.b],[W(9.4,0,-3.8),W(9.4,6,-3.8),X.loss]]){let i=wi(Zn,e,.017);ss(i,n,t)}for(let n of[-25,-15,-5,5]){let t=Ee(n,430,0);t.y=-.32,Ne(Zn,String(n),t,.85,.28,X.w)}for(let n of[450,550,650]){let t=Ee(-25,n,0);t.x-=.46,t.y=0,Ne(Zn,String(n),t,.85,.28,X.b)}Ne(Zn,"W \xB7 \uAE30\uC6B8\uAE30",W(6,-.82,3.8),2.8,.37,X.w);Ne(Zn,"b \xB7 \uC808\uD3B8",W(.35,0,-2.7),2.2,.35,X.b);for(let n of[0,2e4,4e4,6e4])if(n<ir*1.05){let t=.18+n/ir*5.5;Ne(Zn,n===0?"0":n/1e4+"\uB9CC",W(10.05,t,-3.8),.9,.28,X.loss)}Ne(Zn,"MSE \xB7 \uB2EC\uB7EC\xB2",W(9.4,6.35,-3.8),3,.36,X.loss);var Em=11.25,Rm=10.7,Td=9.8,pd=1.4,HS=W(5.3,Td,-2.2),Nc=W(13.8,4.8,1.1),Ed=Ne(Gt,"W\uC640 b\uC758 \uBAA8\uB4E0 \uC870\uD569",W(5.3,Em,-2.2),6.2,.45,X.ink);Ed.mesh.userData.flat=!0;var Pm=Ne(Gt,"\uC810\uC758 \uB192\uC774 = \uC138 \uC608\uCE21 \uC624\uCC28\uC758 \uC81C\uACF1 \uD3C9\uADE0",W(5.3,Rm,-2.2),7.2,.35,X.muted);Pm.mesh.userData.flat=!0;var Oi=Is(Gt,Ee(ae.w,ae.b),X.loss,.14,"surface"),sr=new ge(new Nr(.25,.017,8,48),vd(X.loss));Gt.add(sr);Oi.material=new ke({color:15785983,depthTest:!1,toneMapped:!1});Oi.renderOrder=10;sr.material.depthTest=!1;sr.renderOrder=10;sr.rotation.x=-Math.PI/2;var Jp=ci(Gt,[W(),W()],X.loss,.5),Rd=Is(Gt,W(),10134708,.055);Rd.material=new Vs({color:10134708,roughness:.6});for(let n of[-25,-20,-15,-10,-5,0,5,8]){let t=Ee(n,430,0),e=Ee(n,650,0);t.y=e.y=.012;let i=ci(Zn,[t,e],9082019,.42);i.userData.baseOpacity=.42}for(let n of[430,470,510,550,590,630,650]){let t=Ee(-25,n,0),e=Ee(8,n,0);t.y=e.y=.012;let i=ci(Zn,[t,e],9082019,.42);i.userData.baseOpacity=.42}var Qp=Is(Gt,Ee($a.w,$a.b),X.line,.075),zS=Ne(Gt,"\uCD5C\uC18C MSE",Ee($a.w,$a.b).add(W(.5,.4,.1)),2.1,.29,X.line),Pd=ia($c,W(5.3,5.8,-2.2),7.6,.85,1500,160);Pd.mesh.visible=!1;var Kn=ia(Gt,W(5.3,Td,-2.2),8.4,1.1,1800,240);Kn.mesh.userData.flat=!0;var Hc={};for(let n of["w","b"]){let t=Array.from({length:97},(i,s)=>Ee(n==="w"?-25+33*s/96:ae.w,n==="b"?430+220*s/96:ae.b).add(W(0,.055,0))),e=new ge(new Ur(new ks(t),144,.03,6,!1),new ke({color:X[n],transparent:!0,opacity:.9,depthTest:!1,depthWrite:!1,toneMapped:!1}));e.renderOrder=8,e.visible=!1,Gt.add(e),Hc[n]=e}var ho=new ge(new Nr(.19,.022,8,40),new ke({color:X.b,depthTest:!1}));ho.position.copy(Xt(0,ae.b)).add(W(0,0,.035));ho.visible=!1;Nt.add(ho);var ao=vn,Qr=[];for(let n=0;n<80;n++)for(let t=0;t<16;t++){let e=ao[n],i=ao[n+1],s=t/16;Qr.push(Ee(e.w+(i.w-e.w)*s,e.b+(i.b-e.b)*s).add(W(0,.06,0)))}Qr.push(Ee(ao[80].w,ao[80].b).add(W(0,.06,0)));var tr=ci(Gt,Array.from({length:Qr.length+1},()=>W()),X.line,.95);tr.frustumCulled=!1;function kS(n){let t=tr.geometry.attributes.position;n.forEach((e,i)=>t.setXYZ(i,e.x,e.y,e.z)),t.needsUpdate=!0,tr.geometry.setDrawRange(0,n.length)}var Kr=new Oa(W(1,0,0),W(),1,X.line,.18,.1);Gt.add(Kr);function $p(n){let t=new ge(new Ue,new ke({color:n,transparent:!0,opacity:.95,depthTest:!1,depthWrite:!1,toneMapped:!1}));return t.renderOrder=9,t.visible=!1,t.frustumCulled=!1,Gt.add(t),t}var Li={w:$p(X.w),b:$p(X.b)};function VS(n,t){let e=t.length+"|"+t.at(-1).toArray().map(i=>i.toFixed(3)).join(",");n.userData.key!==e&&(n.userData.key=e,n.userData.ends=[t[0].clone(),t.at(-1).clone()],n.geometry.dispose(),n.geometry=new Ur(new ks(t),Math.max(4,t.length*3),.04,6,!1))}var GS=X.loss,Cm=W(0,.1,0),zc=.42,Fi=new Xe,oo=new ke({color:GS,transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),kc=new ge(new zs(.055,.055,1,12),oo),ta=new ge(new Dr(.17,zc,18),oo);Fi.add(kc,ta);kc.renderOrder=ta.renderOrder=11;Fi.visible=!1;Gt.add(Fi);var rh=Ee(vn[0].w,vn[0].b).add(Cm),Cd=Ee(vn[2].w,vn[2].b).add(Cm);Fi.position.copy(rh);Fi.quaternion.setFromUnitVectors(W(0,1,0),Cd.clone().sub(rh).normalize());var tm=(()=>{for(let n=Oe.bApply;n<=Oe.apply;n+=.05)if(ts(n).iteration>=2)return n;return Oe.apply})(),WS=$i(47);function Im(n){return n.custom?{grow:0,alpha:0}:{grow:Ie(Lt((n.t-tm)/.8,0,1)),alpha:Lt((n.t-tm)/.3,0,1)*(1-Lt((n.t-WS)/1,0,1))}}function XS(n){let t=Im(n),e=rh.distanceTo(Cd)*t.grow;if(Fi.visible=t.alpha>.001&&e>.01,!Fi.visible)return t;let i=Math.min(zc,e),s=Math.max(.001,e-i);return kc.scale.y=s,kc.position.y=s/2,ta.scale.setScalar(i/zc),ta.position.y=e-i/2,oo.opacity=.95*t.alpha,t}var Ju=ci(Sn,[W(),W(),W()],X.loss,.2),nT=Ne(jn,"iPhone 15 128GB \uC911\uACE0 \uB9E4\uC785\uAC00 \xB7 \uBBF8\uAD6D SellCell \uAD00\uCE21\uAC12 3\uAC1C",W(-6.4,-1.05,-1.9),6.5,.25,X.muted),Vc=1;function ah(){for(let n of["graph","surface"]){let t=nr[n],e=n==="graph"?th:eh,i=n==="graph"?W(ln==="narrow"?6.4:0,ln==="narrow"?5.5:0,0):W(ln==="narrow"?-5.2:0,ln==="narrow"?-7.4:0,0);e.position.copy(yd[n]).add(i).add(W(t.x,t.y,t.z));let s=n==="surface"?Vc:1;e.rotation.set(ni.degToRad(t.pitch*s),ni.degToRad(t.yaw*s),0,"YXZ"),n==="surface"&&$c.position.copy(i).add(W(t.x,t.y,t.z))}Sn.updateMatrixWorld(!0)}function js(n){let t=[],e=(r,a,o,l,c,h)=>{for(let p of[-c/2,c/2])for(let u of[-h/2,h/2])t.push(r.localToWorld(W(a+p,o+u,l)))},i=()=>{let r=Sm();t.push(...BS(r.p,r.q,Vn.w*Bc()*(ln==="narrow"?1:wd),Vn.h*Bc()))},s=[-6.8,3.85,-1.9,10,10.2];if((n==="graph"||n==="all"||n==="mse")&&e(Nt,...s),n==="mse"){let r=ln==="narrow"?vm:ym,a=Mm();e(Nt,r.x,r.y,r.z,Vn.w*a*fd,Vn.h*a)}if(n==="focus"){let r=_m();e(Nt,r.x,r.y,-1.9,r.w,r.h)}if(n==="errors"&&e(Nt,Xt(6.2,480).x,Xt(6.2,480).y,-1.9,11.6,5.6),n==="update"){for(let r of vn.slice(0,3)){let a=Ee(r.w,r.b);for(let o of[-2.2,2.2])for(let l of[-1.2,.8])t.push(Gt.localToWorld(a.clone().add(W(o,l,0))))}e(Gt,Nc.x,Nc.y,Nc.z,8.4*pd,1.1*pd)}if(n==="card"&&e(Nt,Je.center.x,Je.center.y,Je.center.z,Je.w*1.6,Je.h*1.15),n==="photo"&&(e(Nt,...s),e(Nt,Je.center.x,Je.center.y,Je.center.z,Je.w,Je.h)),n==="surface"||n==="all"){for(let r of[-25,8])for(let a of[430,650])t.push(Gt.localToWorld(Ee(r,a))),t.push(Gt.localToWorld(Ee(r,a,0)));e(Gt,5.3,Em,-2.2,6.2,.45),e(Gt,5.3,Rm,-2.2,7.2,.35),e(Gt,5.3,Td,-2.2,8.4,1.1),i(),e(Gt,9.4,6.35,-3.8,3,.36),e(Gt,.35,0,-2.7,2.2,.35),e(Gt,6,-.82,3.8,2.8,.37)}return t}function Mi(n,t,e=5.5){let i=n.p.clone().sub(n.t).normalize(),s=W().crossVectors(W(0,1,0),i).normalize(),r=W().crossVectors(i,s),a=Math.tan(ni.degToRad(te.fov/2))*.93,o=a*Ai.frac,l=a*te.aspect,c=e;for(let h of js(t)){h.sub(n.t);let p=h.dot(i);c=Math.max(c,p+Math.abs(h.dot(s))/l,p+Math.abs(h.dot(r))/o)}return{t:n.t,p:n.t.clone().addScaledVector(i,c)}}var Gc=On[2].start+5.5,Hn=[{id:"card",label:"\uAC00\uACA9\uD45C",start:0,view:3,base:"card"},{id:"photo",label:"\uAC00\uACA9\uD45C \u2192 \uADF8\uB798\uD504",start:De.graphIn+1.1,view:De.xmark[1],base:"photo"},{id:"intro",label:"\uAD00\uCE21\uAC12 \xB7 \uCD95",start:De.fadeFrom+1.3,view:17,base:"front"},{id:"prediction",label:"\uC608\uCE21\uD568\uC218 \xB7 \uC608\uCE21\uAC12",start:20,view:27,base:"front"},{id:"errors",label:"\uC624\uCC28 \xB7 \uD655\uB300",start:On[1].start,view:On[1].start+2,base:"errors"},{id:"mse",label:"MSE \uC2DD \uC18C\uAC1C",start:ri.start+.6,view:ri.start+3,base:"mse"},{id:"focus",label:"\uC624\uCC28 \uD558\uB098 \xB7 \uC81C\uACF1",start:Le.focus+1.3,view:Le.focus+4,base:"focus"},{id:"squares",label:"\uC138 \uC624\uCC28 \xB7 \uC81C\uACF1",start:Le.out+1.3,view:Le.out+2,base:"errors"},{id:"mseFill",label:"\uC0AC\uAC01\uD615 \u2192 MSE \uC2DD",start:Le.fly+1.6,view:Le.arrive+.6,base:"mse"},{id:"surface",label:"\uC190\uC2E4 \uACE1\uBA74 \xB7 \uC815\uBA74",start:On[2].start,view:On[2].start+3,base:"surfaceFront"},{id:"turn",label:"\uACE1\uBA74 \uB3CC\uB9B0 \uB4A4 \xB7 \uB450 \uADF8\uB798\uD504",start:Gc,view:Gc+.6,base:"both"},{id:"demo",label:"W\uB9CC \xB7 b\uB9CC \uBC14\uAFB8\uAE30",start:to[0].start,view:to[0].start+2,base:"both"},{id:"learning",label:"\uAC31\uC2E0\uC2DD \xB7 W \uB300\uC785",start:Oe.start,view:Oe.w+3,base:"update"},{id:"applyW",label:"W \uC801\uC6A9",start:Oe.wApply+.5,view:Oe.wApply+3.5,base:"descent"},{id:"learningB",label:"b \uB300\uC785\xB7\uACC4\uC0B0",start:Oe.b+.5,view:Oe.b+3,base:"update"},{id:"applyB",label:"b \uC801\uC6A9",start:Oe.bApply+.5,view:Oe.bApply+3.5,base:"descent"},{id:"descentRun",label:"\uACBD\uC0AC\uD558\uAC15 \uBC18\uBCF5",start:Oe.apply,view:Oe.apply+2,base:"descent"},{id:"result",label:"\uD559\uC2B5 \uACB0\uACFC",start:nn.settled,view:nn.settled+1,base:"descent"}],lo=1.3,Dm=1.8,Nm="linear3d.cameraShots.v13b",li={};try{li=JSON.parse(localStorage.getItem(Nm)||"{}")||{}}catch{li={}}var ra=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;function Um(n){let t=ln==="narrow";if(n==="front"){let i=Nt.localToWorld(W(-6.3,3.4,-1.9));return Mi({t:i,p:i.clone().add(t?W(0,1.2,11):W(0,1.1,14.5))},"graph")}if(n==="card"){let i=Nt.localToWorld(Je.center.clone());return Mi({t:i,p:i.clone().add(t?W(0,.5,9):W(0,.5,10))},"card")}if(n==="photo"){let i=new Tn().setFromPoints(js("photo")).getCenter(W());return Mi({t:i,p:i.clone().add(t?W(0,1.2,12):W(0,1.1,15))},"photo")}if(n==="surfaceFront"){let i=new Tn().setFromPoints(js("all")).getCenter(W());return Mi({t:i,p:i.clone().add(t?W(0,9,22):W(0,6,21))},"all")}if(n==="update"){let i=new Tn().setFromPoints(js("update")).getCenter(W());return Mi({t:i,p:i.clone().add(t?W(-1,6,15):OS.clone().multiplyScalar(-.7))},"update")}if(n==="errors"){let i=Nt.localToWorld(Xt(6.2,480));return Mi({t:i,p:i.clone().add(t?W(0,.6,8):W(0,.7,9))},"errors")}if(n==="focus"){let i=_m(),s=Nt.localToWorld(W(i.x,i.y,-1.9));return Mi({t:s,p:s.clone().add(W(0,.12,3))},"focus",2.4)}if(n==="mse"){let i=new Tn().setFromPoints(js("mse")).getCenter(W());return Mi({t:i,p:i.clone().add(t?W(0,1.5,12):W(0,1.4,16))},"mse")}let e=new Tn().setFromPoints(js("all")).getCenter(W());return Mi(n==="both"?{t:e.clone().add(W(1.2,0,0)),p:e.clone().add(t?W(-2.5,10,22):W(-7.5,9,20))}:{t:e.clone().add(W(2,-.3,0)),p:e.clone().add(t?W(-2,9,20):W(-6,8,18.5))},"all")}var ea=n=>ln+":"+n;function em(n){let t=li[ea(n)];return t?{p:W(...t.p),t:W(...t.t)}:Um(Hn.find(e=>e.id===n)?.base??n)}var Lm=(n,t)=>!li[ea(Hn[n].id)]&&!li[ea(Hn[t].id)]&&Hn[n].base===Hn[t].base;function nm(n){let t=0;for(;t+1<Hn.length&&n>=Hn[t+1].start-lo;)t++;for(;t>0&&Lm(t,t-1);)t--;return t}var Qu=0;function Om(n=Ae){let t=n.t??0,e=0;for(;e+1<Hn.length&&t>=Hn[e+1].start-lo;)e++;for(;e>0&&Lm(e,e-1);)e--;let i=em(Hn[e].id);if(e===0)return i;let s=ra(Lt((t-(Hn[e].start-lo))/Dm,0,1));if(s>=1)return i;let r=em(Hn[e-1].id);return{p:r.p.lerp(i.p,s),t:r.t.lerp(i.t,s)}}function qS(n){return gt.view==="graph"||gt.view==="surface"?Xm(gt.view):Om(n)}function Wc(n,t=!1){if(gt.freeCamera&&!t)return;let e=qS(n);te.position.copy(e.p),Ot.target.copy(e.t),Ot.update()}function YS(){let n=ts(gt.time);if(gt.experiment){let{w:t,b:e}=gt.experiment;return{...n,w:t,b:e,x:6,y:t*6+e,mse:Yn(t,e),custom:!0,parameterDemo:null,scene:null,heading:n.chapter.title,reveal:{residuals:1,squares:0,surface:n.t>=nn.surface?1:0,path:0},caption:n.t>=nn.surface?"W\xB7b \uC190\uC7A1\uC774\uB098 \uACE1\uBA74\uC758 \uC810\uC744 \uC6C0\uC9C1\uC5EC, \uAC19\uC740 W\xB7b\uAC00 \uB9CC\uB4DC\uB294 \uC624\uCC28\uB97C \uBE44\uAD50\uD574 \uBCF4\uC138\uC694.":"W\uC640 b\uB97C \uC6C0\uC9C1\uC5EC \uC608\uCE21\uD568\uC218\uC640 \uC138 \uC624\uCC28\uAC00 \uC5B4\uB5BB\uAC8C \uBC14\uB00C\uB294\uC9C0 \uBE44\uAD50\uD574 \uBCF4\uC138\uC694."}}return n}var Ct={w:0,b:0,mse:0,line:0,prev:{},last:0,shown:!1};function KS(n){let t=performance.now(),e=Ct.last?Math.min(.1,(t-Ct.last)/1e3):0;Ct.last=t,Ct.phase=t/1e3;let i=n.custom?null:[ts(Math.max(0,n.t-.06)),ts(Math.min(Cn,n.t+.06))];for(let[s,r,a]of[["w",n.w,1e-4],["b",n.b,1e-4],["mse",n.mse,.005]]){let o=Ct.prev[s],l=i?Math.abs(i[0][s]-i[1][s])>1e-5:o!==void 0&&Math.abs(r-o)>a;Ct[s]=l?1:Math.max(0,Ct[s]-e/.6),Ct.prev[s]=r}Ct.line=Math.max(Ct.w,Ct.b)}var jS=()=>Qc||!gt.playing?1:.55+.45*Math.cos(Ct.phase*Math.PI*2*2.2);function ZS(n){let t=n.custom?n.t>=nn.surface?1:0:Ie(Lt((n.t-nn.surface)/1.4,0,1)),e=ln==="narrow"?vm:ym,i=Sm();Ht.mesh.position.copy(Nt.localToWorld(e.clone())).lerp(i.p,t),Ht.mesh.quaternion.slerpQuaternions(Nt.getWorldQuaternion(new ze),i.q,t);let s=Mm();return Ht.mesh.scale.setScalar(s+(Bc()-s)*t),Ht.mesh.updateMatrixWorld(!0),t}var io=wi(Gt,X.w,.028),so=wi(Gt,X.b,.028);for(let n of[io,so])n.material=new ke({color:n.material.color,depthTest:!1,toneMapped:!1,transparent:!0}),n.renderOrder=9,n.visible=!1;var im=(n,t,e)=>Ie(Lt((n-t)/.6,0,1))*(1-Ie(Lt((n-e)/.6,0,1)));function JS(n){let t=Oe,e=n.custom?0:Math.max(im(n.t,t.start,t.wApply),im(n.t,t.b,t.bApply));Kn.mesh.scale.setScalar(1+(pd-1)*e),Kn.mesh.position.copy(HS).lerp(Nc,e);let i=qc(n),s=!!i&&["rule","w","wcalc"].includes(i.id),r=!!i&&["rule","b","bcalc"].includes(i.id);io.visible=s,so.visible=r;let a=o=>Ee(o.w,o.b).add(W(0,.09,0));if(s){let o=a(vn[0]),l=5,c=W(l*8.1/33,l*wc.w.gradient/ir*5.5,0);ss(io,o.clone().sub(c),o.clone().add(c)),io.material.opacity=i.id==="rule"?.55:1}if(r){let o=i.id==="rule"?vn[0]:vn[1],l=i.id==="rule"?Yr(o.w,o.b).b:wc.b.gradient,c=a(o),h=40,p=W(0,h*l/ir*5.5,-h*7.6/220);ss(so,c.clone().sub(p),c.clone().add(p)),so.material.opacity=i.id==="rule"?.55:1}}var Zs={w:[0,1,2].map(()=>wi(Sn,X.w,.026)),b:[0,1,2].map(()=>wi(Sn,X.b,.026))};for(let[n,t]of Object.entries(Zs))for(let e of t)e.material=new ke({color:X[n],transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),e.renderOrder=12,e.visible=!1;var Ys={draw:.2,drawFor:1.1,hold:3.2,fadeFor:.6};function QS(n,t){if(n.custom)return{grow:0,alpha:0};let e=to[t==="w"?0:1],i=n.t-e.start;return i<Ys.draw||i>Ys.hold+Ys.fadeFor?{grow:0,alpha:0}:{grow:Ie(Lt((i-Ys.draw)/Ys.drawFor,0,1)),alpha:1-Lt((i-Ys.hold)/Ys.fadeFor,0,1)}}function Fm(n){for(let t of["w","b"]){let e=QS(n,t),i=Zs[t],s=Be.chips?.[t],r=Ht.chips?.[t];if(!(e.alpha>.001&&s&&r&&Ht.mesh.visible&&Nd(n)==="live")){for(let g of i)g.visible=!1;continue}let o=Be.mesh.localToWorld(s.clone()),l=Ht.mesh.localToWorld(r.clone()),c=Math.min(o.y,l.y)-.42,h=ln==="narrow"?[o,l]:[o,W(o.x,c,o.z),W(l.x,c,l.z),l],p=h.slice(1).map((g,y)=>h[y].distanceTo(g)),f=p.reduce((g,y)=>g+y,0)*e.grow;i.forEach((g,y)=>{if(y>=p.length){g.visible=!1;return}let m=Lt(f/Math.max(1e-6,p[y]),0,1);f-=p[y],ss(g,h[y],h[y].clone().lerp(h[y+1],m)),g.visible=g.visible&&m>0,g.material.opacity=e.alpha})}}function $S(n){return n.custom?0:Ie(Lt((n.t-On[1].start)/.8,0,1))*(1-Ie(Lt((n.t-Le.arrive)/1,0,1)))}function Bm(n){return n.custom?0:Ie(Lt((n.t-Le.focus)/1.4,0,1))*(1-Ie(Lt((n.t-Le.out)/1.6,0,1)))}var eo={focusGrow:Le.focus+1.7,focusCalc:Le.focus+2.9,focusResult:Le.focus+3.9,restGrow:Le.out+.8,restCalc:Le.out+1.8};function Id(n){return oe.map((t,e)=>{if(n.custom)return{grow:0,fly:0,alpha:0,tag:0,tagScale:.55,step:0};let i=n.t,s=e===bd,r=Ie(Lt((i-(s?eo.focusGrow:eo.restGrow))/1,0,1)),a=ra(Lt((i-Le.fly)/(Le.arrive-Le.fly),0,1)),o=r>0?1-Lt((i-Le.arrive)/.35,0,1):0,l=s?eo.focusCalc:eo.restCalc,c=Lt((i-l)/.4,0,1)*(1-Lt((i-Le.fly)/.4,0,1)),h=s&&i<eo.focusResult?0:1;return{grow:r,fly:a,alpha:o,tag:c,tagScale:s?.34+(.8-.34)*(1-Bm(n)):.8,step:h}})}function Hm(){Ae=YS();let n=Ae;KS(n),Ct.thin=$S(n),Ct.focus=Bm(n);let t=n.custom?n.t>=Gc-lo?1:0:ra(Lt((n.t-(Gc-lo))/Dm,0,1));t!==Vc&&(Vc=t,ah()),ZS(n),JS(n),Fm(n);let e=Xt(0,n.b),i=Xt(12,n.b+12*n.w),s=Xt(6,n.y);ss(Fn,e,i),Ps.position.copy(i),Cs.position.copy(e),ud.mesh.position.copy(i).add(W(.35,.18,.02)),dd.mesh.position.copy(e).add(W(.35,-.38,.02)),no.position.copy(s),ju(Sd,[Xt(6,250),s]),Md.mesh.position.copy(s).add(W(2,.55+Math.max(0,n.w)*.07,.03));let r=n.parameterDemo?.axis,a=r?X[r]:X.line;sa.visible=!!r,ho.visible=r==="w",Fn.material.color.setHex(a);let o=(1-.4*Ct.thin)*(1-.5*Ct.focus);Ps.scale.setScalar((r==="w"?.15:.12)*o),Cs.scale.setScalar((r==="b"?.15:.115)*o),ud.mesh.scale.setScalar(1-.5*Ct.focus),dd.mesh.scale.setScalar(1-.5*Ct.focus);for(let _ of["w","b"])Hc[_].visible=r===_;Tc(ih,n.reveal.residuals);let l=Ct.thin,c=Ct.focus;Fn.userData.r=.031*(1-.5*l)*(1-.4*c);let h=Id(n),p=Ht.mesh.scale.x,u=1-.55*c;oe.forEach((_,w)=>{let P=Xt(_.x,_.y),L=Xt(_.x,n.w*_.x+n.b),O=Ad(_,n.w,n.b),B=h[w],C=Zr[w];ro[w].userData.r=.028*(1+.25*l)+(.012-.028*(1+.25*l))*c,ss(ro[w],P,L);let k=Math.max(.004,Math.abs(O)*xm),q=Math.max(.002,k*B.grow),j=k*CS*p,st=q+(j-q)*B.fly,Y=k+(j-k)*B.fly,tt=P.clone().lerp(L,.5),nt=((Dc[w].textW||.5)/2+.1)*u,Dt=Math.min(1,B.grow*4)*(1-B.fly);Dc[w].mesh.scale.setScalar(u),Dc[w].mesh.position.copy(tt).add(W(nt*(1-2*Dt),0,.02)),C.g.position.copy(tt).add(W(q/2,0,.01)).lerp(PS(w),B.fly),C.g.scale.set(st,Y,1),IS(C,st,Y),Tc(C.g,B.alpha);let wt=B.tagScale;C.tag.mesh.scale.setScalar(wt),C.tag.mesh.position.copy(tt).add(W(q+.08*wt+(C.tag.textW||1)*wt/2,0,.02)),C.tag.mesh.visible=B.tag>.001,C.tag.mesh.material.opacity=B.tag}),Fc.visible=h.some(_=>_.alpha>.001);let f=n.reveal.surface;Gt.visible=f>.001,$c.visible=Gt.visible,$r.scale.y=.04+.96*f,Tc($r,f),sh.material.opacity=f*(r?.38:.62),Tc(Zn,f);for(let _ of[Ed.mesh,Pm.mesh,Pd.mesh,Kn.mesh])_.material.opacity=f;Oi.material.color.setHex(r?X[r]:15785983),sr.material.color.setHex(r?X[r]:X.loss),Jp.material.color.setHex(r?X[r]:X.loss);let g=Ee(n.w,n.b);g.y*=.04+.96*f,Oi.position.copy(g).add(W(0,.09,0)),sr.position.copy(g).add(W(0,.02,0)),Rd.position.set(g.x,.02,g.z),ju(Jp,[W(g.x,.02,g.z),g]);let y=Lt(n.iteration??0,0,80),m=Math.floor(y),d=!n.custom&&n.t>=nn.descent,b=g.clone().add(W(0,.06,0)),E=_=>{if(y<=_)return null;let w=Math.min(1,y-_),P=Qr.slice(_*16,_*16+Math.floor(w*16)+1);return w<1&&P.push(b),P.length>1?P:null};if(["w","b"].forEach((_,w)=>{let P=d&&E(w);Li[_].visible=!!P,P&&VS(Li[_],P)}),d&&y>2){let _=Qr.slice(32,Math.min(Math.floor(y*16)+1,Qr.length));_.push(b),kS(_)}tr.visible=d&&y>2,XS(n),Qp.visible=n.t>=nn.thirdStep||n.custom,zS.mesh.visible=Qp.visible;let S=ao[Math.min(80,m+1)],M=Ee(S.w,S.b).sub(g);Kr.position.copy(g).add(W(0,.13,0)),Kr.visible=n.t>=nn.descent&&!n.custom&&m<80&&M.length()>.02,Kr.visible&&(Kr.setDirection(M.clone().normalize()),Kr.setLength(Math.min(M.length(),1.4),.15,.08)),Sn.updateMatrixWorld();let A=Gt.localToWorld(g.clone()),R=Nt.localToWorld(Xt(12,n.w*12+n.b));return ju(Ju,[R,R.clone().lerp(A,.5).add(W(0,.3,.5)),A]),Ju.material.color.setHex(r?X[r]:X.loss),Ju.material.opacity=f*(r?.3:.13),tM(n),In&&kn==="surface"&&n.reveal.surface<.01&&(kn="graph",er()),!gt.freeCamera&&!rn&&Wc(n),n}var sm=null;function Rc(n,t){n.visible=t>.001,n.traverse(e=>{var r;let i=e.material;if(!i)return;(r=i.userData).solid??(r.solid={transparent:i.transparent,opacity:i.opacity,depthWrite:i.depthWrite});let s=i.userData.solid;t>=.999?Object.assign(i,s):(i.transparent=!0,i.opacity=t*s.opacity,i.depthWrite=!1)})}function zm(n){if(n.custom||Qc)return 0;let t=Ji+.6,e=Ji+5;return n.t<t||n.t>=e?0:.5-.5*Math.cos((n.t-t)*Math.PI*2*1.6)}function tM(n){let t=n.custom?null:n.scene,e=t?t.line:1,i=t?t.prediction:1,s=Ct.thin||0,r=Ct.focus||0,a=n.custom?1:Lt((n.t-ri.start)/.8,0,1),o=n.custom?n.t>=nn.surface?1:0:Ie(Lt((n.t-nn.surface)/1.4,0,1));Ct.dock=o,Ht.mesh.visible=a>.001,Ht.mesh.material.opacity=a,Ht.mesh.visible&&!Ct.shown&&(Ct.mse=1),Ct.shown=Ht.mesh.visible;let l=jS(),c=Ct.line*l,h=Ct.w>.05&&Ct.b<.05?"w":Ct.b>.05&&Ct.w<.05?"b":null;h&&c>.01&&Fn.material.color.setHex(X[h]);let p=Fn.material.color.getHex();Fn.material.emissive.setHex(p),Fn.material.emissiveIntensity=.12+(h?.45:.95)*c,Ks.position.copy(Fn.position),Ks.quaternion.copy(Fn.quaternion),Ks.scale.set(.1*(1-.5*s),Fn.scale.y,.1*(1-.5*s)),Ks.material.color.setHex(p),Ks.material.opacity=.38*c*e,Ks.visible=Fn.visible&&c*e>.01;for(let m of ro)m.material.emissive.setHex(X.loss),m.material.emissiveIntensity=.1+.9*c*n.reveal.residuals;let u=zm(n);no.scale.setScalar(.1*(1-.55*s)*(1+Math.max(.55*c,.9*u))),no.material.emissiveIntensity=.18+1.3*u;for(let[m,d]of[[Ps,"w"],[Cs,"b"]])m.material.emissiveIntensity=.18+1.1*Ct[d]*l;let f=Math.max(Ct.line,Ct.mse)*l;sr.scale.setScalar(1+.6*f),Oi.scale.setScalar(.14*(1+.35*f));for(let m of[Fn,Ps,Cs,ud.mesh,dd.mesh,Be.mesh])Rc(m,e);for(let m of[no,Sd,Md.mesh])Rc(m,i);let g=n.custom?0:1-Lt((n.t-De.fadeFrom)/(De.fadeTo-De.fadeFrom),0,1);oi.mesh.visible=g>.001,oi.mesh.material.opacity=g,oi.mesh.visible&&oi.highlight(oe.map((m,d)=>({row:Ec(n.t,De.rows[d],De.rowFor),x:Ec(n.t,De.xmark[d],De.lead+De.flyFor)}))),Rc(jn,n.custom?1:Ie(Lt((n.t-De.graphIn)/.7,0,1)));for(let m of dm)m.mesh.scale.setScalar(1-.6*r);oe.forEach((m,d)=>{let b=n.custom?1:Lt((n.t-De.fly[d])/De.flyFor,0,1),E=b>0&&b<1,S=b>=1,M=mm[d],A=De.xmark[d],R=n.custom?0:Lt((n.t-A)/.25,0,1)*(1-Lt((n.t-(De.fly[d]+De.flyFor+.6))/.5,0,1)),_=Ie(Lt((n.t-A)/De.lead,0,1));ss(M.guide,Xt(m.x,250),Xt(m.x,250+(m.y-250)*_));for(let C of[M.guide,M.tick,M.tag.mesh])Rc(C,R);R<=.001&&(M.guide.visible=!1),M.tick.scale.setScalar(.07*(1+.6*Ec(n.t,A,.8))),M.tag.set(`${m.x}\uAC1C\uC6D4`,es,128,Ec(n.t,A,1.2));let w=hd[d]??Je.center,P=Xt(m.x,m.y).add(W(.13,.27,.015)),L=ra(b),O=gm[d];O.mesh.visible=E,O.mesh.position.copy(w).lerp(P,L).add(W(0,Math.sin(Math.PI*L)*1.1,.2)),O.mesh.scale.setScalar(1-.35*L);let B=S?Math.max(0,1-(n.t-De.fly[d]-De.flyFor)/.6):0;cd[d].visible=S,Ic[d].mesh.visible=S,cd[d].scale.setScalar(.087*(1-.45*s)*(1-.45*r)*(1+(n.custom?0:.9*Math.sin(Math.PI*Lt(B,0,1))))),Ic[d].mesh.scale.setScalar(1-.55*r),Ic[d].mesh.position.copy(Xt(m.x,m.y)).add(W(.13*(1-.55*r),.27*(1-.55*r),.015))});let y=!!t?.axes;if(sm!==y){sm=y;let m=y?X.ink:X.muted;for(let[d,b]of[[RS,"\uCD9C\uC2DC \uD6C4 \uAC1C\uC6D4"],[ES,"\uB2EC\uB7EC"]])d.key="",d.set(b,m,128),d.mesh.scale.setScalar(y?1.25:1);for(let d of[fm,pm])d.material.color.setHex(y?X.ink:6912918)}}function km(n,t,e,i,s,r,a,o=0){n.save(),n.beginPath(),n.roundRect(t,e,i,s,20),n.fillStyle=qe(r),n.globalAlpha=a?.3:.15+.12*o,n.fill(),(a||o>.02)&&(n.globalAlpha=a?.95:.3+.7*o,n.lineWidth=a?4:3+3*o,n.strokeStyle=qe(r),n.shadowColor=qe(r),n.shadowBlur=42*o,n.stroke(),o>.02&&n.stroke()),n.restore()}function on(n,t,e,i,s,r,a=500,o="center"){n.font=`${a} ${s}px Pretendard, sans-serif`,n.fillStyle=qe(r),n.textAlign=o,n.fillText(t,e,i)}function an(n,t,e,i=500){return n.font=`${i} ${e}px Pretendard, sans-serif`,n.measureText(t).width}function Vm(n,t,e){let i=n.reduce((a,o)=>a+o.w,0),s=(t-i)/2;e?.(s,i);let r=s;for(let a of n)a.draw(r,r+a.w/2),r+=a.w;return{left:s,total:i}}function Dd(n,t,e,i,s){n.save(),n.beginPath(),n.roundRect(t,e,i,s,26),n.fillStyle="#110f20",n.globalAlpha=.9,n.fill(),n.globalAlpha=1,n.lineWidth=4,n.strokeStyle="#3b4c66",n.stroke(),n.restore()}var Gm=(n,t,e,i,s)=>W((t/n.canvas.width-.5)*i,(.5-e/n.canvas.height)*s,0);function eM(n,t){let{ctx:e,canvas:i,texture:s}=n,r=t.parameterDemo?.axis,a=24,o=192,l=74,c=170;e.clearRect(0,0,i.width,i.height),e.textBaseline="alphabetic";let h={},p=(f,g,y,m,d,b=0,E)=>({w:f,draw:(S,M)=>{km(e,S,a,f,o,g,d,b),on(e,y,M,l,34,g),m(M),E&&(h[E]=Gm(n,M,a+o,7.9,1.05))}}),u=f=>({w:84,draw:(g,y)=>on(e,f,y,128,58,X.muted)});Vm([p(300,X.line,"\uC608\uCE21\uAC00\uACA9",f=>on(e,"Y",f,c,70,X.line,600)),u("="),p(300,X.w,"W",f=>ld(e,t.w,f,c,X.w,74,44),r==="w",Ct.w,"w"),u("\xD7"),p(330,X.muted,"\uCD9C\uC2DC \uD6C4 \uAE30\uAC04",f=>on(e,"X",f,c,70,X.ink,600)),u("+"),p(320,X.b,"b",f=>ld(e,t.b,f,c,X.b,74,44),r==="b",Ct.b,"b")],i.width,(f,g)=>Dd(e,f-36,6,g+72,228)),n.chips=h,s.needsUpdate=!0}var $u={expand:ri.expand,values:Le.arrive,calc:$i(17)},Wm=oe.map(n=>ae.w*n.x+ae.b-n.y),nM=Wm.map(n=>Math.round(n*n)),iM=Yn(ae.w,ae.b);function Nd(n){return n.custom||n.t>=nn.surface?"live":n.t<$u.expand?"sigma":n.t<$u.values?"expand":n.t<$u.calc?"values":"calc"}var Uc={sigma:"sigma",sum:"sum",expand:"fraction"};function sM(n,t){if(t==="sigma")return{a:"sigma",b:"sigma",k:0};let e=n.t,[i,s]=Ku.sum,[r,a]=Ku.fraction,o=(l,c,h)=>({a:l,b:c,k:Qc?h<.5?0:1:ra(h)});return e<i?{a:"sigma",b:"sigma",k:0}:e<s?o("sigma","sum",(e-i)/(s-i)):e<r?{a:"sum",b:"sum",k:0}:e<a?o("sum","fraction",(e-r)/(a-r)):{a:"fraction",b:"fraction",k:0}}var rM=n=>n.k<=0?n.a:n.k>=1?n.b:n.a+">"+n.b,Xc="(\uC624\uCC28  )";function td(n,t){let i={},s=(g,y,m)=>{let d=g;for(let b of m)b.at(d,y),d+=b.w},r=(g,y,m,d,b=500,E=20,S=m*.34)=>({w:an(n,y,m,b)+E*2,draw:(M,A)=>{i[g]={type:"text",text:y,x:A,y:140+S,size:m,color:d,weight:b,align:"center"}}}),a=(g,y,m,d)=>({w:an(n,y,m),at:(b,E)=>{i[g]={type:"text",text:y,x:b,y:E,size:m,color:d,weight:500,align:"left"}}}),o=(g,y,m)=>({w:an(n,Xc,m)+an(n,"2",m*.55)+2,at:(d,b)=>{i["term"+g]={type:"term",x:d,y:b,size:m,sub:y}}}),l=g=>[o(1,"1",g),a("plus1","  +  ",g,X.muted),o(2,"2",g),a("plus2","  +  ",g,X.muted),o(3,"3",g)],c=(g,y)=>{let m=g.reduce((b,E)=>b+E.w,0),d=Math.max(m,an(n,"3",y))+28;return{w:d+28,draw:(b,E)=>{s(E-m/2,122,g),i.bar={type:"bar",x:E,y:138,w:d,h:4},i.den={type:"text",text:"3",x:E,y:160+y*.8,size:y,color:X.ink,weight:500,align:"center"}}}},h=[r("mse","MSE",62,X.loss,600),r("eq","=",56,X.muted,500,8)];if(t==="fraction")h.push(c(l(52),52));else if(h.push(c([a("one","1",50,X.ink)],50)),t==="sigma")h.push({w:100,draw:(g,y)=>{i.sigma={type:"text",text:"\u2211",x:y,y:178,size:110,color:X.ink,weight:400,align:"center"},i.sigTop={type:"text",text:"3",x:y,y:74,size:30,color:X.muted,weight:500,align:"center"},i.sigBot={type:"text",text:"i = 1",x:y,y:230,size:30,color:X.muted,weight:500,align:"center"}}},{w:an(n,"(\uC624\uCC28 )",58)+40,draw:g=>o(1,"i",58).at(g+12,160)});else{let g=l(58),y=g.reduce((m,d)=>m+d.w,0);h.push(r("parenL","(",100,X.muted,300,4,48),{w:y+16,draw:m=>s(m+8,160,g)},r("parenR",")",100,X.muted,300,4,48))}let p=h.reduce((g,y)=>g+y.w,0),u=(n.canvas.width-p)/2,f=u;for(let g of h)g.draw(f,f+g.w/2),f+=g.w;return{T:i,left:u,total:p}}function rm(n,t){return[t.x+an(n,Xc,t.size)/2,t.y-t.size*.36]}function aM(n,t){let{ctx:e,canvas:i}=n,s=td(e,t.a),r=t.k>0?td(e,t.b):s,a=t.k,o=(u,f)=>u+(f-u)*a,l=u=>/^(term[23]|plus[12])$/.test(u)&&s.T.term1?s.T.term1:null;Dd(e,o(s.left,r.left)-30,12,o(s.total,r.total)+60,236);let c={},h=r.T.mse.x-s.T.mse.x;for(let u of new Set([...Object.keys(s.T),...Object.keys(r.T)])){let f=s.T[u],g=r.T[u],y,m;if(f&&g)y={...g,x:o(f.x,g.x),y:o(f.y,g.y),size:o(f.size??0,g.size??0),w:o(f.w??0,g.w??0)},m=1;else if(g){let d=l(u);y=d?{...g,x:d.x+(g.x-d.x)*a,y:d.y+(g.y-d.y)*a,size:d.size+(g.size-d.size)*a}:{...g,x:g.x-h*(1-a)},m=d?Lt((a-.15)/.7,0,1):Lt((a-.55)/.45,0,1)}else y={...f,x:f.x+h*a},m=Lt(1-a/(/^paren/.test(u)?.35:.5),0,1);if(!(m<=.001)){if(e.save(),e.globalAlpha=m,y.type==="bar")e.fillStyle=qe(X.muted),e.fillRect(y.x-y.w/2,y.y,y.w,y.h);else if(y.type==="text")on(e,y.text,y.x,y.y,y.size,y.color,y.weight,y.align);else{let d=an(e,Xc,y.size),b=(E,S)=>{e.globalAlpha=m*S,on(e,E,y.x+d-an(e,")",y.size)-2,y.y+y.size*.28,y.size*.55,X.loss,500,"right")};on(e,Xc,y.x,y.y,y.size,X.loss,500,"left"),on(e,"2",y.x+d+2,y.y-y.size*.42,y.size*.55,X.loss,500,"left"),f&&g&&f.sub!==g.sub?(b(f.sub,1-a),b(g.sub,a)):b(y.sub,1),c[u]=rm(e,y)}e.restore()}}let p=td(e,"fraction");n.anchors=[1,2,3].map(u=>rm(e,p.T["term"+u])).map(([u,f])=>W((u/i.width-.5)*Vn.w,(.5-f/i.height)*Vn.h,0)),n.termsDrawn=Object.fromEntries(Object.entries(c).map(([u,[f,g]])=>[u,W((f/i.width-.5)*Vn.w,(.5-g/i.height)*Vn.h,0)])),n.form=rM(t),n.contentW=o(s.total,r.total)+60}function Lc(n,t,e,i){let{ctx:s,canvas:r,texture:a}=n,o=140;if(s.clearRect(0,0,r.width,r.height),s.textBaseline="alphabetic",e in Uc){aM(n,i||{a:Uc[e],b:Uc[e],k:0}),n.chips={},a.needsUpdate=!0;return}n.form=e,n.termsDrawn={};let l=(E,S,M,A=500,R=20)=>({w:an(s,E,S,A)+R*2,draw:(_,w)=>on(s,E,w,o+S*.34,S,M,A)}),c=(E,S)=>({w:E.map(([A,,R])=>an(s,A,S)+(R?an(s,R,S*.55)+2:0)).reduce((A,R)=>A+R,0),draw:(A,R)=>{let _=A;E.forEach(([w,P,L,O],B)=>{on(s,w,_,R,S,P,500,"left");let C=an(s,w,S);O&&on(s,O,_+C-an(s,")",S)-2,R+S*.28,S*.55,P,500,"right"),L&&(on(s,L,_+C+2,R-S*.42,S*.55,P,500,"left"),C+=an(s,L,S*.55)+2),_+=C})}}),h=(E,S,M,A=X.ink)=>{let R=c(E,M),_=Math.max(R.w,an(s,S,M))+28;return{w:_+28,draw:(w,P)=>{R.draw(P-R.w/2,o-18),s.fillStyle=qe(X.muted),s.fillRect(P-_/2,o-2,_,4),on(s,S,P,o+20+M*.8,M,A)}}},p={},u=(E,S,M,A,R=0,_)=>({w:A+16,draw:(w,P)=>{km(s,w+8,o-74,A,128,M,!1,R),on(s,E,P,o-34,30,M),ld(s,S,P,o+38,M,56,34),_&&(p[_]=Gm(n,P,o+54,Vn.w,Vn.h))}}),f=(E,S,M)=>[M?`(${E}  )`:`(${E})`,S,"2",M],g=["  +  ",X.muted],y=[l("MSE",62,X.loss,600),l("=",56,X.muted,500,8)],m=oe.map(E=>t.w*E.x+t.b-E.y),d=E=>Fe(Number(E.toFixed(1)));e==="values"?y.push(h(Wm.flatMap((E,S)=>[...S?[g]:[],f(Fe(E),X.loss)]),"3",54)):e==="calc"?y.push(h([[nM.join(" + "),X.ink]],"3",54),l("=",56,X.muted,500,8),u("MSE",iM,X.loss,170,Ct.mse),l("\uB2EC\uB7EC\xB2",40,X.muted,500,6)):(y.length=0,y.push(l("MSE",58,X.loss,600,6),l("(",80,X.muted,300,2),u("W",t.w,X.w,190,Ct.w,"w"),l(",",56,X.muted,500,4),u("b",t.b,X.b,210,Ct.b,"b"),l(")",80,X.muted,300,2),l("=",54,X.muted,500,8),h(m.flatMap((E,S)=>[...S?[g]:[],f(d(E),X.loss)]),"3",46),l("=",54,X.muted,500,8),u("MSE",t.mse,X.loss,250,Ct.mse),l("\uB2EC\uB7EC\xB2",34,X.muted,500,4)));let b=Vm(y,r.width,(E,S)=>Dd(s,E-30,12,S+60,236));n.contentW=b.total+60,n.chips=p,a.needsUpdate=!0}var ns=new ge(new Yi(400,300),new ke({color:854807,transparent:!0,opacity:0,depthTest:!1,depthWrite:!1}));ns.renderOrder=25;ns.visible=!1;Sn.add(ns);function oM(n){let t=n.custom?0:ra(Lt((n.t-Xp)/1.6,0,1));for(let l of[Be.mesh,Ht.mesh])l.renderOrder=t>0?30:0,l.material.depthTest=t<=0;if(Be.mesh.position.copy(nh),Be.mesh.quaternion.identity(),ns.visible=t>0,t<=0)return;te.updateMatrixWorld();let e=Math.tan(ni.degToRad(te.fov/2)),i=Math.max(11,Vn.w/(.9*2*e*te.aspect)),s=i*.075,r=(l,c)=>te.localToWorld(W(0,l,-c)),a=Nt.worldToLocal(r(s,i)),o=Nt.getWorldQuaternion(new ze).invert().multiply(te.quaternion);Be.mesh.position.lerp(a,t),Be.mesh.quaternion.slerp(o,t),Ht.mesh.position.lerp(r(-s,i),t),Ht.mesh.quaternion.slerp(te.quaternion,t),ns.position.copy(r(0,i+1.5)),ns.quaternion.copy(te.quaternion),ns.material.opacity=.78*t}var Pc=6217912,ed=16755292,nd=[.8,2.3,3.8];function qc(n){let t=Oe;if(n.custom||n.t<t.start||n.t>=t.apply)return null;let e=n.t;if(e<t.w)return{id:"rule",part:0};let i=s=>e<s+nd[0]?0:e<s+nd[1]?1:e<s+nd[2]?2:3;return e<t.wCalc?{id:"w",part:i(t.w)}:e<t.wApply?{id:"wcalc",part:e<t.wCalc+2.2?0:1}:e<t.b?{id:"wapply",part:0}:e<t.bCalc?{id:"b",part:i(t.b)}:e<t.bApply?{id:"bcalc",part:e<t.bCalc+2.2?0:1}:{id:"bapply",part:0}}function lM(n){let{ctx:t,canvas:e,texture:i}=Kn;t.clearRect(0,0,e.width,e.height),t.textBaseline="middle";let s=(m,d,b=56)=>{t.font=`500 ${b}px Pretendard`;let E=m.map(M=>t.measureText(M.t).width+(M.chip?44:0)),S=900-E.reduce((M,A)=>M+A,0)/2;m.forEach((M,A)=>{let R=E[A];M.chip&&(t.save(),t.beginPath(),t.roundRect(S+4,d-b*.72,R-8,b*1.44,16),t.fillStyle=qe(M.color),t.globalAlpha=M.empty?.08:.2,t.fill(),t.globalAlpha=M.empty?.45:.9,t.lineWidth=M.strong?5:3,M.empty&&t.setLineDash([10,8]),t.strokeStyle=qe(M.color),M.strong&&(t.shadowColor=qe(M.color),t.shadowBlur=24),t.stroke(),t.restore()),t.font=`${M.chip&&!M.empty?600:500} ${b}px Pretendard`,t.fillStyle=qe(M.color),t.globalAlpha=M.empty?.75:1,t.textAlign="center",t.fillText(M.t,S+R/2,d),t.globalAlpha=1,S+=R})},r=(m,d=X.muted)=>({t:m,color:d}),a=(m,d,b={})=>({t:m,color:d,chip:!0,...b}),o=wc,l={w:{name:"W",cur:Fe(o.w.from),rate:"1/288",grad:Fe(o.w.gradient),delta:Fe(o.w.delta),next:Fe(o.w.to),color:X.w},b:{name:"b",cur:Fe(o.b.from),rate:"0.5",grad:Fe(o.b.gradient),delta:Fe(o.b.delta),next:Fe(o.b.to),color:X.b}},c=(m,d)=>{let b=d?X.muted:l[m].color;return[r(l[m].name+" \u2190 ",b),a("\uD604\uC7AC "+l[m].name,b,{empty:!0}),r(" \u2212 "),a("\uD559\uC2B5\uB960",d?X.muted:Pc,{empty:!0}),r(" \xD7 "),a("\uAE30\uC6B8\uAE30",d?X.muted:ed,{empty:!0})]},h=(m,d)=>{let b=l[m];return[r(b.name+" \u2190 ",b.color),d>=1?a(b.cur,b.color):a("\uD604\uC7AC "+b.name,b.color,{empty:!0}),r(" \u2212 "),d>=2?a(b.rate,Pc):a("\uD559\uC2B5\uB960",Pc,{empty:!0}),r(" \xD7 "),d>=3?a(b.grad,ed):a("\uAE30\uC6B8\uAE30",ed,{empty:!0})]},p=(m,d)=>{let b=l[m];return d===0?[r(b.name+" \u2190 ",b.color),r(b.cur,b.color),r(" \u2212 "),a(b.delta,Pc),r("   (\uD559\uC2B5\uB960 \xD7 \uAE30\uC6B8\uAE30)",X.muted)]:[r(b.name+" \u2190 ",b.color),r(b.cur+" \u2212 "+b.delta,X.ink),r(" = "),a(b.next,b.color,{strong:!0})]},u=m=>{let d=l[m];return[r(d.name+" : ",d.color),r(d.cur,X.muted),r("  \u2192  "),a(d.next,d.color,{strong:!0})]},f=m=>[r(l[m].name+" = "+l[m].next,l[m].color)],g=65,y=169;n.id==="rule"?(s(c("w"),g),s(c("b"),y)):n.id==="w"?(s(h("w",n.part),g),s(c("b",!0),y,50)):n.id==="wcalc"?(s(p("w",n.part),g),s(c("b",!0),y,50)):n.id==="wapply"?(s(u("w"),g),s(c("b",!0),y,50)):n.id==="b"?(s(f("w"),g,50),s(h("b",n.part),y)):n.id==="bcalc"?(s(f("w"),g,50),s(p("b",n.part),y)):(s(f("w"),g,50),s(u("b"),y)),i.needsUpdate=!0}function oh(){let n=Ae,t=[n.w,n.b].map(o=>o.toFixed(2)).join("|")+"|"+(n.parameterDemo?.axis??""),e=[Ct.w,Ct.b,Ct.mse].map(o=>Math.round(o*8)).join(",");Be.key!==t+e&&(Be.key=t+e,eM(Be,n)),Md.set(`\uCD9C\uC2DC \uD6C4 6\uAC1C\uC6D4 \u2192 ${Fe(n.y)}\uB2EC\uB7EC`,X.line,128,Math.max(Ct.line,zm(n))),oe.forEach((o,l)=>{let c=n.w*o.x+n.b-o.y;Dc[l].set((c>0?"+":"")+Fe(c),X.loss,128,Ct.line*n.reveal.residuals)}),Id(n).forEach((o,l)=>{let c=Ad(oe[l],n.w,n.b),h=Math.round(c*c);Zr[l].tag.set(o.step?`(${Fe(c)})\xB2 = ${Fe(h,0)}`:`(${Fe(c)})\xB2`,X.loss,128,l===bd&&o.step?1:0)});let i=Nd(n);i!==Ct.stage&&(Ct.stage&&i!=="live"&&(Ct.mse=1),Ct.stage=i);let s=i in Uc?sM(n,i):null;Ct.form=s;let r=i+(s?`|${s.a}>${s.b}:${Math.round(s.k*90)}`:"")+(i==="live"?"|"+t+"|"+n.mse.toFixed(2):"")+"|"+e;Ht.key!==r&&(Ht.key=r,Lc(Ht,n,i,s));let a=qc(n);if(a){let o="up|"+a.id+"|"+a.part;Kn.key!==o&&(Kn.key=o,lM(a))}else if(n.t<nn.descent)Kn.set(n.parameterDemo?n.parameterDemo.axis==="w"?`b = ${Fe(ae.b)} \uACE0\uC815   \xB7   W\uB9CC \uBCC0\uACBD`:`W = ${Fe(ae.w)} \uACE0\uC815   \xB7   b\uB9CC \uBCC0\uACBD`:"W\xB7b \uD55C \uC870\uD569 \u2194 \uC608\uCE21\uD568\uC218 \uD558\uB098",X.ink,65);else if(Kn.key!=="descent"){Kn.key="descent";let{ctx:o,canvas:l,texture:c}=Kn;o.clearRect(0,0,l.width,l.height),o.textAlign="center",o.textBaseline="middle",o.font="500 64px Pretendard",o.fillStyle=qe(X.w),o.fillText("W \u2190 W \u2212 (1/288) \u2202MSE/\u2202W",900,65),o.fillStyle=qe(X.b),o.fillText("b \u2190 b \u2212 0.5 \u2202MSE/\u2202b",900,169),c.needsUpdate=!0}at("caption").textContent=n.caption,at("chapter-title").textContent=n.heading||n.chapter.title,at("chapter-index").textContent=String(On.indexOf(n.chapter)+1).padStart(2,"0")+" / 04",at("seek").value=n.t,hM(n.t),at("seek").style.setProperty("--progress",n.t/Cn*100+"%"),at("time").textContent=ad(n.t),at("duration").textContent=ad(Cn),at("play").textContent=gt.playing?"\u2161":"\u25B6",at("play").setAttribute("aria-label",gt.playing?"\uC77C\uC2DC\uC815\uC9C0":"\uAC15\uC758 \uC7AC\uC0DD"),at("play").setAttribute("aria-pressed",String(gt.playing)),at("mode").textContent=n.custom?"\uC9C1\uC811 \uC870\uC791 \uC911":gt.playing?"\uAC15\uC758 \uC7AC\uC0DD \uC911":n.t===0?"\uC7AC\uC0DD\uD558\uAC70\uB098 \uC7A5\uBA74\uC744 \uC120\uD0DD\uD558\uC138\uC694":`${n.t>=nn.descent?"\uAC31\uC2E0 "+Math.floor(n.iteration??0)+"\uD68C \xB7 ":""}\uC77C\uC2DC\uC815\uC9C0`,document.querySelectorAll("button[data-chapter]").forEach((o,l)=>{o.classList.toggle("active",l===On.indexOf(n.chapter)),o.setAttribute("aria-current",l===On.indexOf(n.chapter)?"step":"false")});for(let o of["w","b"])for(let l of["-range","-number"])document.activeElement!==at(o+l)&&(at(o+l).value=n[o].toFixed(2));In&&er(),Fm(n),at("accessible-equation").textContent=`W=${Fe(n.w)}, b=${Fe(n.b)}, \uCD9C\uC2DC \uD6C4 6\uAC1C\uC6D4 \uC608\uCE21\uAC12=${Fe(n.y)}\uB2EC\uB7EC, MSE=${Fe(n.mse)}\uB2EC\uB7EC \uC81C\uACF1.`,Object.assign(is.dataset,{time:n.t,w:n.w,b:n.b,mse:n.mse,iteration:n.iteration??0,chapter:n.chapter.id}),window.LinearNarration?.render()}var md=[[0,"\uAC00\uACA9 \uB370\uC774\uD130"],[Si.steps[0].end,"\uADF8\uB798\uD504"],[Ji,"\uC608\uCE21\uAC12"],[$i(1),"W\xB7b \uBCC0\uD654"],[On[1].start,"\uC624\uCC28"],[ri.start,"MSE"],[Le.focus,"\uC81C\uACF1"],[On[2].start,"\uC190\uC2E4 \uACE1\uBA74"],[to[0].start,"W\uB9CC\xB7b\uB9CC"],[Oe.start,"\uAC31\uC2E0\uC2DD"],[Oe.w,"W \uAC31\uC2E0"],[Oe.b,"b \uAC31\uC2E0"],[Oe.apply,"\uBC18\uBCF5 \uAC31\uC2E0"],[nn.settled,"\uACB0\uACFC"]];function cM(){at("timeline-marks").replaceChildren(...md.map(([n,t],e)=>{let i=document.createElement("span"),s=md[e+1]?.[0]??Cn;return i.textContent=t,i.style.left=n/Cn*100+"%",i.style.width=(s-n)/Cn*100+"%",i}))}function hM(n){let t=md.findLastIndex(([e])=>n>=e);document.querySelectorAll("#timeline-marks span").forEach((e,i)=>e.classList.toggle("current",i===t))}function rr(){Hm(),oh()}function Rs(){gt.playing=!1,oh()}function na(n){window.LinearNarration?.sceneSeek(n),gt.experiment=null,gt.time=Lt(n,0,Cn),gt.time===Cn&&(gt.playing=!1),rr(),gt.view==="surface"&&Ae.reveal.surface<.01&&(gt.view="graph",gt.freeCamera=!1)}function Ud(){gt.experiment=null,gt.time>=Cn&&(gt.time=0),gt.playing=!gt.playing,rr()}function Yc(n,t){gt.playing=!1,gt.experiment={w:Lt(n,...Qa.w),b:Lt(t,...Qa.b)},rr()}function Bn(){is.focus({preventScroll:!0})}var gd=n=>!!n?.closest?.('textarea,select,[contenteditable]:not([contenteditable="false"])')||!!n?.matches?.("input")&&!["range","button","checkbox","radio"].includes(n.type);function Bi(n){at("navigation-status").textContent=n}function zn(){hn.clear()}function aa(){let n=te.position.clone(),t=Ot.target.clone();Ot.enableDamping=!1,Ot.update(),te.position.copy(n),Ot.target.copy(t),Ot.update(),Ot.enableDamping=!0}function lh(){gt.freeCamera=!0,gt.view!=="lesson"&&(gt.view="free"),rn=null}function uM(n,t=0){(!gt.freeCamera||rn)&&aa(),zn(),lh();let e=te.position.clone().sub(Ot.target),i=new Ss().setFromVector3(e),s=2*Math.PI/Math.max(1,be.domElement.clientHeight)*Ot.rotateSpeed;i.theta=Lt(i.theta+n*s,Ot.minAzimuthAngle,Ot.maxAzimuthAngle),i.phi=Lt(i.phi+t*s,Ot.minPolarAngle,Ot.maxPolarAngle),e.setFromSpherical(i),te.position.copy(Ot.target).add(e),Ot.update()}function Xm(n){if(n==="graph"||Ae.reveal.surface<.01)return Um("front");let t=new Tn().setFromPoints(js("surface")).getCenter(W());return Mi({t,p:t.clone().add(W(1.5,8,17))},"surface")}function ch(n){aa(),rn={p:te.position.clone(),t:Ot.target.clone(),elapsed:0,view:n},Qc&&(rn.elapsed=.6)}function Kc(){rs(!1),zn(),Js(),gt.experiment=null,gt.freeCamera=!1,gt.view="lesson",ch("lesson"),rr(),Bi("\uD604\uC7AC \uAC15\uC758 \uC2DC\uC810\uACFC \uC218\uCE58\uB85C \uBCF5\uADC0\uD588\uC2B5\uB2C8\uB2E4.")}function qm(n){if(rs(!1),n==="surface"&&Ae.reveal.surface<.01){Bi("\uC190\uC2E4\uACE1\uBA74\uC740 \uC138 \uBC88\uC9F8 \uAC15\uC758 \uC7A5\uBA74\uBD80\uD130 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4.");return}if(n==="lesson"){Kc();return}zn(),Js(),gt.view=n,gt.freeCamera=n==="free",n==="free"?rn=null:ch(n),jc(),Bi({free:"\uC790\uC720\uC2DC\uC810. \uB4DC\uB798\uADF8\xB7\uD2B8\uB799\uD328\uB4DC\xB7WASD\uB85C \uC9C1\uC811 \uC6C0\uC9C1\uC774\uBA74 \uADF8 \uC790\uB9AC\uC5D0 \uBA38\uBB45\uB2C8\uB2E4.",graph:"\uC608\uCE21 \uD568\uC218 \uBCF4\uAE30",surface:"\uC190\uC2E4\uACE1\uBA74 \uBCF4\uAE30"}[n])}function Jr(n){gt.speed=Lt(Math.round(n*4)/4,.25,2),at("speed").value=String(gt.speed),at("speed-down").disabled=gt.speed===.25,at("speed-up").disabled=gt.speed===2,Bi(`\uC7AC\uC0DD \uC18D\uB3C4 ${gt.speed}\uBC30`)}function jc(){let n=gt.view;document.querySelectorAll("[data-view]").forEach(t=>{let e=t.dataset.view===n;t.classList.toggle("active",e),t.setAttribute("aria-pressed",String(e)),t.dataset.view==="surface"&&(t.disabled=Ae.reveal.surface<.01,t.title=t.disabled?"\uC190\uC2E4 \uACE1\uBA74 \uC7A5\uBA74\uBD80\uD130 \uBCFC \uC218 \uC788\uC2B5\uB2C8\uB2E4":"\uC190\uC2E4\uACE1\uBA74\uB9CC \uB530\uB77C \uBCF4\uAE30 (4)")})}function Ym(){let n=Ot.target,t=n.clone().clamp(ln==="narrow"?W(-8,-12,-8):W(-16,-8,-8),ln==="narrow"?W(8,16,8):W(16,14,8));te.position.add(t.clone().sub(n)),n.copy(t)}function dM(n){if(xe||In||gd(document.activeElement)||at("help-dialog").open){zn();return}let t=Number(hn.has("KeyD"))-Number(hn.has("KeyA")),e=Number(hn.has("KeyE"))-Number(hn.has("KeyQ")),i=Number(hn.has("KeyW"))-Number(hn.has("KeyS")),s=Math.hypot(t,e,i);if(!s)return;t/=s,e/=s,i/=s;let r=te.position.distanceTo(Ot.target),a=n*.58*(hn.has("Shift")?2:1),l=W().setFromMatrixColumn(te.matrix,0).multiplyScalar(t*r*a).add(W(0,e*r*a,0));te.position.add(l),Ot.target.add(l);let c=te.position.clone().sub(Ot.target);c.setLength(Lt(r*Math.exp(-i*a),Ot.minDistance,Ot.maxDistance)),te.position.copy(Ot.target).add(c),Ym()}function id(n,t,e){let i=ai(n,e),s=ai(n.clone().add(t),e);return new xt(s.x-i.x,s.y-i.y)}function am(n){let t=n.pointerType==="touch"?28:22;return[Ps,Cs,...Gt.visible?[Oi]:[]].map(i=>({object:i,p:ai(i.position,i.parent)})).filter(i=>i.p.visible).map(i=>({...i,d:Math.hypot(n.clientX-i.p.x,n.clientY-i.p.y)})).filter(i=>i.d<=t).sort((i,s)=>i.d-s.d)[0]}function Js(){if(!xe)return;let n=xe.id;xe=null,Ot.enabled=!0,be.domElement.hasPointerCapture(n)&&be.domElement.releasePointerCapture(n),be.domElement.style.cursor="grab"}function fM(n,t){zn(),aa(),gt.playing=!1,rn=null;let e=t.object.userData.kind,i=t.object.position.clone(),s=t.object.parent;xe={kind:e,id:n.pointerId,start:new xt(n.clientX,n.clientY),from:{w:Ae.w,b:Ae.b}},e==="surface"?(xe.u=id(i,W(.1,0,0),s).multiplyScalar(8.1/.1),xe.v=id(i,W(0,0,-.1),s).multiplyScalar(7.6/.1)):xe.axis=id(i,W(0,1,0),s),Ot.enabled=!1,be.domElement.setPointerCapture(n.pointerId),at("tip").hidden=!0,oh()}function pM(n){let t=new xt(n.clientX,n.clientY).sub(xe.start);if(xe.kind==="surface"){let{u:e,v:i}=xe,s=e.dot(e)+16,r=e.dot(i),a=i.dot(i)+16,o=e.dot(t),l=i.dot(t),c=s*a-r*r;Yc(xe.from.w+(a*o-r*l)/c*33,xe.from.b+(s*l-r*o)/c*220)}else{let e=t.dot(xe.axis)/Math.max(36,xe.axis.lengthSq());Yc(xe.from.w+(xe.kind==="w"?e/.132:0),xe.from.b+(xe.kind==="b"?e/.011:0))}}function er(){let n=nr[kn];for(let t of Object.keys(Oc)){let e=Math.round(n[t]*10)/10;at(`layout-${t}`).value=String(e),at(`layout-${t}-value`).textContent=t==="yaw"||t==="pitch"?`${Math.round(e)}\xB0`:e.toFixed(1)}document.querySelectorAll("[data-layout-target]").forEach(t=>{t.setAttribute("aria-pressed",String(t.dataset.layoutTarget===kn)),t.disabled=t.dataset.layoutTarget==="surface"&&Ae.reveal.surface<.01})}function xd(n){for(let[t,e]of Object.entries(n))Oc[t]&&Number.isFinite(e)&&(nr[kn][t]=Lt(e,...Oc[t]));ah(),rr(),er()}function mM(){Rs(),zn(),Js(),aa(),lh(),In=!0,Ae.reveal.surface<.01&&(kn="graph"),at("model-inputs").hidden=!0,at("model-toggle").setAttribute("aria-expanded","false"),at("layout-panel").hidden=!1,at("layout-toggle").setAttribute("aria-expanded","true"),is.dataset.layoutEditing=kn,er(),Bn(),Bi("\uADF8\uB798\uD504 \uBC30\uCE58 \uC870\uC815. \uC67C\uCABD \uB4DC\uB798\uADF8\uB294 \uC120\uD0DD\uD55C \uADF8\uB798\uD504 \uC774\uB3D9, \uC624\uB978\uCABD\uC740 \uD68C\uC804, Escape\uB294 \uB9C8\uCE68.")}function rs(n=!0){In&&(Qs(),In=!1,at("layout-panel").hidden=!0,at("layout-toggle").setAttribute("aria-expanded","false"),delete is.dataset.layoutEditing,be&&(be.domElement.style.cursor="grab"),n&&Bn())}function Km(n,t){let e=be.domElement.getBoundingClientRect();return jp.setFromCamera(new xt((n.clientX-e.left)/e.width*2-1,-(n.clientY-e.top)/e.height*2+1),te),jp.ray.intersectPlane(t,W())}function gM(n){zn(),rn=null;let t=kn==="graph"?th:eh,e=new An().setFromNormalAndCoplanarPoint(te.getWorldDirection(W()),t.position);bi={id:n.pointerId,button:n.button,start:new xt(n.clientX,n.clientY),from:{...nr[kn]},plane:e,hit:Km(n,e)},Ot.enabled=!1,be.domElement.setPointerCapture(n.pointerId),be.domElement.style.cursor="grabbing"}function xM(n){let t=bi;if(t.button===2)xd({yaw:t.from.yaw+(n.clientX-t.start.x)*.35,pitch:t.from.pitch+(n.clientY-t.start.y)*.25});else{let e=Km(n,t.plane);if(!e||!t.hit)return;let i=e.sub(t.hit);xd({x:t.from.x+i.x,y:t.from.y+i.y,z:t.from.z+i.z})}}function Qs(){if(!bi)return;let n=bi.id;bi=null,Ot.enabled=!0,be.domElement.hasPointerCapture(n)&&be.domElement.releasePointerCapture(n),be.domElement.style.cursor=In?"move":"grab"}function _M(){at("layout-toggle").onclick=()=>In?rs():mM(),at("layout-close").onclick=()=>rs(),document.querySelectorAll("[data-layout-target]").forEach(n=>n.onclick=()=>{n.disabled||(Qs(),kn=n.dataset.layoutTarget,is.dataset.layoutEditing=kn,er(),Bn())});for(let n of Object.keys(Oc))at(`layout-${n}`).oninput=t=>xd({[n]:Number(t.target.value)});at("layout-reset").onclick=()=>{Qs(),nr[kn]={...od[kn]},ah(),rr(),er(),Bi("\uC120\uD0DD\uD55C \uADF8\uB798\uD504\uB97C \uAE30\uBCF8 \uBC30\uCE58\uB85C \uB418\uB3CC\uB838\uC2B5\uB2C8\uB2E4.")},er()}function yM(n){if(n.code==="KeyC"&&n.altKey&&n.shiftKey){n.preventDefault(),Jc();return}if(n.code==="Escape"&&!at("camera-admin").hidden&&!In){Jc(!1);return}if(n.code==="Escape"&&In){n.preventDefault(),rs();return}if(In)if(n.code==="Space"&&!gd(n.target))rs(!1);else return;if(n.metaKey||n.ctrlKey||n.altKey){zn();return}if(at("help-dialog").open||xe||gd(n.target)||n.target.matches?.("input[type=range]")&&(n.code==="ArrowLeft"||n.code==="ArrowRight"))return;if(n.code==="Space"&&n.target.closest?.("button")&&n.target.closest("button").blur(),AS.has(n.code)){if(n.preventDefault(),n.isComposing)return;n.shiftKey?hn.add("Shift"):hn.delete("Shift"),hn.has(n.code)||((!gt.freeCamera||rn)&&aa(),lh(),hn.add(n.code));return}if(n.code==="ShiftLeft"||n.code==="ShiftRight"){hn.add("Shift");return}let t=n.code==="Equal"||n.code==="NumpadAdd"||n.key==="+",e=n.code==="Minus"||n.code==="NumpadSubtract"||n.key==="-";!(t||e||["Space","ArrowLeft","ArrowRight","KeyR","Home","Digit0","Numpad0","Digit1","Digit2","Digit3","Digit4"].includes(n.code))||n.isComposing||(n.preventDefault(),!n.repeat&&(t||e?Jr(gt.speed+(t?.25:-.25)):n.code==="Digit0"||n.code==="Numpad0"?Jr(1):n.code==="Space"?Ud():n.code==="ArrowRight"||n.code==="ArrowLeft"?(Rs(),na(window.LinearNarration?window.LinearNarration.toScene(window.LinearNarration.time+(n.code==="ArrowRight"?1:-1)):gt.time+(n.code==="ArrowRight"?1:-1))):n.code==="KeyR"?Kc():n.code==="Home"?(Rs(),na(0),Kc()):qm({Digit1:"free",Digit2:"lesson",Digit3:"graph",Digit4:"surface"}[n.code])))}function _d(){try{localStorage.setItem(Nm,JSON.stringify(li))}catch{}}function Zc(){at("camera-layout").textContent=ln==="wide"?"\uB113\uC740 \uD654\uBA74\uC6A9 \uC2DC\uC810":"\uC881\uC740 \uD654\uBA74\uC6A9 \uC2DC\uC810",at("camera-shots").replaceChildren(...Hn.map(n=>{let t=document.createElement("li"),e=!!li[ea(n.id)];return t.innerHTML=`<div class="shot-name"><span>${n.label}</span><small>${e?"\uC800\uC7A5\uD55C \uC2DC\uC810":"\uAE30\uBCF8 \uC2DC\uC810"} \xB7 ${ad(n.view)}</small></div><div class="shot-actions"><button type="button" data-shot-go="${n.id}">\uC774\uB3D9</button><button type="button" data-shot-save="${n.id}">\uD604\uC7AC \uC2DC\uC810 \uC800\uC7A5</button><button type="button" data-shot-clear="${n.id}"${e?"":" disabled"}>\uAE30\uBCF8\uAC12</button></div>`,t}))}function vM(n){let t=Hn.find(e=>e.id===n);Rs(),na(t.view),zn(),gt.freeCamera=!1,gt.view="lesson",ch("lesson"),Bn(),Bi(`${t.label} \uC2DC\uC810\uC73C\uB85C \uC774\uB3D9\uD588\uC2B5\uB2C8\uB2E4.`)}function SM(n){let t=e=>e.toArray().map(i=>Math.round(i*1e3)/1e3);li[ea(n)]={p:t(te.position),t:t(Ot.target)},_d(),Zc(),Bn(),Bi("\uD604\uC7AC \uC2DC\uC810\uC744 \uC800\uC7A5\uD588\uC2B5\uB2C8\uB2E4.")}function Jc(n=at("camera-admin").hidden){at("camera-admin").hidden=!n,at("camera-admin-open").setAttribute("aria-expanded",String(n)),n?(at("camera-admin-open").hidden=!1,Zc()):Bn()}function MM(){(new URLSearchParams(location.search).has("admin")||location.hash==="#admin")&&(at("camera-admin-open").hidden=!1),at("camera-admin-open").onclick=()=>Jc(),at("camera-admin-close").onclick=()=>Jc(!1),at("camera-shots").onclick=n=>{let t=n.target.closest("button");t&&(t.dataset.shotGo&&vM(t.dataset.shotGo),t.dataset.shotSave&&SM(t.dataset.shotSave),t.dataset.shotClear&&(delete li[ea(t.dataset.shotClear)],_d(),Zc(),gt.freeCamera||Wc(Ae,!0)))},at("camera-export").onclick=async()=>{let n=JSON.stringify(li,null,1),t=at("camera-export-text");t.value=n,t.hidden=!1,t.select();try{await navigator.clipboard.writeText(n),at("camera-export").textContent="\uBCF5\uC0AC\uB428",setTimeout(()=>{at("camera-export").textContent="\uAC12 \uBCF5\uC0AC"},1500),Bi("\uC800\uC7A5\uD55C \uC2DC\uC810 \uAC12\uC744 \uBCF5\uC0AC\uD588\uC2B5\uB2C8\uB2E4.")}catch{Bi("\uAC12\uC744 \uC120\uD0DD\uD574 \uB450\uC5C8\uC2B5\uB2C8\uB2E4. \uC9C1\uC811 \uBCF5\uC0AC\uD574 \uC8FC\uC138\uC694.")}},at("camera-reset-all").onclick=()=>{li={},_d(),Zc(),gt.freeCamera||Wc(Ae,!0)}}function bM(){let n=be.domElement;n.addEventListener("pointerdown",t=>{if(Bn(),aa(),In&&(t.button===0||t.button===2)){t.stopImmediatePropagation(),t.preventDefault(),gM(t);return}let e=t.ctrlKey||t.metaKey||t.shiftKey;if(Ot.mouseButtons.LEFT=e?xn.ROTATE:xn.PAN,Ot.mouseButtons.RIGHT=e?xn.PAN:xn.ROTATE,t.button!==0||t.ctrlKey||t.metaKey||t.shiftKey||t.altKey)return;let i=am(t);i&&(t.stopImmediatePropagation(),t.preventDefault(),fM(t,i))},!0),n.addEventListener("pointermove",t=>{if(bi){if(t.pointerId!==bi.id)return;xM(t),t.stopImmediatePropagation();return}if(In){n.style.cursor="move",at("tip").hidden=!0;return}if(xe){if(t.pointerId!==xe.id)return;pM(t),t.stopImmediatePropagation(),n.style.cursor="grabbing";return}let e=am(t)?.object.userData.kind;n.style.cursor=e?"ns-resize":"grab",e==="surface"&&(n.style.cursor="move"),at("tip").hidden=!e,e&&(at("tip").textContent={w:"W \xB7 \uAE30\uC6B8\uAE30 \uC870\uC815",b:"b \xB7 \uC808\uD3B8 \uC870\uC815",surface:"W\xB7b \uD568\uAED8 \uC870\uC815"}[e],at("tip").style.left=Lt(t.clientX+15,12,innerWidth-180)+"px",at("tip").style.top=Lt(t.clientY+15,12,innerHeight-45)+"px")},!0);for(let t of["pointerup","pointercancel"])n.addEventListener(t,e=>{if(bi?.id===e.pointerId){e.stopImmediatePropagation(),Qs();return}xe?.id===e.pointerId&&(e.stopImmediatePropagation(),Js())},!0);n.addEventListener("lostpointercapture",()=>{bi&&Qs(),xe&&Js()}),n.addEventListener("pointerleave",()=>{at("tip").hidden=!0}),n.addEventListener("contextmenu",t=>t.preventDefault()),n.addEventListener("wheel",t=>{if(xe||bi){t.preventDefault(),t.stopImmediatePropagation();return}let e=t.deltaMode===1||t.wheelDeltaY!==void 0&&t.wheelDeltaY!==0&&t.wheelDeltaY%120===0&&t.deltaX===0;if(!t.ctrlKey&&!e){t.preventDefault(),t.stopImmediatePropagation(),uM(t.deltaX,t.deltaY);return}document.activeElement?.matches('input,select,textarea,[contenteditable="true"]')||Bn()},{capture:!0,passive:!1}),Ot.addEventListener("start",()=>{zn(),lh()}),at("seek").oninput=t=>{let e=Number(t.target.value);Rs(),na(e)},at("speed").onchange=t=>{Jr(Number(t.target.value)),Bn()},at("speed-down").onclick=()=>Jr(gt.speed-.25),at("speed-up").onclick=()=>Jr(gt.speed+.25),document.querySelectorAll("[data-view]").forEach(t=>t.onclick=()=>{qm(t.dataset.view),Bn()}),document.querySelectorAll("button[data-chapter]").forEach((t,e)=>t.onclick=()=>{Rs(),na(On[e].start),Kc(),Bn()});for(let t of["w","b"])for(let e of["-range","-number"]){let i=at(t+e);i.min=Qa[t][0],i.max=Qa[t][1],i.step=.01,i.addEventListener(e==="-range"?"input":"change",()=>{let s=Number(i.value);Number.isFinite(s)&&Yc(t==="w"?s:Ae.w,t==="b"?s:Ae.b)})}at("model-toggle").onclick=()=>{rs(!1);let t=at("model-inputs").hidden;at("model-inputs").hidden=!t,at("model-toggle").setAttribute("aria-expanded",String(t))},at("help-open").onclick=()=>{rs(!1),zn(),Rs(),at("help-dialog").showModal()},at("help-close").onclick=()=>at("help-dialog").close(),at("help-dialog").addEventListener("close",Bn),at("help-dialog").addEventListener("click",t=>{t.target===at("help-dialog")&&at("help-dialog").close()}),at("fullscreen").onclick=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{}},_M(),addEventListener("keydown",yM),addEventListener("keyup",t=>{hn.delete(t.code),(t.code==="ShiftLeft"||t.code==="ShiftRight")&&hn.delete("Shift")}),addEventListener("blur",()=>{zn(),Js(),Qs()}),is.addEventListener("blur",zn,!0),document.addEventListener("visibilitychange",()=>{document.hidden&&(zn(),Js(),Qs(),Rs())}),Jr(1)}var Ai={top:0,bottom:0,frac:1};function AM(n){let t=a=>{let o=document.querySelector(a);if(!o||o.hidden)return 0;let l=o.getBoundingClientRect();return l.height?l.bottom-n.top:0},e=Math.max(0,...[".page-header",".scene-heading","#view-controls"].map(t)),i=at("caption").getBoundingClientRect(),s=i.height?Math.max(0,n.bottom-i.top+6):0,r=Math.min(1,n.height*.6/Math.max(1,e+s));Ai.top=e*r,Ai.bottom=s*r,Ai.frac=(n.height-Ai.top-Ai.bottom)/n.height}function om(){let n=is.getBoundingClientRect();ln=n.width<700?"narrow":"wide",ah(),AM(n),be.setSize(n.width,n.height,!1),te.aspect=n.width/n.height;let t=ln==="narrow"?34:46,e=n.height*Ai.frac,i=Math.min(90,Math.max(36,ni.radToDeg(2*Math.atan(Math.tan(ni.degToRad(t/2))/(n.width/e)))));te.fov=ni.radToDeg(2*Math.atan(Math.tan(ni.degToRad(i/2))/Ai.frac)),te.setViewOffset(n.width,n.height,0,(Ai.bottom-Ai.top)/2,n.width,n.height),te.updateProjectionMatrix(),gt.freeCamera||Wc(Ae)}var $s=1,sd=0,rd=0;function wM(n){!gt.playing||document.hidden||n<=0||n>.25||(sd++,n>.026&&rd++,!(sd<90)&&(rd>40&&$s>1&&($s=Math.max(1,$s-.25),be.setPixelRatio($s)),sd=rd=0))}function jm(n){if(MS)return;requestAnimationFrame(jm);let t=(n-Yp)/1e3,e=Math.min(.05,t||0);if(Yp=n,t>0&&t<.5&&(Cc.push(t*1e3),Cc.length>600&&Cc.shift()),wM(t),gt.playing){gt.time=Math.min(Cn,window.LinearNarration?window.LinearNarration.advance(gt.time,e*gt.speed):gt.time+e*gt.speed),gt.time===Cn&&(gt.playing=!1);let i=nm(gt.time);i!==Qu&&gt.freeCamera&&gt.view==="lesson"&&!xe&&!In&&!hn.size&&(gt.freeCamera=!1,gt.view="lesson",ch("lesson"),jc()),Qu=i}else Qu=nm(gt.time);if(Hm(),dM(e),rn){rn.elapsed+=e;let i=Ie(Math.min(1,rn.elapsed/.6)),s=rn.view==="lesson"?Om(Ae):Xm(rn.view);te.position.copy(rn.p).lerp(s.p,i),Ot.target.copy(rn.t).lerp(s.t,i),i>=1&&(rn=null)}Ot.update(),Ym(),oM(Ae);for(let i of cm)if((i.mesh.parent===Zn||i.mesh.parent===Gt)&&!i.mesh.userData.flat){let s=i.mesh.parent.getWorldQuaternion(new ze).invert();i.mesh.quaternion.copy(s.multiply(te.quaternion))}n-Kp>(gt.playing&&Ae.t>=nn.descent?120:75)&&(oh(),jc(),Kp=n),be.render(Sn,te)}function ai(n,t){let e=n.clone();t&&t.localToWorld(e),e.project(te);let i=be.domElement.getBoundingClientRect();return{x:i.left+(e.x+1)*i.width/2,y:i.top+(1-e.y)*i.height/2,visible:e.z>=-1&&e.z<=1&&Math.abs(e.x)<=1&&Math.abs(e.y)<=1}}async function TM(){try{await document.fonts.ready,be=new xc({antialias:!0,alpha:!1,powerPreference:"high-performance"}),$s=Math.min(devicePixelRatio,1.75),be.setPixelRatio($s),be.outputColorSpace=mn,be.toneMapping=za,be.toneMappingExposure=1.2,is.append(be.domElement),Ot=new Sc(te,be.domElement),Ot.mouseButtons={LEFT:xn.PAN,MIDDLE:xn.DOLLY,RIGHT:xn.ROTATE},Ot.screenSpacePanning=!0,Ot.enableDamping=!0,Ot.dampingFactor=.12,Ot.rotateSpeed=.38,Ot.zoomSpeed=.65,Ot.zoomToCursor=!0,Ot.minDistance=2.4,Ot.maxDistance=45,Ot.minPolarAngle=.25,Ot.maxPolarAngle=Math.PI*.475,Ot.minAzimuthAngle=-Math.PI*.38,Ot.maxAzimuthAngle=Math.PI*.38,Ot.cursorStyle="grab",Sn.traverse(n=>{let t=n.material;t&&n!==sh&&t.side===_n&&(t.forceSinglePass=!0)}),fd=Math.max(...["sigma","sum","expand","values","calc"].map(n=>(Lc(Ht,ts(ri.start),n),Ht.contentW/Ht.canvas.width))),Lc(Ht,ts(nn.surface+3),"live"),wd=Ht.contentW/Ht.canvas.width,Lc(Ht,ts(ri.expand),"expand"),Ht.key="",at("seek").max=String(Cn),cM(),bM(),MM(),om(),rr(),jc(),new ResizeObserver(om).observe(is),at("loading").hidden=!0,document.activeElement===document.body&&Bn(),jr&&(jr=!1,Ud()),window.LinearLesson3D={playback:()=>({...gt}),pause:Rs,snapshot:()=>({...Ae,finale:{shade:ns.visible?ns.material.opacity:0,prediction:Nt.localToWorld(Be.mesh.position.clone()).toArray(),mse:Ht.mesh.position.toArray(),camera:te.position.toArray()},lineColor:Fn.material.color.getHex(),visibility:{mseFormula:Ht.mesh.visible,lossWorld:Gt.visible},formulaWorld:{prediction:Nt.localToWorld(Be.mesh.position.clone()).toArray(),mse:Ht.mesh.position.toArray()},mseTilt:{mseQuat:Ht.mesh.quaternion.toArray(),graphQuat:Nt.getWorldQuaternion(new ze).toArray(),predQuat:Be.mesh.getWorldQuaternion(new ze).toArray(),mseInGraph:Nt.worldToLocal(Ht.mesh.position.clone()).toArray(),predInGraph:Be.mesh.position.toArray()},fx:{w:Ct.w,b:Ct.b,mse:Ct.mse,line:Ct.line,stage:Nd(Ae)},photo:{card:oi.mesh.visible,graph:jn.visible,rowKey:(oi.hlKey||"").split(",").map(n=>n.split(".")[0]+".0").join(","),xMarks:mm.map(n=>n.tag.mesh.visible),points:cd.map(n=>n.visible),flying:gm.map(n=>n.mesh.visible)},floorColor:Rd.material.color.getHex(),predScale:no.scale.x,upStage:qc(Ae)?.id??null,upPart:qc(Ae)?.part??null,slopes:[io.visible,so.visible],links:{w:Zs.w.some(n=>n.visible),b:Zs.b.some(n=>n.visible),wEnds:Zs.w[0].visible?[Zs.w[0].position.toArray(),Zs.w[2].position.toArray()]:null},linkChips:{w:Be.chips&&Ht.chips?.w?[Be.mesh.localToWorld(Be.chips.w.clone()).toArray(),Ht.mesh.localToWorld(Ht.chips.w.clone()).toArray()]:null,b:Be.chips&&Ht.chips?.b?[Be.mesh.localToWorld(Be.chips.b.clone()).toArray(),Ht.mesh.localToWorld(Ht.chips.b.clone()).toArray()]:null},thin:Ct.thin,focus:Ct.focus,priceLineR:Fn.userData.r,residualR:ro.map(n=>n.userData.r),squareState:Id(Ae),squareSize:Zr.map(n=>[n.g.scale.x,n.g.scale.y]),squareTags:Zr.map(n=>n.tag.mesh.visible?n.tag.key.split("|")[0]:null),residualLen:oe.map((n,t)=>ro[t].scale.y),mseContentFrac:fd,safeArea:{...Ai},updateScale:Kn.mesh.scale.x,parts:[...document.querySelectorAll("#timeline-marks span")].map(n=>n.textContent),currentPart:document.querySelector("#timeline-marks span.current")?.textContent??null,floorGrid:Zn.children.filter(n=>n.isLine).length,squaresWorld:Zr.map(n=>Nt.localToWorld(n.g.position.clone()).toArray()),anchorsWorld:(Ht.anchors||[]).map(n=>Ht.mesh.localToWorld(n.clone()).toArray()),mseForm:Ht.form,mseFormK:Ct.form?.k??null,termsWorld:Object.fromEntries(Object.entries(Ht.termsDrawn||{}).map(([n,t])=>[n,Ht.mesh.localToWorld(t.clone()).toArray()])),trails:{w:{visible:Li.w.visible,color:Li.w.material.color.getHex(),ends:Li.w.visible?Li.w.userData.ends.map(n=>n.toArray()):null},b:{visible:Li.b.visible,color:Li.b.material.color.getHex(),ends:Li.b.visible?Li.b.userData.ends.map(n=>n.toArray()):null},path:{visible:tr.visible,color:tr.material.color.getHex()},combo:{visible:Fi.visible,color:oo.color.getHex(),opacity:oo.opacity,...Im(Ae),from:rh.toArray(),to:Cd.toArray(),tip:Fi.visible?Gt.worldToLocal(Fi.localToWorld(W(0,ta.position.y+ta.scale.y*zc/2,0))).toArray():null,start:Ee(vn[0].w,vn[0].b).toArray(),end:Ee(vn[2].w,vn[2].b).toArray()}},surfaceTurn:Vc,readoutVisible:Pd.mesh.visible,savedShots:JSON.parse(JSON.stringify(li)),time:gt.time,playing:gt.playing,tweening:!!rn,speed:gt.speed,freeCamera:gt.freeCamera,view:gt.view,heldKeys:[...hn],drag:xe?.kind??null,camera:te.position.toArray(),target:Ot.target.toArray(),frameIntervals:[...Cc],pixelRatio:$s,mseScale:Math.round(Ht.mesh.scale.x*1e3)/1e3,squareEdges:Zr.map((n,t)=>[n.g.position.x-n.g.scale.x/2,Xt(oe[t].x,0).x]),surfaceMax:ir,sceneState:{priceStart:Cs.position.toArray(),priceEnd:Ps.position.toArray(),lossPoint:Oi.position.toArray(),slices:{w:Hc.w.visible,b:Hc.b.visible},referenceLine:sa.visible,fixedIntercept:ho.visible,descentPath:tr.visible},layoutEditor:{open:In,target:kn,drag:bi?.button??null,poses:{graph:{...nr.graph},surface:{...nr.surface}}},worldPoints:{priceStart:Nt.localToWorld(Cs.position.clone()).toArray(),priceEnd:Nt.localToWorld(Ps.position.clone()).toArray(),lossPoint:Gt.localToWorld(Oi.position.clone()).toArray()},renderer:be.info.render}),seek:na,edit:Yc,projectHandles:()=>({w:ai(Ps.position,Nt),b:ai(Cs.position,Nt),surface:ai(Oi.position,Gt)}),projectLayout:()=>({graphTitle:ai(W(-6.4,6.35,-1.9),Nt),lossUpdate:ai(Kn.mesh.position,Gt),formula:ai(Be.mesh.position,Nt),lossTitle:ai(Ed.mesh.position,Gt),mseFormula:ai(Ht.mesh.position),lossPoint:ai(Oi.position,Gt)})},requestAnimationFrame(jm)}catch(n){at("loading").hidden=!1,at("loading").textContent="3D \uC7A5\uBA74\uC744 \uBD88\uB7EC\uC624\uC9C0 \uBABB\uD588\uC2B5\uB2C8\uB2E4. WebGL\uC744 \uC9C0\uC6D0\uD558\uB294 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC5F4\uC5B4 \uC8FC\uC138\uC694.",console.error(n)}}TM();})();
