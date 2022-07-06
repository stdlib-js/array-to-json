/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

// MODULES //

var isTypedArray = require( '@stdlib/assert-is-typed-array' );
var isComplexTypedArray = require( '@stdlib/assert-is-complex-typed-array' );
var reinterpret64 = require( '@stdlib/strided-base-reinterpret-complex64' );
var reinterpret128 = require( '@stdlib/strided-base-reinterpret-complex128' );
var format = require( '@stdlib/error-tools-fmtprodmsg' );
var typeName = require( './type.js' );


// MAIN //

/**
* Returns a JSON representation of a typed array.
*
* ## Notes
*
* -   We build a JSON object representing a typed array similar to how Node.js `Buffer` objects are represented. See [Buffer][1].
*
* [1]: https://nodejs.org/api/buffer.html#buffer_buf_tojson
*
* @param {TypedArray} arr - typed array to serialize
* @throws {TypeError} first argument must be a typed array
* @returns {Object} JSON representation
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var arr = new Float64Array( [ 5.0, 3.0 ] );
* var json = toJSON( arr );
* // returns { 'type': 'Float64Array', 'data': [ 5.0, 3.0 ] }
*/
function toJSON( arr ) {
	var data;
	var out;
	var i;

	if ( isTypedArray( arr ) ) {
		data = arr;
	} else if ( isComplexTypedArray( arr ) ) {
		if ( arr.BYTES_PER_ELEMENT === 8 ) {
			data = reinterpret64( arr, 0 );
		} else { // arr.BYTES_PER_ELEMENT === 16
			data = reinterpret128( arr, 0 );
		}
	} else {
		throw new TypeError( format( '00n39', arr ) );
	}
	out = {
		'type': typeName( arr ),
		'data': []
	};
	for ( i = 0; i < data.length; i++ ) {
		out.data.push( data[ i ] );
	}
	return out;
}


// EXPORTS //

module.exports = toJSON;