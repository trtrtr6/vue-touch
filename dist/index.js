(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction vueTouch(el, binding, type, vnode) {\n  this.obj = el;\n  this.binding = binding;\n  this.touchType = type;\n  this.vueTouches = { x: 0, y: 0 };\n  this.vueMoves = true;\n  this.vueLeave = true;\n  this.longTouch = true;\n  this.vueCallBack = binding.value;\n  this.obj.addEventListener(\"touchstart\", e => {\n    this.start(e);\n  }, false);\n  this.obj.addEventListener(\"touchend\", e => {\n    this.end(e);\n  }, false);\n  this.obj.addEventListener(\"touchmove\", e => {\n    this.move(e);\n  }, false);\n  // vnode.key = this.randomString()\n}\nvueTouch.prototype = {\n  start: function (e) {\n    this.vueMoves = true;\n    this.vueLeave = true;\n    this.longTouch = true;\n    this.vueTouches = {\n      x: e.changedTouches[0].pageX,\n      y: e.changedTouches[0].pageY\n    };\n    this.time = setTimeout(function () {\n      if (this.vueLeave && this.vueMoves) {\n        this.touchType == \"longtap\" && this.vueCallBack();\n        this.longTouch = false;\n      }\n    }.bind(this), 1000);\n  },\n  end: function (e) {\n    var disX = e.changedTouches[0].pageX - this.vueTouches.x;\n    var disY = e.changedTouches[0].pageY - this.vueTouches.y;\n    clearTimeout(this.time);\n    if (Math.abs(disX) > 10 || Math.abs(disY) > 100) {\n      this.touchType == \"swipe\" && this.vueCallBack(e);\n      if (Math.abs(disX) > Math.abs(disY)) {\n        if (disX > 10) {\n          this.touchType == \"swiperight\" && this.vueCallBack(e);\n        }\n        if (disX < -10) {\n          this.touchType == \"swipeleft\" && this.vueCallBack(e);\n        }\n      } else {\n        if (disY > 10) {\n          this.touchType == \"swipedown\" && this.vueCallBack(e);\n        }\n        if (disY < -10) {\n          this.touchType == \"swipeup\" && this.vueCallBack(e);\n        }\n      }\n    } else {\n      if (this.longTouch && this.vueMoves) {\n        this.touchType == \"tap\" && this.vueCallBack(e);\n        this.vueLeave = false;\n      }\n    }\n  },\n  move: function (e) {\n    this.vueMoves = false;\n  },\n  randomString: function () {\n    var len = 10;\n    var $chars = \"ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678\";\n    var maxPos = $chars.length;\n    var pwd = \"\";\n    for (var i = 0; i < len; i++) {\n      pwd += $chars.charAt(Math.floor(Math.random() * maxPos));\n    }\n    return pwd;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  install: function (Vue, options) {\n    Vue.directive(\"tap\", {\n      bind: function (el, binding, vnode) {\n        new vueTouch(el, binding, \"tap\", vnode);\n      }\n    });\n    Vue.directive(\"swipe\", {\n      bind: function (el, binding, vnode) {\n        new vueTouch(el, binding, \"swipe\", vnode);\n      }\n    });\n    Vue.directive(\"swipeleft\", {\n      bind: function (el, binding, vnode) {\n        new vueTouch(el, binding, \"swipeleft\", vnode);\n      }\n    });\n    Vue.directive(\"swiperight\", {\n      bind: function (el, binding, vnode) {\n        new vueTouch(el, binding, \"swiperight\", vnode);\n      }\n    });\n    Vue.directive(\"swipedown\", {\n      bind: function (el, binding, vnode) {\n        new vueTouch(el, binding, \"swipedown\", vnode);\n      }\n    });\n    Vue.directive(\"swipeup\", {\n      bind: function (el, binding, vnode) {\n        new vueTouch(el, binding, \"swipeup\", vnode);\n      }\n    });\n    Vue.directive(\"longtap\", {\n      bind: function (el, binding, vnode) {\n        new vueTouch(el, binding, \"longtap\", vnode);\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
});