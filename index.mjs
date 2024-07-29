// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-typed-array@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-booleanarray@v0.0.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-boolean@v0.0.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-instance-of@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constructor-name@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@v0.2.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8c@v0.2.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int16@v0.2.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint16@v0.2.2-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@v0.2.2-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.2.2-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.2.2-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.2.2-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@v0.3.0-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@v0.3.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/array-bool@v0.0.1-esm/index.mjs";var A=[[x,"Float64Array"],[y,"Float32Array"],[f,"Int32Array"],[c,"Uint32Array"],[h,"Int16Array"],[v,"Uint16Array"],[a,"Int8Array"],[j,"Uint8Array"],[p,"Uint8ClampedArray"],[b,"Complex64Array"],[g,"Complex128Array"],[u,"BooleanArray"]];function E(t){var r,s;for(s=0;s<A.length;s++)if(m(t,A[s][0]))return A[s][1];for(;t;){for(r=o(t),s=0;s<A.length;s++)if(r===A[s][1])return A[s][1];t=l(t)}}function U(m){var o,l,a;if(t(m))o=m;else if(r(m))o=8===m.BYTES_PER_ELEMENT?e(m,0):i(m,0);else{if(!s(m))throw new TypeError(n("01b2x",m));o=d(m,0)}for(l={type:E(m),data:[]},a=0;a<o.length;a++)l.data.push(o[a]);return l}export{U as default};
//# sourceMappingURL=index.mjs.map
