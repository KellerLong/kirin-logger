module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("!function(t,e){ true?module.exports=e():undefined}(this,function(){\"use strict\";var t=\"millisecond\",e=\"second\",n=\"minute\",r=\"hour\",s=\"day\",i=\"week\",a=\"month\",u=\"year\",c=/^(\\d{4})-?(\\d{1,2})-?(\\d{0,2})(.*?(\\d{1,2}):(\\d{1,2}):(\\d{1,2}))?.?(\\d{1,3})?$/,o=/\\[.*?\\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:\"en\",weekdays:\"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),months:\"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\")},d=function(t,e,n){var r=String(t);return!r||r.length>=e?t:\"\"+Array(e+1-r.length).join(n)+t},f={padStart:d,padZoneStr:function(t){var e=Math.abs(t),n=Math.floor(e/60),r=e%60;return(t<=0?\"+\":\"-\")+d(n,2,\"0\")+\":\"+d(r,2,\"0\")},monthDiff:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,\"months\"),s=e-r<0,i=t.clone().add(n+(s?-1:1),\"months\");return Number(-(n+(e-r)/(s?r-i:i-r)))},absFloor:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},prettyUnit:function(c){return{M:a,y:u,w:i,d:s,h:r,m:n,s:e,ms:t}[c]||String(c||\"\").toLowerCase().replace(/s$/,\"\")},isUndefined:function(t){return void 0===t}},$=\"en\",l={};l[$]=h;var m=function(t){return t instanceof D},y=function(t,e,n){var r;if(!t)return null;if(\"string\"==typeof t)l[t]&&(r=t),e&&(l[t]=e,r=t);else{var s=t.name;l[s]=t,r=s}return n||($=r),r},M=function(t,e){if(m(t))return t.clone();var n=e||{};return n.date=t,new D(n)},S=function(t,e){return M(t,{locale:e.$L})},p=f;p.parseLocale=y,p.isDayjs=m,p.wrapper=S;var D=function(){function h(t){this.parse(t)}var d=h.prototype;return d.parse=function(t){var e,n;this.$d=null===(e=t.date)?new Date(NaN):p.isUndefined(e)?new Date:e instanceof Date?e:\"string\"==typeof e&&/.*[^Z]$/i.test(e)&&(n=e.match(c))?new Date(n[1],n[2]-1,n[3]||1,n[5]||0,n[6]||0,n[7]||0,n[8]||0):new Date(e),this.init(t)},d.init=function(t){this.$y=this.$d.getFullYear(),this.$M=this.$d.getMonth(),this.$D=this.$d.getDate(),this.$W=this.$d.getDay(),this.$H=this.$d.getHours(),this.$m=this.$d.getMinutes(),this.$s=this.$d.getSeconds(),this.$ms=this.$d.getMilliseconds(),this.$L=this.$L||y(t.locale,null,!0)||$},d.$utils=function(){return p},d.isValid=function(){return!(\"Invalid Date\"===this.$d.toString())},d.$compare=function(t){return this.valueOf()-M(t).valueOf()},d.isSame=function(t){return 0===this.$compare(t)},d.isBefore=function(t){return this.$compare(t)<0},d.isAfter=function(t){return this.$compare(t)>0},d.year=function(){return this.$y},d.month=function(){return this.$M},d.day=function(){return this.$W},d.date=function(){return this.$D},d.hour=function(){return this.$H},d.minute=function(){return this.$m},d.second=function(){return this.$s},d.millisecond=function(){return this.$ms},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,c){var o=this,h=!!p.isUndefined(c)||c,d=function(t,e){var n=S(new Date(o.$y,e,t),o);return h?n:n.endOf(s)},f=function(t,e){return S(o.toDate()[t].apply(o.toDate(),h?[0,0,0,0].slice(e):[23,59,59,999].slice(e)),o)};switch(p.prettyUnit(t)){case u:return h?d(1,0):d(31,11);case a:return h?d(1,this.$M):d(0,this.$M+1);case i:return d(h?this.$D-this.$W:this.$D+(6-this.$W),this.$M);case s:case\"date\":return f(\"setHours\",0);case r:return f(\"setMinutes\",1);case n:return f(\"setSeconds\",2);case e:return f(\"setMilliseconds\",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(i,c){switch(p.prettyUnit(i)){case s:this.$d.setDate(this.$D+(c-this.$W));break;case\"date\":this.$d.setDate(c);break;case a:this.$d.setMonth(c);break;case u:this.$d.setFullYear(c);break;case r:this.$d.setHours(c);break;case n:this.$d.setMinutes(c);break;case e:this.$d.setSeconds(c);break;case t:this.$d.setMilliseconds(c)}return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.add=function(t,c){var o=this;t=Number(t);var h,d=p.prettyUnit(c),f=function(e,n){var r=o.set(\"date\",1).set(e,n+t);return r.set(\"date\",Math.min(o.$D,r.daysInMonth()))},$=function(e){var n=new Date(o.$d);return n.setDate(n.getDate()+e*t),S(n,o)};if(d===a)return f(a,this.$M);if(d===u)return f(u,this.$y);if(d===s)return $(1);if(d===i)return $(7);switch(d){case n:h=6e4;break;case r:h=36e5;break;case e:h=1e3;break;default:h=1}var l=this.valueOf()+t*h;return S(l,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this,n=t||\"YYYY-MM-DDTHH:mm:ssZ\",r=p.padZoneStr(this.$d.getTimezoneOffset()),s=this.$locale(),i=s.weekdays,a=s.months,u=function(t,e,n,r){return t&&t[e]||n[e].substr(0,r)};return n.replace(o,function(t){if(t.indexOf(\"[\")>-1)return t.replace(/\\[|\\]/g,\"\");switch(t){case\"YY\":return String(e.$y).slice(-2);case\"YYYY\":return String(e.$y);case\"M\":return String(e.$M+1);case\"MM\":return p.padStart(e.$M+1,2,\"0\");case\"MMM\":return u(s.monthsShort,e.$M,a,3);case\"MMMM\":return a[e.$M];case\"D\":return String(e.$D);case\"DD\":return p.padStart(e.$D,2,\"0\");case\"d\":return String(e.$W);case\"dd\":return u(s.weekdaysMin,e.$W,i,2);case\"ddd\":return u(s.weekdaysShort,e.$W,i,3);case\"dddd\":return i[e.$W];case\"H\":return String(e.$H);case\"HH\":return p.padStart(e.$H,2,\"0\");case\"h\":case\"hh\":return 0===e.$H?12:p.padStart(e.$H<13?e.$H:e.$H-12,\"hh\"===t?2:1,\"0\");case\"a\":return e.$H<12?\"am\":\"pm\";case\"A\":return e.$H<12?\"AM\":\"PM\";case\"m\":return String(e.$m);case\"mm\":return p.padStart(e.$m,2,\"0\");case\"s\":return String(e.$s);case\"ss\":return p.padStart(e.$s,2,\"0\");case\"SSS\":return p.padStart(e.$ms,3,\"0\");case\"Z\":return r;default:return r.replace(\":\",\"\")}})},d.diff=function(t,c,o){var h=p.prettyUnit(c),d=M(t),f=this-d,$=p.monthDiff(this,d);switch(h){case u:$/=12;break;case a:break;case\"quarter\":$/=3;break;case i:$=f/6048e5;break;case s:$=f/864e5;break;case r:$=f/36e5;break;case n:$=f/6e4;break;case e:$=f/1e3;break;default:$=f}return o?$:p.absFloor($)},d.daysInMonth=function(){return this.endOf(a).$D},d.$locale=function(){return l[this.$L]},d.locale=function(t,e){var n=this.clone();return n.$L=y(t,e,!0),n},d.clone=function(){return S(this.toDate(),this)},d.toDate=function(){return new Date(this.$d)},d.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},d.toJSON=function(){return this.toISOString()},d.toISOString=function(){return this.toDate().toISOString()},d.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},d.toString=function(){return this.$d.toUTCString()},h}();return M.extend=function(t,e){return t(e,D,M),M},M.locale=y,M.isDayjs=m,M.unix=function(t){return M(1e3*t)},M.en=l[$],M});\n\n\n//# sourceURL=webpack:///./node_modules/dayjs/dayjs.min.js?");

