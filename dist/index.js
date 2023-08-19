"use strict";var u=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var n=u(function(B,y){
var q=require('@stdlib/array-int8/dist'),s=require('@stdlib/array-uint8/dist'),l=require('@stdlib/array-uint8c/dist'),f=require('@stdlib/array-int16/dist'),m=require('@stdlib/array-uint16/dist'),d=require('@stdlib/array-int32/dist'),x=require('@stdlib/array-uint32/dist'),C=require('@stdlib/array-float32/dist'),c=require('@stdlib/array-float64/dist'),U=require('@stdlib/array-complex64/dist'),T=require('@stdlib/array-complex128/dist'),h=[[c,"Float64Array"],[C,"Float32Array"],[d,"Int32Array"],[x,"Uint32Array"],[f,"Int16Array"],[m,"Uint16Array"],[q,"Int8Array"],[s,"Uint8Array"],[l,"Uint8ClampedArray"],[U,"Complex64Array"],[T,"Complex128Array"]];y.exports=h
});var o=u(function(L,v){
var E=require('@stdlib/assert-instance-of/dist'),I=require('@stdlib/utils-constructor-name/dist'),g=require('@stdlib/utils-get-prototype-of/dist'),t=n();function F(r){var a,e;for(e=0;e<t.length;e++)if(E(r,t[e][0]))return t[e][1];for(;r;){for(a=I(r),e=0;e<t.length;e++)if(a===t[e][1])return t[e][1];r=g(r)}}v.exports=F
});var A=u(function(V,p){
var N=require('@stdlib/assert-is-typed-array/dist'),O=require('@stdlib/assert-is-complex-typed-array/dist'),w=require('@stdlib/strided-base-reinterpret-complex64/dist'),R=require('@stdlib/strided-base-reinterpret-complex128/dist'),S=require('@stdlib/error-tools-fmtprodmsg/dist'),M=o();function P(r){var a,e,i;if(N(r))a=r;else if(O(r))r.BYTES_PER_ELEMENT===8?a=w(r,0):a=R(r,0);else throw new TypeError(S('01b2x',r));for(e={type:M(r),data:[]},i=0;i<a.length;i++)e.data.push(a[i]);return e}p.exports=P
});var _=A();module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
