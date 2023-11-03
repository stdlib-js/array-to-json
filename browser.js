// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString,n=Object.prototype.hasOwnProperty;function i(e,r){return null!=e&&n.call(e,r)}var o="function"==typeof Symbol?Symbol:void 0,a="function"==typeof o?o.toStringTag:"",u=r()?function(e){var r,n,o;if(null==e)return t.call(e);n=e[a],r=i(e,a);try{e[a]=void 0}catch(r){return t.call(e)}return o=t.call(e),r?e[a]=n:delete e[a],o}:function(e){return t.call(e)},f="function"==typeof Object.defineProperty?Object.defineProperty:null,l=Object.defineProperty;function c(e){return"number"==typeof e}function s(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function y(e,r,t){var n=!1,i=r-e.length;return i<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+s(i):s(i)+e,n&&(e="-"+e)),e}var p=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function g(e){var r,t,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,n=parseInt(t,10),!isFinite(n)){if(!c(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(t=(-n).toString(r),e.precision&&(t=y(t,e.precision,e.padRight)),t="-"+t):(t=n.toString(r),n||e.precision?e.precision&&(t=y(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===h.call(e.specifier)?h.call(t):p.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function m(e){return"string"==typeof e}var w=Math.abs,b=String.prototype.toLowerCase,d=String.prototype.toUpperCase,v=String.prototype.replace,E=/e\+(\d)$/,A=/e-(\d)$/,T=/^(\d+)$/,_=/^(\d+)e/,x=/\.0$/,j=/\.0*e/,V=/(\..*[^0])0*e/;function k(e){var r,t,n=parseFloat(e.arg);if(!isFinite(n)){if(!c(e.arg))throw new Error("invalid floating-point number. Value: "+t);n=e.arg}switch(e.specifier){case"e":case"E":t=n.toExponential(e.precision);break;case"f":case"F":t=n.toFixed(e.precision);break;case"g":case"G":w(n)<1e-4?((r=e.precision)>0&&(r-=1),t=n.toExponential(r)):t=n.toPrecision(e.precision),e.alternate||(t=v.call(t,V,"$1e"),t=v.call(t,j,"e"),t=v.call(t,x,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=v.call(t,E,"e+0$1"),t=v.call(t,A,"e-0$1"),e.alternate&&(t=v.call(t,T,"$1."),t=v.call(t,_,"$1.e")),n>=0&&e.sign&&(t=e.sign+t),t=e.specifier===d.call(e.specifier)?d.call(t):b.call(t)}function S(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function L(e,r,t){var n=r-e.length;return n<0?e:e=t?e+S(n):S(n)+e}var R=String.fromCharCode,I=isNaN,B=Array.isArray;function C(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function O(e){var r,t,n,i,o,a,u,f,l;if(!B(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(a="",u=1,f=0;f<e.length;f++)if(m(n=e[f]))a+=n;else{if(r=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,I(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,I(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=g(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!I(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=I(o)?String(n.arg):R(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=k(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=y(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=L(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function M(e){var r,t,n,i;for(t=[],i=0,n=F.exec(e);n;)(r=e.slice(i,F.lastIndex-n[0].length)).length&&t.push(r),t.push(U(n)),i=F.lastIndex,n=F.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function N(e){return"string"==typeof e}function P(e){var r,t,n;if(!N(e))throw new TypeError(P("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=M(e),(t=new Array(arguments.length))[0]=r,n=1;n<t.length;n++)t[n]=arguments[n];return O.apply(null,t)}var Y,W=Object.prototype,$=W.toString,G=W.__defineGetter__,Z=W.__defineSetter__,X=W.__lookupGetter__,J=W.__lookupSetter__;Y=function(){try{return f({},"x",{}),!0}catch(e){return!1}}()?l:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===$.call(e))throw new TypeError(P("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===$.call(t))throw new TypeError(P("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(X.call(e,r)||J.call(e,r)?(n=e.__proto__,e.__proto__=W,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&G&&G.call(e,r,t.get),a&&Z&&Z.call(e,r,t.set),e};var z=Y;function q(e,r,t){z(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function D(){return/^\s*function\s*([^(]*)/i}var H=/^\s*function\s*([^(]*)/i;q(D,"REGEXP",H);var K=Array.isArray?Array.isArray:function(e){return"[object Array]"===u(e)};function Q(e){return null!==e&&"object"==typeof e}function ee(e){var r,t,n,i;if(("Object"===(t=u(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=H.exec(n.toString()))return r[1]}return Q(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}q(Q,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!K(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(Q));var re=/./;function te(e){return"boolean"==typeof e}var ne=Boolean,ie=Boolean.prototype.toString,oe=r();function ae(e){return"object"==typeof e&&(e instanceof ne||(oe?function(e){try{return ie.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===u(e)))}function ue(e){return te(e)||ae(e)}function fe(){return new Function("return this;")()}q(ue,"isPrimitive",te),q(ue,"isObject",ae);var le="object"==typeof self?self:null,ce="object"==typeof window?window:null,se="object"==typeof globalThis?globalThis:null,ye=function(e){if(arguments.length){if(!te(e))throw new TypeError(P("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return fe()}if(se)return se;if(le)return le;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),pe=ye.document&&ye.document.childNodes,he=Int8Array,ge="function"==typeof re||"object"==typeof he||"function"==typeof pe?function(e){return ee(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?ee(e).toLowerCase():r};function me(e){return"function"===ge(e)}function we(){}var be,de="foo"===we.name,ve=Object,Ee=Object.getPrototypeOf;be=me(Object.getPrototypeOf)?Ee:function(e){var r=function(e){return e.__proto__}(e);return r||null===r?r:"[object Function]"===u(e.constructor)?e.constructor.prototype:e instanceof Object?Object.prototype:null};var Ae=be;function Te(e){return null==e?null:(e=ve(e),Ae(e))}var _e="function"==typeof Float64Array,xe="function"==typeof Float64Array?Float64Array:null;function je(){var e,r,t;if("function"!=typeof xe)return!1;try{r=new xe([1,3.14,-3.14,NaN]),t=r,e=(_e&&t instanceof Float64Array||"[object Float64Array]"===u(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}var Ve="function"==typeof Float64Array?Float64Array:void 0,ke=je()?Ve:function(){throw new Error("not implemented")},Se="function"==typeof Int8Array,Le="function"==typeof Int8Array?Int8Array:null,Re="function"==typeof Int8Array?Int8Array:void 0,Ie=function(){var e,r,t;if("function"!=typeof Le)return!1;try{r=new Le([1,3.14,-3.14,128]),t=r,e=(Se&&t instanceof Int8Array||"[object Int8Array]"===u(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?Re:function(){throw new Error("not implemented")},Be="function"==typeof Uint8Array,Ce="function"==typeof Uint8Array?Uint8Array:null,Oe="function"==typeof Uint8Array?Uint8Array:void 0,Fe=function(){var e,r,t;if("function"!=typeof Ce)return!1;try{r=new Ce(r=[1,3.14,-3.14,256,257]),t=r,e=(Be&&t instanceof Uint8Array||"[object Uint8Array]"===u(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Oe:function(){throw new Error("not implemented")},Ue="function"==typeof Uint8ClampedArray,Me="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null,Ne="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0,Pe=function(){var e,r,t;if("function"!=typeof Me)return!1;try{r=new Me([-1,0,1,3.14,4.99,255,256]),t=r,e=(Ue&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===u(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?Ne:function(){throw new Error("not implemented")},Ye="function"==typeof Int16Array,We="function"==typeof Int16Array?Int16Array:null,$e="function"==typeof Int16Array?Int16Array:void 0,Ge=function(){var e,r,t;if("function"!=typeof We)return!1;try{r=new We([1,3.14,-3.14,32768]),t=r,e=(Ye&&t instanceof Int16Array||"[object Int16Array]"===u(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?$e:function(){throw new Error("not implemented")},Ze="function"==typeof Uint16Array,Xe="function"==typeof Uint16Array?Uint16Array:null,Je="function"==typeof Uint16Array?Uint16Array:void 0,ze=function(){var e,r,t;if("function"!=typeof Xe)return!1;try{r=new Xe(r=[1,3.14,-3.14,65536,65537]),t=r,e=(Ze&&t instanceof Uint16Array||"[object Uint16Array]"===u(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?Je:function(){throw new Error("not implemented")},qe="function"==typeof Int32Array,De="function"==typeof Int32Array?Int32Array:null,He="function"==typeof Int32Array?Int32Array:void 0,Ke=function(){var e,r,t;if("function"!=typeof De)return!1;try{r=new De([1,3.14,-3.14,2147483648]),t=r,e=(qe&&t instanceof Int32Array||"[object Int32Array]"===u(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?He:function(){throw new Error("not implemented")},Qe="function"==typeof Uint32Array,er="function"==typeof Uint32Array?Uint32Array:null,rr="function"==typeof Uint32Array?Uint32Array:void 0,tr=function(){var e,r,t;if("function"!=typeof er)return!1;try{r=new er(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(Qe&&t instanceof Uint32Array||"[object Uint32Array]"===u(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?rr:function(){throw new Error("not implemented")},nr="function"==typeof Float32Array,ir=Number.POSITIVE_INFINITY,or="function"==typeof Float32Array?Float32Array:null,ar="function"==typeof Float32Array?Float32Array:void 0,ur=function(){var e,r,t;if("function"!=typeof or)return!1;try{r=new or([1,3.14,-3.14,5e40]),t=r,e=(nr&&t instanceof Float32Array||"[object Float32Array]"===u(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===ir}catch(r){e=!1}return e}()?ar:function(){throw new Error("not implemented")},fr=[ke,ur,Ke,tr,Ge,ze,Ie,Fe,Pe],lr=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],cr=je()?Te(ke):sr;function sr(){}function yr(e){return"number"==typeof e}cr="TypedArray"===function(e){if(!1===me(e))throw new TypeError(P("invalid argument. Must provide a function. Value: `%s`.",e));return de?e.name:H.exec(e.toString())[1]}(cr)?cr:sr;var pr=Number,hr=pr.prototype.toString,gr=r();function mr(e){return"object"==typeof e&&(e instanceof pr||(gr?function(e){try{return hr.call(e),!0}catch(e){return!1}}(e):"[object Number]"===u(e)))}function wr(e){return yr(e)||mr(e)}q(wr,"isPrimitive",yr),q(wr,"isObject",mr);var br=pr.NEGATIVE_INFINITY,dr=Math.floor;function vr(e){return dr(e)===e}function Er(e){return e<ir&&e>br&&vr(e)}function Ar(e){return yr(e)&&Er(e)}function Tr(e){return mr(e)&&Er(e.valueOf())}function _r(e){return Ar(e)||Tr(e)}function xr(e){return Ar(e)&&e>=0}function jr(e){return Tr(e)&&e.valueOf()>=0}function Vr(e){return xr(e)||jr(e)}function kr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&vr(e.length)&&e.length>=0&&e.length<=4294967295}function Sr(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&vr(e.length)&&e.length>=0&&e.length<=9007199254740991}q(_r,"isPrimitive",Ar),q(_r,"isObject",Tr),q(Vr,"isPrimitive",xr),q(Vr,"isObject",jr);var Lr="function"==typeof ArrayBuffer;function Rr(e){return Lr&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===u(e)}function Ir(e){return"object"==typeof e&&null!==e&&!K(e)}function Br(e,r){if(!(this instanceof Br))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!yr(e))throw new TypeError(P("invalid argument. Real component must be a number. Value: `%s`.",e));if(!yr(r))throw new TypeError(P("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}q(Br,"BYTES_PER_ELEMENT",8),q(Br.prototype,"BYTES_PER_ELEMENT",8),q(Br.prototype,"byteLength",16),q(Br.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),q(Br.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var Cr="function"==typeof Math.fround?Math.fround:null,Or=new ur(1),Fr="function"==typeof Cr?Cr:function(e){return Or[0]=e,Or[0]};function Ur(e,r){if(!(this instanceof Ur))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!yr(e))throw new TypeError(P("invalid argument. Real component must be a number. Value: `%s`.",e));if(!yr(r))throw new TypeError(P("invalid argument. Imaginary component must be a number. Value: `%s`.",r));return z(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Fr(e)}),z(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Fr(r)}),this}function Mr(e){return e instanceof Br||e instanceof Ur||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function Nr(e){return vr(e/2)}function Pr(){return"function"==typeof o&&"symbol"==typeof o("foo")&&i(o,"iterator")&&"symbol"==typeof o.iterator}q(Ur,"BYTES_PER_ELEMENT",4),q(Ur.prototype,"BYTES_PER_ELEMENT",4),q(Ur.prototype,"byteLength",8),q(Ur.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),q(Ur.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var Yr=Pr()?Symbol.iterator:null;function Wr(e,r,t){z(e,r,{configurable:!1,enumerable:!1,get:t})}function $r(e){return e.re}function Gr(e){return e.im}function Zr(e,r){return new ur(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Xr(e,r){return new ke(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}var Jr={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function zr(e){var r=Jr[e];return"function"==typeof r?r:Jr.default}var qr={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function Dr(e){var r=qr[e];return"function"==typeof r?r:qr.default}function Hr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(kr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Mr(n))return new TypeError(P("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push($r(n),Gr(n))}return r}function Kr(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,kr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Mr(o))return new TypeError(P("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push($r(o),Gr(o))}return n}function Qr(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Mr(n=r[i]))return null;e[o]=$r(n),e[o+1]=Gr(n),o+=2}return e}var et=2*ur.BYTES_PER_ELEMENT,rt=Pr();function tt(e){return e instanceof at||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function nt(e){return e===at||"Complex128Array"===e.name}function it(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===et}function ot(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*et}function at(){var e,r,t,n;if(r=arguments.length,!(this instanceof at))return 0===r?new at:1===r?new at(arguments[0]):2===r?new at(arguments[0],arguments[1]):new at(arguments[0],arguments[1],arguments[2]);if(0===r)t=new ur(0);else if(1===r)if(xr(arguments[0]))t=new ur(2*arguments[0]);else if(Sr(arguments[0]))if((n=(t=arguments[0]).length)&&K(t)&&Mr(t[0])){if(null===(t=Qr(new ur(2*n),t))){if(!Nr(n))throw new RangeError(P("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ur(arguments[0])}}else{if(it(t))t=Zr(t,0);else if(ot(t))t=Xr(t,0);else if(!Nr(n))throw new RangeError(P("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ur(t)}else if(Rr(arguments[0])){if(!vr((t=arguments[0]).byteLength/et))throw new RangeError(P("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",et,t.byteLength));t=new ur(t)}else{if(!Ir(arguments[0]))throw new TypeError(P("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===rt)throw new TypeError(P("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!me(t[Yr]))throw new TypeError(P("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!me((t=t[Yr]()).next))throw new TypeError(P("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Hr(t))instanceof Error)throw t;t=new ur(t)}else{if(!Rr(t=arguments[0]))throw new TypeError(P("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!xr(e=arguments[1]))throw new TypeError(P("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!vr(e/et))throw new RangeError(P("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",et,e));if(2===r){if(!vr((n=t.byteLength-e)/et))throw new RangeError(P("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",et,n));t=new ur(t,e)}else{if(!xr(n=arguments[2]))throw new TypeError(P("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*et>t.byteLength-e)throw new RangeError(P("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*et));t=new ur(t,e,2*n)}}return q(this,"_buffer",t),q(this,"_length",t.length/2),this}function ut(e){return e.re}function ft(e){return e.im}function lt(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(kr(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!Mr(n))return new TypeError(P("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));r.push(ut(n),ft(n))}return r}function ct(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,kr(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Mr(o))return new TypeError(P("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(ut(o),ft(o))}return n}function st(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!Mr(n=r[i]))return null;e[o]=ut(n),e[o+1]=ft(n),o+=2}return e}q(at,"BYTES_PER_ELEMENT",et),q(at,"name","Complex64Array"),q(at,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!me(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!nt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!me(n=arguments[1]))throw new TypeError(P("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(tt(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Mr(c=n.call(r,e.get(s),s)))o[y]=$r(c),o[y+1]=Gr(c);else{if(!(kr(c)&&c.length>=2))throw new TypeError(P("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(Sr(e)){if(n){for(f=e.length,u=e.get&&e.set?Dr("default"):zr("default"),s=0;s<f;s++)if(!Mr(u(e,s))){l=!0;break}if(l){if(!Nr(f))throw new RangeError(P("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Mr(c=n.call(r,u(e,s),s)))o[y]=$r(c),o[y+1]=Gr(c);else{if(!(kr(c)&&c.length>=2))throw new TypeError(P("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(Ir(e)&&rt&&me(e[Yr])){if(!me((o=e[Yr]()).next))throw new TypeError(P("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?Kr(o,n,r):Hr(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(P("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),q(at,"of",(function(){var e,r;if(!me(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!nt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Wr(at.prototype,"buffer",(function(){return this._buffer.buffer})),Wr(at.prototype,"byteLength",(function(){return this._buffer.byteLength})),Wr(at.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),q(at.prototype,"BYTES_PER_ELEMENT",at.BYTES_PER_ELEMENT),q(at.prototype,"copyWithin",(function(e,r){if(!tt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),q(at.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!tt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,q(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Ur(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),q(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Yr&&q(t,Yr,(function(){return r.entries()})),t})),q(at.prototype,"get",(function(e){var r;if(!tt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!xr(e))throw new TypeError(P("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Ur((r=this._buffer)[e*=2],r[e+1])})),Wr(at.prototype,"length",(function(){return this._length})),q(at.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!tt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!xr(t=arguments[1]))throw new TypeError(P("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Mr(e)){if(t>=this._length)throw new RangeError(P("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=$r(e),void(n[t+1]=Gr(e))}if(tt(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*et,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ur(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Sr(e))throw new TypeError(P("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Mr(e[f])){o=!0;break}if(o){if(!Nr(a))throw new RangeError(P("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*et,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ur(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=$r(u),n[t+1]=Gr(u),t+=2}}));var yt=2*ke.BYTES_PER_ELEMENT,pt=Pr();function ht(e){return e instanceof bt||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function gt(e){return e===bt||"Complex64Array"===e.name}function mt(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===yt/2}function wt(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===yt}function bt(){var e,r,t,n;if(r=arguments.length,!(this instanceof bt))return 0===r?new bt:1===r?new bt(arguments[0]):2===r?new bt(arguments[0],arguments[1]):new bt(arguments[0],arguments[1],arguments[2]);if(0===r)t=new ke(0);else if(1===r)if(xr(arguments[0]))t=new ke(2*arguments[0]);else if(Sr(arguments[0]))if((n=(t=arguments[0]).length)&&K(t)&&Mr(t[0])){if(null===(t=st(new ke(2*n),t))){if(!Nr(n))throw new RangeError(P("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ke(arguments[0])}}else{if(mt(t))t=Zr(t,0);else if(wt(t))t=Xr(t,0);else if(!Nr(n))throw new RangeError(P("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new ke(t)}else if(Rr(arguments[0])){if(!vr((t=arguments[0]).byteLength/yt))throw new RangeError(P("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",yt,t.byteLength));t=new ke(t)}else{if(!Ir(arguments[0]))throw new TypeError(P("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===pt)throw new TypeError(P("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!me(t[Yr]))throw new TypeError(P("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!me((t=t[Yr]()).next))throw new TypeError(P("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=lt(t))instanceof Error)throw t;t=new ke(t)}else{if(!Rr(t=arguments[0]))throw new TypeError(P("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!xr(e=arguments[1]))throw new TypeError(P("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",e));if(!vr(e/yt))throw new RangeError(P("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",yt,e));if(2===r){if(!vr((n=t.byteLength-e)/yt))throw new RangeError(P("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",yt,n));t=new ke(t,e)}else{if(!xr(n=arguments[2]))throw new TypeError(P("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*yt>t.byteLength-e)throw new RangeError(P("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*yt));t=new ke(t,e,2*n)}}return q(this,"_buffer",t),q(this,"_length",t.length/2),this}q(bt,"BYTES_PER_ELEMENT",yt),q(bt,"name","Complex128Array"),q(bt,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s,y;if(!me(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!gt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!me(n=arguments[1]))throw new TypeError(P("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(r=arguments[2])}if(ht(e)){if(f=e.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Mr(c=n.call(r,e.get(s),s)))o[y]=ut(c),o[y+1]=ft(c);else{if(!(kr(c)&&c.length>=2))throw new TypeError(P("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(Sr(e)){if(n){for(f=e.length,u=e.get&&e.set?Dr("default"):zr("default"),s=0;s<f;s++)if(!Mr(u(e,s))){l=!0;break}if(l){if(!Nr(f))throw new RangeError(P("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(r,u(e,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Mr(c=n.call(r,u(e,s),s)))o[y]=ut(c),o[y+1]=ft(c);else{if(!(kr(c)&&c.length>=2))throw new TypeError(P("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(e)}if(Ir(e)&&pt&&me(e[Yr])){if(!me((o=e[Yr]()).next))throw new TypeError(P("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e));if((a=n?ct(o,n,r):lt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(P("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",e))})),q(bt,"of",(function(){var e,r;if(!me(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!gt(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),Wr(bt.prototype,"buffer",(function(){return this._buffer.buffer})),Wr(bt.prototype,"byteLength",(function(){return this._buffer.byteLength})),Wr(bt.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),q(bt.prototype,"BYTES_PER_ELEMENT",bt.BYTES_PER_ELEMENT),q(bt.prototype,"copyWithin",(function(e,r){if(!ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),q(bt.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,q(t={},"next",(function(){var r;return o+=1,i||o>=n?{done:!0}:(r=new Br(e[a+=2],e[a+1]),{value:[o,r],done:!1})})),q(t,"return",(function(e){return i=!0,arguments.length?{value:e,done:!0}:{done:!0}})),Yr&&q(t,Yr,(function(){return r.entries()})),t})),q(bt.prototype,"get",(function(e){var r;if(!ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!xr(e))throw new TypeError(P("invalid argument. Must provide a nonnegative integer. Value: `%s`.",e));if(!(e>=this._length))return new Br((r=this._buffer)[e*=2],r[e+1])})),Wr(bt.prototype,"length",(function(){return this._length})),q(bt.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!ht(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!xr(t=arguments[1]))throw new TypeError(P("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Mr(e)){if(t>=this._length)throw new RangeError(P("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=ut(e),void(n[t+1]=ft(e))}if(ht(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*yt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ke(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Sr(e))throw new TypeError(P("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",e));for(a=e.length,f=0;f<a;f++)if(!Mr(e[f])){o=!0;break}if(o){if(!Nr(a))throw new RangeError(P("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*yt,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new ke(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=ut(u),n[t+1]=ft(u),t+=2}}));var dt=[bt,at],vt=["Complex64Array","Complex128Array"];function Et(e,r){if("function"!=typeof r)throw new TypeError(P("invalid argument. Second argument must be callable. Value: `%s`.",r));return e instanceof r}var At=[[ke,"Float64Array"],[ur,"Float32Array"],[Ke,"Int32Array"],[tr,"Uint32Array"],[Ge,"Int16Array"],[ze,"Uint16Array"],[Ie,"Int8Array"],[Fe,"Uint8Array"],[Pe,"Uint8ClampedArray"],[at,"Complex64Array"],[bt,"Complex128Array"]];function Tt(e){var r,t;for(t=0;t<At.length;t++)if(Et(e,At[t][0]))return At[t][1];for(;e;){for(r=ee(e),t=0;t<At.length;t++)if(r===At[t][1])return At[t][1];e=Te(e)}}return function(e){var r,t,n;if(function(e){var r,t;if("object"!=typeof e||null===e)return!1;if(e instanceof cr)return!0;for(t=0;t<fr.length;t++)if(e instanceof fr[t])return!0;for(;e;){for(r=ee(e),t=0;t<lr.length;t++)if(lr[t]===r)return!0;e=Te(e)}return!1}(e))r=e;else{if(!function(e){var r,t;if("object"!=typeof e||null===e)return!1;for(t=0;t<dt.length;t++)if(e instanceof dt[t])return!0;for(;e;){for(r=ee(e),t=0;t<vt.length;t++)if(vt[t]===r)return!0;e=Te(e)}return!1}(e))throw new TypeError(function(){var e,r=arguments,t="https://stdlib.io/e/"+r[0]+"?";for(e=1;e<r.length;e++)t+="&arg[]="+encodeURIComponent(r[e]);return t}("01b2x,Mi",e));r=8===e.BYTES_PER_ELEMENT?Zr(e,0):Xr(e,0)}for(t={type:Tt(e),data:[]},n=0;n<r.length;n++)t.data.push(r[n]);return t}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).typedarray2json=r();
//# sourceMappingURL=browser.js.map
