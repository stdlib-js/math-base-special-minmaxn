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

var tape = require( 'tape' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isNegativeZero = require( '@stdlib/math-base-assert-is-negative-zero' );
var isPositiveZero = require( '@stdlib/math-base-assert-is-positive-zero' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var minmaxn = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof minmaxn, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns `NaN` for both the minimum and maximum value if provided a `NaN`', function test( t ) {
	var v;

	v = minmaxn( NaN, 3.14 );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxn( 3.14, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxn( NaN, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxn( NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxn( 3.14, 4.2, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxn( NaN, 4.2, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxn( NaN, NaN, NaN );
	t.strictEqual( isnan( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isnan( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `-Infinity` as the minimum value if provided `-Infinity`', function test( t ) {
	var v;

	v = minmaxn( NINF, 3.14 );
	t.strictEqual( v[ 0 ], NINF, 'returns expected value' );
	t.strictEqual( v[ 1 ], 3.14, 'returns expected value' );

	v = minmaxn( 3.14, NINF );
	t.strictEqual( v[ 0 ], NINF, 'returns expected value' );
	t.strictEqual( v[ 1 ], 3.14, 'returns expected value' );

	v = minmaxn( NINF );
	t.strictEqual( v[ 0 ], NINF, 'returns expected value' );
	t.strictEqual( v[ 1 ], NINF, 'returns expected value' );

	v = minmaxn( 3.14, 4.2, NINF );
	t.strictEqual( v[ 0 ], NINF, 'returns expected value' );
	t.strictEqual( v[ 1 ], 4.2, 'returns expected value' );

	t.end();
});

tape( 'the function returns `+Infinity` as the maximum value if provided `+Infinity`', function test( t ) {
	var v;

	v = minmaxn( PINF, 3.14 );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	v = minmaxn( 3.14, PINF );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	v = minmaxn( PINF );
	t.strictEqual( v[ 0 ], PINF, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	v = minmaxn( 3.14, 4.2, PINF );
	t.strictEqual( v[ 0 ], 3.14, 'returns expected value' );
	t.strictEqual( v[ 1 ], PINF, 'returns expected value' );

	t.end();
});

tape( 'the function returns correctly signed zeros', function test( t ) {
	var v;

	v = minmaxn( +0.0, -0.0 );
	t.strictEqual( isNegativeZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxn( -0.0, +0.0 );
	t.strictEqual( isNegativeZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxn( -0.0, -0.0 );
	t.strictEqual( isNegativeZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxn( +0.0, +0.0 );
	t.strictEqual( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxn( -0.0 );
	t.strictEqual( isNegativeZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isNegativeZero( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxn( +0.0 );
	t.strictEqual( isPositiveZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	v = minmaxn( +0.0, -0.0, +0.0 );
	t.strictEqual( isNegativeZero( v[ 0 ] ), true, 'returns expected value' );
	t.strictEqual( isPositiveZero( v[ 1 ] ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns the minimum and maximum values', function test( t ) {
	var v;

	v = minmaxn();
	t.strictEqual( v[ 0 ], PINF, 'returns min value' );
	t.strictEqual( v[ 1 ], NINF, 'returns max value' );

	v = minmaxn( 4.2, 3.14 );
	t.strictEqual( v[ 0 ], 3.14, 'returns min value' );
	t.strictEqual( v[ 1 ], 4.2, 'returns max value' );

	v = minmaxn( -4.2, 3.14 );
	t.strictEqual( v[ 0 ], -4.2, 'returns min value' );
	t.strictEqual( v[ 1 ], 3.14, 'returns max value' );

	v = minmaxn( 3.14 );
	t.strictEqual( v[ 0 ], 3.14, 'returns min value' );
	t.strictEqual( v[ 1 ], 3.14, 'returns max value' );

	v = minmaxn( PINF );
	t.strictEqual( v[ 0 ], PINF, 'returns min value' );
	t.strictEqual( v[ 1 ], PINF, 'returns max value' );

	v = minmaxn( 4.2, 3.14, -1.0 );
	t.strictEqual( v[ 0 ], -1.0, 'returns min value' );
	t.strictEqual( v[ 1 ], 4.2, 'returns max value' );

	v = minmaxn( 4.2, 3.14, -1.0, -3.14 );
	t.strictEqual( v[ 0 ], -3.14, 'returns min value' );
	t.strictEqual( v[ 1 ], 4.2, 'returns max value' );

	t.end();
});
