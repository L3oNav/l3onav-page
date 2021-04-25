module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/_app": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_language__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/language */ \"./src/hooks/language.js\");\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global.css */ \"./src/pages/global.css\");\n/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/home/l3onav/Projects/Js/l3onav-page/src/pages/_app.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nconst Layout = () => /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/Layout */ \"./src/components/Layout/index.js\")));\n\nconst MyApp = ({\n  Component,\n  pageProps\n}) => __jsx(_hooks_language__WEBPACK_IMPORTED_MODULE_1__[\"LangProvider\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 3\n  }\n}, __jsx(Layout, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }\n}, __jsx(Component, _extends({}, pageProps, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 7\n  }\n}))));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcz8yMjU0Il0sIm5hbWVzIjpbIkxheW91dCIsImxhenkiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLG1CQUFNQyxrREFBSSxDQUFDLE1BQU0sNklBQVAsQ0FBekI7O0FBRUEsTUFBTUMsS0FBSyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FDWixNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLE1BQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsU0FBRCxlQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FERixDQURGLENBREY7O0FBUWVGLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgbGF6eSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTGFuZ1Byb3ZpZGVyIH0gZnJvbSBcIi4uL2hvb2tzL2xhbmd1YWdlXCI7XG5pbXBvcnQgXCIuL2dsb2JhbC5jc3NcIjtcblxuY29uc3QgTGF5b3V0ID0gKCkgPT4gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi9jb21wb25lbnRzL0xheW91dFwiKSk7XG5cbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4gKFxuICA8TGFuZ1Byb3ZpZGVyPlxuICAgIDxMYXlvdXQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9MYXlvdXQ+XG4gIDwvTGFuZ1Byb3ZpZGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

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