/**
* Copyright (c) 2022 The Nuevodevel Team. All rights reserved.
* Filters Plugin Video.js 8
*/
/*eslint no-inner-declarations: "off"*/import videojs from"video.js";var _this=void 0;if("undefined"!==typeof window)window.videojs=videojs;var supportsPassive=false,opts=Object.defineProperty({},"passive",{get:function(){supportsPassive=true;return true}});window.addEventListener("testPassive",null,opts);window.removeEventListener("testPassive",null,opts);var filter_b=100,onMenusReady=function(e,t){var s={filtersMenu:true},i=100,r=100,o=100,a=e.el();try{t=videojs.obj.merge(s,t)}catch(e){t=videojs.mergeOptions(s,t)}if(t.filtersMenu){var l=videojs.dom.createEl("li",{className:"vjs-settings-item vjs-filters-button"},{tabIndex:0,"aria-label":e.localize("Open filters container"),role:"menuitem","aria-disabled":"false"},e.localize("Filters")),n=videojs.dom.createEl("span",{className:"vjs-filters-icon"});l.appendChild(n);var d=a.querySelector(".vjs-settings-list");if(d){var v=d.children.length;if(v>0)d.insertBefore(l,d.firstChild.nextSibling);else{d.appendChild(l);videojs.dom.removeClass(a.querySelector(".vjs-cog-menu-button"),"vjs-hidden")}}var u=videojs.dom.createEl("div",{className:"vjs-filters vjs-hidden"},{"arira-label":e.localize("Video filters"),"aria-hidden":true,tabindex:0});u.style.zIndex=7;var f=videojs.dom.createEl("div",{className:"vjs-filter-body vjs-filter-brightness"}),c=videojs.dom.createEl("div",{className:"vjs-filter-body vjs-filter-saturation"}),p=videojs.dom.createEl("div",{className:"vjs-filter-body vjs-filter-contrast"}),m='<div class="vjs-filter-bar"><div class="vjs-filter-level"></div><div class="filter-tip"></div></div>';f.innerHTML=m;c.innerHTML=m;p.innerHTML=m;var h=videojs.dom.createEl("button",{className:"filter-btn filter-close"},{tabindex:0,"aria-disabled":false,"aria-label":e.localize("Close filters")},e.localize("Close")),j=videojs.dom.createEl("button",{className:"filter-btn filter-reset"},{tabindex:0,"aria-disabled":false,"aria-label":e.localize("Reset filters")},e.localize("Reset"));u.appendChild(f);u.appendChild(c);u.appendChild(p);u.appendChild(h);u.appendChild(j);a.appendChild(u);l.onkeydown=function(e){setTimeout(function(){h.focus()},150)};var y=function(e){var t=S,s=t,l=null;if("mousemove"===e.type)l=e.pageX||null;else if("touchmove"===e.type)l=e.touches[0].pageX||null;if(null!==l){var n=s.offsetWidth,d=s.getBoundingClientRect(),v=l-(d.left+window.scrollX);if(v>n)v=n;if(v<0)v=0;var u=parseInt(v/n*100,10);if(u<0)u=0;if(u>100)u=100;t.querySelector(".vjs-filter-level").style.width=u+"%";var m=t.querySelector(".filter-tip");videojs.dom.addClass(m,"tip-show");m.style.left=n*(u/100)-m.offsetWidth/2+"px";var h=a.querySelector(".vjs-brightness-bar");if(h)h.querySelector(".bar-level").style.height=u+"%";var j=100+2*(u-50);m.innerText=j;var y=a.querySelector(".vjs-tech");if(S===f)i=j;if(S===c)r=j;if(S===p)o=j;var g="";if(100!==i)g="brightness("+i+"%)";if(100!==r){if(""!==g)g+=" ";g+="saturate("+r+"%)"}if(100!==o){if(""!==g)g+=" ";g+="contrast("+o+"%)"}y.style.webkitFilter=g;y.style.filter=g}},g=function(t){t.preventDefault();t.stopPropagation();videojs.dom.addClass(u,"vjs-hidden");u.setAttribute("aria-hidden","true");e.$(".vjs-tech").style.removeProperty("pointer-events");videojs.dom.removeClass(a,"vjs-filters-on")},b=function(t){t.preventDefault();t.stopPropagation();videojs.dom.removeClass(u,"vjs-hidden");u.setAttribute("aria-hidden","false");e.trigger("filters");e.$(".vjs-tech").style.setProperty("pointer-events","none");videojs.dom.addClass(a,"vjs-filters-on");var s=a.querySelector(".vjs-sharing-overlay"),i=a.querySelector(".vjs-grid");if(s)videojs.dom.addClass(s,"vjs-hidden");if(i)videojs.dom.addClass(i,"vjs-hidden");var r=a.querySelector(".vjs-menu-settings");setTimeout(function(){videojs.dom.removeClass(r,"vjs-lock-showing");videojs.dom.addClass(r,"vjs-hidden")},500)},w=function(e){e.preventDefault();e.stopPropagation();i=100;o=100;r=100;a.querySelector(".vjs-tech").removeAttribute("style");f.querySelector(".vjs-filter-level").style.width="50%";c.querySelector(".vjs-filter-level").style.width="50%";p.querySelector(".vjs-filter-level").style.width="50%"},E=function(e){e.stopPropagation();var t=e.target;S=t;y(e);window.addEventListener("mousemove",L,false);window.addEventListener("mouseup",C,false);window.addEventListener("touchmove",L,{passive:false});S.addEventListener("touchend",C)},L=function(e){e.preventDefault();y(e)},C=function e(t){t.preventDefault();videojs.dom.removeClass(a,"vjs-touch-active");videojs.dom.removeClass(S.querySelector(".filter-tip"),"tip-show");window.removeEventListener("mousemove",L);window.removeEventListener("mouseup",e);window.removeEventListener("touchmove",L);S.removeEventListener("touchend",e)};j.addEventListener("click",w,false);j.addEventListener("touchend",w,false);h.addEventListener("click",g,false);h.addEventListener("touchend",g,false);var P=a.querySelector(".vjs-filters-button");P.addEventListener("click",b,false);P.addEventListener("touchstart",b,supportsPassive?{passive:false}:false);var S=null;f.addEventListener("mousedown",E,false);f.addEventListener("touchstart",E,supportsPassive?{passive:true}:false);c.addEventListener("mousedown",E,false);c.addEventListener("touchstart",E,supportsPassive?{passive:true}:false);p.addEventListener("mousedown",E,false);p.addEventListener("touchstart",E,supportsPassive?{passive:true}:false)}},onPlayerReady=function(e,t){var s={touchBrightness:true};try{t=videojs.obj.merge(s,t)}catch(e){t=videojs.mergeOptions(s,t)}var i=e.el();if(true===t.touchBrightness){var r=videojs.dom.createEl("div",{className:"vjs-brightness"});r.innerHTML='<div class="vjs-brightness-bar"><div class="bar"></div><div class="bar-level"></div></div>';i.appendChild(r);r.addEventListener("touchstart",function(e){e.stopImmediatePropagation();videojs.dom.addClass(i,"vjs-touch-active");l(e);window.addEventListener("touchmove",o,{passive:false});r.addEventListener("touchend",a)},supportsPassive?{passive:true}:false);return _this}function o(t){t.preventDefault();t.stopImmediatePropagation();clearInterval(e.touchtimer);videojs.dom.addClass(i,"vjs-touch-acitve");l(t)}function a(t){t.preventDefault();e.touchtimer=setTimeout(function(){videojs.dom.removeClass(i,"vjs-touch-active")},1e3);window.removeEventListener("touchmove",o);r.removeEventListener("touchend",a)}function l(e){var t=null;if("mousemove"===e.type)t=e.pageY||null;else if("touchmove"===e.type)t=e.touches[0].pageY||null;if(null!==t){var s=r.offsetHeight,o=r.getBoundingClientRect(),a=t-(o.top+window.scrollY);if(a>s)a=s;if(a<0)a=0;var l=parseInt(100-a/s*100,10);if(l<0)l=0;if(l>100)l=100;r.querySelector(".bar-level").style.height=l+"%";var n=i.querySelector(".vjs-filters");if(n){var d=n.querySelector(".vjs-filter-brightness");if(d)d.querySelector(".vjs-filter-level").style.width=l+"%"}var v=100+2*(l-50);filter_b=v;var u="";if(100!==filter_b)u="brightness("+filter_b+"%)";i.querySelector(".vjs-tech").style.webkitFilter=u;i.querySelector(".vjs-tech").style.filter=u}}},filters=function(e){var t=this;this.ready(function(){onPlayerReady(t,e)});this.on("menusReady",function(){onMenusReady(this,e)})};if("undefined"!==typeof window)if(window.videojs){var registerPlugin=videojs.registerPlugin||videojs.plugin;registerPlugin("filters",filters)}export default filters;
