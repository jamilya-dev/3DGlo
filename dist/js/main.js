/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/forms */ \"./modules/forms.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./modules/tabs.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('25 august 2024');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_forms__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/forms.js":
/*!**************************!*\
  !*** ./modules/forms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst forms = () => {\n  const form1Name = document.getElementById('form1-name');\n  const form1Email = document.getElementById('form1-email');\n  const form1Phone = document.getElementById('form1-phone');\n  const form1 = document.getElementById('form1');\n  const form2Name = document.getElementById('form2-name');\n  const form2Email = document.getElementById('form2-email');\n  const form2Message = document.getElementById('form2-message');\n  const form2Phone = document.getElementById('form2-phone');\n  const form2 = document.getElementById('form2');\n  const form3Name = document.getElementById('form3-name');\n  const form3Email = document.getElementById('form3-email');\n  const form3Phone = document.getElementById('form3-phone');\n  const form3 = document.getElementById('form3');\n\n  const calcInputs = document.querySelectorAll('.calc-block > input[type=text]');\n\n  const checkInputsText = (input, form) => {\n    form.addEventListener('submit', (e) => {\n      e.preventDefault();\n      if (!/[а-я]+\\s+-+/gi.test(input.value) && input.value !== '') {\n        console.log('Заполните корректно поле');\n      } else {\n        console.log('Данные отправлены');\n      }\n    });\n  };\n\n  const checkInputsPhone = (input, form) => {\n    form.addEventListener('submit', (e) => {\n      e.preventDefault();\n      if (/^[\\d\\(\\)\\-]+$/.test(input.value) && input.value !== '') {\n        console.log('Заполните корректно поле');\n      } else {\n        console.log('Данные отправлены');\n      }\n    });\n  };\n\n  const checkInputsEmail = (input, form) => {\n    form.addEventListener('submit', (e) => {\n      e.preventDefault();\n      if (!/[\\w\\@\\-\\_\\.\\!\\~\\*\\']+/g.test(input.value) && input.value !== '') {\n        console.log('Заполните корректно поле');\n      } else {\n        console.log('Данные отправлены');\n      }\n    });\n  };\n\n  calcInputs.forEach((input) => {\n    input.addEventListener('input', (e) => {\n      e.target.value = e.target.value.replace(/\\D+/, '');\n    });\n  });\n\n  checkInputsText(form1Name, form1);\n  checkInputsEmail(form1Email, form1);\n  checkInputsPhone(form1Phone, form1);\n  checkInputsText(form2Name, form2);\n  checkInputsText(form2Message, form2);\n  checkInputsEmail(form2Email, form2);\n  checkInputsPhone(form2Phone, form2);\n  checkInputsEmail(form3Email, form3);\n  checkInputsText(form3Name, form3);\n  checkInputsPhone(form3Phone, form3);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);\n\n\n//# sourceURL=webpack:///./modules/forms.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const menuBtn = document.querySelector(\".menu\");\r\n  const menu = document.querySelector(\"menu\");\r\n  const closeBtn = menu.querySelector(\".close-btn\");\r\n  const menuItems = menu.querySelectorAll(\"ul>li>a\");\r\n\r\n  const handleMenu = () => {\r\n    menu.classList.toggle(\"active-menu\");\r\n  };\r\n\r\n  menuBtn.addEventListener(\"click\", handleMenu);\r\n\r\n  closeBtn.addEventListener(\"click\", handleMenu);\r\n\r\n  menuItems.forEach((menuItem) =>\r\n    menuItem.addEventListener(\"click\", handleMenu)\r\n  );\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\r\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modal = document.querySelector(\".popup\");\r\n  const buttons = document.querySelectorAll(\".popup-btn\");\r\n  const popupClose = modal.querySelector(\".popup-close\");\r\n  const windiwWidth = document.documentElement.clientWidth;\r\n\r\n  let opacity = 0;\r\n  let intervalId;\r\n\r\n  const animation = () => {\r\n    opacity += 0.04;\r\n    intervalId = requestAnimationFrame(animation);\r\n    if (opacity < 1) {\r\n      modal.style.opacity = opacity;\r\n    } else {\r\n      cancelAnimationFrame(intervalId);\r\n      opacity = 0;\r\n    }\r\n  };\r\n\r\n  buttons.forEach((btn) => {\r\n    btn.addEventListener(\"click\", () => {\r\n      if (windiwWidth > 768) {\r\n        modal.style.display = \"block\";\r\n        modal.style.opacity = \"0\";\r\n        animation();\r\n      } else {\r\n        modal.style.display = \"block\";\r\n      }\r\n    });\r\n  });\r\n\r\n  popupClose.addEventListener(\"click\", () => {\r\n    if (windiwWidth > 768) {\r\n      modal.style.display = \"none\";\r\n      modal.style.opacity = \"\";\r\n    } else {\r\n      modal.style.display = \"none\";\r\n    }\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\r\n\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/tabs.js":
/*!*************************!*\
  !*** ./modules/tabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst tabs = () => {\n  console.log('tabs');\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);\n\n\n//# sourceURL=webpack:///./modules/tabs.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (dedline) => {\r\n  let timerHours = document.getElementById(\"timer-hours\");\r\n  let timerMinutes = document.getElementById(\"timer-minutes\");\r\n  let timerSeconds = document.getElementById(\"timer-seconds\");\r\n  let intervalId;\r\n\r\n  const getTimeRemaining = () => {\r\n    let dateStop = new Date(dedline).getTime();\r\n    let dateNow = new Date().getTime();\r\n    let timeRemaining = (dateStop - dateNow) / 1000;\r\n    let hours;\r\n    let minutes;\r\n    let seconds;\r\n    Math.floor(timeRemaining / 60 / 60).toString().length === 1\r\n      ? (hours = `0${Math.floor(timeRemaining / 60 / 60)}`)\r\n      : (hours = Math.floor(timeRemaining / 60 / 60));\r\n\r\n    Math.floor((timeRemaining / 60) % 60).toString().length === 1\r\n      ? (minutes = `0${Math.floor((timeRemaining / 60) % 60)}`)\r\n      : (minutes = Math.floor((timeRemaining / 60) % 60));\r\n\r\n    Math.floor(timeRemaining % 60).toString().length === 1\r\n      ? (seconds = `0${Math.floor(timeRemaining % 60)}`)\r\n      : (seconds = Math.floor(timeRemaining % 60));\r\n    return { timeRemaining, hours, minutes, seconds };\r\n  };\r\n\r\n  const updateClock = () => {\r\n    let getTime = getTimeRemaining();\r\n    timerHours.textContent = getTime.hours;\r\n    timerMinutes.textContent = getTime.minutes;\r\n    timerSeconds.textContent = getTime.seconds;\r\n\r\n    if (getTime.timeRemaining < 0) {\r\n      clearInterval(intervalId);\r\n      timerHours.textContent = \"00\";\r\n      timerMinutes.textContent = \"00\";\r\n      timerSeconds.textContent = \"00\";\r\n    }\r\n  };\r\n  intervalId = setInterval(updateClock, 1000);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;