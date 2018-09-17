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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(function () {\n    //variables\n    var $darkElems = $('.colorDark');\n    var $lightElems = $('.colorLight');\n    var $gradElems = $('.colorGrad');\n    var $tailElem = $('.dog-tail');\n    var $dog = $('.dog-frame');\n\n    var $brickGrey = $('.choice-grey');\n    var $brickBW = $('.choice-bw');\n    var $brickGolden = $('.choice-golden');\n    var $brickBrown = $('.choice-brown');\n\n    var $nameInput = $('#name-input');\n    var $goBtn = $('#info-frame-go');\n    var $nameSpans = $('.dog-name');\n    var $startBox = $('.startBox');\n    var $startDog = $('.startDog');\n    var $backBtn = $('.button-back');\n\n    var $btnFood = $('.button-food');\n    var $btnSleep = $('.button-sleep');\n    var $btnBall = $('.button-ball');\n    var $btnWalk = $('.button-walk');\n\n    //color change\n    $brickGrey.on('click', function () {\n        $darkElems.css('background', '#767572');\n        $lightElems.css('background', '#a09a98');\n        $gradElems.css('background', 'linear-gradient(0deg, #767572 10%, #a09a98 20%)');\n        $tailElem.css({ 'border-left': '5px solid #767572', 'border-bottom': '5px solid #767572' });\n    });\n\n    $brickBW.on('click', function () {\n        $darkElems.css('background', '#42413e');\n        $lightElems.css('background', '#eaecee');\n        $gradElems.css('background', 'linear-gradient(0deg, #42413e 10%, #eaecee 20%)');\n        $tailElem.css({ 'border-left': '5px solid #42413e', 'border-bottom': '5px solid #42413e' });\n    });\n\n    $brickGolden.on('click', function () {\n        $darkElems.css('background', '#91886f');\n        $lightElems.css('background', '#bfb494');\n        $gradElems.css('background', 'linear-gradient(0deg, #91886f 10%, #bfb494 20%)');\n        $tailElem.css({ 'border-left': '5px solid #65644b', 'border-bottom': '5px solid #65644b' });\n    });\n    $brickBrown.on('click', function () {\n        $darkElems.css('background', '#5e4c44');\n        $lightElems.css('background', '#6b5f55');\n        $gradElems.css('background', 'linear-gradient(0deg, #5e4c44 10%, #6b5f55 20%)');\n        $tailElem.css({ 'border-left': '5px solid #5e4c44', 'border-bottom': '5px solid #5e4c44' });\n    });\n\n    //switchers\n    $goBtn.on('click', function () {\n        $name = $nameInput.val();\n        if ($name.length > 0 && $name.length <= 12) {\n            $nameSpans.text($name);\n            $startBox.css('top', '-1000px');\n            $startDog.css('opacity', '1');\n        } else {\n            alert('Name must be between 1-12 letters!');\n        }\n    });\n    $backBtn.on('click', function () {\n        $startBox.css('top', '0');\n        $startDog.css('opacity', '0');\n    });\n    //action buttons\n    $btnSleep.on('click', function () {\n        if (!$dog.hasClass('sleeps')) {\n            $dog.removeClass('sits');\n            $dog.addClass('sleeps');\n            $btnSleep.text('Back');\n        } else {\n            $dog.removeClass('sleeps');\n            $dog.addClass('sits');\n            $btnSleep.text('Naps');\n        }\n    });\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });