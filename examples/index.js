/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

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
var BooleanArray = require( '@stdlib/array-bool' );
var typedarray2json = require( './../lib' );

var arr = new Float64Array( [ 5.0, 3.0 ] );
console.log( typedarray2json( arr ) );
/* =>
	{
		'type': 'Float64Array',
		'data': [ 5.0, 3.0 ]
	}
*/

arr = new Float32Array( [ 5.0, -3.0 ] );
console.log( typedarray2json( arr ) );
/* =>
	{
		'type': 'Float32Array',
		'data': [ 5.0, -3.0 ]
	}
*/

arr = new Complex128Array( [ 5.0, -3.0 ] );
console.log( typedarray2json( arr ) );
/* =>
	{
		'type': 'Complex128Array',
		'data': [ 5.0, -3.0 ]
	}
*/

arr = new Complex64Array( [ 5.0, -3.0 ] );
console.log( typedarray2json( arr ) );
/* =>
	{
		'type': 'Complex64Array',
		'data': [ 5.0, -3.0 ]
	}
*/

arr = new BooleanArray( [ true, false ] );
console.log( typedarray2json( arr ) );
/* =>
    {
        'type': 'BooleanArray',
        'data': [ 1, 0 ]
    }
*/

arr = new Int32Array( [ -5, 3 ] );
console.log( typedarray2json( arr ) );
/* =>
	{
		'type': 'Int32Array',
		'data': [ -5, 3 ]
	}
*/

arr = new Uint32Array( [ 5, 3 ] );
console.log( typedarray2json( arr ) );
/* =>
	{
		'type': 'Uint32Array',
		'data': [ 5, 3 ]
	}
*/

arr = new Int16Array( [ -5, 3 ] );
console.log( typedarray2json( arr ) );
/* =>
	{
		'type': 'Int16Array',
		'data': [ -5, 3 ]
	}
*/

arr = new Uint16Array( [ 5, 3 ] );
console.log( typedarray2json( arr ) );
/* =>
	{
		'type': 'Uint16Array',
		'data': [ 5, 3 ]
	}
*/

arr = new Int8Array( [ -5, 3 ] );
console.log( typedarray2json( arr ) );
/* =>
	{
		'type': 'Int8Array',
		'data': [ -5, 3 ]
	}
*/

arr = new Uint8Array( [ 5, 3 ] );
console.log( typedarray2json( arr ) );
/* =>
	{
		'type': 'Uint8Array',
		'data': [ 5, 3 ]
	}
*/

arr = new Uint8ClampedArray( [ 5, 3 ] );
console.log( typedarray2json( arr ) );
/* =>
	{
		'type': 'Uint8ClampedArray',
		'data': [ 5, 3 ]
	}
*/
