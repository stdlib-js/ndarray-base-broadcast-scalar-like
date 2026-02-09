"use strict";var n=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var o=n(function(A,v){"use strict";var q=require("@stdlib/ndarray-base-assert-is-complex-floating-point-data-type"),c=require("@stdlib/assert-is-number").isPrimitive,f=require("@stdlib/array-base-assert-is-accessor-array"),m=require("@stdlib/array-base-accessor-setter"),p=require("@stdlib/array-base-setter"),g=require("@stdlib/array-base-zeros"),d=require("@stdlib/ndarray-base-dtype"),l=require("@stdlib/ndarray-base-shape"),h=require("@stdlib/ndarray-base-order"),y=require("@stdlib/ndarray-base-buffer"),b=require("@stdlib/ndarray-base-dtype-resolve-str"),S=require("@stdlib/string-format");function w(a,r){var t,i,s,e,u;if(e=b(d(a)),t=y(e,1),t===null)throw new TypeError(S("invalid argument. First argument must have a recognized data type. Value: `%s`.",e));return q(e)&&c(r)&&(r=[r,0]),f(t)?i=m(e):i=p(e),i(t,0,r),s=l(a,!0),u=s.length||1,new a.constructor(e,t,s,g(u),0,h(a))}v.exports=w});var T=o();module.exports=T;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
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
//# sourceMappingURL=index.js.map
