module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Header/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LanguageSelector_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LanguageSelector/index */ \"./src/components/LanguageSelector/index.js\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Header/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/l3onav/Projects/Js/l3onav-page/src/components/Header/index.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n//? React\n\n\n\n\nconst Header = () => __jsx(\"div\", {\n  className: _style_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.flex,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 2\n  }\n}, __jsx(_LanguageSelector_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 3\n  }\n}));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanN4PzMzYzYiXSwibmFtZXMiOlsiSGVhZGVyIiwic3R5bGVzIiwiZmxleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxNQUFNLEdBQUcsTUFDZDtBQUFLLFdBQVMsRUFBRUMsd0RBQU0sQ0FBQ0MsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNDLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURELENBREQ7O0FBTWVGLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vPyBSZWFjdFxyXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMYW5ndWFnZVNlbGVjdG9yIGZyb20gXCIuLi9MYW5ndWFnZVNlbGVjdG9yL2luZGV4XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGUubW9kdWxlLmNzc1wiO1xyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcblx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4fT5cclxuXHRcdDxMYW5ndWFnZVNlbGVjdG9yIC8+XHJcblx0PC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/index.jsx\n");

/***/ }),

/***/ "./src/components/Header/style.module.css":
/*!************************************************!*\
  !*** ./src/components/Header/style.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"flex\": \"style_flex___lAEW\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvc3R5bGUubW9kdWxlLmNzcz8xMDliIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSGVhZGVyL3N0eWxlLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmbGV4XCI6IFwic3R5bGVfZmxleF9fX2xBRVdcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Header/style.module.css\n");

/***/ }),

/***/ "./src/components/LanguageSelector/index.js":
/*!**************************************************!*\
  !*** ./src/components/LanguageSelector/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/language */ \"./src/hooks/language.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ \"./src/components/LanguageSelector/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/l3onav/Projects/Js/l3onav-page/src/components/LanguageSelector/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst LanguageSelector = () => {\n  const {\n    switchLang,\n    lang\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_hooks_language__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n  const handleChangeLanguage = () => {\n    if (lang === \"en-US\") {\n      switchLang(\"es-ES\");\n    } else {\n      switchLang(\"en-US\");\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.column,\n    onClick: () => handleChangeLanguage(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 3\n    }\n  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaLanguage\"], {\n    size: \"50px\",\n    color: \"#219100\",\n    type: \"button\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 4\n    }\n  }), __jsx(\"p\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.text,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 4\n    }\n  }, lang.slice(3)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LanguageSelector);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYW5ndWFnZVNlbGVjdG9yL2luZGV4LmpzPzQxZjMiXSwibmFtZXMiOlsiTGFuZ3VhZ2VTZWxlY3RvciIsInN3aXRjaExhbmciLCJsYW5nIiwidXNlQ29udGV4dCIsIkxhbmdDb250ZXh0IiwiaGFuZGxlQ2hhbmdlTGFuZ3VhZ2UiLCJzdHlsZXMiLCJjb2x1bW4iLCJ0ZXh0Iiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxnQkFBZ0IsR0FBRyxNQUFNO0FBQzlCLFFBQU07QUFBRUMsY0FBRjtBQUFjQztBQUFkLE1BQXVCQyx3REFBVSxDQUFDQyx1REFBRCxDQUF2Qzs7QUFFQSxRQUFNQyxvQkFBb0IsR0FBRyxNQUFNO0FBQ2xDLFFBQUlILElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ3JCRCxnQkFBVSxDQUFDLE9BQUQsQ0FBVjtBQUNBLEtBRkQsTUFFTztBQUNOQSxnQkFBVSxDQUFDLE9BQUQsQ0FBVjtBQUNBO0FBQ0QsR0FORDs7QUFRQSxTQUNDO0FBQUssYUFBUyxFQUFFSyx5REFBTSxDQUFDQyxNQUF2QjtBQUErQixXQUFPLEVBQUUsTUFBTUYsb0JBQW9CLEVBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHlEQUFEO0FBQVksUUFBSSxFQUFDLE1BQWpCO0FBQXdCLFNBQUssRUFBQyxTQUE5QjtBQUF3QyxRQUFJLEVBQUMsUUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUM7QUFBRyxhQUFTLEVBQUVDLHlEQUFNLENBQUNFLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEJOLElBQUksQ0FBQ08sS0FBTCxDQUFXLENBQVgsQ0FBNUIsQ0FGRCxDQUREO0FBTUEsQ0FqQkQ7O0FBbUJlVCwrRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0xhbmd1YWdlU2VsZWN0b3IvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmFMYW5ndWFnZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IExhbmdDb250ZXh0IGZyb20gXCIuLi8uLi9ob29rcy9sYW5ndWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBMYW5ndWFnZVNlbGVjdG9yID0gKCkgPT4ge1xuXHRjb25zdCB7IHN3aXRjaExhbmcsIGxhbmcgfSA9IHVzZUNvbnRleHQoTGFuZ0NvbnRleHQpO1xuXG5cdGNvbnN0IGhhbmRsZUNoYW5nZUxhbmd1YWdlID0gKCkgPT4ge1xuXHRcdGlmIChsYW5nID09PSBcImVuLVVTXCIpIHtcblx0XHRcdHN3aXRjaExhbmcoXCJlcy1FU1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3dpdGNoTGFuZyhcImVuLVVTXCIpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sdW1ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VMYW5ndWFnZSgpfT5cblx0XHRcdDxGYUxhbmd1YWdlIHNpemU9XCI1MHB4XCIgY29sb3I9XCIjMjE5MTAwXCIgdHlwZT1cImJ1dHRvblwiIC8+XG5cdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT57bGFuZy5zbGljZSgzKX08L3A+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZVNlbGVjdG9yO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/LanguageSelector/index.js\n");

