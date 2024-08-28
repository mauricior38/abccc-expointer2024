/**
 * @license
 * Copyright (c) 2023 The Nuevodevel Team. All rights reserved.
 * VTT Thumbnails Plugin for Video.js v7
 */
/*eslint no-inner-declarations: "off"*/import videojs from"video.js";const defaults={width:160,height:90,basePath:"",src:""},onPlayerReady=(e,t)=>{function s(e){var t,s,i;s=e.indexOf("#");if(-1===s)return{src:e,w:0,h:0,x:0,y:0};t=e.substring(0,s);i=e.substring(s+1);if("xywh="!==i.substring(0,5))return{src:defaults.basePath+t,w:0,h:0,x:0,y:0};var r=i.substring(5).split(",");return{src:defaults.basePath+t,w:parseInt(r[2],10),h:parseInt(r[3],10),x:parseInt(r[0],10),y:parseInt(r[1],10)}}defaults.basePath="";var i,r,o,d,a,n,l,h,u,v,c;if(""!==t.basePath)defaults.basePath=t.basePath;if(t.width&&t.height){defaults.width=t.width;defaults.height=t.height}var f=t;e.on("medialoaded",function(t){e.sprite=!1;var m=e.textTracks().length;if(0!==m){for(var p=!1,g=0;g<m;){if("metadata"===e.textTracks()[g].kind&&e.textTracks()[g].src){v=e.textTracks()[g];p=!0;if(null==v.cues)return;var w=v&&v.cues.length;c=v.cues;v.mode="hidden";break}g++}if(!0===p){if(!(w<1)){g=0;e.sprite=!0;a=e.controlBar.progressControl;n=e.el_.querySelector(".vjs-progress-holder");var y=e.el_.querySelector(".vjs-thumb-tooltip");if(null!==y)y.parentNode.removeChild(y);var j=e.el_.querySelector(".vjs-thumb-image");if(null!==j)j.parentNode.removeChild(j);var b=e.el_.querySelector(".vjs-thumbnail-holder");if(null!==b)b.parentNode.removeChild(b);i=document.createElement("div");i.className="vjs-thumbnail-holder";var x=document.createElement("div");x.className="vjs-thumb-tooltip";r=document.createElement("img");r.className="vjs-thumb-image";i.appendChild(r);i.appendChild(x);a.el().appendChild(i);if(e.shadowSlide){var E=e.el_.querySelector(".vjs-thumb-poster");if(!E){d=document.createElement("div");d.className="vjs-thumb-poster";o=document.createElement("canvas");d.appendChild(o);e.el_.insertBefore(d,e.el_.querySelector(".vjs-poster"))}}l=e.duration();e.on("durationchange",function(t){l=e.duration()});e.on("loadedmetadata",function(t){l=e.duration()});var L=this.el_.querySelector(".vjs-play-progress"),S=L.querySelector(".vjs-time-tooltip");if(S)videojs.dom.addClass(S,"vjs-abs-hidden");var P=a.el().querySelector(".vjs-mouse-display");if(P)P.style.opacity=0;h=function(t){t.preventDefault();l=e.duration();var n=a.el().querySelector(".vjs-progress-holder"),h=a.el().querySelector(".vjs-play-progress"),u=n.getBoundingClientRect(),v=null;if(t.pageX)v=t.pageX;else if(t.changedTouches)v=t.changedTouches[0].pageX||t.touches[0].clientX;var m=v-u.left;if(0===m&&videojs.holderdown&&h.offsetWidth>0);if(m<0)m=0;if(m>n.offsetWidth)m=n.offsetWidth;var p=m/n.offsetWidth,w=p*l;x.innerHTML=_(w,l);var y=c.length;g=0;for(var j=!1;g<y;){var b=c[g];if(b.startTime<=w&&b.endTime>=w){j=!0;var E=s(b.text);break}g++}if(!0===j){i.classList.remove("vjs-thumb-hidden");if(r.src.indexOf(E.src)<0)r.src=E.src;if(0===E.w){E.w=f.width;r.style.width=E.w+"px"}if(0===E.h){E.h=f.height;r.style.height=E.h+"px"}if(i.style.width!==E.w||i.style.height!==E.h){i.style.width=E.w+"px";i.style.height=E.h+"px"}r.style.left=-E.x+"px";r.style.top=-E.y+"px";var L=E.w,S=L/2,P=a.el().offsetWidth,q=e.el_.querySelector(".vjs-progress-holder").offsetLeft,C=S-q;if(m+S+q>P)m=P-L;else if(m<C)m=0;else m-=C;i.style.left=parseInt(m,10)+"px";i.classList.add("vjs-thumb-show");if(videojs.holderdown&&e.shadowSlide){var N=e.el_.querySelector(".vjs-thumb-poster");if(!N){d=document.createElement("div");d.className="vjs-thumb-poster";o=document.createElement("canvas");d.appendChild(o);e.el_.insertBefore(d,e.el_.querySelector(".vjs-poster"))}var T=o.getContext("2d");o.width=e.el_.offsetWidth;o.height=e.el_.offsetHeight;d.style.width=o.width+"px";d.style.height=o.height+"px";T.clearRect(0,0,o.width,o.height);T.drawImage(r,E.x,E.y,E.w,E.h,0,0,o.width,o.height)}}else i.classList.add("vjs-thumb-hidden")};var q=!1,C=Object.defineProperty({},"passive",{get:function(){q=!0;return!0}});window.addEventListener("testPassive",null,C);window.removeEventListener("testPassive",null,C);u=function(e){if(!0!==videojs.holderdown)i.classList.remove("vjs-thumb-show")};n.addEventListener("mousemove",h);n.addEventListener("mouseleave",u);n.addEventListener("mousedown",k);n.addEventListener("touchstart",M,q?{passive:!1}:!1)}}else if(i)videojs.dom.addClass("div","vjs-hidden")}else if(i)videojs.dom.addClass("div","vjs-hidden");function _(e,t){e=e<0?0:e;let s=Math.floor(e%60),i=Math.floor(e/60%60),r=Math.floor(e/3600);const o=Math.floor(t/60%60),d=Math.floor(t/3600);if(isNaN(e)||e===1/0)r=i=s="-";r=r>0||d>0?r+":":"";i=((r||o>=10)&&i<10?"0"+i:i)+":";s=s<10?"0"+s:s;return r+i+s}function N(){i.classList.remove("vjs-thumb-show");if(e.shadowSlide){d.removeAttribute("style");o.width=0;o.height=0}}function T(){videojs.holderdown=!1;document.removeEventListener("mousemove",h);document.removeEventListener("mouseup",T);N()}function k(e){videojs.holderdown=!0;document.addEventListener("mousemove",h);document.addEventListener("mouseup",T);h(e)}function I(){n.removeEventListener("touchmove",h);n.removeEventListener("touchend",I);N()}function M(e){videojs.holderdown=!1;n.addEventListener("touchmove",h);n.addEventListener("touchend",I)}})},thumbnails=function(e){this.ready(()=>{onPlayerReady(this,videojs.mergeOptions(defaults,e))})},registerPlugin=videojs.registerPlugin||videojs.plugin;registerPlugin("thumbnails",thumbnails);thumbnails.VERSION="1.1";export default thumbnails;