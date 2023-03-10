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

# minmaxn

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the minimum and maximum values.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-minmaxn
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
var minmaxn = require( '@stdlib/math-base-special-minmaxn' );
```

#### minmaxn( \[x\[, y\[, ...args]]] )

Returns the minimum and maximum values in a single pass.

```javascript
var v = minmaxn( 4.2, 3.14 );
// returns [ 3.14, 4.2 ]

v = minmaxn( +0.0, -0.0 );
// returns [ -0.0, +0.0 ]

v = minmaxn( 4.2, 3.14, -1.0, 6.8 );
// returns [ -1.0, 6.8 ]
```

If any argument is `NaN`, the function returns `NaN` for both the minimum value and the maximum value.

```javascript
var v = minmaxn( 4.2, NaN );
// returns [ NaN, NaN ]

v = minmaxn( NaN, 3.14 );
// returns [ NaN, NaN ]
```

#### minmaxn.assign( \[x\[, y\[, ...args]]], out, stride, offset )

Returns the minimum and maximum values in a single pass and assigns results to a provided output array.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var out = new Float64Array( 2 );

var v = minmaxn.assign( 5.0, 3.0, -2.0, 1.0, out, 1, 0 );
// returns <Float64Array>[ -2.0, 5.0 ]

var bool = ( v === out );
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When an empty set is considered a subset of the extended reals (all real numbers, including positive and negative infinity), positive infinity is the greatest lower bound and negative infinity is the least upper bound. Similar to zero being the identity element for the sum of an empty set and to one being the identity element for the product of an empty set, positive infinity is the identity element for the minimum and negative infinity is the identity element for the maximum, and thus, if not provided any arguments, the function returns positive infinity for the minimum value and negative infinity for the maximum value.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var minstd = require( '@stdlib/random-base-minstd-shuffle' );
var minmaxn = require( '@stdlib/math-base-special-minmaxn' );

var x;
var y;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = minstd();
    y = minstd();
    v = minmaxn( x, y );
    console.log( 'minmax(%d,%d) = [%d, %d]', x, y, v[0], v[1] );
}
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

-   <span class="package-name">[`@stdlib/math-base/special/max`][@stdlib/math/base/special/max]</span><span class="delimiter">: </span><span class="description">return the maximum value.</span>
-   <span class="package-name">[`@stdlib/math-base/special/min`][@stdlib/math/base/special/min]</span><span class="delimiter">: </span><span class="description">return the minimum value.</span>
-   <span class="package-name">[`@stdlib/math-base/special/minmaxabs`][@stdlib/math/base/special/minmaxabs]</span><span class="delimiter">: </span><span class="description">return the minimum and maximum absolute values.</span>

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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-minmaxn.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-minmaxn

[test-image]: https://github.com/stdlib-js/math-base-special-minmaxn/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-minmaxn/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-minmaxn/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-minmaxn?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-minmaxn.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-minmaxn/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-minmaxn/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-minmaxn/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-minmaxn/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-minmaxn/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-minmaxn/main/LICENSE

<!-- <related-links> -->

[@stdlib/math/base/special/max]: https://github.com/stdlib-js/math-base-special-max

[@stdlib/math/base/special/min]: https://github.com/stdlib-js/math-base-special-min

[@stdlib/math/base/special/minmaxabs]: https://github.com/stdlib-js/math-base-special-minmaxabs

<!-- </related-links> -->

</section>

<!-- /.links -->