/***/ }),

/***/ "./src/LoggerBase.ts":
/*!***************************!*\
  !*** ./src/LoggerBase.ts ***!
  \***************************/
/*! exports provided: Level, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Level\", function() { return Level; });\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);\n\nvar Level;\n(function (Level) {\n    Level[Level[\"FATAL\"] = 0] = \"FATAL\";\n    Level[Level[\"ERROR\"] = 1] = \"ERROR\";\n    Level[Level[\"WARN\"] = 2] = \"WARN\";\n    Level[Level[\"INFO\"] = 3] = \"INFO\";\n    Level[Level[\"DEBUG\"] = 4] = \"DEBUG\";\n})(Level || (Level = {}));\nvar LoggerBase = /** @class */ (function () {\n    function LoggerBase(level) {\n        if (level === void 0) { level = Level.INFO; }\n        this.level = Level.INFO;\n        this.level = level;\n        this.replaceFunction('fatal');\n        this.replaceFunction('error');\n        this.replaceFunction('warn');\n        this.replaceFunction('info');\n        this.replaceFunction('log');\n        this.replaceFunction('debug');\n    }\n    LoggerBase.prototype.replaceFunction = function (name) {\n        var _this = this;\n        var outFunction = console[name] || console.log;\n        if ('debug' === name) {\n            outFunction = console.log;\n        }\n        if ('fatal' === name) {\n            outFunction = console.error;\n        }\n        console[name] = function () {\n            var msg = [];\n            for (var _i = 0; _i < arguments.length; _i++) {\n                msg[_i] = arguments[_i];\n            }\n            var content = _this[name].apply(_this, msg);\n            if (!content) {\n                return false;\n            }\n            outFunction.apply(void 0, content);\n        };\n    };\n    LoggerBase.prototype.getCurrentTime = function () {\n        return \"[\" + dayjs__WEBPACK_IMPORTED_MODULE_0___default()().format('YYYY-MM-DD HH:mm:ss.SSS A') + \"]\";\n    };\n    return LoggerBase;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoggerBase);\n\n\n//# sourceURL=webpack:///./src/LoggerBase.ts?");

/***/ }),

