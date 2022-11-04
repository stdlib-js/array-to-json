<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# typedarray2json

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a [JSON][json] representation of a typed array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/array-to-json
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var typedarray2json = require( '@stdlib/array-to-json' );
```

#### typedarray2json( typedarray )

Returns a [JSON][json] representation of a typed array.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var arr = new Float64Array( [ 5.0, 3.0 ] );

var json = typedarray2json( arr );
/* returns
    {
        'type': 'Float64Array',
        'data': [ 5.0, 3.0 ]
    }
*/
```

For guidance on reviving a JSON-serialized typed array, see [`reviver()`][@stdlib/array/reviver].

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Supported typed array types:

    -   [`Float64Array`][@stdlib/array/float64]
    -   [`Float32Array`][@stdlib/array/float32]
    -   [`Complex128Array`][@stdlib/array/complex128]
    -   [`Complex64Array`][@stdlib/array/complex64]
    -   [`Int32Array`][@stdlib/array/int32]
    -   [`Uint32Array`][@stdlib/array/uint32]
    -   [`Int16Array`][@stdlib/array/int16]
    -   [`Uint16Array`][@stdlib/array/uint16]
    -   [`Int8Array`][@stdlib/array/int8]
    -   [`Uint8Array`][@stdlib/array/uint8]
    -   [`Uint8ClampedArray`][@stdlib/array/uint8c]

-   The implementation provides basic support for custom typed arrays and sets the `type` field to the closest known typed array type.

    <!-- eslint-disable no-restricted-syntax, no-useless-constructor, new-cap, stdlib/require-globals, node/no-unsupported-features/es-syntax -->

    ```javascript
    class CustomArray extends Float64Array() {
        constructor( data ) {
            super( data );
        }
    }

    var arr = new CustomArray( [ 5.0, 3.0 ] );

    var json = typedarray2json( arr );
    /* returns
        {
            'type': 'Float64Array',
            'data': [ 5.0, 3.0 ]
        }
    */
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Float64Array = require( '@stdlib/array-float64' );
var Float32Array = require( '@stdlib/array-float32' );
var Int32Array = require( '@stdlib/array-int32' );
var Uint32Array = require( '@stdlib/array-uint32' );
var Int16Array = require( '@stdlib/array-int16' );
var Uint16Array = require( '@stdlib/array-uint16' );
var Int8Array = require( '@stdlib/array-int8' );
var Uint8Array = require( '@stdlib/array-uint8' );
var Uint8ClampedArray = require( '@stdlib/array-uint8c' );
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex128Array = require( '@stdlib/array-complex128' );
var typedarray2json = require( '@stdlib/array-to-json' );

var arr = new Float64Array( [ 5.0, 3.0 ] );
var json = typedarray2json( arr );
/* returns
    {
        'type': 'Float64Array',
        'data': [ 5.0, 3.0 ]
    }
*/

arr = new Float32Array( [ 5.0, -3.0 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Float32Array',
        'data': [ 5.0, -3.0 ]
    }
*/

arr = new Complex128Array( [ 5.0, 3.0 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Complex128Array',
        'data': [ 5.0, 3.0 ]
    }
*/

arr = new Complex64Array( [ 5.0, 3.0 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Complex64Array',
        'data': [ 5.0, 3.0 ]
    }
*/

arr = new Int32Array( [ -5, 3 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Int32Array',
        'data': [ -5, 3 ]
    }
*/

arr = new Uint32Array( [ 5, 3 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Uint32Array',
        'data': [ 5, 3 ]
    }
*/

arr = new Int16Array( [ -5, 3 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Int16Array',
        'data': [ -5, 3 ]
    }
*/

arr = new Uint16Array( [ 5, 3 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Uint16Array',
        'data': [ 5, 3 ]
    }
*/

arr = new Int8Array( [ -5, 3 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Int8Array',
        'data': [ -5, 3 ]
    }
*/

arr = new Uint8Array( [ 5, 3 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Uint8Array',
        'data': [ 5, 3 ]
    }
*/

arr = new Uint8ClampedArray( [ 5, 3 ] );
json = typedarray2json( arr );
/* returns
    {
        'type': 'Uint8ClampedArray',
        'data': [ 5, 3 ]
    }
*/
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array/reviver`][@stdlib/array/reviver]</span><span class="delimiter">: </span><span class="description">revive a JSON-serialized typed array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-to-json.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-to-json

[test-image]: https://github.com/stdlib-js/array-to-json/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-to-json/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-to-json/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-to-json?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-to-json.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-to-json/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-to-json/tree/deno
[umd-url]: https://github.com/stdlib-js/array-to-json/tree/umd
[esm-url]: https://github.com/stdlib-js/array-to-json/tree/esm
[branches-url]: https://github.com/stdlib-js/array-to-json/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-to-json/main/LICENSE

[json]: http://www.json.org/

[@stdlib/array/float64]: https://github.com/stdlib-js/array-float64

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64

[@stdlib/array/int32]: https://github.com/stdlib-js/array-int32

[@stdlib/array/uint32]: https://github.com/stdlib-js/array-uint32

[@stdlib/array/int16]: https://github.com/stdlib-js/array-int16

[@stdlib/array/uint16]: https://github.com/stdlib-js/array-uint16

[@stdlib/array/int8]: https://github.com/stdlib-js/array-int8

[@stdlib/array/uint8]: https://github.com/stdlib-js/array-uint8

[@stdlib/array/uint8c]: https://github.com/stdlib-js/array-uint8c

<!-- <related-links> -->

[@stdlib/array/reviver]: https://github.com/stdlib-js/array-reviver

<!-- </related-links> -->

</section>

<!-- /.links -->
