"use strict";var u=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var y=u(function(Y,n){
var p=require('@stdlib/array-int8/dist'),q=require('@stdlib/array-uint8/dist'),s=require('@stdlib/array-uint8c/dist'),f=require('@stdlib/array-int16/dist'),m=require('@stdlib/array-uint16/dist'),d=require('@stdlib/array-int32/dist'),x=require('@stdlib/array-uint32/dist'),C=require('@stdlib/array-float32/dist'),c=require('@stdlib/array-float64/dist'),U=require('@stdlib/array-complex64/dist'),T=require('@stdlib/array-complex128/dist'),h=require('@stdlib/array-bool/dist'),E=[[c,"Float64Array"],[C,"Float32Array"],[d,"Int32Array"],[x,"Uint32Array"],[f,"Int16Array"],[m,"Uint16Array"],[p,"Int8Array"],[q,"Uint8Array"],[s,"Uint8ClampedArray"],[U,"Complex64Array"],[T,"Complex128Array"],[h,"BooleanArray"]];n.exports=E
});var v=u(function(b,o){
var I=require('@stdlib/assert-instance-of/dist'),g=require('@stdlib/utils-constructor-name/dist'),B=require('@stdlib/utils-get-prototype-of/dist'),t=y();function F(r){var e,a;for(a=0;a<t.length;a++)if(I(r,t[a][0]))return t[a][1];for(;r;){for(e=g(r),a=0;a<t.length;a++)if(e===t[a][1])return t[a][1];r=B(r)}}o.exports=F
});var l=u(function(k,A){
var N=require('@stdlib/assert-is-typed-array/dist'),O=require('@stdlib/assert-is-complex-typed-array/dist'),w=require('@stdlib/assert-is-booleanarray/dist'),R=require('@stdlib/strided-base-reinterpret-complex64/dist'),S=require('@stdlib/strided-base-reinterpret-complex128/dist'),M=require('@stdlib/strided-base-reinterpret-boolean/dist'),P=require('@stdlib/error-tools-fmtprodmsg/dist'),_=v();function j(r){var e,a,i;if(N(r))e=r;else if(O(r))r.BYTES_PER_ELEMENT===8?e=R(r,0):e=S(r,0);else if(w(r))e=M(r,0);else throw new TypeError(P('01b2x',r));for(a={type:_(r),data:[]},i=0;i<e.length;i++)a.data.push(e[i]);return a}A.exports=j
});var L=l();module.exports=L;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