/***/ "./src/LoggerWeb.ts":
/*!**************************!*\
  !*** ./src/LoggerWeb.ts ***!
  \**************************/
/*! exports provided: level, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level\", function() { return level; });\n/* harmony import */ var _LoggerBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoggerBase */ \"./src/LoggerBase.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    }\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar LoggerWeb = /** @class */ (function (_super) {\n    __extends(LoggerWeb, _super);\n    function LoggerWeb(level) {\n        if (level === void 0) { level = _LoggerBase__WEBPACK_IMPORTED_MODULE_0__[\"Level\"].INFO; }\n        return _super.call(this, level) || this;\n    }\n    LoggerWeb.prototype.fatal = function () {\n        var msg = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            msg[_i] = arguments[_i];\n        }\n        return [\"%c \" + this.getCurrentTime() + \" %c \" + _LoggerBase__WEBPACK_IMPORTED_MODULE_0__[\"Level\"][_LoggerBase__WEBPACK_IMPORTED_MODULE_0__[\"Level\"].FATAL], 'color:red', 'color:red'].concat(msg);\n    };\n    LoggerWeb.prototype.error = function () {\n        var msg = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            msg[_i] = arguments[_i];\n        }\n        return [\"%c \" + this.getCurrentTime() + \" %c \" + _LoggerBase__WEBPACK_IMPORTED_MODULE_0__[\"Level\"][_LoggerBase__WEBPACK_IMPORTED_MODULE_0__[\"Level\"].ERROR], 'color:red', 'color:red'].concat(msg);\n        // return [chalk.red(this.getCurrentTime()), chalk.red.bold(` ${Level[Level.ERROR]} `), ...msg];\n    };\n    LoggerWeb.prototype.warn = function () {\n        var msg = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            msg[_i] = arguments[_i];\n        }\n        return [\"%c \" + this.getCurrentTime() + \" %c \" + _LoggerBase__WEBPACK_IMPORTED_MODULE_0__[\"Level\"][_LoggerBase__WEBPACK_IMPORTED_MODULE_0__[\"Level\"].WARN] + \" \", 'color:yellow', 'color:yellow', 'sfsdf'].concat(msg);\n        // return [chalk.yellow(this.getCurrentTime()), chalk.yellow.bold(` ${Level[Level.WARN]}  `), ...msg];\n    };\n    LoggerWeb.prototype.info = function () {\n        var msg = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            msg[_i] = arguments[_i];\n        }\n        return [\"%c \" + this.getCurrentTime() + \" %c \" + _LoggerBase__WEBPACK_IMPORTED_MODULE_0__[\"Level\"][_LoggerBase__WEBPACK_IMPORTED_MODULE_0__[\"Level\"].INFO] + \" \", 'color:gray', 'color:blue'].concat(msg);\n        // return [chalk.gray(this.getCurrentTime()), chalk.blue.bold(` ${Level[Level.INFO]}  `), ...msg];\n    };\n    LoggerWeb.prototype.log = function () {\n        var msg = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            msg[_i] = arguments[_i];\n        }\n        return this.info.apply(this, msg);\n        // return [chalk.gray(this.getCurrentTime()), chalk.blue.bold(` ${Level[Level.INFO]}  `), ...msg];\n    };\n    LoggerWeb.prototype.debug = function () {\n        var msg = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            msg[_i] = arguments[_i];\n        }\n        return [\"%c \" + this.getCurrentTime() + \" %c \" + _LoggerBase__WEBPACK_IMPORTED_MODULE_0__[\"Level\"][_LoggerBase__WEBPACK_IMPORTED_MODULE_0__[\"Level\"].DEBUG], 'color:gray', 'color:cyan'].concat(msg);\n        // return [chalk.gray(this.getCurrentTime()), chalk.cyan.bold(` ${Level[Level.DEBUG]} `), ...msg];\n    };\n    return LoggerWeb;\n}(_LoggerBase__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\nvar level = _LoggerBase__WEBPACK_IMPORTED_MODULE_0__[\"Level\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (new LoggerWeb());\n\n\n//# sourceURL=webpack:///./src/LoggerWeb.ts?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/LoggerWeb.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/LoggerWeb.ts */\"./src/LoggerWeb.ts\");\n\n\n//# sourceURL=webpack:///multi_./src/LoggerWeb.ts?");

/***/ })

/******/ });