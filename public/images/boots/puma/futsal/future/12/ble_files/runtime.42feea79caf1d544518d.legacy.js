!function(){"use strict";var e,t,n,r,o,a,c={},i={};function f(e){if(i[e])return i[e].exports;var t=i[e]={exports:{}};return c[e].call(t.exports,t,t.exports,f),t.exports}f.m=c,f.x=function(){},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,{a:t}),t},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},f.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);f.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&r&&n;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){a[e]=function(){return n[e]}}));return a.default=function(){return n},f.d(o,a),o},f.d=function(e,t){for(var n in t)f.o(t,n)&&!f.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},f.f={},f.e=function(e){return Promise.all(Object.keys(f.f).reduce((function(t,n){return f.f[n](e,t),t}),[]))},f.u=function(e){return"rcmd/"+({17:"HomeDailyDiscoverMain",28:"shopee_afs",241:"HomeDailyDiscoverCustomCampaign",739:"HomeDailyDiscoverCampaign"}[e]||e)+"."+{17:"cbc49f6f7a6496425b35",28:"8a8a0c105074d5be3a3a",36:"eacd76af316fb6d9faf1",69:"76e6349dc54c0d7131f7",71:"2825569c4e0da9bfdaf9",202:"04770db2267fdf03e05d",241:"964eaf770cd3af881da8",465:"229e5e05ecb8bf17bfe0",625:"a24b5636412ce82c4b6b",670:"64ce4ed456003b1ab18b",730:"149af1387fb0c1374994",739:"563c675de5135e0b0602",763:"678d17869d9a02b95115",956:"68714be59c05e0f2bc31"}[e]+".legacy.js"},f.miniCssF=function(e){return"rcmd/"+({17:"HomeDailyDiscoverMain",106:"pcmall-rcmd-cart-ymal",241:"HomeDailyDiscoverCustomCampaign",688:"pcmall-rcmd-flash-sale-sold-out-page",739:"HomeDailyDiscoverCampaign",785:"pcmall-rcmd-pdp-ftss",971:"pcmall-rcmd-cart-ymal-page",972:"pcmall-rcmd-daily-discover-module"}[e]||e)+"."+{17:"56f890da0cd301827260",88:"822806d9830fa7fa8c55",106:"e179ec9036d1606003c0",241:"56f890da0cd301827260",670:"db82ed957dff86f4875a",688:"ace6d3e89dcf7ee440da",739:"56f890da0cd301827260",785:"c06306e0dbfddc82fafe",971:"941659694a4e920b1ba8",972:"e3992020e3eb5ecfdad3"}[e]+".legacy.css"},f.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},r="@shopee/pcmall-rcmd:",f.l=function(e,t,o,a){if(n[e])n[e].push(t);else{var c,i;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+o){c=d;break}}c||(i=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,f.nc&&c.setAttribute("nonce",f.nc),c.setAttribute("data-webpack",r+o),c.src=e),n[e]=[t];var s=function(t,r){c.onerror=c.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(s.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=s.bind(null,c.onerror),c.onload=s.bind(null,c.onload),i&&document.head.appendChild(c)}},f.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},self["mfeStartuppcmall-rcmd"]=function(){var e=f.x;f.x=function(){var t=self.mfeModules=self.mfeModules||[];(t.s=t.s||[]).push(["pcmall-rcmd",f]),e&&e(),f.x=function(){}}},f.p="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/",o=function(e){return new Promise((function(t,n){var r=f.miniCssF(e),o=f.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(c=n[r]).getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(o===e||o===t))return c}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){var c;if((o=(c=a[r]).getAttribute("data-href"))===e||o===t)return c}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var c=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||t,f=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");f.code="CSS_CHUNK_LOAD_FAILED",f.type=c,f.request=i,o.parentNode.removeChild(o),r(f)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},a={666:0},f.f.miniCss=function(e,t){a[e]?t.push(a[e]):0!==a[e]&&{17:1,241:1,670:1,739:1}[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))},function(){var e={666:0},t=[];f.f.j=function(t,n){var r=f.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var a=f.p+f.u(t),c=new Error;f.l(a,(function(n){if(f.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,r[1](c)}}),"chunk-"+t,t)}};var n=function(){},r=function(r,o){for(var a,c,i=o[0],u=o[1],l=o[2],d=o[3],s=0,p=[];s<i.length;s++)c=i[s],f.o(e,c)&&e[c]&&p.push(e[c][0]),e[c]=0;for(a in u)f.o(u,a)&&(f.m[a]=u[a]);for(l&&l(f),r&&r(o);p.length;)p.shift()();return d&&t.push.apply(t,d),n()},o=self.wpJsonpPcmallRcmd=self.wpJsonpPcmallRcmd||[];function a(){for(var n,r=0;r<t.length;r++){for(var o=t[r],a=!0,c=1;c<o.length;c++){var i=o[c];0!==e[i]&&(a=!1)}a&&(t.splice(r--,1),n=f(f.s=o[0]))}return 0===t.length&&(f.x(),f.x=function(){}),n}o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o));var c=f.x;f.x=function(){return f.x=c||function(){},(n=a)()}}(),f.x()}();
//# sourceMappingURL=https://sourcemap.webfe.shopee.io/pcmall-rcmd/_/runtime.42feea79caf1d544518d.legacy.js.map