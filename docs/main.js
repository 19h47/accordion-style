!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Accordion=n():t.Accordion=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=64)}([function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(32))},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(3),o=e(17),i=e(11);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n){function e(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}},function(t,n,e){var r=e(12),o=e(14);t.exports=function(t){return r(o(t))}},function(t,n,e){var r=e(0),o=e(5);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n,e){var r=e(3),o=e(33),i=e(11),u=e(8),c=e(15),s=e(2),f=e(16),a=Object.getOwnPropertyDescriptor;n.f=r?a:function(t,n){if(t=u(t),n=c(n,!0),f)try{return a(t,n)}catch(t){}if(s(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(1),o=e(13),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(4);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(3),o=e(1),i=e(34);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(3),o=e(16),i=e(18),u=e(15),c=Object.defineProperty;n.f=r?c:function(t,n,e){if(i(t),n=u(n,!0),i(e),o)try{return c(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(4);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(20),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r=e(0),o=e(9),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(39),o=e(20);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n){t.exports={}},function(t,n,e){var r=e(42),o=e(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(26),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(0),o=e(21),i=e(2),u=e(22),c=e(28),s=e(56),f=o("wks"),a=r.Symbol,l=s?a:a&&a.withoutSetter||u;t.exports=function(t){return i(f,t)||(c&&i(a,t)?f[t]=a[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n,e){var r=e(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(61),o=e(62),i=e(63);t.exports=function(t){return r(t)||o(t)||i()}},function(t,n,e){"use strict";var r=e(31),o=e(50).map,i=e(57),u=e(60),c=i("map"),s=u("map");r({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},function(t,n,e){var r=e(0),o=e(10).f,i=e(5),u=e(35),c=e(9),s=e(40),f=e(49);t.exports=function(t,n){var e,a,l,p,h,v=t.target,y=t.global,d=t.stat;if(e=y?r:d?r[v]||c(v,{}):(r[v]||{}).prototype)for(a in n){if(p=n[a],l=t.noTargetGet?(h=o(e,a))&&h.value:e[a],!f(y?a:v+(d?".":"#")+a,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;s(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(e,a,p,t)}}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(0),o=e(4),i=r.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,n,e){var r=e(0),o=e(5),i=e(2),u=e(9),c=e(19),s=e(36),f=s.get,a=s.enforce,l=String(String).split("String");(t.exports=function(t,n,e,c){var s=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),a(e).source=l.join("string"==typeof n?n:"")),t!==r?(s?!p&&t[n]&&(f=!0):delete t[n],f?t[n]=e:o(t,n,e)):f?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},function(t,n,e){var r,o,i,u=e(37),c=e(0),s=e(4),f=e(5),a=e(2),l=e(38),p=e(23),h=c.WeakMap;if(u){var v=new h,y=v.get,d=v.has,b=v.set;r=function(t,n){return b.call(v,t,n),n},o=function(t){return y.call(v,t)||{}},i=function(t){return d.call(v,t)}}else{var m=l("state");p[m]=!0,r=function(t,n){return f(t,m,n),n},o=function(t){return a(t,m)?t[m]:{}},i=function(t){return a(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!s(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n,e){var r=e(0),o=e(19),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(21),o=e(22),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(2),o=e(41),i=e(10),u=e(17);t.exports=function(t,n){for(var e=o(n),c=u.f,s=i.f,f=0;f<e.length;f++){var a=e[f];r(t,a)||c(t,a,s(n,a))}}},function(t,n,e){var r=e(24),o=e(43),i=e(48),u=e(18);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(u(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(0);t.exports=r},function(t,n,e){var r=e(44),o=e(47).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(2),o=e(8),i=e(45).indexOf,u=e(23);t.exports=function(t,n){var e,c=o(t),s=0,f=[];for(e in c)!r(u,e)&&r(c,e)&&f.push(e);for(;n.length>s;)r(c,e=n[s++])&&(~i(f,e)||f.push(e));return f}},function(t,n,e){var r=e(8),o=e(25),i=e(46),u=function(t){return function(n,e,u){var c,s=r(n),f=o(s.length),a=i(u,f);if(t&&e!=e){for(;f>a;)if((c=s[a++])!=c)return!0}else for(;f>a;a++)if((t||a in s)&&s[a]===e)return t||a||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,n,e){var r=e(26),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(1),o=/#|\.prototype\./,i=function(t,n){var e=c[u(t)];return e==f||e!=s&&("function"==typeof n?r(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},s=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(51),o=e(12),i=e(53),u=e(25),c=e(54),s=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,a=4==t,l=6==t,p=5==t||l;return function(h,v,y,d){for(var b,m,g=i(h),x=o(g),w=r(v,y,3),O=u(x.length),S=0,E=d||c,j=n?E(h,O):e?E(h,0):void 0;O>S;S++)if((p||S in x)&&(m=w(b=x[S],S,g),t))if(n)j[S]=m;else if(m)switch(t){case 3:return!0;case 5:return b;case 6:return S;case 2:s.call(j,b)}else if(a)return!1;return l?-1:f||a?a:j}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,e){var r=e(52);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,n,e){var r=e(14);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(4),o=e(55),i=e(27)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(13);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(28);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){var r=e(1),o=e(27),i=e(58),u=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[];return(n.constructor={})[u]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},function(t,n,e){var r,o,i=e(0),u=e(59),c=i.process,s=c&&c.versions,f=s&&s.v8;f?o=(r=f.split("."))[0]+r[1]:u&&(!(r=u.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=u.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,n,e){var r=e(24);t.exports=r("navigator","userAgent")||""},function(t,n,e){var r=e(3),o=e(1),i=e(2),u=Object.defineProperty,c={},s=function(t){throw t};t.exports=function(t,n){if(i(c,t))return c[t];n||(n={});var e=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,a=i(n,0)?n[0]:s,l=i(n,1)?n[1]:void 0;return c[t]=!!e&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?u(t,1,{enumerable:!0,get:s}):t[1]=1,e.call(t,a,l)}))}},function(t,n){t.exports=function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}},function(t,n){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,n){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,n,e){"use strict";e.r(n);e(30);var r=e(29),o=e.n(r),i=e(6),u=e.n(i),c=e(7),s=e.n(c),f=function(t){return t.classList.remove("is-active")},a=function(){function t(n){u()(this,t),this.rootElement=n}return s()(t,[{key:"init",value:function(){this.$button=this.rootElement.querySelector(".js-accordion-header"),this.$body=this.rootElement.querySelector(".js-accordion-body"),this.$inner=this.rootElement.querySelector(".js-accordion-inner"),this.isDeselect=JSON.parse(this.rootElement.getAttribute("data-accordion-deselect")),this.isOpen=JSON.parse(this.rootElement.getAttribute("data-accordion-open")),this.onResize=this.onResize.bind(this),this.toggle=this.toggle.bind(this),this.$body.style.setProperty("max-height",0),this.$body.style.setProperty("overflow","hidden"),this.onResize(),this.initEvents(),!0===this.isOpen&&this.open()}},{key:"initEvents",value:function(){window.addEventListener("resize",this.onResize),this.$button.addEventListener("click",this.toggle)}},{key:"toggle",value:function(){return(!1!==this.isDeselect||!0!==this.isOpen)&&(!0===this.isOpen?(this.rootElement.dispatchEvent(new CustomEvent("Panel.close",{detail:{current:this.rootElement}})),this.close()):!1!==this.isOpen||(this.rootElement.dispatchEvent(new CustomEvent("Panel.open",{detail:{current:this.rootElement}})),this.open()))}},{key:"close",value:function(){this.rootElement.setAttribute("data-accordion-open",!1),this.$button.setAttribute("aria-expanded",!1),this.$body.style.setProperty("max-height",0),f(this.rootElement),this.isOpen=!1}},{key:"open",value:function(){this.rootElement.setAttribute("data-accordion-open",!0),this.$button.setAttribute("aria-expanded",!0),this.$body.style.setProperty("max-height","".concat(this.height,"px")),this.rootElement.classList.add("is-active"),this.isOpen=!0}},{key:"destroy",value:function(){this.$button.removeEventListener("click",this.toggle),window.removeEventListener("resize",this.onResize),this.$body.style.removeProperty("max-height"),this.$body.style.removeProperty("overflow"),f(this.rootElement)}},{key:"onResize",value:function(){this.height=this.$inner.offsetHeight,this.isOpen&&this.$body.style.setProperty("max-height","".concat(this.height,"px"))}}]),t}();e.d(n,"default",(function(){return l}));var l=function(){function t(n){u()(this,t),this.accordion=n,this.accordions=o()(this.accordion.querySelectorAll(".js-accordion-panel")),this.panels=[]}return s()(t,[{key:"init",value:function(){var t=this;return null!==this.accordion&&void 0!==this.accordion&&(this.accordions.map((function(n){var e=new a(n);return e.init(),t.panels.push(e),n.addEventListener("Panel.open",(function(){t.closeAll()})),n.addEventListener("Panel.close",(function(){})),!0})),!0)}},{key:"closeAll",value:function(){return this.panels.map((function(t){return t.close()}))}},{key:"destroyAll",value:function(){return this.panels.map((function(t){return t.destroy()})),this.panels=[],!0}}]),t}()}])}));