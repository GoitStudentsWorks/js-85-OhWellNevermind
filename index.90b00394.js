!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i),i.register("1mk2c",(function(e,t){var n;n=function(e,t){"use strict";var n,o;function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function a(e,t){return t.indexOf(e)>=0}function r(e,t,n){null!=e.addEventListener?e.addEventListener(t,n,!1):null!=e.attachEvent?e.attachEvent("on"+t,n):e[t]=n}function l(e,t,n){null!=e.removeEventListener?e.removeEventListener(t,n,!1):null!=e.detachEvent?e.detachEvent("on"+t,n):delete e[t]}var c=window.WeakMap||window.MozWeakMap||function(){function e(){i(this,e),this.keys=[],this.values=[]}return s(e,[{key:"get",value:function(e){for(var t=0;t<this.keys.length;t++)if(this.keys[t]===e)return this.values[t]}},{key:"set",value:function(e,t){for(var n=0;n<this.keys.length;n++)if(this.keys[n]===e)return this.values[n]=t,this;return this.keys.push(e),this.values.push(t),this}}]),e}(),d=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(o=n=function(){function e(){i(this,e),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return s(e,[{key:"observe",value:function(){}}]),e}(),n.notSupported=!0,o),u=window.getComputedStyle||function(e){var t=/(\-([a-z]){1})/g;return{getPropertyValue:function(n){"float"===n&&(n="styleFloat"),t.test(n)&&n.replace(t,(function(e,t){return t.toUpperCase()}));var o=e.currentStyle;return(null!=o?o[n]:void 0)||null}}},h=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];i(this,e),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},this.animate="requestAnimationFrame"in window?function(e){return window.requestAnimationFrame(e)}:function(e){return e()},this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=function(e,t){for(var n in t)if(null==e[n]){var o=t[n];e[n]=o}return e}(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new c,this.wowEvent=function(e){var t=!(arguments.length<=1||void 0===arguments[1])&&arguments[1],n=!(arguments.length<=2||void 0===arguments[2])&&arguments[2],o=arguments.length<=3||void 0===arguments[3]?null:arguments[3],i=void 0;return null!=document.createEvent?(i=document.createEvent("CustomEvent")).initCustomEvent(e,t,n,o):null!=document.createEventObject?(i=document.createEventObject()).eventType=e:i.eventName=e,i}(this.config.boxClass)}return s(e,[{key:"init",value:function(){this.element=window.document.documentElement,a(document.readyState,["interactive","complete"])?this.start():r(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var e=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var t=0;t<this.boxes.length;t++){var n=this.boxes[t];this.applyStyle(n,!0)}this.disabled()||(r(this.config.scrollContainer||window,"scroll",this.scrollHandler),r(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live&&new d((function(t){for(var n=0;n<t.length;n++)for(var o=t[n],i=0;i<o.addedNodes.length;i++){var s=o.addedNodes[i];e.doSync(s)}})).observe(document.body,{childList:!0,subtree:!0})}},{key:"stop",value:function(){this.stopped=!0,l(this.config.scrollContainer||window,"scroll",this.scrollHandler),l(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){d.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(e){if(null==e&&(e=this.element),1===e.nodeType)for(var t=(e=e.parentNode||e).querySelectorAll("."+this.config.boxClass),n=0;n<t.length;n++){var o=t[n];a(o,this.all)||(this.boxes.push(o),this.all.push(o),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(o,!0),this.scrolled=!0)}}},{key:"show",value:function(e){var t,n;return this.applyStyle(e),e.className=e.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(e),t=e,n=this.wowEvent,null!=t.dispatchEvent?t.dispatchEvent(n):n in(null!=t)?t[n]():"on"+n in(null!=t)&&t["on"+n](),r(e,"animationend",this.resetAnimation),r(e,"oanimationend",this.resetAnimation),r(e,"webkitAnimationEnd",this.resetAnimation),r(e,"MSAnimationEnd",this.resetAnimation),e}},{key:"applyStyle",value:function(e,t){var n=this,o=e.getAttribute("data-wow-duration"),i=e.getAttribute("data-wow-delay"),s=e.getAttribute("data-wow-iteration");return this.animate((function(){return n.customStyle(e,t,o,i,s)}))}},{key:"resetStyle",value:function(){for(var e=0;e<this.boxes.length;e++)this.boxes[e].style.visibility="visible"}},{key:"resetAnimation",value:function(e){if(e.type.toLowerCase().indexOf("animationend")>=0){var t=e.target||e.srcElement;t.className=t.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(e,t,n,o,i){return t&&this.cacheAnimationName(e),e.style.visibility=t?"hidden":"visible",n&&this.vendorSet(e.style,{animationDuration:n}),o&&this.vendorSet(e.style,{animationDelay:o}),i&&this.vendorSet(e.style,{animationIterationCount:i}),this.vendorSet(e.style,{animationName:t?"none":this.cachedAnimationName(e)}),e}},{key:"vendorSet",value:function(e,t){for(var n in t)if(t.hasOwnProperty(n)){var o=t[n];e[""+n]=o;for(var i=0;i<this.vendors.length;i++)e[""+this.vendors[i]+n.charAt(0).toUpperCase()+n.substr(1)]=o}}},{key:"vendorCSS",value:function(e,t){for(var n=u(e),o=n.getPropertyCSSValue(t),i=0;i<this.vendors.length;i++){var s=this.vendors[i];o=o||n.getPropertyCSSValue("-"+s+"-"+t)}return o}},{key:"animationName",value:function(e){var t=void 0;try{t=this.vendorCSS(e,"animation-name").cssText}catch(n){t=u(e).getPropertyValue("animation-name")}return"none"===t?"":t}},{key:"cacheAnimationName",value:function(e){return this.animationNameCache.set(e,this.animationName(e))}},{key:"cachedAnimationName",value:function(e){return this.animationNameCache.get(e)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var e=[],t=0;t<this.boxes.length;t++){var n=this.boxes[t];if(n){if(this.isVisible(n)){this.show(n);continue}e.push(n)}}this.boxes=e,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;)t+=(e=e.offsetParent).offsetTop;return t}},{key:"isVisible",value:function(e){var t=e.getAttribute("data-wow-offset")||this.config.offset,n=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,o=n+Math.min(this.element.clientHeight,"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight)-t,i=this.offsetTop(e),s=i+e.clientHeight;return i<=o&&s>=n}},{key:"disabled",value:function(){return!this.config.mobile&&(e=navigator.userAgent,/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e));var e}}]),e}();t.default=h,e.exports=t.default},"function"==typeof define&&define.amd?define(["module","exports"],n):n(e,t)})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.90b00394.js","ee16w":"sprite.81314812.svg","eICEL":"apple-read-logo.652b354e.png","2L4yx":"apple-read-logo@2x-1.15632d7d.png","i9pPv":"book-shop-logo.1d091ebd.png","7yZHS":"book-shop-logo@2x.1f77f032.png","2HnSn":"deafult-img.9168e021.jpg","5UbS1":"index.9f3a0b54.css","h4tGU":"shopping_list.75cfd756.js"}'));var s={};s=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("ee16w");var a={};a=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("eICEL");i("aNJCr").getBundleURL("EVgbq"),i("iE7OH").resolve("2L4yx");var r={};r=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("i9pPv");i("aNJCr").getBundleURL("EVgbq"),i("iE7OH").resolve("7yZHS");var l=i("6JpON"),c={};c=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("2HnSn");var d=i("gfpbd");function u(){const e=document.querySelectorAll(".home__books-all-items"),t=document.documentElement.clientWidth;e.forEach((e=>{const n=Array.from(e.querySelectorAll(".home__books-item"));n.forEach((e=>{e.style.display="none"})),t>=320&&t<767?h(1,e):t>=768&&t<1439?h(3,e):t>=1440&&h(n.length,e)}))}function h(e,t){const n=Array.from(t.querySelectorAll("li"));for(let t=0;t<e;t++)n[t].style.display="flex"}(new(e(i("1mk2c")))).init(),window.addEventListener("resize",u);var m={},f="Expected a function",v=NaN,p="[object Symbol]",g=/^\s+|\s+$/g,b=/^[-+]0x[0-9a-f]+$/i,y=/^0b[01]+$/i,w=/^0o[0-7]+$/i,k=parseInt,L="object"==typeof t&&t&&t.Object===Object&&t,E="object"==typeof self&&self&&self.Object===Object&&self,S=L||E||Function("return this")(),_=Object.prototype.toString,C=Math.max,x=Math.min,j=function(){return S.Date.now()};function H(e,t,n){var o,i,s,a,r,l,c=0,d=!1,u=!1,h=!0;if("function"!=typeof e)throw new TypeError(f);function m(t){var n=o,s=i;return o=i=void 0,c=t,a=e.apply(s,n)}function v(e){var n=e-l;return void 0===l||n>=t||n<0||u&&e-c>=s}function p(){var e=j();if(v(e))return g(e);r=setTimeout(p,function(e){var n=t-(e-l);return u?x(n,s-(e-c)):n}(e))}function g(e){return r=void 0,h&&o?m(e):(o=i=void 0,a)}function b(){var e=j(),n=v(e);if(o=arguments,i=this,l=e,n){if(void 0===r)return function(e){return c=e,r=setTimeout(p,t),d?m(e):a}(l);if(u)return r=setTimeout(p,t),m(l)}return void 0===r&&(r=setTimeout(p,t)),a}return t=q(t)||0,A(n)&&(d=!!n.leading,s=(u="maxWait"in n)?C(q(n.maxWait)||0,t):s,h="trailing"in n?!!n.trailing:h),b.cancel=function(){void 0!==r&&clearTimeout(r),c=0,o=l=i=r=void 0},b.flush=function(){return void 0===r?a:g(j())},b}function A(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function q(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&_.call(e)==p}(e))return v;if(A(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=A(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(g,"");var n=y.test(e);return n||w.test(e)?k(e.slice(2),n?2:8):b.test(e)?v:+e}m=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(f);return A(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),H(e,t,{leading:o,maxWait:t,trailing:i})},e(l).Loading.init({className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,1)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"var(--all-categories-active)",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"}),e(l).Loading.pulse();const N="https://books-backend.p.goit.global/books/",O=document.querySelector(".js-categories-list"),T=document.querySelector(".js-all-categories"),M=document.querySelector(".js-books-wrapper"),$=document.querySelector(".js-books-title"),R=document.querySelector(".js-scroll-up"),I=document.querySelector(".js-popUp"),P=document.querySelector(".js-backdrop-pop"),F=(document.querySelector(".user-name"),document.querySelector("[data-modal]")),U=(document.querySelector(".js-popUp"),document.querySelector(".support-ukraine-container"));O.addEventListener("click",(function(e){if("LI"!=e.target.nodeName)return;const t=e.target.textContent.trim();te(e.target),"All categories"===t?X():ee(t)})),M.addEventListener("click",(function(t){if("IMG"!=t.target.nodeName)return;document.body.style.overflow="hidden";const n=t.target.parentElement;!async function(t){try{const n=await fetch(`${N}${t}`);if(!n.ok)throw new Error(n.statusText);Z=await n.json(),function(t){const{author:n,buy_links:o,description:i,book_image:l,title:c,_id:u}=t,h="Currently there is no description! Please come and check later;)",m=o[0].url,f=o[1].url,v=o[2].url;let p=`<button aria-label="Close modal" class="close-btn-modal js-btn-close-modal">\n      <svg class="close-btn-modal-icon" width="24" height="24">\n        <use href="${e(s)}#close-icon"></use>\n      </svg>\n    </button>\n    <div class="title-author-discrp">\n      <img\n        class="img-book"\n        src="${l}"\n        alt="poster book"\n      />\n      <div class="wrap-anotations">\n        <h2 class="title-book-pop-up">${c||h}</h2>\n        <p class="author">${n||h}</p>\n        <p class="discrition-book">\n         ${i||h}\n        </p>\n        <ul class="resource-shoping">\n          <li>\n            <a href="${m}" class="icon-wraper" target="_blank">\n              <svg class="amazon-icon">\n                <use href="${e(s)}#amazon-logo"></use>\n              </svg>\n            </a>\n          </li>\n          <li>\n            <a href="${f}" class="icon-wraper" target="_blank">\n              <img\n                class="img-shop-icon"\n                src="${e(a)}"\n                alt="apple"\n              />\n            </a>\n          </li>\n          <li>\n            <a href="${v}" class="icon-wraper" target="_blank">\n              <img\n                class="img-shop-icon"\n                src="${e(r)}"\n                alt="apple"\n              />\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class="wraper">\n      <div class="logged-pop-btn">\n        <button aria-label="Add to shopping list" class="btn-add-shop-list js-add" type="button">\n          add to shopping\n        </button>\n  \n        <div class="wraper-remove js-wraper-remove logged-user-hidden">\n          <button aria-label="Remove from shopping list" class="btn-add-shop-list btn-remove js-remove" type="button">\n            remove from the shopping list\n          </button>\n  \n          <p class="msg-add-shoplist js-remove" >\n            Сongratulations! You have added the book to the shopping list. To\n            delete, press the button “Remove from the shopping list”.\n          </p>\n        </div>\n      </div>\n      <div class="wrap-btn-sign-up">\n       <button aria-label="Sign up" class="btn-add-shop-list" type="button">\n        Sign up\n      </button>\n      </div> \n      </div>`;I.innerHTML=p,(0,d.checkAuthState)()?P.querySelector(".wrap-btn-sign-up").classList.add("logged-user-hidden"):P.querySelector(".logged-pop-btn").classList.add("logged-user-hidden");P.classList.remove("pop-up-is-hidden"),P.addEventListener("click",ae),W=document.querySelector(".js-btn-close-modal"),B=document.querySelector(".js-add"),D=document.querySelector(".js-wraper-remove"),W.addEventListener("click",ae,!0,{once:!0}),window.addEventListener("keydown",oe,{once:!0}),B.addEventListener("click",ie),D.addEventListener("click",se),G=document.querySelector(".js-add"),Y=document.querySelector(".js-remove"),z=document.querySelector(".wrap-btn-sign-up"),z.addEventListener("click",re),function(e){const t=localStorage.getItem("book-anotation");JSON.parse(t).forEach((t=>{t._id===e&&(B.classList.add("logged-user-hidden"),D.classList.remove("logged-user-hidden"))}))}(u)}(Z)}catch(e){}}(n.querySelector(".book-id").textContent)})),M.addEventListener("click",(function(e){if("button"!=e.target.type)return;let t=e.target.parentElement.querySelector(".home__books-all-category").textContent;ee(t);const n=[...O.children];te(n.find((e=>e.textContent===t)))})),document.addEventListener("scroll",m((function(){window.scrollY>900?(R.classList.remove("js-scroll-up-hidden"),R.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}))):R.classList.add("js-scroll-up-hidden")}),300));let V=T;const J="Coming soon";let z,W=null,B=null,D=null,G=null,Y=null,Z={},Q=JSON.parse(localStorage.getItem("book-anotation"))||[];async function X(){e(l).Loading.pulse();try{M.innerHTML="",$.innerHTML=ne("Best sellers book");const o=await fetch(`${N}top-books `);if(!o.ok)throw new Error(o.statusText);const i=await o.json();M.innerHTML=i.map((e=>`<li class="home__books-all-wrapper">\n      <p class="home__books-all-category">${e.list_name}</p>\n      <ul class="home__books-all-items">\n        ${K(e.books)}\n      </ul>\n      <button aria-label="See more" class="home__books-all-btn" type="button">\n      See more\n      </button>\n    </li>`)).join(""),u(),e(l).Loading.remove(),document.documentElement.clientWidth>1439&&(n=U,(t=O).classList.add("animate__animated"),t.classList.add("animate__bounceInLeft"),t.classList.add("animate__slower"),n.classList.add("animate__bounceInLeft"),n.classList.add("animate__animated"),n.classList.add("animate__slower"),n.classList.add("animate__delay-1s"),[...M.children].forEach((e=>{e.classList.add("animate__animated"),e.classList.add("animate__bounceInRight"),e.classList.add("wow"),e.setAttribute("data-wow-duration","2s")})))}catch(t){e(l).Loading.remove(),e(l).Notify.failure("Somesing was wrong! Please restart page!"),console.log(t)}var t,n}function K(t){return t.map((({book_image:t,title:n,author:o,_id:i})=>`<li class="home__books-item">\n      <img class="home__books-img" src="${t||e(c)}" alt="${n||J}" />\n      <h3 class="home__book-title">${n||J}</h3>\n      <p class="home__books-author">${o||J}</p>\n      <p style="display:none" class="book-id">${i}</p>\n    </li>`)).join("")}async function ee(t){e(l).Loading.pulse(),$.innerHTML=ne(t),M.innerHTML="";try{const o=await fetch(`${N}category?category=${t}`);if(!o.ok)throw new Error(o.statusText);const i=await o.json();M.innerHTML=K(i),e(l).Loading.remove(),document.documentElement.clientWidth>1439&&((n=M).classList.add("animate__animated"),n.classList.add("animate__bounceInRight"),n.classList.add("animate__slow"))}catch(t){e(l).Loading.remove(),e(l).Notify.failure("Somesing was wrong! Please restart page!"),console.log(t)}var n}function te(e){V.classList.remove("home__categories-item-active"),e.classList.add("home__categories-item-active"),V=e}function ne(e){if(!e)return;const t=e.split(" "),n=t[t.length-1];return e.replace(n,`<span class="js-active-word">${n}</span>`)}function oe(e){"Escape"==e.key&&(document.body.style.overflow="",P.classList.add("pop-up-is-hidden"),B.removeEventListener("click",ie),D.removeEventListener("click",se),G.removeEventListener("click",ie),Y.removeEventListener("click",se))}function ie(e){B.classList.add("logged-user-hidden"),D.classList.remove("logged-user-hidden"),D.classList.remove("pop-up-is-hidden"),Q.push(Z),localStorage.setItem("book-anotation",JSON.stringify(Q))}function se(e){D.classList.add("logged-user-hidden"),B.classList.remove("logged-user-hidden"),JSON.parse(localStorage.getItem("book-anotation")).forEach(((e,t)=>{e._id===Z._id&&(Q.splice(t,1),localStorage.setItem("book-anotation",JSON.stringify(Q)))}))}function ae(e){"BUTTON"!=e.target.nodeName&&!e.target.classList.contains("backdrop-pop")||e.target.classList.contains("btn-add-shop-list")||(document.body.style.overflow="",P.classList.add("pop-up-is-hidden"),window.removeEventListener("keydown",ae,!0),W.removeEventListener("click",ae),P.removeEventListener("click",ae),B.removeEventListener("click",ie),D.removeEventListener("click",se))}function re(e){P.classList.add("pop-up-is-hidden"),F.classList.remove("is-hidden"),z.removeEventListener("click",re)}!async function(){try{const e=await fetch(`${N}category-list`);if(!e.ok)throw new Error(e.statusText);const t=await e.json();O.insertAdjacentHTML("beforeend",t.map((e=>`<li class="home__categories-item">${e.list_name}</li>`)).join(""))}catch(e){O.innerHTML='<h2 class="home__books-all-category">Sorry, but there is no categories</h2>',console.log(e)}}(),X(),i("dgrxZ"),i("4XPGW"),i("i8Q71"),i("gfpbd");document.querySelectorAll(".footer-btn").forEach((e=>{e.addEventListener("mouseover",(()=>{e.querySelector(".heart-icon").classList.add("moving")})),e.addEventListener("mouseout",(()=>{e.querySelector(".heart-icon").classList.remove("moving")}))}));const le=document.querySelector(".js-modal-open"),ce=document.querySelector(".js-modal-close"),de=document.querySelector(".js-modal-team");function ue(){de.classList.toggle("is-hidden")}function he(){ue(),ce.removeEventListener("click",he),document.body.removeAttribute("style")}function me(e){e.currentTarget===e.target&&(document.body.removeAttribute("style"),ue(),document.removeEventListener("keydown",fe),de.removeEventListener("click",me))}function fe(e){"Escape"==e.code&&(ue(),document.removeEventListener("keydown",fe),ce.removeEventListener("click",he),de.removeEventListener("click",me))}le.addEventListener("click",(function(e){e.preventDefault(),ue(),document.addEventListener("keydown",fe),document.body.style.overflow="hidden",ce.addEventListener("click",he),de.addEventListener("click",me)})),i("5xtVg"),i("lj6MB"),i("cXTIg")}();
//# sourceMappingURL=index.90b00394.js.map
