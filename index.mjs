// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-negative-zero@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zero@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.1.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.1.1-esm/index.mjs";function a(s,a,m,d,o){var l,p,f,h,j;if(m=arguments[(l=arguments.length)-3],d=arguments[l-2],o=arguments[l-1],4===l)return m[o]=s,m[o+d]=s,m;if(5===l)return n(s)||n(a)?(m[o]=NaN,m[o+d]=NaN,m):s===a&&0===s?t(s)?(m[o]=s,m[o+d]=a,m):(m[o]=a,m[o+d]=s,m):s<a?(m[o]=s,m[o+d]=a,m):(m[o]=a,m[o+d]=s,m);for(p=i,f=r,j=0;j<l-3;j++){if(n(h=arguments[j]))return m[o]=NaN,m[o+d]=NaN,m;(h<p||0===h&&h===p&&t(h))&&(p=h),(h>f||0===h&&h===f&&e(h))&&(f=h)}return m[o]=p,m[o+d]=f,m}function m(){var s,t;for(s=[],t=0;t<arguments.length;t++)s.push(arguments[t]);return s.push([0,0],1,0),a.apply(null,s)}s(m,"assign",a);export{a as assign,m as default};
//# sourceMappingURL=index.mjs.map