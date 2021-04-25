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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _LanguageSelector_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../LanguageSelector/index */ \"./src/components/LanguageSelector/index.js\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Header/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/l3onav/Projects/Js/l3onav-page/src/components/Header/index.jsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n//? React\n\n\n\n\nclass Header extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return __jsx(\"div\", {\n      className: \"flex\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 4\n      }\n    }, __jsx(_LanguageSelector_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 5\n      }\n    }));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanN4PzMzYzYiXSwibmFtZXMiOlsiSGVhZGVyIiwiQ29tcG9uZW50IiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU1BLE1BQU4sU0FBcUJDLCtDQUFyQixDQUErQjtBQUM5QkMsUUFBTSxHQUFHO0FBQ1IsV0FDQztBQUFLLGVBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQyxNQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERCxDQUREO0FBS0E7O0FBUDZCOztBQVVoQkYscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8/IFJlYWN0XHJcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExhbmd1YWdlU2VsZWN0b3IgZnJvbSBcIi4uL0xhbmd1YWdlU2VsZWN0b3IvaW5kZXhcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZS5tb2R1bGUuY3NzXCI7XHJcbmNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XHJcblx0XHRcdFx0PExhbmd1YWdlU2VsZWN0b3IgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header/index.jsx\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"react-icons/fa\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/language */ \"./src/hooks/language.js\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.css */ \"./src/components/LanguageSelector/styles.module.css\");\n/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/l3onav/Projects/Js/l3onav-page/src/components/LanguageSelector/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nconst LanguageSelector = () => {\n  const {\n    switchLang,\n    lang\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(_hooks_language__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n  const handleChangeLanguage = () => {\n    if (lang === \"en-US\") {\n      switchLang(\"es-ES\");\n    } else {\n      switchLang(\"en-US\");\n    }\n  };\n\n  return __jsx(\"div\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.column,\n    onClick: () => handleChangeLanguage(),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 3\n    }\n  }, __jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__[\"FaLanguage\"], {\n    size: \"40px\",\n    color: \"#219100\",\n    type: \"button\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 4\n    }\n  }), __jsx(\"p\", {\n    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.text,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 4\n    }\n  }, lang.slice(3)));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LanguageSelector);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYW5ndWFnZVNlbGVjdG9yL2luZGV4LmpzPzQxZjMiXSwibmFtZXMiOlsiTGFuZ3VhZ2VTZWxlY3RvciIsInN3aXRjaExhbmciLCJsYW5nIiwidXNlQ29udGV4dCIsIkxhbmdDb250ZXh0IiwiaGFuZGxlQ2hhbmdlTGFuZ3VhZ2UiLCJzdHlsZXMiLCJjb2x1bW4iLCJ0ZXh0Iiwic2xpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxnQkFBZ0IsR0FBRyxNQUFNO0FBQzlCLFFBQU07QUFBRUMsY0FBRjtBQUFjQztBQUFkLE1BQXVCQyx3REFBVSxDQUFDQyx1REFBRCxDQUF2Qzs7QUFFQSxRQUFNQyxvQkFBb0IsR0FBRyxNQUFNO0FBQ2xDLFFBQUlILElBQUksS0FBSyxPQUFiLEVBQXNCO0FBQ3JCRCxnQkFBVSxDQUFDLE9BQUQsQ0FBVjtBQUNBLEtBRkQsTUFFTztBQUNOQSxnQkFBVSxDQUFDLE9BQUQsQ0FBVjtBQUNBO0FBQ0QsR0FORDs7QUFRQSxTQUNDO0FBQUssYUFBUyxFQUFFSyx5REFBTSxDQUFDQyxNQUF2QjtBQUErQixXQUFPLEVBQUUsTUFBTUYsb0JBQW9CLEVBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLHlEQUFEO0FBQVksUUFBSSxFQUFDLE1BQWpCO0FBQXdCLFNBQUssRUFBQyxTQUE5QjtBQUF3QyxRQUFJLEVBQUMsUUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURELEVBRUM7QUFBRyxhQUFTLEVBQUVDLHlEQUFNLENBQUNFLElBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEJOLElBQUksQ0FBQ08sS0FBTCxDQUFXLENBQVgsQ0FBNUIsQ0FGRCxDQUREO0FBTUEsQ0FqQkQ7O0FBbUJlVCwrRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0xhbmd1YWdlU2VsZWN0b3IvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmFMYW5ndWFnZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IExhbmdDb250ZXh0IGZyb20gXCIuLi8uLi9ob29rcy9sYW5ndWFnZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBMYW5ndWFnZVNlbGVjdG9yID0gKCkgPT4ge1xuXHRjb25zdCB7IHN3aXRjaExhbmcsIGxhbmcgfSA9IHVzZUNvbnRleHQoTGFuZ0NvbnRleHQpO1xuXG5cdGNvbnN0IGhhbmRsZUNoYW5nZUxhbmd1YWdlID0gKCkgPT4ge1xuXHRcdGlmIChsYW5nID09PSBcImVuLVVTXCIpIHtcblx0XHRcdHN3aXRjaExhbmcoXCJlcy1FU1wiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3dpdGNoTGFuZyhcImVuLVVTXCIpO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29sdW1ufSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGFuZ2VMYW5ndWFnZSgpfT5cblx0XHRcdDxGYUxhbmd1YWdlIHNpemU9XCI0MHB4XCIgY29sb3I9XCIjMjE5MTAwXCIgdHlwZT1cImJ1dHRvblwiIC8+XG5cdFx0XHQ8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT57bGFuZy5zbGljZSgzKX08L3A+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZVNlbGVjdG9yO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/LanguageSelector/index.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header/index.jsx */ \"./src/components/Header/index.jsx\");\n/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-particles-js */ \"react-particles-js\");\n/* harmony import */ var react_particles_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_particles_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useWidth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks/useWidth */ \"./src/hooks/useWidth.js\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Layout/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/home/l3onav/Projects/Js/l3onav-page/src/components/Layout/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nconst Layout = props => {\n  const sizes = Object(_hooks_useWidth__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  console.log(sizes);\n\n  const handleWidth = () => {\n    let body = sizes.width;\n\n    if (body <= 430) {\n      return 22;\n    }\n\n    return 50;\n  };\n\n  return sizes.width ? __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.background,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(react_particles_js__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    params: {\n      particles: {\n        number: {\n          value: handleWidth()\n        },\n        size: {\n          value: 2\n        }\n      },\n      interactivity: {\n        events: {\n          onclick: {\n            enable: false\n          }\n        }\n      }\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  })), __jsx(_Header_index_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 7\n    }\n  }), props.children) : __jsx(\"div\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanM/NjZkYiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJwcm9wcyIsInNpemVzIiwidXNlV2luZG93U2l6ZSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVXaWR0aCIsImJvZHkiLCJ3aWR0aCIsInN0eWxlcyIsImJhY2tncm91bmQiLCJwYXJ0aWNsZXMiLCJudW1iZXIiLCJ2YWx1ZSIsInNpemUiLCJpbnRlcmFjdGl2aXR5IiwiZXZlbnRzIiwib25jbGljayIsImVuYWJsZSIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFJQyxLQUFELElBQVc7QUFDeEIsUUFBTUMsS0FBSyxHQUFHQywrREFBYSxFQUEzQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWjs7QUFDQSxRQUFNSSxXQUFXLEdBQUcsTUFBTTtBQUN4QixRQUFJQyxJQUFJLEdBQUdMLEtBQUssQ0FBQ00sS0FBakI7O0FBQ0EsUUFBSUQsSUFBSSxJQUFJLEdBQVosRUFBaUI7QUFDZixhQUFPLEVBQVA7QUFDRDs7QUFDRCxXQUFPLEVBQVA7QUFDRCxHQU5EOztBQVFBLFNBQU9MLEtBQUssQ0FBQ00sS0FBTixHQUNMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUMsd0RBQU0sQ0FBQ0MsVUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFDRSxVQUFNLEVBQUU7QUFDTkMsZUFBUyxFQUFFO0FBQ1RDLGNBQU0sRUFBRTtBQUNOQyxlQUFLLEVBQUVQLFdBQVc7QUFEWixTQURDO0FBSVRRLFlBQUksRUFBRTtBQUNKRCxlQUFLLEVBQUU7QUFESDtBQUpHLE9BREw7QUFTTkUsbUJBQWEsRUFBRTtBQUNiQyxjQUFNLEVBQUU7QUFDTkMsaUJBQU8sRUFBRTtBQUNQQyxrQkFBTSxFQUFFO0FBREQ7QUFESDtBQURLO0FBVFQsS0FEVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQXNCRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QkYsRUF1QkdqQixLQUFLLENBQUNrQixRQXZCVCxDQURLLEdBMkJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQkY7QUE2QkQsQ0F4Q0Q7O0FBMENlbkIscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXlvdXQvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9IZWFkZXIvaW5kZXguanN4XCI7XG5pbXBvcnQgUGFydGljbGVzIGZyb20gXCJyZWFjdC1wYXJ0aWNsZXMtanNcIjtcbmltcG9ydCB1c2VXaW5kb3dTaXplIGZyb20gXCIuLi8uLi9ob29rcy91c2VXaWR0aFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZS5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBzaXplcyA9IHVzZVdpbmRvd1NpemUoKTtcbiAgY29uc29sZS5sb2coc2l6ZXMpO1xuICBjb25zdCBoYW5kbGVXaWR0aCA9ICgpID0+IHtcbiAgICBsZXQgYm9keSA9IHNpemVzLndpZHRoO1xuICAgIGlmIChib2R5IDw9IDQzMCkge1xuICAgICAgcmV0dXJuIDIyO1xuICAgIH1cbiAgICByZXR1cm4gNTA7XG4gIH07XG5cbiAgcmV0dXJuIHNpemVzLndpZHRoID8gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmR9PlxuICAgICAgICA8UGFydGljbGVzXG4gICAgICAgICAgcGFyYW1zPXt7XG4gICAgICAgICAgICBwYXJ0aWNsZXM6IHtcbiAgICAgICAgICAgICAgbnVtYmVyOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IGhhbmRsZVdpZHRoKCksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogMixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnRlcmFjdGl2aXR5OiB7XG4gICAgICAgICAgICAgIGV2ZW50czoge1xuICAgICAgICAgICAgICAgIG9uY2xpY2s6IHtcbiAgICAgICAgICAgICAgICAgIGVuYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPEhlYWRlciAvPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICApIDogKFxuICAgIDxkaXY+PC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Layout/index.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LangProvider\", function() { return LangProvider; });\n/* harmony import */ var _contexts_languages_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../contexts/languages.context */ \"./src/contexts/languages.context.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/l3onav/Projects/Js/l3onav-page/src/hooks/language.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nconst LangContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({\n  lang: \"\",\n  currentLangData: {},\n  switchLang: () => {}\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (LangContext);\nconst LangProvider = props => {\n  const {\n    0: lang,\n    1: setLang\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"en-US\");\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useLayoutEffect\"])(() => {\n    const selectedLang = window.localStorage.getItem(\"appUILang\");\n\n    if (selectedLang) {\n      setLang(selectedLang);\n    }\n  }, [lang]);\n\n  const switchLang = ln => {\n    setLang(ln);\n    window.localStorage.setItem(\"appUILang\", ln);\n  };\n\n  return __jsx(LangContext.Provider, {\n    value: {\n      lang,\n      switchLang,\n      currentLangData: _contexts_languages_context__WEBPACK_IMPORTED_MODULE_0__[\"Languages\"][lang]\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, props.children);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvbGFuZ3VhZ2UuanM/NmFiMSJdLCJuYW1lcyI6WyJMYW5nQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImxhbmciLCJjdXJyZW50TGFuZ0RhdGEiLCJzd2l0Y2hMYW5nIiwiTGFuZ1Byb3ZpZGVyIiwicHJvcHMiLCJzZXRMYW5nIiwidXNlU3RhdGUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJzZWxlY3RlZExhbmciLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwibG4iLCJzZXRJdGVtIiwiTGFuZ3VhZ2VzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsTUFBTUEsV0FBVyxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQjtBQUN0Q0MsTUFBSSxFQUFFLEVBRGdDO0FBRXRDQyxpQkFBZSxFQUFFLEVBRnFCO0FBR3RDQyxZQUFVLEVBQUUsTUFBTSxDQUFFO0FBSGtCLENBQXBCLENBQXBCO0FBTWVMLDBFQUFmO0FBRU8sTUFBTU0sWUFBWSxHQUFJQyxLQUFELElBQVc7QUFDckMsUUFBTTtBQUFBLE9BQUNKLElBQUQ7QUFBQSxPQUFPSztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLE9BQUQsQ0FBaEM7QUFFQUMsK0RBQWUsQ0FBQyxNQUFNO0FBQ3BCLFVBQU1DLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixXQUE1QixDQUFyQjs7QUFDQSxRQUFJSCxZQUFKLEVBQWtCO0FBQ2hCSCxhQUFPLENBQUNHLFlBQUQsQ0FBUDtBQUNEO0FBQ0YsR0FMYyxFQUtaLENBQUNSLElBQUQsQ0FMWSxDQUFmOztBQU9BLFFBQU1FLFVBQVUsR0FBSVUsRUFBRCxJQUFRO0FBQ3pCUCxXQUFPLENBQUNPLEVBQUQsQ0FBUDtBQUNBSCxVQUFNLENBQUNDLFlBQVAsQ0FBb0JHLE9BQXBCLENBQTRCLFdBQTVCLEVBQXlDRCxFQUF6QztBQUNELEdBSEQ7O0FBS0EsU0FDRSxNQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQ0UsU0FBSyxFQUFFO0FBQ0xaLFVBREs7QUFFTEUsZ0JBRks7QUFHTEQscUJBQWUsRUFBRWEscUVBQVMsQ0FBQ2QsSUFBRDtBQUhyQixLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPR0ksS0FBSyxDQUFDVyxRQVBULENBREY7QUFXRCxDQTFCTSIsImZpbGUiOiIuL3NyYy9ob29rcy9sYW5ndWFnZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExhbmd1YWdlcyB9IGZyb20gXCIuLi9jb250ZXh0cy9sYW5ndWFnZXMuY29udGV4dFwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgTGFuZ0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgbGFuZzogXCJcIixcbiAgY3VycmVudExhbmdEYXRhOiB7fSxcbiAgc3dpdGNoTGFuZzogKCkgPT4ge30sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZ0NvbnRleHQ7XG5cbmV4cG9ydCBjb25zdCBMYW5nUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW2xhbmcsIHNldExhbmddID0gdXNlU3RhdGUoXCJlbi1VU1wiKTtcblxuICB1c2VMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkTGFuZyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFwcFVJTGFuZ1wiKTtcbiAgICBpZiAoc2VsZWN0ZWRMYW5nKSB7XG4gICAgICBzZXRMYW5nKHNlbGVjdGVkTGFuZyk7XG4gICAgfVxuICB9LCBbbGFuZ10pO1xuXG4gIGNvbnN0IHN3aXRjaExhbmcgPSAobG4pID0+IHtcbiAgICBzZXRMYW5nKGxuKTtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhcHBVSUxhbmdcIiwgbG4pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPExhbmdDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBsYW5nLFxuICAgICAgICBzd2l0Y2hMYW5nLFxuICAgICAgICBjdXJyZW50TGFuZ0RhdGE6IExhbmd1YWdlc1tsYW5nXSxcbiAgICAgIH19XG4gICAgPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvTGFuZ0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hooks/language.js\n");

