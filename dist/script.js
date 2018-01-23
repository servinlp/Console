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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PrintConsole = __webpack_require__(1);

var _PrintConsole2 = _interopRequireDefault(_PrintConsole);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainConsole = new _PrintConsole2.default(document.querySelector('main'));

mainConsole.log(undefined);

mainConsole.log(null);

mainConsole.log(true);

mainConsole.log(false);

mainConsole.log('Hi');

mainConsole.log(5);

mainConsole.log(['Tom', 'Patrick', 5, '5']);

mainConsole.log([0, 1, 5, 2, ['hi', 'and', 'bye']]);

mainConsole.log({
	"value": 'property',
	secondValue: 5,
	thirdValue: [0, 5, 2, ['hi', 'and', 'bye']],
	fourthValue: function fourthValue() {
		return 'hi';
	}
});

mainConsole.log({
	value: {
		hi: 'bye',
		foo: 'bar'
	}
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _setElement = __webpack_require__(2);

var _setElement2 = _interopRequireDefault(_setElement);

var _renderObject = __webpack_require__(4);

var _renderArray = __webpack_require__(5);

var _getParentNth = __webpack_require__(6);

var _getParentNth2 = _interopRequireDefault(_getParentNth);

var _getParentElement = __webpack_require__(7);

var _getParentElement2 = _interopRequireDefault(_getParentElement);

var _getParentArrayOrObject = __webpack_require__(8);

var _getParentArrayOrObject2 = _interopRequireDefault(_getParentArrayOrObject);

var _getChildArrayOrObject = __webpack_require__(9);

var _getChildArrayOrObject2 = _interopRequireDefault(_getChildArrayOrObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function PrintConsole(target) {
    var _this = this;

    this.target = target;
    this.contents = [];

    this.target.classList.add('console');

    this.log = function (value) {

        console.log(value);

        var element = _this.setElement(value, 'p');

        element.setAttribute('data-nth', _this.contents.length);
        _this.contents.push(value);

        _this.target.appendChild(element);
    };
}

PrintConsole.prototype.setElement = _setElement2.default;

PrintConsole.prototype.renderObject = _renderObject.renderObject;
PrintConsole.prototype.onfoldObject = _renderObject.onfoldObject;
PrintConsole.prototype.setObjectLi = _renderObject.setObjectLi;
PrintConsole.prototype.setProtoLi = _renderObject.setProtoLi;

PrintConsole.prototype.renderArray = _renderArray.renderArray;
PrintConsole.prototype.onfoldArray = _renderArray.onfoldArray;
PrintConsole.prototype.setArrayLi = _renderArray.setArrayLi;

PrintConsole.prototype.getParentNth = _getParentNth2.default;
PrintConsole.prototype.getParentElement = _getParentElement2.default;

PrintConsole.prototype.getParentArrayOrObject = _getParentArrayOrObject2.default;
PrintConsole.prototype.getChildArrayOrObject = _getChildArrayOrObject2.default;

exports.default = PrintConsole;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
        value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _isElement = __webpack_require__(3);

function setElement(value, element) {
        var topElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;


        var el = document.createElement(element);

        switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {

                case 'string':

                        el.classList.add('string');
                        el.innerHTML = '"' + value + '"';

                        break;

                case 'function':

                        el.classList.add('function');
                        el.innerHTML = value.toString().substring(0, value.toString().indexOf('{') + 1) + '...}';

                        break;

                case 'number':

                        el.classList.add('number');
                        el.innerHTML = value;

                        break;

                case 'boolean':

                        el.classList.add('boolean');

                        if (value === 'true') {

                                el.classList.add('true');
                        } else {

                                el.classList.add('false');
                        }

                        el.innerHTML = value;

                        break;

                case 'object':

                        if (Array.isArray(value)) {

                                el.appendChild(this.renderArray(value, topElement));
                                el.classList.add('array');
                        } else if (!value) {

                                el.classList.add('null');
                                el.innerHTML = 'null';
                        } else if ((0, _isElement.isNode)(value) && (0, _isElement.isElement)(value)) {

                                el.classList.add('node');

                                if (topElement) {

                                        el.classList.add('arrow');
                                        el.innerHTML = value.toString();
                                } else {

                                        el.appendChild(this.renderObject(value, topElement));
                                }
                        } else {

                                el.appendChild(this.renderObject(value, topElement));
                                el.classList.add('object');
                        }

                        break;

                case 'undefined':

                        el.classList.add('undefined');
                        el.innerHTML = value;

                        break;

                default:

        }

        return el;
}

exports.default = setElement;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isNode(o) {

    return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? o instanceof Node : o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && typeof o.nodeType === 'number' && typeof o.nodeName === 'string';
}

// Returns true if it is a DOM element
function isElement(o) {

    return (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? o instanceof HTMLElement : o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string';
}

exports.isNode = isNode;
exports.isElement = isElement;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function renderObject(value) {
    var _this = this;

    var topElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


    var objectElement = document.createElement('span');
    objectElement.classList.add('object');

    var charCount = 0;

    objectElement.innerHTML = '{';
    charCount += 1;

    if (topElement) {

        for (var curr in value) {

            charCount += curr.length;

            // if ( value[curr] instanceof TypeError ) {
            //
            //     console.log( 'its a typeerror' )
            //
            // } else {
            //
            //     console.log( 'not a TypeError' )
            //
            // }
            try {

                if (_typeof(value[curr]) === 'object' && Array.isArray(value[curr])) {

                    charCount += ('Array(' + value[curr].length + ')').length;
                } else if (_typeof(value[curr]) === 'object') {

                    charCount += 4;
                } else {

                    charCount += value[curr].toString().length;
                }

                if (charCount >= 50) {

                    objectElement.innerHTML += '...';
                    break;
                }

                objectElement.innerHTML += curr + ': ';
                objectElement.appendChild(this.setElement(value[curr], 'span', false));
                objectElement.innerHTML += ', ';
            } catch (e) {

                if (e instanceof TypeError) {

                    console.log('its a TypeError');
                    console.log(e);
                }
            }
        }

        objectElement.addEventListener('click', function () {

            _this.onfoldObject(objectElement);
        });
    } else {

        objectElement.innerHTML += '...';
    }

    objectElement.innerHTML += '}';

    return objectElement;
}

function onfoldObject(el) {

    var parent = el.parentNode;

    parent.classList.toggle('open');

    if (!parent.querySelector('ul')) {

        var unfolded = document.createElement('ul'),
            currNth = this.getParentNth(parent);

        var currEl = void 0;

        if (parent.nodeName === 'SPAN') {

            var proto = parent.parentNode.firstChild.innerHTML.includes('__proto__');

            if (proto) {

                currEl = Object.getPrototypeOf(this.getParentArrayOrObject(this.contents[currNth], parent, [], true));
            } else {

                currEl = this.getChildArrayOrObject(this.contents[currNth], parent, []);
            }
        } else {

            currEl = this.contents[currNth];
        }

        unfolded.classList.add('objectUl');

        if (Object.getPrototypeOf(currEl)) {
            // if it has prototypes

            for (var currObj in currEl) {

                unfolded.appendChild(this.setObjectLi(currObj, currEl));
            }

            unfolded.appendChild(this.setProtoLi(Object.getPrototypeOf(currEl), '__proto__', true));
        } else {

            for (var protoName in Object) {

                unfolded.appendChild(this.setObjectLi(protoName, currEl, true));
            }
        }

        parent.appendChild(unfolded);
    }
}

function setProtoLi(value, valueName) {
    var opacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


    var li = document.createElement('li'),
        textNum = document.createElement('span');

    if (opacity) {

        textNum.classList.add('opacity');
    }

    var title = document.createElement('span');

    title.innerHTML = valueName + ': ';
    title.classList.add('objectValue');

    li.appendChild(title);

    li.appendChild(this.setElement(value, 'span'));

    return li;
}

function setObjectLi(curr, el) {
    var opacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


    var li = document.createElement('li'),
        textNum = document.createElement('span');

    if (opacity) {

        textNum.classList.add('opacity');
    }

    var title = document.createElement('span');

    title.innerHTML = curr + ': ';
    title.classList.add('objectValue');

    li.appendChild(title);

    li.appendChild(this.setElement(el[curr], 'span'));

    return li;
}

exports.renderObject = renderObject;
exports.onfoldObject = onfoldObject;
exports.setObjectLi = setObjectLi;
exports.setProtoLi = setProtoLi;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function renderArray(value, topElement) {
    var _this = this;

    var arrayElement = document.createElement('span');
    arrayElement.classList.add('array');

    if (topElement) {

        arrayElement.textContent += '(' + value.length + ')[';

        var charLength = value.length.toString().length + 3;

        // value.forEach( ( el, i ) => {
        for (var i = 0; i < value.length; i++) {

            var el = value[i];

            if ((typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object' && Array.isArray(el)) {

                charLength += ('Array(' + el.length + ')').length;
            } else if ((typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object') {

                charLength += 4;
            } else if (typeof el === 'undefined') {

                charLength += 9;
            } else {

                charLength += el.toString().length;
            }

            if (charLength >= 50) {

                arrayElement.innerHTML += '...';
                break;
            }

            arrayElement.appendChild(this.setElement(el, 'span', false));

            if (i + 1 !== value.length) {

                arrayElement.innerHTML += ', ';
            }
        }

        arrayElement.innerHTML += ']';

        arrayElement.addEventListener('click', function () {

            _this.onfoldArray(arrayElement);
        });
    } else {

        arrayElement.textContent += 'Array(' + value.length + ')';
    }

    return arrayElement;
}

function onfoldArray(el) {
    var _this2 = this;

    var parent = el.parentNode;

    parent.classList.toggle('open');

    if (!parent.querySelector('ul')) {

        var unfolded = document.createElement('ul'),
            currNth = this.getParentNth(parent);

        var currEl = void 0;

        if (parent.nodeName === 'SPAN') {

            var proto = parent.parentNode.firstChild.innerHTML.includes('__proto__');

            if (proto) {

                currEl = Object.getPrototypeOf(this.getParentArrayOrObject(this.contents[currNth], parent, [], true));
            } else {

                currEl = this.getChildArrayOrObject(this.contents[currNth], parent, []);
            }
        } else {

            currEl = this.contents[currNth];
        }

        unfolded.classList.add('arrayUl');

        if (Array.isArray(currEl) && (_typeof(currEl[0]) !== undefined || typeof currEl[0] !== null)) {

            currEl.forEach(function (currArr, i) {

                unfolded.appendChild(_this2.setArrayLi(currArr, i));
            });

            unfolded.appendChild(this.setArrayLi(currEl.length, 'length', true));

            unfolded.appendChild(this.setArrayLi(Object.getPrototypeOf(currEl), '__proto__', true));
        } else {

            var protoObject = Object.getPrototypeOf(currEl),
                protoNames = Object.getOwnPropertyNames(protoObject);

            protoNames.forEach(function (item) {

                unfolded.appendChild(_this2.setObjectLi(item, Object, true));
            });
        }

        parent.appendChild(unfolded);
    }
}

function setArrayLi(el, i) {
    var opacity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;


    var li = document.createElement('li'),
        textNum = document.createElement('span');

    if (opacity) {

        textNum.classList.add('opacity');
    }

    textNum.classList.add('arrayNumber');
    textNum.innerHTML = i;

    li.appendChild(textNum);
    li.innerHTML += ': ';
    li.appendChild(this.setElement(el, 'span'));

    return li;
}

exports.renderArray = renderArray;
exports.onfoldArray = onfoldArray;
exports.setArrayLi = setArrayLi;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function getParentNth(el) {

    if (el.hasAttribute('data-nth')) {

        return el.getAttribute('data-nth');
    } else {

        return this.getParentNth(el.parentNode);
    }
}

exports.default = getParentNth;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function getParentElement(el) {

    if (el.classList.contains('open')) {

        return el;
    } else {

        return this.getParentElement(el.parentNode);
    }
}

exports.default = getParentElement;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function getParentArrayOrObject(parentArray, parentElement, path) {
    var first = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;


    var returnArray = void 0;

    if (parentElement.nodeName === 'SPAN') {

        var currArrNth = parentElement.parentNode.firstChild.innerHTML;

        if (isNaN(parseInt(currArrNth))) {

            if (currArrNth.substring(currArrNth.length - 2, currArrNth.length) === ': ') {

                currArrNth = currArrNth.substring(0, currArrNth.length - 2);
            }
        } else {

            currArrNth = parseInt(currArrNth);
        }

        if (!first) {

            path.unshift(currArrNth);
        }

        returnArray = this.getChildArrayOrObject(parentArray, this.getParentElement(parentElement.parentNode), path, false);
    } else {

        var tmpArrayHolder = parentArray;

        path.forEach(function (el) {

            tmpArrayHolder = tmpArrayHolder[el];
        });

        returnArray = tmpArrayHolder;
    }

    return returnArray;
}

exports.default = getParentArrayOrObject;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function getChildArrayOrObject(parentArray, parentElement, path) {

    var returnArray = void 0;

    if (parentElement.nodeName === 'SPAN') {

        var currArrNth = parentElement.parentNode.firstChild.innerHTML;

        if (isNaN(parseInt(currArrNth))) {

            if (currArrNth.substring(currArrNth.length - 2, currArrNth.length) === ': ') {

                currArrNth = currArrNth.substring(0, currArrNth.length - 2);
            }
        } else {

            currArrNth = parseInt(currArrNth);
        }

        path.unshift(currArrNth);

        returnArray = this.getChildArrayOrObject(parentArray, this.getParentElement(parentElement.parentNode), path);
    } else {

        var tmpArrayHolder = parentArray;

        path.forEach(function (el) {

            tmpArrayHolder = tmpArrayHolder[el];
        });

        returnArray = tmpArrayHolder;
    }

    return returnArray;
}

exports.default = getChildArrayOrObject;

/***/ })
/******/ ]);
//# sourceMappingURL=script.js.map