/***/ }),

/***/ "./src/components/LanguageSelector/styles.module.css":
/*!***********************************************************!*\
  !*** ./src/components/LanguageSelector/styles.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"text\": \"styles_text__38ovd\",\n\t\"column\": \"styles_column__lCPXL\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYW5ndWFnZVNlbGVjdG9yL3N0eWxlcy5tb2R1bGUuY3NzP2UxN2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0xhbmd1YWdlU2VsZWN0b3Ivc3R5bGVzLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0ZXh0XCI6IFwic3R5bGVzX3RleHRfXzM4b3ZkXCIsXG5cdFwiY29sdW1uXCI6IFwic3R5bGVzX2NvbHVtbl9fbENQWExcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/LanguageSelector/styles.module.css\n");

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header/index.jsx */ \"./src/components/Header/index.jsx\");\n/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-particles-js */ \"react-particles-js\");\n/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useWidth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useWidth */ \"./src/hooks/useWidth.js\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Layout/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/l3onav/Projects/Js/l3onav-page/src/components/Layout/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst Layout = props => {\n  const sizes = Object(_hooks_useWidth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n  const handleWidth = () => {\n    let body = sizes.width;\n\n    if (body <= 430) {\n      return 22;\n    }\n\n    return 50;\n  };\n\n  return sizes.width ? __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.background,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    params: {\n      particles: {\n        number: {\n          value: handleWidth()\n        },\n        size: {\n          value: 2\n        }\n      },\n      interactivity: {\n        events: {\n          onclick: {\n            enable: false\n          }\n        }\n      }\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }\n  })), __jsx(_Header_index_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }), props.children) : __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanM/NjZkYiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJwcm9wcyIsInNpemVzIiwidXNlV2luZG93U2l6ZSIsImhhbmRsZVdpZHRoIiwiYm9keSIsIndpZHRoIiwic3R5bGVzIiwiYmFja2dyb3VuZCIsInBhcnRpY2xlcyIsIm51bWJlciIsInZhbHVlIiwic2l6ZSIsImludGVyYWN0aXZpdHkiLCJldmVudHMiLCJvbmNsaWNrIiwiZW5hYmxlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUlDLEtBQUQsSUFBVztBQUN4QixRQUFNQyxLQUFLLEdBQUdDLCtEQUFhLEVBQTNCOztBQUNBLFFBQU1DLFdBQVcsR0FBRyxNQUFNO0FBQ3hCLFFBQUlDLElBQUksR0FBR0gsS0FBSyxDQUFDSSxLQUFqQjs7QUFDQSxRQUFJRCxJQUFJLElBQUksR0FBWixFQUFpQjtBQUNmLGFBQU8sRUFBUDtBQUNEOztBQUNELFdBQU8sRUFBUDtBQUNELEdBTkQ7O0FBUUEsU0FBT0gsS0FBSyxDQUFDSSxLQUFOLEdBQ0w7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFQyx3REFBTSxDQUFDQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUNFLFVBQU0sRUFBRTtBQUNOQyxlQUFTLEVBQUU7QUFDVEMsY0FBTSxFQUFFO0FBQ05DLGVBQUssRUFBRVAsV0FBVztBQURaLFNBREM7QUFJVFEsWUFBSSxFQUFFO0FBQ0pELGVBQUssRUFBRTtBQURIO0FBSkcsT0FETDtBQVNORSxtQkFBYSxFQUFFO0FBQ2JDLGNBQU0sRUFBRTtBQUNOQyxpQkFBTyxFQUFFO0FBQ1BDLGtCQUFNLEVBQUU7QUFERDtBQURIO0FBREs7QUFUVCxLQURWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBc0JFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCRixFQXVCR2YsS0FBSyxDQUFDZ0IsUUF2QlQsQ0FESyxHQTJCTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBM0JGO0FBNkJELENBdkNEOztBQXlDZWpCLHFFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vSGVhZGVyL2luZGV4LmpzeFwiO1xuaW1wb3J0IFBhcnRpY2xlcyBmcm9tIFwicmVhY3QtcGFydGljbGVzLWpzXCI7XG5pbXBvcnQgdXNlV2luZG93U2l6ZSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlV2lkdGhcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGUubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgc2l6ZXMgPSB1c2VXaW5kb3dTaXplKCk7XG4gIGNvbnN0IGhhbmRsZVdpZHRoID0gKCkgPT4ge1xuICAgIGxldCBib2R5ID0gc2l6ZXMud2lkdGg7XG4gICAgaWYgKGJvZHkgPD0gNDMwKSB7XG4gICAgICByZXR1cm4gMjI7XG4gICAgfVxuICAgIHJldHVybiA1MDtcbiAgfTtcblxuICByZXR1cm4gc2l6ZXMud2lkdGggPyAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmFja2dyb3VuZH0+XG4gICAgICAgIDxQYXJ0aWNsZXNcbiAgICAgICAgICBwYXJhbXM9e3tcbiAgICAgICAgICAgIHBhcnRpY2xlczoge1xuICAgICAgICAgICAgICBudW1iZXI6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogaGFuZGxlV2lkdGgoKSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAyLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGludGVyYWN0aXZpdHk6IHtcbiAgICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgICAgb25jbGljazoge1xuICAgICAgICAgICAgICAgICAgZW5hYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICkgOiAoXG4gICAgPGRpdj48L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout/index.js\n");

