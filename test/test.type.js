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

// MODULES //

var tape = require( 'tape' );
var proxyquire = require( 'proxyquire' );
var Int8Array = require( '@stdlib/array-int8' );
var Uint8Array = require( '@stdlib/array-uint8' );
var Uint8ClampedArray = require( '@stdlib/array-uint8c' );
var Int16Array = require( '@stdlib/array-int16' );
var Uint16Array = require( '@stdlib/array-uint16' );
var Int32Array = require( '@stdlib/array-int32' );
var Uint32Array = require( '@stdlib/array-uint32' );
var Float32Array = require( '@stdlib/array-float32' );
var Float64Array = require( '@stdlib/array-float64' );
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex128Array = require( '@stdlib/array-complex128' );
var BooleanArray = require( '@stdlib/array-bool' );
var typeName = require( './../lib/type.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof typeName, 'function', 'export is a function' );
	t.end();
});

tape( 'if provided a typed array, the function returns the closest typed array type', function test( t ) {
	var expected;
	var values;
	var i;

	values = [
		new Float64Array( [ 5.0, 3.0 ] ),
		new Float32Array( [ 5.0, 3.0 ] ),
		new Int32Array( [ 5, 3 ] ),
		new Uint32Array( [ 5, 3 ] ),
		new Int16Array( [ 5, 3 ] ),
		new Uint16Array( [ 5, 3 ] ),
		new Int8Array( [ 5, 3 ] ),
		new Uint8Array( [ 5, 3 ] ),
		new Uint8ClampedArray( [ 5, 3 ] ),
		new Complex64Array( [ 5.0, 3.0 ] ),
		new Complex128Array( [ 5.0, 3.0 ] ),
		new BooleanArray( [ true, false ] )
	];

	expected = [
		'Float64Array',
		'Float32Array',
		'Int32Array',
		'Uint32Array',
		'Int16Array',
		'Uint16Array',
		'Int8Array',
		'Uint8Array',
		'Uint8ClampedArray',
		'Complex64Array',
		'Complex128Array',
		'BooleanArray'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( typeName( values[i] ), expected[ i ], 'returns the constructor name: ' + expected[ i ] );
	}
	t.end();
});

tape( 'if provided a typed array from a different realm, the function returns the closest typed array type', function test( t ) {
	var typeName;
	var expected;
	var values;
	var i;

	typeName = proxyquire( './../lib/type.js', {
		'@stdlib/assert-instance-of': instanceOf
	});

	values = [
		new Float64Array( [ 5.0, 3.0 ] ),
		new Float32Array( [ 5.0, 3.0 ] ),
		new Int32Array( [ 5, 3 ] ),
		new Uint32Array( [ 5, 3 ] ),
		new Int16Array( [ 5, 3 ] ),
		new Uint16Array( [ 5, 3 ] ),
		new Int8Array( [ 5, 3 ] ),
		new Uint8Array( [ 5, 3 ] ),
		new Uint8ClampedArray( [ 5, 3 ] ),
		new Complex64Array( [ 5.0, 3.0 ] ),
		new Complex128Array( [ 5.0, 3.0 ] ),
		new BooleanArray( [ true, false ] )
	];

	expected = [
		'Float64Array',
		'Float32Array',
		'Int32Array',
		'Uint32Array',
		'Int16Array',
		'Uint16Array',
		'Int8Array',
		'Uint8Array',
		'Uint8ClampedArray',
		'Complex64Array',
		'Complex128Array',
		'BooleanArray'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( typeName( values[i] ), expected[ i ], 'returns the constructor name: ' + expected[ i ] );
	}
	t.end();

	function instanceOf() {
		// Mocks comparing values from different realms...
		return false;
	}
});

tape( 'if not provided a typed array, the function returns `undefined`', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		NaN,
		5,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {},
		function typedarray() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( typeName( values[i] ), void 0, 'returns expected value' );
	}
	t.end();
});
