// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-typed-array@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-complex-typed-array@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex64@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex128@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-instance-of@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constructor-name@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-get-prototype-of@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8c@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int16@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint16@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs";import y from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/array-complex128@esm/index.mjs";var v=[[y,"Float64Array"],[c,"Float32Array"],[h,"Int32Array"],[f,"Uint32Array"],[j,"Int16Array"],[p,"Uint16Array"],[o,"Int8Array"],[a,"Uint8Array"],[l,"Uint8ClampedArray"],[x,"Complex64Array"],[g,"Complex128Array"]];function b(t){var r,s;for(s=0;s<v.length;s++)if(n(t,v[s][0]))return v[s][1];for(;t;){for(r=d(t),s=0;s<v.length;s++)if(r===v[s][1])return v[s][1];t=m(t)}}function u(n){var d,m,o;if(t(n))d=n;else{if(!r(n))throw new TypeError(i("01b2x,Mi",n));d=8===n.BYTES_PER_ELEMENT?s(n,0):e(n,0)}for(m={type:b(n),data:[]},o=0;o<d.length;o++)m.data.push(d[o]);return m}export{u as default};
//# sourceMappingURL=index.mjs.map