/***/ }),

/***/ "./src/components/Layout/style.module.css":
/*!************************************************!*\
  !*** ./src/components/Layout/style.module.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"background\": \"style_background__zrYJs\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvc3R5bGUubW9kdWxlLmNzcz8wNTVkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L3N0eWxlLm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJiYWNrZ3JvdW5kXCI6IFwic3R5bGVfYmFja2dyb3VuZF9fenJZSnNcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Layout/style.module.css\n");

/***/ }),

/***/ "./src/contexts/languages.context.js":
/*!*******************************************!*\
  !*** ./src/contexts/languages.context.js ***!
  \*******************************************/
/*! exports provided: Languages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Languages\", function() { return Languages; });\nconst Languages = {\n  'es-ES': {\n    job: 'Desarrollador Web con Reactjs y Django.',\n    title: 'Hola Mundo!',\n    biography: 'Soy Leonardo Nava, estudiaré física, me gustaría ser un científico de datos. Me gusta aprender cosas nuevas todos los días, así es como aprendí a programar, aprendiendo solo, después de unos meses descubrí platzi donde realmente fue un cambio en mi aprendizaje. Soy alguien a quien le gusta leer mucho, leo fantasía épica, matemáticas, física, hago mi mejor esfuerzo para mejorar día a día.',\n    buttons: ['Certificados', 'Proyectos']\n  },\n  'en-US': {\n    job: 'Web app developer with ReactJs and Django.',\n    title: 'Hello World',\n    biography: 'I am Leonardo Nava, I will study physics and would like to be a data scientist. I love to learn new things every day. This is how I learned to program, by myself, after a few months I discovered Platzi, it was a game changer. I am someone who likes to read a lot, my favorite subjects are epic fantasy, math, physics, I do my best to improve day by day.',\n    buttons: ['Certificates', 'Projects']\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvbGFuZ3VhZ2VzLmNvbnRleHQuanM/YTFiNyJdLCJuYW1lcyI6WyJMYW5ndWFnZXMiLCJqb2IiLCJ0aXRsZSIsImJpb2dyYXBoeSIsImJ1dHRvbnMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBTyxNQUFNQSxTQUFTLEdBQUc7QUFDeEIsV0FBUztBQUNSQyxPQUFHLEVBQUUseUNBREc7QUFFUkMsU0FBSyxFQUFFLGFBRkM7QUFHUkMsYUFBUyxFQUFDLHdZQUhGO0FBSVJDLFdBQU8sRUFBRSxDQUFDLGNBQUQsRUFBaUIsV0FBakI7QUFKRCxHQURlO0FBT3hCLFdBQVM7QUFDUkgsT0FBRyxFQUFFLDRDQURHO0FBRVJDLFNBQUssRUFBRSxhQUZDO0FBR1JDLGFBQVMsRUFBQyxtV0FIRjtBQUlSQyxXQUFPLEVBQUUsQ0FBQyxjQUFELEVBQWlCLFVBQWpCO0FBSkQ7QUFQZSxDQUFsQiIsImZpbGUiOiIuL3NyYy9jb250ZXh0cy9sYW5ndWFnZXMuY29udGV4dC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBMYW5ndWFnZXMgPSB7XG5cdCdlcy1FUyc6IHtcblx0XHRqb2I6ICdEZXNhcnJvbGxhZG9yIFdlYiBjb24gUmVhY3RqcyB5IERqYW5nby4nLFxuXHRcdHRpdGxlOiAnSG9sYSBNdW5kbyEnLFxuXHRcdGJpb2dyYXBoeTonU295IExlb25hcmRvIE5hdmEsIGVzdHVkaWFyw6kgZsOtc2ljYSwgbWUgZ3VzdGFyw61hIHNlciB1biBjaWVudMOtZmljbyBkZSBkYXRvcy4gTWUgZ3VzdGEgYXByZW5kZXIgY29zYXMgbnVldmFzIHRvZG9zIGxvcyBkw61hcywgYXPDrSBlcyBjb21vIGFwcmVuZMOtIGEgcHJvZ3JhbWFyLCBhcHJlbmRpZW5kbyBzb2xvLCBkZXNwdcOpcyBkZSB1bm9zIG1lc2VzIGRlc2N1YnLDrSBwbGF0emkgZG9uZGUgcmVhbG1lbnRlIGZ1ZSB1biBjYW1iaW8gZW4gbWkgYXByZW5kaXphamUuIFNveSBhbGd1aWVuIGEgcXVpZW4gbGUgZ3VzdGEgbGVlciBtdWNobywgbGVvIGZhbnRhc8OtYSDDqXBpY2EsIG1hdGVtw6F0aWNhcywgZsOtc2ljYSwgaGFnbyBtaSBtZWpvciBlc2Z1ZXJ6byBwYXJhIG1lam9yYXIgZMOtYSBhIGTDrWEuJyxcblx0XHRidXR0b25zOiBbJ0NlcnRpZmljYWRvcycsICdQcm95ZWN0b3MnXVxuXHR9LFxuXHQnZW4tVVMnOiB7XG5cdFx0am9iOiAnV2ViIGFwcCBkZXZlbG9wZXIgd2l0aCBSZWFjdEpzIGFuZCBEamFuZ28uJyxcblx0XHR0aXRsZTogJ0hlbGxvIFdvcmxkJyxcblx0XHRiaW9ncmFwaHk6J0kgYW0gTGVvbmFyZG8gTmF2YSwgSSB3aWxsIHN0dWR5IHBoeXNpY3MgYW5kIHdvdWxkIGxpa2UgdG8gYmUgYSBkYXRhIHNjaWVudGlzdC4gSSBsb3ZlIHRvIGxlYXJuIG5ldyB0aGluZ3MgZXZlcnkgZGF5LiBUaGlzIGlzIGhvdyBJIGxlYXJuZWQgdG8gcHJvZ3JhbSwgYnkgbXlzZWxmLCBhZnRlciBhIGZldyBtb250aHMgSSBkaXNjb3ZlcmVkIFBsYXR6aSwgaXQgd2FzIGEgZ2FtZSBjaGFuZ2VyLiBJIGFtIHNvbWVvbmUgd2hvIGxpa2VzIHRvIHJlYWQgYSBsb3QsIG15IGZhdm9yaXRlIHN1YmplY3RzIGFyZSBlcGljIGZhbnRhc3ksIG1hdGgsIHBoeXNpY3MsIEkgZG8gbXkgYmVzdCB0byBpbXByb3ZlIGRheSBieSBkYXkuJyxcblx0XHRidXR0b25zOiBbJ0NlcnRpZmljYXRlcycsICdQcm9qZWN0cyddXG5cdH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/languages.context.js\n");

/***/ }),

