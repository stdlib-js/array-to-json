// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return r&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;function o(r,e){return null!=r&&n.call(r,e)}var i="function"==typeof Symbol?Symbol.toStringTag:"";var a=e()?function(r){var e,n,a;if(null==r)return t.call(r);n=r[i],e=o(r,i);try{r[i]=void 0}catch(e){return t.call(r)}return a=t.call(r),e?r[i]=n:delete r[i],a}:function(r){return t.call(r)},u="function"==typeof Object.defineProperty?Object.defineProperty:null;var f,l=Object.defineProperty,c=Object.prototype,y=c.toString,s=c.__defineGetter__,h=c.__defineSetter__,p=c.__lookupGetter__,m=c.__lookupSetter__;f=function(){try{return u({},"x",{}),!0}catch(r){return!1}}()?l:function(r,e,t){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===y.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===y.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(p.call(r,e)||m.call(r,e)?(n=r.__proto__,r.__proto__=c,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&s&&s.call(r,e,t.get),a&&h&&h.call(r,e,t.set),r};var g=f;function b(r,e,t){g(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function w(){return/^\s*function\s*([^(]*)/i}var v=/^\s*function\s*([^(]*)/i;b(w,"REGEXP",v);var d=Array.isArray?Array.isArray:function(r){return"[object Array]"===a(r)};function E(r){return null!==r&&"object"==typeof r}function A(r){var e,t,n,o;if(("Object"===(t=a(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=v.exec(n.toString()))return e[1]}return E(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}b(E,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!d(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(E));var _=/./;function T(r){return"boolean"==typeof r}var j=Boolean.prototype.toString;var x=e();function B(r){return"object"==typeof r&&(r instanceof Boolean||(x?function(r){try{return j.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===a(r)))}function L(r){return T(r)||B(r)}function S(){return new Function("return this;")()}b(L,"isPrimitive",T),b(L,"isObject",B);var V="object"==typeof self?self:null,R="object"==typeof window?window:null,I="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},k="object"==typeof I?I:null;var O=function(r){if(arguments.length){if(!T(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return S()}if(V)return V;if(R)return R;if(k)return k;throw new Error("unexpected error. Unable to resolve global object.")}(),C=O.document&&O.document.childNodes,U=Int8Array;var M="function"==typeof _||"object"==typeof U||"function"==typeof C?function(r){return A(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?A(r).toLowerCase():e};function F(r){return"function"===M(r)}function N(){}var P="foo"===N.name;var Y,W=Object.getPrototypeOf;Y=F(Object.getPrototypeOf)?W:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===a(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var G=Y;function J(r){return null==r?null:(r=Object(r),G(r))}var X="function"==typeof Float64Array;var q="function"==typeof Float64Array?Float64Array:null;function z(){var r,e,t;if("function"!=typeof q)return!1;try{e=new q([1,3.14,-3.14,NaN]),t=e,r=(X&&t instanceof Float64Array||"[object Float64Array]"===a(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}var D="function"==typeof Float64Array?Float64Array:void 0;var H=z()?D:function(){throw new Error("not implemented")},K="function"==typeof Int8Array;var Q="function"==typeof Int8Array?Int8Array:null;var Z="function"==typeof Int8Array?Int8Array:void 0;var $=function(){var r,e,t;if("function"!=typeof Q)return!1;try{e=new Q([1,3.14,-3.14,128]),t=e,r=(K&&t instanceof Int8Array||"[object Int8Array]"===a(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?Z:function(){throw new Error("not implemented")},rr="function"==typeof Uint8Array;var er="function"==typeof Uint8Array?Uint8Array:null;var tr="function"==typeof Uint8Array?Uint8Array:void 0;var nr=function(){var r,e,t;if("function"!=typeof er)return!1;try{e=new er(e=[1,3.14,-3.14,256,257]),t=e,r=(rr&&t instanceof Uint8Array||"[object Uint8Array]"===a(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")},or="function"==typeof Uint8ClampedArray;var ir="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var ar="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var ur=function(){var r,e,t;if("function"!=typeof ir)return!1;try{e=new ir([-1,0,1,3.14,4.99,255,256]),t=e,r=(or&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===a(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")},fr="function"==typeof Int16Array;var lr="function"==typeof Int16Array?Int16Array:null;var cr="function"==typeof Int16Array?Int16Array:void 0;var yr=function(){var r,e,t;if("function"!=typeof lr)return!1;try{e=new lr([1,3.14,-3.14,32768]),t=e,r=(fr&&t instanceof Int16Array||"[object Int16Array]"===a(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")},sr="function"==typeof Uint16Array;var hr="function"==typeof Uint16Array?Uint16Array:null;var pr="function"==typeof Uint16Array?Uint16Array:void 0;var mr=function(){var r,e,t;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(sr&&t instanceof Uint16Array||"[object Uint16Array]"===a(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")},gr="function"==typeof Int32Array;var br="function"==typeof Int32Array?Int32Array:null;var wr="function"==typeof Int32Array?Int32Array:void 0;var vr=function(){var r,e,t;if("function"!=typeof br)return!1;try{e=new br([1,3.14,-3.14,2147483648]),t=e,r=(gr&&t instanceof Int32Array||"[object Int32Array]"===a(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")},dr="function"==typeof Uint32Array;var Er="function"==typeof Uint32Array?Uint32Array:null;var Ar="function"==typeof Uint32Array?Uint32Array:void 0;var _r=function(){var r,e,t;if("function"!=typeof Er)return!1;try{e=new Er(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(dr&&t instanceof Uint32Array||"[object Uint32Array]"===a(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")},Tr="function"==typeof Float32Array;var jr=Number.POSITIVE_INFINITY,xr="function"==typeof Float32Array?Float32Array:null;var Br="function"==typeof Float32Array?Float32Array:void 0;var Lr=function(){var r,e,t;if("function"!=typeof xr)return!1;try{e=new xr([1,3.14,-3.14,5e40]),t=e,r=(Tr&&t instanceof Float32Array||"[object Float32Array]"===a(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===jr}catch(e){r=!1}return r}()?Br:function(){throw new Error("not implemented")},Sr=[H,Lr,vr,_r,yr,mr,$,nr,ur],Vr=["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"],Rr=z()?J(H):Ir;function Ir(){}function kr(r){return"number"==typeof r}Rr="TypedArray"===function(r){if(!1===F(r))throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return P?r.name:v.exec(r.toString())[1]}(Rr)?Rr:Ir;var Or=Number,Cr=Or.prototype.toString;var Ur=e();function Mr(r){return"object"==typeof r&&(r instanceof Or||(Ur?function(r){try{return Cr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===a(r)))}function Fr(r){return kr(r)||Mr(r)}b(Fr,"isPrimitive",kr),b(Fr,"isObject",Mr);var Nr=Or.NEGATIVE_INFINITY,Pr=Math.floor;function Yr(r){return Pr(r)===r}function Wr(r){return r<jr&&r>Nr&&Yr(r)}function Gr(r){return kr(r)&&Wr(r)}function Jr(r){return Mr(r)&&Wr(r.valueOf())}function Xr(r){return Gr(r)||Jr(r)}function qr(r){return Gr(r)&&r>=0}function zr(r){return Jr(r)&&r.valueOf()>=0}function Dr(r){return qr(r)||zr(r)}b(Xr,"isPrimitive",Gr),b(Xr,"isObject",Jr),b(Dr,"isPrimitive",qr),b(Dr,"isObject",zr);function Hr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Yr(r.length)&&r.length>=0&&r.length<=4294967295}function Kr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Yr(r.length)&&r.length>=0&&r.length<=9007199254740991}var Qr="function"==typeof ArrayBuffer;function Zr(r){return Qr&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===a(r)}function $r(r){return"object"==typeof r&&null!==r&&!d(r)}function re(r,e){if(!(this instanceof re))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!kr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!kr(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return g(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),g(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}b(re,"BYTES_PER_ELEMENT",8),b(re.prototype,"BYTES_PER_ELEMENT",8),b(re.prototype,"byteLength",16),b(re.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),b(re.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var ee="function"==typeof Math.fround?Math.fround:null,te=new Lr(1);var ne="function"==typeof ee?ee:function(r){return te[0]=r,te[0]};function oe(r,e){if(!(this instanceof oe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!kr(r))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+r+"`.");if(!kr(e))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+e+"`.");return g(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:ne(r)}),g(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:ne(e)}),this}function ie(r){return r instanceof re||r instanceof oe||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function ae(r){return Yr(r/2)}function ue(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&o(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}b(oe,"BYTES_PER_ELEMENT",4),b(oe.prototype,"BYTES_PER_ELEMENT",4),b(oe.prototype,"byteLength",8),b(oe.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),b(oe.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var fe=ue()?Symbol.iterator:null;function le(r,e,t){g(r,e,{configurable:!1,enumerable:!1,get:t})}function ce(r){return r.re}function ye(r){return r.im}function se(r,e){return new Lr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function he(r,e){return new H(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function pe(r,e){return r[e]}function me(r,e){return r.get(e)}function ge(r,e,t){r[e]=t}function be(r,e,t){r.set(t,e)}function we(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?me:pe,setter:e?be:ge}}function ve(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Hr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!ie(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(ce(n),ye(n))}return e}function de(r,e,t){var n,o,i,a;for(n=[],a=-1;!(o=r.next()).done;)if(a+=1,Hr(i=e.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!ie(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(ce(i),ye(i))}return n}function Ee(r,e){var t,n,o,i;for(t=e.length,i=0,o=0;o<t;o++){if(!ie(n=e[o]))return null;r[i]=ce(n),r[i+1]=ye(n),i+=2}return r}var Ae=2*Lr.BYTES_PER_ELEMENT,_e=ue();function Te(r){return r instanceof Le||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function je(r){return r===Le||"Complex128Array"===r.name}function xe(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Ae}function Be(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*Ae}function Le(){var r,e,t,n;if(e=arguments.length,!(this instanceof Le))return 0===e?new Le:1===e?new Le(arguments[0]):2===e?new Le(arguments[0],arguments[1]):new Le(arguments[0],arguments[1],arguments[2]);if(0===e)t=new Lr(0);else if(1===e)if(qr(arguments[0]))t=new Lr(2*arguments[0]);else if(Kr(arguments[0]))if((n=(t=arguments[0]).length)&&d(t)&&ie(t[0])){if(null===(t=Ee(new Lr(2*n),t))){if(!ae(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Lr(arguments[0])}}else{if(xe(t))t=se(t,0);else if(Be(t))t=he(t,0);else if(!ae(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new Lr(t)}else if(Zr(arguments[0])){if(!Yr((t=arguments[0]).byteLength/Ae))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Ae+". Byte length: `"+t.byteLength+"`.");t=new Lr(t)}else{if(!$r(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===_e)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!F(t[fe]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!F((t=t[fe]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=ve(t))instanceof Error)throw t;t=new Lr(t)}else{if(!Zr(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!qr(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!Yr(r/Ae))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Ae+". Value: `"+r+"`.");if(2===e){if(!Yr((n=t.byteLength-r)/Ae))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Ae+". View byte length: `"+n+"`.");t=new Lr(t,r)}else{if(!qr(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Ae>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Ae+"`.");t=new Lr(t,r,2*n)}}return b(this,"_buffer",t),b(this,"_length",t.length/2),this}function Se(r){return r.re}function Ve(r){return r.im}function Re(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Hr(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!ie(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");e.push(Se(n),Ve(n))}return e}function Ie(r,e,t){var n,o,i,a;for(n=[],a=-1;!(o=r.next()).done;)if(a+=1,Hr(i=e.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!ie(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(Se(i),Ve(i))}return n}function ke(r,e){var t,n,o,i;for(t=e.length,i=0,o=0;o<t;o++){if(!ie(n=e[o]))return null;r[i]=Se(n),r[i+1]=Ve(n),i+=2}return r}b(Le,"BYTES_PER_ELEMENT",Ae),b(Le,"name","Complex64Array"),b(Le,"from",(function(r){var e,t,n,o,i,a,u,f,l,c,y;if(!F(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!F(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(Te(r)){if(u=r.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(ie(l=n.call(e,r.get(c),c)))i[y]=ce(l),i[y+1]=ye(l);else{if(!(Hr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(Kr(r)){if(n){for(u=r.length,a=we(r),c=0;c<u;c++)if(!ie(a.getter(r,c))){f=!0;break}if(f){if(!ae(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(e,a.getter(r,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(ie(l=n.call(e,a.getter(r,c),c)))i[y]=ce(l),i[y+1]=ye(l);else{if(!(Hr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if($r(r)&&_e&&F(r[fe])){if(!F((i=r[fe]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?de(i,n,e):ve(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),b(Le,"of",(function(){var r,e;if(!F(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!je(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),le(Le.prototype,"buffer",(function(){return this._buffer.buffer})),le(Le.prototype,"byteLength",(function(){return this._buffer.byteLength})),le(Le.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),b(Le.prototype,"BYTES_PER_ELEMENT",Le.BYTES_PER_ELEMENT),b(Le.prototype,"copyWithin",(function(r,e){if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),b(Le.prototype,"entries",(function(){var r,e,t,n,o,i,a;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,i=-1,a=-2,b(t={},"next",(function(){var e;if(i+=1,o||i>=n)return{done:!0};return e=new oe(r[a+=2],r[a+1]),{value:[i,e],done:!1}})),b(t,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),fe&&b(t,fe,(function(){return e.entries()})),t})),b(Le.prototype,"get",(function(r){var e;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!qr(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new oe((e=this._buffer)[r*=2],e[r+1])})),le(Le.prototype,"length",(function(){return this._length})),b(Le.prototype,"set",(function(r){var e,t,n,o,i,a,u,f,l;if(!Te(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!qr(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(ie(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=ce(r),void(n[t+1]=ye(r))}if(Te(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Ae,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new Lr(e.length),f=0;f<e.length;f++)o[f]=e[f];e=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Kr(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!ie(r[f])){i=!0;break}if(i){if(!ae(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Ae,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new Lr(a),f=0;f<a;f++)o[f]=e[f];e=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=ce(u),n[t+1]=ye(u),t+=2}}));var Oe=2*H.BYTES_PER_ELEMENT,Ce=ue();function Ue(r){return r instanceof Pe||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function Me(r){return r===Pe||"Complex64Array"===r.name}function Fe(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Oe/2}function Ne(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Oe}function Pe(){var r,e,t,n;if(e=arguments.length,!(this instanceof Pe))return 0===e?new Pe:1===e?new Pe(arguments[0]):2===e?new Pe(arguments[0],arguments[1]):new Pe(arguments[0],arguments[1],arguments[2]);if(0===e)t=new H(0);else if(1===e)if(qr(arguments[0]))t=new H(2*arguments[0]);else if(Kr(arguments[0]))if((n=(t=arguments[0]).length)&&d(t)&&ie(t[0])){if(null===(t=ke(new H(2*n),t))){if(!ae(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new H(arguments[0])}}else{if(Fe(t))t=se(t,0);else if(Ne(t))t=he(t,0);else if(!ae(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new H(t)}else if(Zr(arguments[0])){if(!Yr((t=arguments[0]).byteLength/Oe))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Oe+". Byte length: `"+t.byteLength+"`.");t=new H(t)}else{if(!$r(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Ce)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!F(t[fe]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!F((t=t[fe]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Re(t))instanceof Error)throw t;t=new H(t)}else{if(!Zr(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!qr(r=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+r+"`.");if(!Yr(r/Oe))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Oe+". Value: `"+r+"`.");if(2===e){if(!Yr((n=t.byteLength-r)/Oe))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Oe+". View byte length: `"+n+"`.");t=new H(t,r)}else{if(!qr(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Oe>t.byteLength-r)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Oe+"`.");t=new H(t,r,2*n)}}return b(this,"_buffer",t),b(this,"_length",t.length/2),this}b(Pe,"BYTES_PER_ELEMENT",Oe),b(Pe,"name","Complex128Array"),b(Pe,"from",(function(r){var e,t,n,o,i,a,u,f,l,c,y;if(!F(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Me(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!F(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(e=arguments[2])}if(Ue(r)){if(u=r.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(ie(l=n.call(e,r.get(c),c)))i[y]=Se(l),i[y+1]=Ve(l);else{if(!(Hr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if(Kr(r)){if(n){for(u=r.length,a=we(r),c=0;c<u;c++)if(!ie(a.getter(r,c))){f=!0;break}if(f){if(!ae(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(e,a.getter(r,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(ie(l=n.call(e,a.getter(r,c),c)))i[y]=Se(l),i[y+1]=Ve(l);else{if(!(Hr(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(r)}if($r(r)&&Ce&&F(r[fe])){if(!F((i=r[fe]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Ie(i,n,e):Re(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+r+"`.")})),b(Pe,"of",(function(){var r,e;if(!F(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Me(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),le(Pe.prototype,"buffer",(function(){return this._buffer.buffer})),le(Pe.prototype,"byteLength",(function(){return this._buffer.byteLength})),le(Pe.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),b(Pe.prototype,"BYTES_PER_ELEMENT",Pe.BYTES_PER_ELEMENT),b(Pe.prototype,"copyWithin",(function(r,e){if(!Ue(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),b(Pe.prototype,"entries",(function(){var r,e,t,n,o,i,a;if(!Ue(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,i=-1,a=-2,b(t={},"next",(function(){var e;if(i+=1,o||i>=n)return{done:!0};return e=new re(r[a+=2],r[a+1]),{value:[i,e],done:!1}})),b(t,"return",(function(r){if(o=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),fe&&b(t,fe,(function(){return e.entries()})),t})),b(Pe.prototype,"get",(function(r){var e;if(!Ue(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!qr(r))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+r+"`.");if(!(r>=this._length))return new re((e=this._buffer)[r*=2],e[r+1])})),le(Pe.prototype,"length",(function(){return this._length})),b(Pe.prototype,"set",(function(r){var e,t,n,o,i,a,u,f,l;if(!Ue(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!qr(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(ie(r)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Se(r),void(n[t+1]=Ve(r))}if(Ue(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Oe,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new H(e.length),f=0;f<e.length;f++)o[f]=e[f];e=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Kr(r))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+r+"`.");for(a=r.length,f=0;f<a;f++)if(!ie(r[f])){i=!0;break}if(i){if(!ae(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Oe,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(o=new H(a),f=0;f<a;f++)o[f]=e[f];e=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Se(u),n[t+1]=Ve(u),t+=2}}));var Ye=[Pe,Le],We=["Complex64Array","Complex128Array"];function Ge(r,e){if("function"!=typeof e)throw new TypeError("invalid argument. `constructor` argument must be callable. Value: `"+e+"`.");return r instanceof e}var Je=[[H,"Float64Array"],[Lr,"Float32Array"],[vr,"Int32Array"],[_r,"Uint32Array"],[yr,"Int16Array"],[mr,"Uint16Array"],[$,"Int8Array"],[nr,"Uint8Array"],[ur,"Uint8ClampedArray"],[Le,"Complex64Array"],[Pe,"Complex128Array"]];function Xe(r){var e,t;for(t=0;t<Je.length;t++)if(Ge(r,Je[t][0]))return Je[t][1];for(;r;){for(e=A(r),t=0;t<Je.length;t++)if(e===Je[t][1])return Je[t][1];r=J(r)}}function qe(r){var e,t,n;if(function(r){var e,t;if("object"!=typeof r||null===r)return!1;if(r instanceof Rr)return!0;for(t=0;t<Sr.length;t++)if(r instanceof Sr[t])return!0;for(;r;){for(e=A(r),t=0;t<Vr.length;t++)if(Vr[t]===e)return!0;r=J(r)}return!1}(r))e=r;else{if(!function(r){var e,t;if("object"!=typeof r||null===r)return!1;for(t=0;t<Ye.length;t++)if(r instanceof Ye[t])return!0;for(;r;){for(e=A(r),t=0;t<We.length;t++)if(We[t]===e)return!0;r=J(r)}return!1}(r))throw new TypeError(function(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}("00n39",r));e=8===r.BYTES_PER_ELEMENT?se(r,0):he(r,0)}for(t={type:Xe(r),data:[]},n=0;n<e.length;n++)t.data.push(e[n]);return t}export{qe as default};
//# sourceMappingURL=mod.js.map