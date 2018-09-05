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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vNode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vNode.js */ \"./src/vNode.js\");\n/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ \"./src/state.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\nvar CU = function CU() {\n  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n  _classCallCheck(this, CU);\n\n  this.options = options;\n  this._state = new _state__WEBPACK_IMPORTED_MODULE_1__[\"default\"](options);\n  console.log(this._state);\n};\n\nwindow.CU = CU;\nwindow.vNode = _vNode_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return State; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar State =\n/*#__PURE__*/\nfunction () {\n  _createClass(State, null, [{\n    key: \"nextId\",\n    value: function nextId() {\n      if (typeof this._lastId === 'undefined') this._lastId = 1;else this._lastId++;\n      return this._lastId;\n    }\n  }]);\n\n  function State(options) {\n    _classCallCheck(this, State);\n\n    this._id = State.nextId();\n    this._el = \"\";\n  }\n\n  return State;\n}();\n\n\n\n//# sourceURL=webpack:///./src/state.js?");

/***/ }),

/***/ "./src/vNode.js":
/*!**********************!*\
  !*** ./src/vNode.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return vNode; });\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n *  Creates a virtual dom node and the actual dom node associated\n **/\nvar vNode =\n/*#__PURE__*/\nfunction () {\n  _createClass(vNode, null, [{\n    key: \"nextId\",\n\n    /**\n     *  static methods\n     **/\n    //gets the next unique id\n    value: function nextId() {\n      if (typeof this._lastId === 'undefined') this._lastId = 1;else this._lastId++;\n      return this._lastId;\n    }\n    /**\n     *  class internal\n     **/\n\n  }]);\n\n  function vNode(elName\n  /* string | element */\n  , attrs\n  /* object */\n  )\n  /* strings */\n  {\n    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n      children[_key - 2] = arguments[_key];\n    }\n\n    _classCallCheck(this, vNode);\n\n    Object.assign(this, {\n      elName: elName,\n      attrs: attrs,\n      children: children\n    });\n    this._id = vNode.nextId();\n    this.renderNode();\n    console.log(this);\n  }\n  /**\n   *  util methods\n   **/\n  //append this raw element to another raw element\n\n\n  _createClass(vNode, [{\n    key: \"appendTo\",\n    value: function appendTo(parent) {\n      if (parent instanceof vNode) parent = parent._el;\n      parent.appendChild(this._el);\n    } //create the raw element along with any children\n\n  }, {\n    key: \"createElement\",\n    value: function createElement(vNodeData) {\n      var _this = this;\n\n      var el = null;\n      var elName = vNodeData.elName,\n          attrs = vNodeData.attrs,\n          children = vNodeData.children;\n      if (typeof vNodeData === 'string') return document.createTextNode(vNodeData);\n      if (typeof elName === 'string') el = document.createElement(elName);else el = elName;\n      if (attrs !== null && _typeof(attrs) === 'object' && !(attrs instanceof Array)) Object.keys(attrs).forEach(function (a) {\n        return el.setAttribute(a, attrs[a]);\n      });\n      children.forEach(function (child) {\n        return el.appendChild(_this.createElement(child));\n      });\n      return el;\n    } //render the virtual node as dom element\n\n  }, {\n    key: \"renderNode\",\n    value: function renderNode() {\n      this._el = this.createElement(this);\n    }\n  }]);\n\n  return vNode;\n}();\n\n\n\n//# sourceURL=webpack:///./src/vNode.js?");

/***/ })

/******/ });