/***/ "./src/hooks/language.js":
/*!*******************************!*\
  !*** ./src/hooks/language.js ***!
  \*******************************/
/*! exports provided: default, LangProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LangProvider\", function() { return LangProvider; });\n/* harmony import */ var _contexts_languages_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contexts/languages.context */ \"./src/contexts/languages.context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/l3onav/Projects/Js/l3onav-page/src/hooks/language.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nconst LangContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({\n  lang: \"\",\n  currentLangData: {},\n  switchLang: () => {}\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (LangContext);\nconst LangProvider = props => {\n  const {\n    0: lang,\n    1: setLang\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"en-US\");\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const selectedLang = window.localStorage.getItem(\"appUILang\");\n\n    if (selectedLang) {\n      setLang(selectedLang);\n    }\n  }, [lang]);\n\n  const switchLang = ln => {\n    setLang(ln);\n    window.localStorage.setItem(\"appUILang\", ln);\n  };\n\n  return __jsx(LangContext.Provider, {\n    value: {\n      lang,\n      switchLang,\n      currentLangData: _contexts_languages_context__WEBPACK_IMPORTED_MODULE_0__[\"Languages\"][lang]\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, props.children);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvbGFuZ3VhZ2UuanM/NmFiMSJdLCJuYW1lcyI6WyJMYW5nQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImxhbmciLCJjdXJyZW50TGFuZ0RhdGEiLCJzd2l0Y2hMYW5nIiwiTGFuZ1Byb3ZpZGVyIiwicHJvcHMiLCJzZXRMYW5nIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzZWxlY3RlZExhbmciLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG4iLCJzZXRJdGVtIiwiTGFuZ3VhZ2VzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQjtBQUN0Q0MsTUFBSSxFQUFFLEVBRGdDO0FBRXRDQyxpQkFBZSxFQUFFLEVBRnFCO0FBR3RDQyxZQUFVLEVBQUUsTUFBTSxDQUFFO0FBSGtCLENBQXBCLENBQXBCO0FBTWVMLDBFQUFmO0FBRU8sTUFBTU0sWUFBWSxHQUFJQyxLQUFELElBQVc7QUFDckMsUUFBTTtBQUFBLE9BQUNKLElBQUQ7QUFBQSxPQUFPSztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLE9BQUQsQ0FBaEM7QUFFQUMseURBQVMsQ0FBQyxNQUFNO0FBQ2QsVUFBTUMsWUFBWSxHQUFHQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLFdBQTVCLENBQXJCOztBQUNBLFFBQUlILFlBQUosRUFBa0I7QUFDaEJILGFBQU8sQ0FBQ0csWUFBRCxDQUFQO0FBQ0Q7QUFDRixHQUxRLEVBS04sQ0FBQ1IsSUFBRCxDQUxNLENBQVQ7O0FBT0EsUUFBTUUsVUFBVSxHQUFJVSxFQUFELElBQVE7QUFDekJQLFdBQU8sQ0FBQ08sRUFBRCxDQUFQO0FBQ0FILFVBQU0sQ0FBQ0MsWUFBUCxDQUFvQkcsT0FBcEIsQ0FBNEIsV0FBNUIsRUFBeUNELEVBQXpDO0FBQ0QsR0FIRDs7QUFLQSxTQUNFLE1BQUMsV0FBRCxDQUFhLFFBQWI7QUFDRSxTQUFLLEVBQUU7QUFDTFosVUFESztBQUVMRSxnQkFGSztBQUdMRCxxQkFBZSxFQUFFYSxxRUFBUyxDQUFDZCxJQUFEO0FBSHJCLEtBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9HSSxLQUFLLENBQUNXLFFBUFQsQ0FERjtBQVdELENBMUJNIiwiZmlsZSI6Ii4vc3JjL2hvb2tzL2xhbmd1YWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGFuZ3VhZ2VzIH0gZnJvbSBcIi4uL2NvbnRleHRzL2xhbmd1YWdlcy5jb250ZXh0XCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBMYW5nQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe1xuICBsYW5nOiBcIlwiLFxuICBjdXJyZW50TGFuZ0RhdGE6IHt9LFxuICBzd2l0Y2hMYW5nOiAoKSA9PiB7fSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBMYW5nQ29udGV4dDtcblxuZXhwb3J0IGNvbnN0IExhbmdQcm92aWRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbbGFuZywgc2V0TGFuZ10gPSB1c2VTdGF0ZShcImVuLVVTXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2VsZWN0ZWRMYW5nID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXBwVUlMYW5nXCIpO1xuICAgIGlmIChzZWxlY3RlZExhbmcpIHtcbiAgICAgIHNldExhbmcoc2VsZWN0ZWRMYW5nKTtcbiAgICB9XG4gIH0sIFtsYW5nXSk7XG5cbiAgY29uc3Qgc3dpdGNoTGFuZyA9IChsbikgPT4ge1xuICAgIHNldExhbmcobG4pO1xuICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFwcFVJTGFuZ1wiLCBsbik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8TGFuZ0NvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGxhbmcsXG4gICAgICAgIHN3aXRjaExhbmcsXG4gICAgICAgIGN1cnJlbnRMYW5nRGF0YTogTGFuZ3VhZ2VzW2xhbmddLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9MYW5nQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/language.js\n");

