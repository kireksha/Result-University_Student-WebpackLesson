/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ (() => {

eval("const user = prompt('Как вас зовут?');\r\nconsole.log('Hello World!');\r\n\r\nconst hello = (name) => {\r\n    textHTML.innerText = `Dear ${name}, say \"hello\" to the World!`;\r\n}\r\n\r\n\r\nconst titleHTML = document.createElement('h1');\r\ntitleHTML.textContent = 'I love JavaScript';\r\nconst pictureJS = document.createElement('img');\r\npictureJS.src = './assets/JS_Picture.jpg';\r\ndocument.body.append(titleHTML);\r\ndocument.body.append(pictureJS);\r\nconst textHTML = document.createElement('h2');\r\ndocument.body.append(textHTML);\r\n\r\nhello(user);\r\n\n\n//# sourceURL=webpack://lesson19.3resultwebpack/./index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"]();
/******/ 	
/******/ })()
;