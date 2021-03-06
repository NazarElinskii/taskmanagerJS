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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _createModal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_createModal__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var body = document.body,
    day = document.getElementsByClassName('day'),
    infoBlock = document.getElementById('infoBlock'),
    tittleOfDay = document.createElement('span'),
    buttonAdd = document.createElement('input'),
    getBlockToDo = document.getElementById('todo'),
    before = document.getElementById('names-of-days'),
    inputTask = document.getElementById('inputTask'),
    placeOfTasks = document.getElementById('todo'),
    createdTasks = document.createElement('div'),
    op = document.createElement('span');
var options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
tittleOfDay.id = 'infoOfDay';
createdTasks.id = 'listOfTask';
tittleOfDay.innerHTML = 'No Date Selected';
placeOfTasks.appendChild(buttonAdd);
placeOfTasks.appendChild(createdTasks);
body.insertBefore(tittleOfDay, before);
buttonAdd.setAttribute('type', 'button');
buttonAdd.setAttribute('value', '+');
buttonAdd.id = 'addTask';
var listOsTasks = document.getElementById('listOfTask');
var dataInput = document.getElementById('addTask');
var currDay;
var innerTasks = [];

function refresh() {
  [].forEach.call(day, function (el, item) {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      tittleOfDay.innerHTML = '';
      inputTask.value = ''; //listOsTasks.innerHTML='';

      innerTasks.splice(0, innerTasks.length);
      createdTasks.innerHTML = '';
      var date = new Date(yearIndex, monthIndex, item + 1);
      currDay = this;
      tittleOfDay.innerHTML = date.toLocaleString("ru", options);
      getBlockToDo.style.display = 'block';

      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) == 0) {
          localStorage.setItem(tittleOfDay.innerHTML, '');
        }

        if (localStorage.key(i) == tittleOfDay.innerHTML) {
          var arr = localStorage.getItem(tittleOfDay.innerHTML).split(',');

          for (var _i = 0; _i < arr.length; _i++) {
            var pLocal = document.createElement('p');
            var spanLocal = document.createElement('span');
            spanLocal.innerHTML = '-';
            spanLocal.className = 'remove';
            pLocal.className = 'todoToDo';
            pLocal.innerHTML = arr[_i];
            listOsTasks.appendChild(pLocal);
            pLocal.appendChild(spanLocal);
            var tittleIntoDay = document.createElement('span');
            tittleIntoDay.className = 'tittleInDay'; //tittleIntoDay.innerHTML=''; 

            tittleIntoDay.innerHTML = arr[_i];
            currDay.appendChild(tittleIntoDay);
          }

          removeItem(minus);
        }
      }

      var tiDay = document.getElementsByClassName('tittleInDay');

      if (tiDay.length >= 3) {
        currDay.style.overflowY = 'scroll';
      }

      window.onbeforeunload = function () {
        localStorage.clear();
        return "Данные не сохранены. Точно перейти?";
      };
    });
  });
}

refresh();

function handleListener() {
  inputTask.addEventListener('keyup', function (event) {
    event.preventDefault();

    if (event.keyCode == 13) {
      if (inputTask != null && inputTask.value.length == 0) {
        alert('Введите данные.');
        return false;
      }

      if (inputTask.value.length > 30) {
        alert('Длина ввода превышает допустимое значение.');
        return false;
      }

      var tittleOfTask = document.createElement('p');
      tittleOfTask.className = 'bounceIn';
      var spanLocal = document.createElement('span');
      spanLocal.innerHTML = '-';
      spanLocal.className = 'remove';
      tittleOfTask.innerHTML = inputTask.value;
      tittleOfTask.appendChild(spanLocal); //МИРИК СТИЛИЗУЙ ЭТОТ tittleIntoDay как и таски в правой колонке

      var today = new Date(yearIndex, monthIndex, currDay.id);
      console.log(today.toLocaleString("ru", options));
      var dday = new Date();

      if (parseInt(tittleOfDay.innerHTML) > dday.getDate()) {
        currDay.style.backgroundColor = 'rgba(38, 187, 45, 0.74)';
        localStorage.setItem(today, 'rgba(38, 187, 45, 0.74)');
      } else if (parseInt(tittleOfDay.innerHTML) == dday.getDate()) {
        currDay.style.backgroundColor = 'orange';
      } else {
        currDay.style.backgroundColor = 'rgba(250, 99, 99, 0.856)';
      }

      innerTasks.push(inputTask.value);
      playSound();
      listOsTasks.appendChild(tittleOfTask);
      removeItem(minus);
      inputTask.value = '';
    }
  });
  dataInput.addEventListener('click', function (event) {
    event.preventDefault();
    var keyOfTask = tittleOfDay.innerHTML;
    var tittleIntoDay = document.createElement('span');
    tittleIntoDay.className = 'tittleInDay';
    tittleIntoDay.innerHTML = inputTask.value;
    localStorage[keyOfTask] = innerTasks;
    var arr = localStorage.getItem(tittleOfDay.innerHTML).split(',');
    console.log(arr);
    arr.concat(innerTasks);
    localStorage[tittleOfDay.innerHTML] = arr;
    currDay.appendChild(tittleIntoDay);
  });
}

handleListener();

function playSound() {
  document.getElementById('sound').play();
}

var minus = document.getElementsByClassName('remove');

var hasClass = function hasClass(el, test) {
  return el.classList.contains(test);
};

function removeItem(minus) {
  [].forEach.call(minus, function (el) {
    el.addEventListener('click', function (event) {
      event.target.parentNode.className = 'bounceOutRight';

      if (hasClass(event.target, "remove")) {
        //сюда добавить проверку на спан в тасках и данные инпута с локали
        if (event.target.parentNode.classList.contains('bouceIn')) {
          event.target.parentNode.classList.remove('bouceIn');
        } else {
          event.target.parentNode.classList.add('bounceOutRight');
        }

        event.target.parentNode.remove();
        console.log(event.target.parentNode);
      }
    });
  });
}

$(document).on('click', '.day', function () {
  $('.day').removeClass('colorOfDay');
  $(this).addClass('colorOfDay');
});

/***/ })
/******/ ]);