/***/ }),

/***/ "./src/hooks/useWidth.js":
/*!*******************************!*\
  !*** ./src/hooks/useWidth.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst useWindowSize = () => {\n  const {\n    0: windowSize,\n    1: setWindowSize\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    width: 430\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (false) {}\n  }, []);\n  return windowSize;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useWindowSize);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlV2lkdGguanM/MmU3NCJdLCJuYW1lcyI6WyJ1c2VXaW5kb3dTaXplIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsIndpZHRoIiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsTUFBTTtBQUMxQixRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLHNEQUFRLENBQUM7QUFDM0NDLFNBQUssRUFBRTtBQURvQyxHQUFELENBQTVDO0FBSUFDLHlEQUFTLENBQUMsTUFBTTtBQUNkLGVBQW1DLEVBT2xDO0FBQ0YsR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVVBLFNBQU9KLFVBQVA7QUFDRCxDQWhCRDs7QUFrQmVELDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2hvb2tzL3VzZVdpZHRoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCB1c2VXaW5kb3dTaXplID0gKCkgPT4ge1xuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZSh7XG4gICAgd2lkdGg6IDQzMCxcbiAgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xuICAgICAgICBzZXRXaW5kb3dTaXplKHsgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH0pO1xuICAgICAgfTtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgICBoYW5kbGVSZXNpemUoKTtcbiAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xuICAgIH1cbiAgfSwgW10pO1xuICByZXR1cm4gd2luZG93U2l6ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVdpbmRvd1NpemU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useWidth.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout/index.js\");\n/* harmony import */ var _hooks_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/language */ \"./src/hooks/language.js\");\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global.css */ \"./src/pages/global.css\");\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/l3onav/Projects/Js/l3onav-page/src/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => __jsx(_hooks_language__WEBPACK_IMPORTED_MODULE_2__[\"LangProvider\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 3\n  }\n}, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }\n}, __jsx(Component, _extends({}, pageProps, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 7\n  }\n}))));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcz8yMjU0Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQ1osTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0UsTUFBQyxTQUFELGVBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQURGLENBREYsQ0FERjs7QUFRZUYsb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBMYW5nUHJvdmlkZXIgfSBmcm9tIFwiLi4vaG9va3MvbGFuZ3VhZ2VcIjtcbmltcG9ydCBcIi4vZ2xvYmFsLmNzc1wiO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IChcbiAgPExhbmdQcm92aWRlcj5cbiAgICA8TGF5b3V0PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTGF5b3V0PlxuICA8L0xhbmdQcm92aWRlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/pages/global.css":
/*!******************************!*\
  !*** ./src/pages/global.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9wYWdlcy9nbG9iYWwuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/global.css\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/fa\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9mYVwiP2Q2NmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtaWNvbnMvZmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-icons/fa\n");

/***/ }),

/***/ "react-particles-js":
/*!*************************************!*\
  !*** external "react-particles-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-particles-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1wYXJ0aWNsZXMtanNcIj8yZGJkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LXBhcnRpY2xlcy1qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBhcnRpY2xlcy1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-particles-js\n");

/***/ })

/******/ });