/***/ }),

/***/ "./src/hooks/useWidth.js":
/*!*******************************!*\
  !*** ./src/hooks/useWidth.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst useWindowSize = () => {\n  const {\n    0: windowSize,\n    1: setWindowSize\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    width: undefined,\n    height: undefined\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (false) {}\n  }, []);\n  return windowSize;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useWindowSize);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlV2lkdGguanM/MmU3NCJdLCJuYW1lcyI6WyJ1c2VXaW5kb3dTaXplIiwid2luZG93U2l6ZSIsInNldFdpbmRvd1NpemUiLCJ1c2VTdGF0ZSIsIndpZHRoIiwidW5kZWZpbmVkIiwiaGVpZ2h0IiwidXNlRWZmZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQSxNQUFNQSxhQUFhLEdBQUcsTUFBTTtBQUMxQixRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLHNEQUFRLENBQUM7QUFDM0NDLFNBQUssRUFBRUMsU0FEb0M7QUFFM0NDLFVBQU0sRUFBRUQ7QUFGbUMsR0FBRCxDQUE1QztBQUtBRSx5REFBUyxDQUFDLE1BQU07QUFDZCxlQUFtQyxFQU9sQztBQUNGLEdBVFEsRUFTTixFQVRNLENBQVQ7QUFVQSxTQUFPTixVQUFQO0FBQ0QsQ0FqQkQ7O0FBbUJlRCw0RUFBZiIsImZpbGUiOiIuL3NyYy9ob29rcy91c2VXaWR0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgdXNlV2luZG93U2l6ZSA9ICgpID0+IHtcbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoe1xuICAgIHdpZHRoOiB1bmRlZmluZWQsXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0V2luZG93U2l6ZSh7IHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCwgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQgfSk7XG4gICAgICB9O1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcbiAgICAgIGhhbmRsZVJlc2l6ZSgpO1xuICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XG4gICAgfVxuICB9LCBbXSk7XG4gIHJldHVybiB3aW5kb3dTaXplO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdXNlV2luZG93U2l6ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useWidth.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout/index.js\");\n/* harmony import */ var _hooks_language__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/language */ \"./src/hooks/language.js\");\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global.css */ \"./src/pages/global.css\");\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/l3onav/Projects/Js/l3onav-page/src/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => {\n  return __jsx(_hooks_language__WEBPACK_IMPORTED_MODULE_2__[\"LangProvider\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(Component, _extends({}, pageProps, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcz8yMjU0Il0sIm5hbWVzIjpbIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUNBLE1BQU1BLEtBQUssR0FBRyxDQUFDO0FBQUVDLFdBQUY7QUFBYUM7QUFBYixDQUFELEtBQThCO0FBQzFDLFNBQ0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxTQUFELGVBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREYsQ0FERjtBQU9ELENBUkQ7O0FBVWVGLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgTGFuZ1Byb3ZpZGVyIH0gZnJvbSBcIi4uL2hvb2tzL2xhbmd1YWdlXCI7XG5pbXBvcnQgXCIuL2dsb2JhbC5jc3NcIjtcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMYW5nUHJvdmlkZXI+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0xhbmdQcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

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