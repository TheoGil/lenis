import{TinyEmitter as t}from"tiny-emitter";import e from"virtual-scroll";function i(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,e,o){return e&&i(t.prototype,e),o&&i(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o])}return t},r.apply(this,arguments)}function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}function s(t,e){var i=t%e;return(e>0&&i<0||e<0&&i>0)&&(i+=e),i}var l=["duration","easing"],a=/*#__PURE__*/function(){function t(){}var e=t.prototype;return e.to=function(t,e){var i=this,o=void 0===e?{}:e,n=o.duration,s=void 0===n?1:n,a=o.easing,c=void 0===a?function(t){return t}:a,h=function(t,e){if(null==t)return{};var i,o,r={},n=Object.keys(t);for(o=0;o<n.length;o++)e.indexOf(i=n[o])>=0||(r[i]=t[i]);return r}(o,l);this.target=t,this.fromKeys=r({},h),this.toKeys=r({},h),this.keys=Object.keys(r({},h)),this.keys.forEach(function(e){i.fromKeys[e]=t[e]}),this.duration=s,this.easing=c,this.currentTime=0,this.isRunning=!0},e.stop=function(){this.isRunning=!1},e.raf=function(t){var e=this;if(this.isRunning){this.currentTime=Math.min(this.currentTime+t,this.duration);var i=this.progress>=1?1:this.easing(this.progress);this.keys.forEach(function(t){var o=e.fromKeys[t];e.target[t]=o+(e.toKeys[t]-o)*i}),1===i&&this.stop()}},o(t,[{key:"progress",get:function(){return this.currentTime/this.duration}}]),t}(),c=/*#__PURE__*/function(t){var i,r;function l(i){var o,r,n,s,l=void 0===i?{}:i,c=l.duration,h=void 0===c?1.2:c,p=l.easing,u=void 0===p?function(t){return Math.min(1,1.001-Math.pow(2,-10*t))}:p,d=l.smooth,f=void 0===d||d,v=l.mouseMultiplier,w=void 0===v?1:v,g=l.smoothTouch,m=void 0!==g&&g,y=l.touchMultiplier,b=void 0===y?2:y,S=l.direction,N=void 0===S?"vertical":S,O=l.gestureDirection,z=void 0===O?"vertical":O,R=l.infinite,W=void 0!==R&&R,M=l.wrapper,T=void 0===M?window:M,k=l.content,j=void 0===k?document.body:k;(s=t.call(this)||this).onWindowResize=function(){s.wrapperWidth=window.innerWidth,s.wrapperHeight=window.innerHeight},s.onWrapperResize=function(t){var e=t[0];if(e){var i=e.contentRect;s.wrapperWidth=i.width,s.wrapperHeight=i.height}},s.onContentResize=function(t){var e=t[0];if(e){var i=e.contentRect;s.contentWidth=i.width,s.contentHeight=i.height}},s.onVirtualScroll=function(t){var e=t.deltaY,i=t.deltaX,o=t.originalEvent;if(!("vertical"===s.gestureDirection&&0===e||"horizontal"===s.gestureDirection&&0===i)){var r=!!o.composedPath().find(function(t){return t.hasAttribute&&t.hasAttribute("data-lenis-prevent")});o.ctrlKey||r||(s.smooth=o.changedTouches?s.smoothTouch:s.options.smooth,s.stopped?o.preventDefault():s.smooth&&4!==o.buttons&&(s.smooth&&o.preventDefault(),s.targetScroll-="both"===s.gestureDirection?i+e:"horizontal"===s.gestureDirection?i:e,s.scrollTo(s.targetScroll)))}},s.onScroll=function(t){s.isScrolling&&s.smooth||(s.targetScroll=s.scroll=s.lastScroll=s.wrapperNode[s.scrollProperty],s.notify())},window.lenisVersion="0.2.28",s.options={duration:h,easing:u,smooth:f,mouseMultiplier:w,smoothTouch:m,touchMultiplier:b,direction:N,gestureDirection:z,infinite:W,wrapper:T,content:j},s.duration=h,s.easing=u,s.smooth=f,s.mouseMultiplier=w,s.smoothTouch=m,s.touchMultiplier=b,s.direction=N,s.gestureDirection=z,s.infinite=W,s.wrapperNode=T,s.contentNode=j,s.wrapperNode.addEventListener("scroll",s.onScroll),s.wrapperNode===window?(s.wrapperNode.addEventListener("resize",s.onWindowResize),s.onWindowResize()):(s.wrapperHeight=s.wrapperNode.offsetHeight,s.wrapperWidth=s.wrapperNode.offsetWidth,s.wrapperObserver=new ResizeObserver(s.onWrapperResize),s.wrapperObserver.observe(s.wrapperNode)),s.contentHeight=s.contentNode.offsetHeight,s.contentWidth=s.contentNode.offsetWidth,s.contentObserver=new ResizeObserver(s.onContentResize),s.contentObserver.observe(s.contentNode),s.targetScroll=s.scroll=s.lastScroll=s.wrapperNode[s.scrollProperty],s.animate=new a;var D=(null==(o=navigator)||null==(r=o.userAgentData)?void 0:r.platform)||(null==(n=navigator)?void 0:n.platform)||"unknown";return s.virtualScroll=new e({el:s.wrapperNode,firefoxMultiplier:50,mouseMultiplier:s.mouseMultiplier*(D.includes("Win")||D.includes("Linux")?.84:.4),touchMultiplier:s.touchMultiplier,passive:!1,useKeyboard:!1,useTouch:!0}),s.virtualScroll.on(s.onVirtualScroll),s}r=t,(i=l).prototype=Object.create(r.prototype),i.prototype.constructor=i,n(i,r);var c=l.prototype;return c.start=function(){var t=this.wrapperNode;this.wrapperNode===window&&(t=document.documentElement),t.classList.remove("lenis-stopped"),this.stopped=!1},c.stop=function(){var t=this.wrapperNode;this.wrapperNode===window&&(t=document.documentElement),t.classList.add("lenis-stopped"),this.stopped=!0,this.animate.stop()},c.destroy=function(){var t;this.wrapperNode===window&&this.wrapperNode.removeEventListener("resize",this.onWindowResize),this.wrapperNode.removeEventListener("scroll",this.onScroll),this.virtualScroll.destroy(),null==(t=this.wrapperObserver)||t.disconnect(),this.contentObserver.disconnect()},c.raf=function(t){var e=t-(this.now||0);this.now=t,!this.stopped&&this.smooth&&(this.lastScroll=this.scroll,this.animate.raf(.001*e),this.scroll===this.targetScroll&&(this.lastScroll=this.scroll),this.isScrolling&&(this.setScroll(this.scroll),this.notify()),this.isScrolling=this.scroll!==this.targetScroll)},c.setScroll=function(t){var e=this.infinite?s(t,this.limit):t;"horizontal"===this.direction?this.wrapperNode.scrollTo(e,0):this.wrapperNode.scrollTo(0,e)},c.notify=function(){var t=this.infinite?s(this.scroll,this.limit):this.scroll;this.emit("scroll",{scroll:t,limit:this.limit,velocity:this.velocity,direction:0===this.velocity?0:this.velocity>0?1:-1,progress:t/this.limit})},c.scrollTo=function(t,e){var i=void 0===e?{}:e,o=i.offset,r=void 0===o?0:o,n=i.immediate,s=void 0!==n&&n,l=i.duration,a=void 0===l?this.duration:l,c=i.easing,h=void 0===c?this.easing:c;if(null!=t&&!this.stopped){var p;if("number"==typeof t)p=t;else if("top"===t||"#top"===t)p=0;else if("bottom"===t)p=this.limit;else{var u;if("string"==typeof t)u=document.querySelector(t);else{if(null==t||!t.nodeType)return;u=t}if(!u)return;var d=0;if(this.wrapperNode!==window){var f=this.wrapperNode.getBoundingClientRect();d="horizontal"===this.direction?f.left:f.top}var v=u.getBoundingClientRect();p=("horizontal"===this.direction?v.left:v.top)+this.scroll-d}p+=r,this.targetScroll=this.infinite?p:Math.max(0,Math.min(p,this.limit)),!this.smooth||s?(this.animate.stop(),this.scroll=this.lastScroll=this.targetScroll,this.setScroll(this.targetScroll)):this.animate.to(this,{duration:a,easing:h,scroll:this.targetScroll})}},o(l,[{key:"scrollProperty",get:function(){return this.wrapperNode===window?"horizontal"===this.direction?"scrollX":"scrollY":"horizontal"===this.direction?"scrollLeft":"scrollTop"}},{key:"limit",get:function(){return"horizontal"===this.direction?this.contentWidth-this.wrapperWidth:this.contentHeight-this.wrapperHeight}},{key:"velocity",get:function(){return this.scroll-this.lastScroll}}]),l}(t);export{c as default};
//# sourceMappingURL=lenis.mjs.map