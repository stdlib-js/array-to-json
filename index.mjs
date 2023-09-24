// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-typed-array@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-instance-of@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constructor-name@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@v0.1.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@v0.1.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@v0.1.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8c@v0.1.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int16@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint16@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@v0.1.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@v0.1.0-esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@esm/index.mjs";var g=[[c,"Float64Array"],[f,"Float32Array"],[h,"Int32Array"],[v,"Uint32Array"],[j,"Int16Array"],[p,"Uint16Array"],[o,"Int8Array"],[a,"Uint8Array"],[l,"Uint8ClampedArray"],[y,"Complex64Array"],[x,"Complex128Array"]];function b(t){var r,s;for(s=0;s<g.length;s++)if(n(t,g[s][0]))return g[s][1];for(;t;){for(r=d(t),s=0;s<g.length;s++)if(r===g[s][1])return g[s][1];t=m(t)}}function u(n){var d,m,o;if(t(n))d=n;else{if(!r(n))throw new TypeError(i("01b2x,Mi",n));d=8===n.BYTES_PER_ELEMENT?s(n,0):e(n,0)}for(m={type:b(n),data:[]},o=0;o<d.length;o++)m.data.push(d[o]);return m}export{u as default};
//# sourceMappingURL=index.mjs.map