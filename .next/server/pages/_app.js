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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "5mtF":
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "INZR":
/***/ (function(module, exports) {

module.exports = require("react-particles-js");

/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__("5mtF");

// EXTERNAL MODULE: ./src/hooks/language.js + 1 modules
var language = __webpack_require__("arHL");

// EXTERNAL MODULE: ./src/components/LanguageSelector/styles.module.css
var styles_module = __webpack_require__("KbHO");
var styles_module_default = /*#__PURE__*/__webpack_require__.n(styles_module);

// CONCATENATED MODULE: ./src/components/LanguageSelector/index.js
var __jsx = external_react_default.a.createElement;





const LanguageSelector = () => {
  const {
    switchLang,
    lang
  } = Object(external_react_["useContext"])(language["b" /* default */]);

  const handleChangeLanguage = () => {
    if (lang === "en-US") {
      switchLang("es-ES");
    } else {
      switchLang("en-US");
    }
  };

  return __jsx("div", {
    className: styles_module_default.a.column,
    onClick: () => handleChangeLanguage()
  }, __jsx(fa_["FaLanguage"], {
    size: "40px",
    color: "#219100",
    type: "button"
  }), __jsx("p", {
    className: styles_module_default.a.text
  }, lang.slice(3)));
};

/* harmony default export */ var components_LanguageSelector = (LanguageSelector);
// CONCATENATED MODULE: ./src/components/Header/index.jsx
var Header_jsx = external_react_default.a.createElement;
//? React




class Header_Header extends external_react_["Component"] {
  render() {
    return Header_jsx("div", {
      className: "flex"
    }, Header_jsx(components_LanguageSelector, null));
  }

}

/* harmony default export */ var components_Header = (Header_Header);
// EXTERNAL MODULE: external "react-particles-js"
var external_react_particles_js_ = __webpack_require__("INZR");
var external_react_particles_js_default = /*#__PURE__*/__webpack_require__.n(external_react_particles_js_);

// CONCATENATED MODULE: ./src/hooks/useWidth.js


const useWindowSize = () => {
  const {
    0: windowSize,
    1: setWindowSize
  } = Object(external_react_["useState"])({
    width: undefined,
    height: undefined
  });
  Object(external_react_["useEffect"])(() => {
    if (false) {}
  }, []);
  return windowSize;
};

/* harmony default export */ var useWidth = (useWindowSize);
// EXTERNAL MODULE: ./src/components/Layout/style.module.css
var style_module = __webpack_require__("WSXl");
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);

// CONCATENATED MODULE: ./src/components/Layout/index.js
var Layout_jsx = external_react_default.a.createElement;






const Layout = props => {
  const sizes = useWidth();
  console.log(sizes);

  const handleWidth = () => {
    let body = sizes.width;

    if (body <= 430) {
      return 22;
    }

    return 50;
  };

  return sizes.width ? Layout_jsx("div", null, Layout_jsx("div", {
    className: style_module_default.a.background
  }, Layout_jsx(external_react_particles_js_default.a, {
    params: {
      particles: {
        number: {
          value: handleWidth()
        },
        size: {
          value: 2
        }
      },
      interactivity: {
        events: {
          onclick: {
            enable: false
          }
        }
      }
    }
  })), Layout_jsx(components_Header, null), props.children) : Layout_jsx("div", null);
};

/* harmony default export */ var components_Layout = (Layout);
// EXTERNAL MODULE: ./src/pages/global.css
var global = __webpack_require__("f2vg");

// CONCATENATED MODULE: ./src/pages/_app.js

var _app_jsx = external_react_default.a.createElement;




const MyApp = ({
  Component,
  pageProps
}) => _app_jsx(language["a" /* LangProvider */], null, _app_jsx(components_Layout, null, _app_jsx(Component, pageProps)));

/* harmony default export */ var _app = __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "KbHO":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"text": "styles_text__38ovd",
	"column": "styles_column__lCPXL"
};


/***/ }),

/***/ "WSXl":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"background": "style_background__zrYJs"
};


/***/ }),

/***/ "arHL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ LangProvider; });

// CONCATENATED MODULE: ./src/contexts/languages.context.js
const Languages = {
  'es-ES': {
    job: 'Desarrollador Web con Reactjs y Django.',
    title: 'Hola Mundo!',
    biography: 'Soy Leonardo Nava, estudiaré física, me gustaría ser un científico de datos. Me gusta aprender cosas nuevas todos los días, así es como aprendí a programar, aprendiendo solo, después de unos meses descubrí platzi donde realmente fue un cambio en mi aprendizaje. Soy alguien a quien le gusta leer mucho, leo fantasía épica, matemáticas, física, hago mi mejor esfuerzo para mejorar día a día.',
    buttons: ['Certificados', 'Proyectos']
  },
  'en-US': {
    job: 'Web app developer with ReactJs and Django.',
    title: 'Hello World',
    biography: 'I am Leonardo Nava, I will study physics and would like to be a data scientist. I love to learn new things every day. This is how I learned to program, by myself, after a few months I discovered Platzi, it was a game changer. I am someone who likes to read a lot, my favorite subjects are epic fantasy, math, physics, I do my best to improve day by day.',
    buttons: ['Certificates', 'Projects']
  }
};
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/hooks/language.js
var __jsx = external_react_default.a.createElement;


const LangContext = /*#__PURE__*/external_react_default.a.createContext({
  lang: "",
  currentLangData: {},
  switchLang: () => {}
});
/* harmony default export */ var language = __webpack_exports__["b"] = (LangContext);
const LangProvider = props => {
  const {
    0: lang,
    1: setLang
  } = Object(external_react_["useState"])("en-US");
  Object(external_react_["useEffect"])(() => {
    const selectedLang = window.localStorage.getItem("appUILang");

    if (selectedLang) {
      setLang(selectedLang);
    }
  }, [lang]);

  const switchLang = ln => {
    setLang(ln);
    window.localStorage.setItem("appUILang", ln);
  };

  return __jsx(LangContext.Provider, {
    value: {
      lang,
      switchLang,
      currentLangData: Languages[lang]
    }
  }, props.children);
};

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "f2vg":
/***/ (function(module, exports) {



/***/ })

/******/ });