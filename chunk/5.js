/*! For license information please see 5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"177":function(e,t,r){var n=r(178);e.exports=function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"writable":!0,"configurable":!0}}),Object.defineProperty(e,"prototype",{"writable":!1}),t&&n(e,t)},e.exports.__esModule=!0,e.exports.default=e.exports},"178":function(e,t){function _setPrototypeOf(t,r){return e.exports=_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(e,t){return e.__proto__=t,e},e.exports.__esModule=!0,e.exports.default=e.exports,_setPrototypeOf(t,r)}e.exports=_setPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"179":function(e,t,r){var n=r(20).default,o=r(180);e.exports=function _possibleConstructorReturn(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},"180":function(e,t){e.exports=function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.__esModule=!0,e.exports.default=e.exports},"181":function(e,t){function _getPrototypeOf(t){return e.exports=_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.__esModule=!0,e.exports.default=e.exports,_getPrototypeOf(t)}e.exports=_getPrototypeOf,e.exports.__esModule=!0,e.exports.default=e.exports},"183":function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return i}));var n=r(65),o=function useAppDispatch(){return Object(n.b)()},i=n.c},"184":function(e,t,r){"use strict";r.d(t,"a",(function(){return _objectWithoutProperties}));var n=r(39);function _objectWithoutProperties(e,t){if(null==e)return{};var r,o,i=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}},"186":function(e,t,r){"use strict";r.d(t,"b",(function(){return k})),r.d(t,"d",(function(){return S})),r.d(t,"c",(function(){return A})),r.d(t,"a",(function(){return C}));var n=r(2),o=r.n(n),i=r(24),a=r.n(i),c=r(54),s=r.n(c),l=r(20),u=r.n(l),f=r(32),d=r.n(f),h=r(33),p=r.n(h),v=r(177),y=r.n(v),x=r(179),b=r.n(x),m=r(181),g=r.n(m),w=r(82),O=r.n(w);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var r,n=g()(e);if(t){var o=g()(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return b()(this,r)}}o.a.createElement;var j=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function updateStyle(e,t,r){/^--/.test(t)?e.style.setProperty(t,r):"number"!=typeof r||j.test(t)?e.style[t]=r:e.style[t]=r+"px"}function updateProp(e,t,r,n,o){var i=e.ref.current,a=o[r],c=n?n[r]:void 0;if("children"!==r)if("classname"!==r.toLowerCase()){if("style"!==r){if(/^data-.+/.test(r)&&i.setAttribute(r,a),"taro-scroll-view-core"===t){if("scrollTop"===r)return void(i.mpScrollTop=a);if("scrollLeft"===r)return void(i.mpScrollLeft=a);if("scrollIntoView"===r)return void(i.mpScrollIntoView=a)}if("function"==typeof a&&r.match(/^on[A-Z]/)){var s=r.substr(2).toLowerCase(),l=a;return"taro-scroll-view-core"===t&&"scroll"===s&&(l=function fn(e){e instanceof CustomEvent&&a.apply(null,Array.from(arguments))}),e.eventHandlers.push([s,l]),i.addEventListener(s,l)}return"string"==typeof a||"number"==typeof a?(i.setAttribute(r,a),void(i[r]=a)):"boolean"==typeof a?a?(i[r]=!0,i.setAttribute(r,a)):(i[r]=!1,i.removeAttribute(r)):void(i[r]=a)}if("string"==typeof a)return void i.setAttribute(r,a);if(!a)return void i.removeAttribute(r);if(n)if("string"==typeof c)i.style.cssText="";else for(var u in c)updateStyle(i,u,"");for(var f in a)updateStyle(i,f,a[f])}else i.className=n?function getClassName(e,t,r){var n=Array.from(e.classList),o=(t.className||t.class||"").split(" "),i=(r.className||r.class||"").split(" "),a=[];return n.forEach((function(e){i.indexOf(e)>-1?(a.push(e),i=i.filter((function(t){return t!==e}))):-1===o.indexOf(e)&&a.push(e)})),(a=[].concat(O()(a),O()(i))).join(" ")}(i,n,o):a}var _=function reactifyWebComponent(e){var t=function(t){y()(Index,t);var r=_createSuper(Index);function Index(e){var t;return d()(this,Index),(t=r.call(this,e)).eventHandlers=[],t.ref=Object(n.createRef)(),t}return p()(Index,[{"key":"update","value":function update(t){var r=this;this.clearEventHandlers(),this.ref.current&&(Object.keys(t||{}).forEach((function(n){"children"===n||"key"===n||n in r.props||updateProp(r,e,n,t,r.props)})),Object.keys(this.props).forEach((function(n){updateProp(r,e,n,t,r.props)})))}},{"key":"componentDidUpdate","value":function componentDidUpdate(e){this.update(e)}},{"key":"componentDidMount","value":function componentDidMount(){var e=this.props.forwardRef;"function"==typeof e?e(this.ref.current):e&&"object"===u()(e)&&e.hasOwnProperty("current")?e.current=this.ref.current:"string"==typeof e&&console.warn("内置组件不支持字符串 ref"),this.update()}},{"key":"componentWillUnmount","value":function componentWillUnmount(){this.clearEventHandlers()}},{"key":"clearEventHandlers","value":function clearEventHandlers(){var e=this;this.eventHandlers.forEach((function(t){var r=s()(t,2),n=r[0],o=r[1];e.ref.current&&e.ref.current.removeEventListener(n,o)})),this.eventHandlers=[]}},{"key":"render","value":function render(){var t=this.props,r=t.children,o=t.dangerouslySetInnerHTML,i={"ref":this.ref};return o&&(i.dangerouslySetInnerHTML=o),Object(n.createElement)(e,i,r)}}]),Index}(o.a.Component);return o.a.forwardRef((function(e,r){return o.a.createElement(t,_objectSpread(_objectSpread({},e),{},{"forwardRef":r}))}))},k=(_("taro-cover-image-core"),_("taro-cover-view-core"),_("taro-match-media-core"),_("taro-movable-area-core"),_("taro-movable-view-core"),_("taro-page-container-core"),_("taro-root-portal-core"),_("taro-scroll-view-core")),S=(_("taro-share-element-core"),_("taro-swiper-core"),_("taro-swiper-item-core"),_("taro-view-core")),A=(_("taro-icon-core"),_("taro-progress-core"),_("taro-rich-text-core"),_("taro-text-core")),C=(_("taro-button-core"),_("taro-checkbox-core"),_("taro-checkbox-group-core"),_("taro-editor-core"),_("taro-form-core"),_("taro-keyboard-accessory-core"),_("taro-label-core"),_("taro-picker-core"),_("taro-picker-view-core"),_("taro-picker-view-column-core"),_("taro-radio-core"),_("taro-radio-group-core"),_("taro-slider-core"),_("taro-switch-core"),_("taro-textarea-core"),_("taro-functional-page-navigator-core"),_("taro-navigator-core"),_("taro-audio-core"),_("taro-camera-core"),_("taro-image-core"),_("taro-live-player-core"),_("taro-video-core"),_("taro-voip-room-core"),_("taro-map-core"),_("taro-canvas-core"));_("taro-web-view-core"),_("taro-ad-core"),_("taro-ad-custom-core"),_("taro-official-account-core"),_("taro-open-data-core"),_("taro-navigation-bar-core"),_("taro-page-meta-core"),n.Fragment,_("taro-custom-wrapper-core")},"193":function(e,t,r){},"194":function(e,t,r){},"196":function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(7),o=r(4),i=r(5),a=r(15),c=r(63),__awaiter=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function fulfilled(e){try{step(n.next(e))}catch(e){i(e)}}function rejected(e){try{step(n.throw(e))}catch(e){i(e)}}function step(e){e.done?o(e.value):function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))},s={"top":"top","bottom":"bottom","middle":"middle","normal":"alphabetic"},l=function(){function CanvasContext(e,t){Object(o.a)(this,CanvasContext),this.actions=[],this.canvas=e,this.ctx=t}return Object(i.a)(CanvasContext,[{"key":"ctx","get":function get(){return this.__raw__||{}},"set":function set(e){this.__raw__=e}},{"key":"emptyActions","value":function emptyActions(){this.actions.length=0}},{"key":"enqueueActions","value":function enqueueActions(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];this.actions.push({"func":e,"args":r})}},{"key":"fillStyle","get":function get(){return this.ctx.fillStyle},"set":function set(e){var t=this;this.enqueueActions((function(){t.ctx.fillStyle=e}))}},{"key":"font","get":function get(){return this.ctx.font},"set":function set(e){this.ctx.font=e}},{"key":"globalAlpha","get":function get(){return this.ctx.globalAlpha},"set":function set(e){var t=this;this.enqueueActions((function(){t.ctx.globalAlpha=e}))}},{"key":"globalCompositeOperation","get":function get(){return this.ctx.globalCompositeOperation},"set":function set(e){var t=this;this.enqueueActions((function(){t.ctx.globalCompositeOperation=e}))}},{"key":"lineCap","get":function get(){return this.ctx.lineCap},"set":function set(e){var t=this;this.enqueueActions((function(){t.ctx.lineCap=e}))}},{"key":"lineDashOffset","get":function get(){return this.ctx.lineDashOffset},"set":function set(e){var t=this;this.enqueueActions((function(){t.ctx.lineDashOffset=e}))}},{"key":"lineJoin","get":function get(){return this.ctx.lineJoin},"set":function set(e){var t=this;this.enqueueActions((function(){t.ctx.lineJoin=e}))}},{"key":"lineWidth","get":function get(){return this.ctx.lineWidth},"set":function set(e){var t=this;this.enqueueActions((function(){t.ctx.lineWidth=e}))}},{"key":"miterLimit","get":function get(){return this.ctx.miterLimit},"set":function set(e){var t=this;this.enqueueActions((function(){t.ctx.miterLimit=e}))}},{"key":"shadowBlur","get":function get(){return this.ctx.shadowBlur},"set":function set(e){var t=this;this.enqueueActions((function(){t.ctx.shadowBlur=e}))}},{"key":"shadowColor","get":function get(){return this.ctx.shadowColor},"set":function set(e){var t=this;this.enqueueActions((function(){t.ctx.shadowColor=e}))}},{"key":"shadowOffsetX","get":function get(){return this.ctx.shadowOffsetX},"set":function set(e){var t=this;this.enqueueActions((function(){t.ctx.shadowOffsetX=e}))}},{"key":"shadowOffsetY","get":function get(){return this.ctx.shadowOffsetY},"set":function set(e){var t=this;this.enqueueActions((function(){t.ctx.shadowOffsetY=e}))}},{"key":"strokeStyle","get":function get(){return this.ctx.strokeStyle},"set":function set(e){var t=this;this.enqueueActions((function(){t.ctx.strokeStyle=e}))}},{"key":"textAlign","get":function get(){return this.ctx.textAlign},"set":function set(e){this.ctx.textAlign=e}},{"key":"textBaseline","get":function get(){return this.ctx.textBaseline},"set":function set(e){this.ctx.textBaseline=e}},{"key":"direction","get":function get(){return this.ctx.direction},"set":function set(e){this.ctx.direction=e}},{"key":"imageSmoothingEnabled","get":function get(){return this.ctx.imageSmoothingEnabled},"set":function set(e){var t=this;this.enqueueActions((function(){t.ctx.imageSmoothingEnabled=e}))}},{"key":"imageSmoothingQuality","get":function get(){return this.ctx.imageSmoothingQuality},"set":function set(e){var t=this;this.enqueueActions((function(){t.ctx.imageSmoothingQuality=e}))}},{"key":"filter","get":function get(){return this.ctx.filter},"set":function set(e){var t=this;this.enqueueActions((function(){t.ctx.filter=e}))}},{"key":"arc","value":function arc(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.arc].concat(t))}},{"key":"arcTo","value":function arcTo(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.arcTo].concat(t))}},{"key":"beginPath","value":function beginPath(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.beginPath].concat(t))}},{"key":"bezierCurveTo","value":function bezierCurveTo(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.bezierCurveTo].concat(t))}},{"key":"clearRect","value":function clearRect(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.clearRect].concat(t))}},{"key":"clip","value":function clip(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.clip].concat(t))}},{"key":"closePath","value":function closePath(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.closePath].concat(t))}},{"key":"createPattern","value":function createPattern(e,t){return this.createPattern(e,t)}},{"key":"draw","value":function draw(e,t){return __awaiter(this,void 0,void 0,Object(a.a)().mark((function _callee(){var r,n,o,i,s;return Object(a.a)().wrap((function _callee$(a){for(;;)switch(a.prev=a.next){case 0:a.prev=0,e||this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),r=Object(c.a)(this.actions),a.prev=3,r.s();case 5:if((n=r.n()).done){a.next=11;break}return o=n.value,i=o.func,s=o.args,a.next=9,i.apply(this.ctx,s);case 9:a.next=5;break;case 11:a.next=16;break;case 13:a.prev=13,a.t0=a.catch(3),r.e(a.t0);case 16:return a.prev=16,r.f(),a.finish(16);case 19:this.emptyActions(),t&&t(),a.next=26;break;case 23:throw a.prev=23,a.t1=a.catch(0),{"errMsg":a.t1.message};case 26:case"end":return a.stop()}}),_callee,this,[[0,23],[3,13,16,19]])})))}},{"key":"drawImage","value":function drawImage(e){for(var t=this,r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];this.enqueueActions((function(){var r;if("string"==typeof e){var o=new Image;return o.src=e,new Promise((function(e,r){o.onload=function(){var r;(r=t.ctx).drawImage.apply(r,[o].concat(n)),e()},o.onerror=r}))}(r=t.ctx).drawImage.apply(r,[e].concat(n))}))}},{"key":"fill","value":function fill(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.fill].concat(t))}},{"key":"fillRect","value":function fillRect(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.fillRect].concat(t))}},{"key":"fillText","value":function fillText(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.fillText].concat(t))}},{"key":"lineTo","value":function lineTo(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.lineTo].concat(t))}},{"key":"moveTo","value":function moveTo(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.moveTo].concat(t))}},{"key":"quadraticCurveTo","value":function quadraticCurveTo(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.quadraticCurveTo].concat(t))}},{"key":"rect","value":function rect(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.rect].concat(t))}},{"key":"restore","value":function restore(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.restore].concat(t))}},{"key":"rotate","value":function rotate(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.rotate].concat(t))}},{"key":"save","value":function save(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.save].concat(t))}},{"key":"scale","value":function scale(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.scale].concat(t))}},{"key":"setFillStyle","value":function setFillStyle(e){var t=this;this.enqueueActions((function(){t.ctx.fillStyle=e}))}},{"key":"setFontSize","value":function setFontSize(e){this.font="".concat(e,"px")}},{"key":"setGlobalAlpha","value":function setGlobalAlpha(e){this.globalAlpha=e}},{"key":"setLineCap","value":function setLineCap(e){this.lineCap=e}},{"key":"setLineDash","value":function setLineDash(e,t){var r=this;this.enqueueActions((function(){r.ctx.setLineDash(e),r.ctx.lineDashOffset=t}))}},{"key":"setLineJoin","value":function setLineJoin(e){this.lineJoin=e}},{"key":"setLineWidth","value":function setLineWidth(e){this.lineWidth=e}},{"key":"setMiterLimit","value":function setMiterLimit(e){this.miterLimit=e}},{"key":"setShadow","value":function setShadow(e,t,r,n){var o=this;this.enqueueActions((function(){o.ctx.shadowOffsetX=e,o.ctx.shadowOffsetY=t,o.ctx.shadowColor=n,o.ctx.shadowBlur=r}))}},{"key":"setStrokeStyle","value":function setStrokeStyle(e){var t=this;this.enqueueActions((function(){t.ctx.strokeStyle=e}))}},{"key":"setTextAlign","value":function setTextAlign(e){this.textAlign=e}},{"key":"setTextBaseline","value":function setTextBaseline(e){this.textBaseline=s[e]||"alphabetic"}},{"key":"setTransform","value":function setTransform(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.setTransform].concat(t))}},{"key":"stroke","value":function stroke(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.stroke].concat(t))}},{"key":"strokeRect","value":function strokeRect(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.strokeRect].concat(t))}},{"key":"strokeText","value":function strokeText(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.strokeText].concat(t))}},{"key":"transform","value":function transform(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.transform].concat(t))}},{"key":"translate","value":function translate(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return this.enqueueActions.apply(this,[this.ctx.translate].concat(t))}},{"key":"measureText","value":function measureText(e){return this.ctx.measureText(e)}},{"key":"createCircularGradient","value":function createCircularGradient(e,t,r){return this.ctx.createRadialGradient(e,t,0,e,t,r)}},{"key":"createLinearGradient","value":function createLinearGradient(e,t,r,n){return this.createLinearGradient(e,t,r,n)}}]),CanvasContext}(),u=function(){function NodesRef(e,t,r){Object(o.a)(this,NodesRef),this._component=t._component,this._selector=e,this._selectorQuery=t,this._single=r}return Object(i.a)(NodesRef,[{"key":"context","value":function context(e){var t=this._selector,r=this._component,n=this._single,o=this._selectorQuery;return o._push(t,r,n,{"context":!0},e),o}},{"key":"node","value":function node(e){var t=this._selector,r=this._component,n=this._single,o=this._selectorQuery;return o._push(t,r,n,{"nodeCanvasType":!0,"node":!0},e),o}},{"key":"boundingClientRect","value":function boundingClientRect(e){var t=this._selector,r=this._component,n=this._single,o=this._selectorQuery;return o._push(t,r,n,{"id":!0,"dataset":!0,"rect":!0,"size":!0},e),o}},{"key":"scrollOffset","value":function scrollOffset(e){var t=this._selector,r=this._component,n=this._single,o=this._selectorQuery;return o._push(t,r,n,{"id":!0,"dataset":!0,"scrollOffset":!0},e),o}},{"key":"fields","value":function fields(e,t){var r=this._selector,n=this._component,o=this._single,i=this._selectorQuery,a=e.id,c=e.dataset,s=e.rect,l=e.size,u=e.scrollOffset,f=e.properties,d=void 0===f?[]:f,h=e.computedStyle,p=void 0===h?[]:h;return i._push(r,n,o,{"id":a,"dataset":c,"rect":s,"size":l,"scrollOffset":u,"properties":d,"computedStyle":p},t),i}}]),NodesRef}();function filter(e,t,r){if(!t)return null;var n=".taro_page"===r,o=e.id,i=e.dataset,a=e.rect,c=e.size,s=e.scrollOffset,u=e.properties,f=void 0===u?[]:u,d=e.computedStyle,h=void 0===d?[]:d,p=e.nodeCanvasType,v=e.node,y=e.context,x={};if(p&&v){var b=t.tagName;if(x.node={"id":t.id,"$taroElement":t},/^taro-canvas-core/i.test(b)){var m=t.type||"";x.nodeCanvasType=m;var g=t.getElementsByTagName("canvas")[0];/^(2d|webgl)/i.test(m)&&g?x.node=g:x.node=null}else x.nodeCanvasType="",x.node=t;return x}if(!y){if(o&&(x.id=t.id),i&&(x.dataset=Object.assign({},t.dataset)),a||c){var w=t.getBoundingClientRect(),O=w.left,j=w.right,_=w.top,k=w.bottom,S=w.width,A=w.height;a&&(n?(x.left=0,x.right=0,x.top=0,x.bottom=0):(x.left=O,x.right=j,x.top=_,x.bottom=k)),c&&(n?(x.width=t.clientWidth,x.height=t.clientHeight):(x.width=S,x.height=A))}if(s&&(x.scrollLeft=t.scrollLeft,x.scrollTop=t.scrollTop),f.length&&f.forEach((function(e){var r=t.getAttribute(e);r&&(x[e]=r)})),h.length){var C=window.getComputedStyle(t);h.forEach((function(e){var t=C.getPropertyValue(e)||C[e];t&&(x[e]=t)}))}return x}var T=t.tagName;if(/^taro-video-core/i.test(T))return{"context":t};if(/^taro-canvas-core/i.test(T)){var N=t.type||"2d",R=null==t?void 0:t.querySelector("canvas"),P=null==R?void 0:R.getContext(N);return{"context":new l(R,P)}}/^taro-live-player-core/i.test(T)?console.error("暂时不支持通过 NodesRef.context 获取 LivePlayerContext"):/^taro-editor-core/i.test(T)?console.error("暂时不支持通过 NodesRef.context 获取 EditorContext"):/^taro-map-core/i.test(T)&&console.error("暂时不支持通过 NodesRef.context 获取 MapContext")}var f=function(){function SelectorQuery(){Object(o.a)(this,SelectorQuery),this._defaultWebviewId=null,this._webviewId=null,this._queue=[],this._queueCb=[],this._component}return Object(i.a)(SelectorQuery,[{"key":"in","value":function _in(e){return this._component=e,this}},{"key":"select","value":function select(e){return"string"==typeof e&&(e=e.replace(">>>",">")),new u(e,this,!0)}},{"key":"selectAll","value":function selectAll(e){return"string"==typeof e&&(e=e.replace(">>>",">")),new u(e,this,!1)}},{"key":"selectViewport","value":function selectViewport(){return new u(".taro_page",this,!0)}},{"key":"exec","value":function exec(e){var t=this;return function queryBat(e,t){var r=[];e.forEach((function(e){var t,o=e.selector,i=e.single,a=e.fields,c=e.component,s=null!==c&&Object(n.a)(c)||document,l=!1;if(s!==document){var u=null===(t=s.parentNode)||void 0===t?void 0:t.querySelectorAll(o);if(u)for(var f=0,d=u.length;f<d;++f)if(s===u[f]){l=!0;break}}if(i){var h=!0===l?s:s.querySelector(o);r.push(filter(a,h,o))}else{var p=s.querySelectorAll(o),v=[];!0===l&&v.push(s);for(var y=0,x=p.length;y<x;++y)v.push(p[y]);r.push(v.map((function(e){return filter(a,e)})))}})),t(r)}(this._queue,(function(r){var n=t._queueCb;r.forEach((function(e,r){var o=n[r];"function"==typeof o&&o.call(t,e)})),"function"==typeof e&&e.call(t,r)})),this}},{"key":"_push","value":function _push(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;this._queue.push({"component":t,"selector":e,"single":r,"fields":n}),this._queueCb.push(o)}}]),SelectorQuery}(),d=function createSelectorQuery(){return new f};Object(n.f)("createIntersectionObserver")},"201":function(e,t,r){"use strict";r.r(t);var n,o=r(13),i=r(2),a=r.n(i),c=r(173),s=r(28),l=r(15),u=r(40),f=r(184),d=r(16),h=r(34),p=r(8),v=r(1),y=r(196),x=r(170),b=r(186),m=["columns","dataSource","rowKey","style","scrollY","scrollX","rowStyle","rowClassName","colClassName","colStyle","titleStyle","titleClassName","className","wrapperClass","wrapperStyle","loadStatus","loading","onLoad","onSorter","unsort","showHeader","loadingText","noMoreText","loadLoadingText","onRow","distance","showLoad","fixedLoad","emptyText","cellEmptyText","renderEmpty","striped","size","colWidth"],g={"exports":{}},w={};!function(e){e.exports=function requireReactJsxRuntime_production_min(){if(n)return w;n=1;var e=a.a,t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={"key":!0,"ref":!0,"__self":!0,"__source":!0};function q(e,r,n){var a,s={},l=null,u=null;for(a in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)o.call(r,a)&&!c.hasOwnProperty(a)&&(s[a]=r[a]);if(e&&e.defaultProps)for(a in r=e.defaultProps)void 0===s[a]&&(s[a]=r[a]);return{"$$typeof":t,"type":e,"key":l,"ref":u,"props":s,"_owner":i.current}}return w.Fragment=r,w.jsx=q,w.jsxs=q,w}()}(g);var O={"exports":{}};!function(e){!function(){var t={}.hasOwnProperty;function classNames(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var o=Object(v.a)(n);if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var i=classNames.apply(null,n);i&&e.push(i)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)t.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(classNames.default=classNames,e.exports=classNames):window.classNames=classNames}()}(O);var j=O.exports,_={"small":8,"middle":16,"large":24},k=function getSize(e){return"number"==typeof e?s.a.pxTransform(2*e):String(e)};function calculateFixedDistance(e){var t=e.fixedType,r=e.index,n=e.columns,o=e.colWidth,i=void 0===o?0:o,a=0;return a="left"===t?n.reduce((function(e,t,n){return n+1<=r?e+(t.width||i):e}),0):n.reduceRight((function(e,t,n){return n-1>=r?e+(t.width||i):e}),0),k(a)}function getNumberSize(e){return"string"==typeof e?_[e]:e||0}function showStriped(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return[!0,"even"].includes(e)?t%2!=0:"odd"===e&&t%2==0}function Row(e){var t=e.dataSourceItem,r=e.rowStyle,n=void 0===r?{}:r,o=e.rowClassName,i=void 0===o?"":o,a=e.colClassName,c=void 0===a?"":a,s=e.colStyle,l=void 0===s?{}:s,u=e.columns,f=e.index,d=e.cellEmptyText,v=void 0===d?"-":d,y=e.onRow,x=e.striped,m=void 0!==x&&x,w=e.size,O=e.colWidth;return g.exports.jsx(b.d,{"id":"taro-table-row-".concat(f),"className":j(["taro-table-row",i]),"style":n,"children":u.map((function(e,r){var n,o,i=t[e.dataIndex],a=O;(e.width&&(a=e.width),e.render)?o=e.render(i,t,f):o=function isNil(e){return null==e}(i)?v:String(i);return g.exports.jsx(b.d,{"className":j(["taro-table-col"],(n={},Object(p.a)(n,"taro-table-col-fixed",e.fixed),Object(p.a)(n,"taro-table-col-striped",showStriped(m,f)),Object(p.a)(n,c,!0),n)),"style":Object(h.a)(Object(p.a)({"width":k(a),"padding":"".concat(k(0)," ").concat(k(getNumberSize(w))),"textAlign":e.align||"center"},e.fixed,e.fixed&&calculateFixedDistance({"fixedType":e.fixed,"index":r,"columns":u,"colWidth":O})),l),"onClick":function onClick(){return null==y?void 0:y(t,f)},"children":g.exports.jsx(b.c,{"className":j("taro-table-col-text",{"taro-table-col-text-ellipsis":e.ellipsis}),"onClick":function onClick(){var r;return null==e||null===(r=e.onCell)||void 0===r?void 0:r.call(e,t,f)},"children":o})},e.key||e.dataIndex)}))})}var S=Object(i.memo)(Row);function useUpdateState(e){var t=Object(i.useState)(e),r=Object(o.a)(t,2),n=r[0],a=r[1];return Object(i.useEffect)((function(){a(e)}),[e]),[n,a]}var A=function useUniqueId(){return Object(i.useCallback)((function(e){return"".concat("taro-react-table","__").concat(Number(Math.random().toString().substring(2)+Date.now()).toString(36),"_").concat(e)}),[])},C=function useRendered(e){return null==e?void 0:e()};function Title(e){var t,r,n,o=e.setColumns,a=e.columns,c=e.column,s=e.index,l=e.titleStyle,u=void 0===l?{}:l,f=e.titleClassName,v=void 0===f?"":f,y=e.unsort,x=e.setDataSource,m=e.dataSource,w=void 0===m?[]:m,O=e.onSorter,_=e.size,S=e.colWidth,C=A(),T=Object(i.useRef)(null),N=Object(i.useMemo)((function(){var e=c.width||S;return k(e)}),[c.width,s,S]);return g.exports.jsx(b.d,{"onClick":function onClick(){return function handleClickTitle(e,t){var r=e.sorter;if(r){var n=Object(d.a)(a);n.forEach((function(e,r){r!==t&&delete e.sortOrder}));var i=["ascend","descend"];y&&(i=["ascend","descend",void 0]);var s=i.indexOf(n[t].sortOrder),l=n[t].sortOrder=i[(s+1)%i.length];if("function"==typeof r){var u=Object(d.a)(w).sort((function(e,t){return r(e,t)}));x(u)}o(n),null==O||O({"column":c,"field":e.dataIndex,"order":l})}}(c,s)},"className":j(["taro-table-title"],(t={},Object(p.a)(t,"taro-table-fixed",c.fixed),Object(p.a)(t,v,!0),t)),"style":Object(h.a)(Object(h.a)(Object(h.a)(Object(p.a)({},c.fixed,c.fixed&&calculateFixedDistance({"fixedType":c.fixed,"index":s,"columns":a,"colWidth":S})),c.titleStyle),u),{},{"width":N,"padding":"".concat(k(0)," ").concat(k(getNumberSize(_)))}),"children":g.exports.jsxs(b.d,{"id":C("taro-table-title-text-wrapper"),"ref":T,"className":"taro-table-title-text-wrapper","children":[g.exports.jsx(b.c,{"className":"taro-table-title-text","children":c.title}),c.sorter&&g.exports.jsxs(b.d,{"className":"taro-table-title-sort-wrwapper","children":[g.exports.jsx(b.d,{"className":j((r={},Object(p.a)(r,"title-sort-btn",!0),Object(p.a)(r,"title-ascend",!0),Object(p.a)(r,"title-ascend-active","ascend"===c.sortOrder),r))}),g.exports.jsx(b.d,{"className":j((n={},Object(p.a)(n,"title-sort-btn",!0),Object(p.a)(n,"title-descend",!0),Object(p.a)(n,"title-descend-active","descend"===c.sortOrder),n))})]})]})},c.key||c.dataIndex)}var T=Object(i.memo)(Title);function Empty(e){var t=e.text,r=void 0===t?"暂无数据":t,n=e.fixedEmpty,o=void 0===n||n,i=e.renderEmpty;return g.exports.jsx(b.d,{"className":j("taro-table-empty",Object(p.a)({},"taro-table-empty-sticky",o)),"children":i||g.exports.jsx(b.c,{"children":r})})}var N=Object(i.memo)(Empty);function Loading(e){var t=e.text,r=void 0===t?"加载中...":t;return g.exports.jsxs(b.d,{"className":"loading-wrapper","children":[g.exports.jsx(b.d,{"className":"loading"}),g.exports.jsx(b.c,{"className":"loading-text","children":r})]})}function LoadMore(e){var t=e.status,r=e.loadingText,n=e.noMoreText,o=e.size;return g.exports.jsxs(b.d,{"className":j("load-more","load-more-sticky"),"children":["loading"===t&&g.exports.jsx(Loading,{"text":r}),"noMore"==t&&o>0&&g.exports.jsx(b.c,{"className":"no-more-text","children":n||"没有更多了"})]})}var R=Object(i.memo)(LoadMore),P=function Table(e,t){var r=e.columns,n=void 0===r?[]:r,a=e.dataSource,c=void 0===a?[]:a,s=e.rowKey,d=void 0===s?"":s,v=e.style,w=void 0===v?{}:v,O=e.scrollY,_=void 0===O||O,P=e.scrollX,E=void 0===P||P,L=e.rowStyle,z=void 0===L?{}:L,I=e.rowClassName,D=void 0===I?"":I,M=e.colClassName,W=void 0===M?"":M,H=e.colStyle,B=void 0===H?{}:H,Q=e.titleStyle,F=void 0===Q?{}:Q,U=e.titleClassName,J=void 0===U?"":U,G=e.className,X=void 0===G?"":G,Y=e.wrapperClass,$=void 0===Y?{}:Y,K=e.wrapperStyle,V=void 0===K?{}:K,Z=e.loadStatus,ee=void 0===Z?null:Z,te=e.loading,re=void 0!==te&&te,ne=e.onLoad,oe=e.onSorter,ie=e.unsort,ae=void 0!==ie&&ie,ce=e.showHeader,se=void 0===ce||ce,le=e.loadingText,ue=void 0===le?"":le,fe=e.noMoreText,de=e.loadLoadingText,he=e.onRow,pe=e.distance,ve=void 0===pe?30:pe,ye=e.showLoad,xe=void 0===ye||ye,be=e.fixedLoad,me=void 0===be||be,ge=e.emptyText,we=e.cellEmptyText,Oe=e.renderEmpty,je=e.striped,_e=void 0!==je&&je,ke=e.size,Se=void 0===ke?"middle":ke,Ae=e.colWidth,Ce=void 0===Ae?120:Ae,Te=Object(f.a)(e,m),Ne=Object(i.useRef)(null),qe=Object(i.useRef)(null),Re=Object(i.useRef)(null),Pe=Object(i.useRef)(null),Ee=Object(i.useRef)({"scrollLeft":0,"scrollHeight":0,"scrollTop":0}),Le=useUpdateState(c),ze=Object(o.a)(Le,2),Ie=ze[0],De=ze[1],Me=useUpdateState(n),We=Object(o.a)(Me,2),He=We[0],Be=We[1],Qe=useUpdateState(ee),Fe=Object(o.a)(Qe,1)[0],Ue=Object(i.useState)(0),Je=Object(o.a)(Ue,2),Ge=Je[0],Xe=Je[1],Ye=function useQuery(){var e=Object(i.useRef)(Object(y.a)()),t=Object(i.useCallback)((function(t){return e.current.select(t)}),[e]),r=Object(i.useCallback)((function(e){return new Promise((function(r,n){if(e)try{t("#"+e.id).boundingClientRect((function(e){r(e||{})})).exec()}catch(e){n(e)}else n({})}))}),[t]);return[e.current,{"getRefSize":r}]}(),$e=Object(o.a)(Ye,2)[1].getRefSize,Ke=A(),Ve=function(){var e=Object(u.a)(Object(l.a)().mark((function _callee(e){var t,r,n,o,i,a,c,s;return Object(l.a)().wrap((function _callee$(l){for(;;)switch(l.prev=l.next){case 0:if(null==Ne||!Ne.current){l.next=17;break}return l.next=3,$e(null==Ne?void 0:Ne.current);case 3:if(r=l.sent,n=r.height,o=Ee.current,i=o.scrollHeight,a=void 0===i?0:i,c=o.scrollTop,s=void 0===c?0:c,null==Te||null===(t=Te.onScrollToLower)||void 0===t||t.call(Te,e),xe){l.next=9;break}return l.abrupt("return");case 9:if("noMore"!==Fe){l.next=11;break}return l.abrupt("return");case 11:if(Math.round(a)!==Math.round(n)){l.next=13;break}return l.abrupt("return");case 13:if(0!==s){l.next=15;break}return l.abrupt("return");case 15:a-(s+n)<ve&&"loading"!=Fe&&setTimeout((function(){null==ne||ne(e)}),300);case 17:case"end":return l.stop()}}),_callee)})));return function onScrollToLower(t){return e.apply(this,arguments)}}(),Ze=function(){var e=Object(u.a)(Object(l.a)().mark((function _callee2(e){var t,r,n,o,i,a,c,s;return Object(l.a)().wrap((function _callee2$(l){for(;;)switch(l.prev=l.next){case 0:if(null==Ne||!Ne.current){l.next=10;break}return r=e.detail,n=r.scrollTop,o=r.scrollHeight,i=r.scrollLeft,l.next=4,$e(Ne.current);case 4:a=l.sent,c=a.height,s=o-(Math.round(n)+c),Xe(s),Ee.current={"scrollTop":n,"scrollHeight":o,"scrollLeft":i},null==Te||null===(t=Te.onScroll)||void 0===t||t.call(Te,e);case 10:case"end":return l.stop()}}),_callee2)})));return function onScroll(t){return e.apply(this,arguments)}}(),et=function setFixedWidth(e){var t=e.width,r=e.fixedDom;r.style.width=k(t),r.style.maxWidth=k(t)},tt=Object(i.useCallback)(Object(u.a)(Object(l.a)().mark((function _callee3(){var e,t;return Object(l.a)().wrap((function _callee3$(r){for(;;)switch(r.prev=r.next){case 0:if(!Re.current){r.next=6;break}return r.next=3,$e(Re.current);case 3:e=r.sent,(t=e.width)&&(qe.current&&me&&et({"width":t,"fixedDom":qe.current}),Pe.current&&!Ie.length&&et({"width":t,"fixedDom":Pe.current}));case 6:case"end":return r.stop()}}),_callee3)}))),[Ie.length,me,$e]),rt=C((function(){return g.exports.jsx(b.d,{"ref":Pe,"className":"taro-table-empty-wrapper","children":g.exports.jsx(N,{"text":ge,"renderEmpty":Oe})})})),nt=C((function(){return se&&He.length>0&&g.exports.jsx(b.d,{"ref":Re,"className":j(["taro-table-head"],{"taro-table-head-scroll":_}),"id":Ke("taro-table-head"),"children":0===He.length?rt:He.map((function(e,t){return g.exports.jsx(T,{"columns":He,"column":e,"setColumns":Be,"onSorter":oe,"unsort":ae,"index":t,"setDataSource":De,"dataSource":Ie,"titleClassName":J,"titleStyle":F,"size":Se,"colWidth":Ce},e.key||e.dataIndex)}))})})),ot=C((function(){return g.exports.jsx(b.d,{"className":"taro-table-body","children":Ie.length>0&&He.length>0?Ie.map((function(e,t){var r;return(r="function"==typeof d?d(e):e[d])||(r="row-item-".concat(t)),g.exports.jsx(S,{"rowClassName":D,"rowStyle":z,"colClassName":W,"colStyle":B,"columns":He,"dataSourceItem":e,"index":t,"onRow":he,"cellEmptyText":we,"striped":_e,"size":Se,"colWidth":Ce},r)})):"loading"!=Fe&&rt})})),it=C((function(){return xe&&(Ie.length||Fe)&&g.exports.jsx(b.d,{"ref":qe,"className":j("taro-table-load-wrapper",Object(p.a)({},"taro-table-load-wrapper-center",!me)),"children":g.exports.jsx(R,{"status":Fe,"size":Ie.length,"noMoreText":fe,"loadingText":de})})}));return Object(i.useEffect)((function(){!He.length&&Ie.length||Object(x.a)((function(){tt()}))}),[He,Ie,tt]),Object(i.useImperativeHandle)(t,(function(){return{"scrollRef":Ne,"scrollDistance":Ge}})),g.exports.jsxs(b.d,{"className":j(["taro-table-wrapper",$]),"style":V,"children":[re&&g.exports.jsx(b.d,{"className":"taro-table-loading","children":g.exports.jsx(Loading,{"text":ue})}),g.exports.jsx(b.b,Object(h.a)(Object(h.a)({},Te),{},{"ref":Ne,"className":j(["taro-table-scroll",X]),"scrollX":E,"scrollY":_,"style":Object(h.a)(Object(h.a)({},w),{},{"overflow":"auto"}),"onScrollToLower":Ve,"onScroll":Ze,"id":Ke("taro-table-scroll"),"children":g.exports.jsxs(b.d,{"className":"taro-table-content-wrapper","children":[nt,ot,it]})}))]})},E=Object(i.memo)(Object(i.forwardRef)(P)),L=r(64),z=r(183),I=(r(193),r(194),r(53));t.default=function Index(){s.a.useShareAppMessage((function(e){return e.from,{"title":t("data.name"),"path":"/pages/chart/index"}})),s.a.useShareTimeline((function(){return{"title":t("data.name")}}));var e=Object(z.a)(),t=Object(c.a)().t,r=Object(i.useState)([]),n=Object(o.a)(r,2),a=n[0],l=n[1],u=Object(z.b)((function(e){return e.dailyTotal})).dailyTotal,f=Object(i.useState)(!0),d=Object(o.a)(f,2),h=d[0],p=d[1],v=["date","confirm","wzz","zhuangui","confirm_bihuan","wzz_bihuan","confirm_shaicha","wzz_shaicha","curr_confirm","curr_heavy","curr_cri","cured","total_cured","death","bihuan","shaicha","confirm-wzz_percent","wzz-zhuangui_percent","total_confirm","total_wzz","total_zhuangui","total_wzz_correct","total","total_death","history_total_cured"].map((function(e){return{"title":t("data."+e),"dataIndex":e,"fixed":"date"==e?"left":void 0,"width":"date"==e?40:8*t("data."+e).length+10}}));return Object(i.useEffect)((function(){var t=e(Object(L.b)());return function(){t.abort()}}),[e]),Object(i.useEffect)((function(){if(u){for(var e=[],t=0,r=Object.entries(u.daily);t<r.length;t++){var n=Object(o.a)(r[t],2),i=n[0],a=n[1],c=Object.assign({},a);c.date=i,e.push(c)}l(e.reverse()),p(!1)}}),[u]),Object(I.jsx)(E,{"scrollX":!0,"columns":v,"dataSource":a,"loading":h,"rowKey":"date","colWidth":40,"size":0,"striped":!0,"wrapperClass":""})}}}]);