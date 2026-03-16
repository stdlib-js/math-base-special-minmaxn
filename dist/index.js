"use strict";var s=function(a,n){return function(){return n||a((n={exports:{}}).exports,n),n.exports}};var u=s(function(A,c){
var p=require('@stdlib/math-base-assert-is-negative-zero/dist'),P=require('@stdlib/math-base-assert-is-positive-zero/dist'),q=require('@stdlib/math-base-assert-is-nan/dist'),Z=require('@stdlib/constants-float64-ninf/dist'),O=require('@stdlib/constants-float64-pinf/dist');function R(a,n,r,v,i){var m,g,N,e,l;if(m=arguments.length,r=arguments[m-3],v=arguments[m-2],i=arguments[m-1],m===4)return r[i]=a,r[i+v]=a,r;if(m===5)return q(a)||q(n)?(r[i]=NaN,r[i+v]=NaN,r):a===n&&a===0?p(a)?(r[i]=a,r[i+v]=n,r):(r[i]=n,r[i+v]=a,r):a<n?(r[i]=a,r[i+v]=n,r):(r[i]=n,r[i+v]=a,r);for(g=O,N=Z,l=0;l<m-3;l++){if(e=arguments[l],q(e))return r[i]=NaN,r[i+v]=NaN,r;(e<g||e===0&&e===g&&p(e))&&(g=e),(e>N||e===0&&e===N&&P(e))&&(N=e)}return r[i]=g,r[i+v]=N,r}c.exports=R
});var F=s(function(B,h){
var b=u();function j(){var a,n;for(a=[],n=0;n<arguments.length;n++)a.push(arguments[n]);return a.push([0,0],1,0),b.apply(null,a)}h.exports=j
});var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=u(),I=F();k(I,"assign",w);module.exports=I;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
