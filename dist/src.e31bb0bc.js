// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"app/scss/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\font\\Adventure Time Logo.ttf":[["Adventure Time Logo.f5dfbbde.ttf","app/font/Adventure Time Logo.ttf"],"app/font/Adventure Time Logo.ttf"],"_css_loader":"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/@babel/runtime/helpers/classCallCheck.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],"../node_modules/@babel/runtime/helpers/createClass.js":[function(require,module,exports) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],"../node_modules/@babel/runtime/helpers/defineProperty.js":[function(require,module,exports) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
},{}],"app/js/Game.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Game = /*#__PURE__*/function () {
  function Game() {
    (0, _classCallCheck2.default)(this, Game);
    (0, _defineProperty2.default)(this, "rootStyles", document.documentElement.style);
    (0, _defineProperty2.default)(this, "modalStart", document.getElementById('modalStart'));
    (0, _defineProperty2.default)(this, "counter", document.getElementById('counter'));
    (0, _defineProperty2.default)(this, "score", document.getElementById('score'));
    (0, _defineProperty2.default)(this, "maxScoreElement", document.getElementById('maxScore'));
    (0, _defineProperty2.default)(this, "count", 0);
    (0, _defineProperty2.default)(this, "finalCount", void 0);
  }

  (0, _createClass2.default)(Game, [{
    key: "checkStorage",
    value: function checkStorage() {
      if (!localStorage.maxScore) localStorage.maxScore = 999999999999;
    }
  }, {
    key: "blurModal",
    value: function blurModal() {
      var _this = this;

      setTimeout(function () {
        _this.rootStyles.setProperty('--visibleModalStart', 0);
      }, 2500);
      this.modalStart.addEventListener('transitionend', function () {
        return _this.rootStyles.setProperty('--displayModalStart', 'none');
      });
    }
  }, {
    key: "sumCounter",
    value: function sumCounter(id) {
      if (id === 'canvas') {
        this.count++;
        this.counter.textContent = this.count;
      }
    }
  }, {
    key: "endGame",
    value: function endGame() {
      this.finalCount = this.count;
      this.score.textContent = this.finalCount;

      if (this.finalCount < localStorage.maxScore) {
        localStorage.maxScore = this.finalCount;
        this.maxScoreElement.textContent = "".concat(localStorage.maxScore, "!!");
      } else this.maxScoreElement.textContent = localStorage.maxScore;
    }
  }, {
    key: "restartGame",
    value: function restartGame(id) {
      if (id === 'btnYes') location.reload();else if (id === 'btnNo') this.rootStyles.setProperty('--scaleModalEnd', 0);
      console.log(id);
    }
  }]);
  return Game;
}();

exports.Game = Game;
},{"@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/defineProperty":"../node_modules/@babel/runtime/helpers/defineProperty.js"}],"app/js/Jake.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Jake = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Jake = /*#__PURE__*/function () {
  function Jake() {
    (0, _classCallCheck2.default)(this, Jake);
    (0, _defineProperty2.default)(this, "rootStyles", document.documentElement.style);
    (0, _defineProperty2.default)(this, "sizeFace", face.getBoundingClientRect());
    (0, _defineProperty2.default)(this, "halfPoint", parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--halfPoint")));
    (0, _defineProperty2.default)(this, "eyes", document.getElementById('eyes'));
    (0, _defineProperty2.default)(this, "pupilLeft", document.getElementById('pupilLeft'));
    (0, _defineProperty2.default)(this, "pupilRight", document.getElementById('pupilRight'));
    (0, _defineProperty2.default)(this, "posPupilLeft", this.pupilLeft.getBoundingClientRect());
    (0, _defineProperty2.default)(this, "posPupilRight", this.pupilRight.getBoundingClientRect());
    (0, _defineProperty2.default)(this, "distXLeft", 0);
    (0, _defineProperty2.default)(this, "distYLeft", 0);
    (0, _defineProperty2.default)(this, "distXRight", 0);
    (0, _defineProperty2.default)(this, "distYRight", 0);
    (0, _defineProperty2.default)(this, "nLast", void 0);
  }

  (0, _createClass2.default)(Jake, [{
    key: "moveEyes",
    value: function moveEyes(e) {
      this.distXLeft = this.posPupilLeft.x + this.halfPoint - e.x;
      this.distYLeft = this.posPupilLeft.y + this.halfPoint - e.y;
      this.distXRight = this.posPupilRight.x + this.halfPoint - e.x;
      this.distYRight = this.posPupilRight.y + this.halfPoint - e.y;
      if (e.x > this.posPupilLeft.x + this.halfPoint) this.rootStyles.setProperty('--xL', this.distXLeft * -0.1);else this.rootStyles.setProperty('--xL', this.distXLeft * -0.1);
      if (e.y > this.posPupilLeft.y + this.halfPoint) this.rootStyles.setProperty('--yL', this.distYLeft * -0.1);else this.rootStyles.setProperty('--yL', this.distYLeft * -0.1);
      if (e.x > this.posPupilRight.x + this.halfPoint) this.rootStyles.setProperty('--xR', this.distXRight * -0.1);else this.rootStyles.setProperty('--xR', this.distXRight * -0.1);
      if (e.y > this.posPupilRight.y + this.halfPoint) this.rootStyles.setProperty('--yR', this.distYRight * -0.1);else this.rootStyles.setProperty('--yR', this.distYRight * -0.1);
    }
  }, {
    key: "jumpEyes",
    value: function jumpEyes(e, xSnail, ySnail, sizeSnail) {
      var _this = this;

      var distance = this.distanceTwoPoints(xSnail + sizeSnail / 2, ySnail + sizeSnail / 2, e.x, e.y);
      console.log(distance, xSnail, ySnail);
      var widthScreen = window.innerWidth;
      var d1 = 73,
          d2 = 195,
          d3 = 320;

      if (widthScreen >= 768 && widthScreen < 1024) {
        d1 = 105;
        d2 = 340;
        d3 = 700;
      } else if (widthScreen >= 1024 && widthScreen < 1280) {
        d1 = 110;
        d2 = 420;
        d3 = 850;
      } else if (widthScreen > 1280) {
        d1 = 115;
        d2 = 490;
        d3 = 1000;
      }

      console.log(d1, d2, d3);
      console.log(distance + ' <> ' + d1);
      if (distance < d1) this.rootStyles.setProperty('--scale', 1.7);else if (distance < d2) this.rootStyles.setProperty('--scale', 1.25);else if (distance < d3) this.rootStyles.setProperty('--scale', 1.07);else if (distance > d3) this.rootStyles.setProperty('--scale', 1.015);
      this.eyes.addEventListener('transitionend', function () {
        return _this.rootStyles.setProperty('--scale', 1);
      });
      this.eyes.addEventListener('transitioncancel', function () {
        return _this.rootStyles.setProperty('--scale', 1);
      });
    }
  }, {
    key: "distanceTwoPoints",
    value: function distanceTwoPoints(x1, y1, x2, y2) {
      // return Math.floor((Math.floor(Math.sqrt(Math.pow((x2-x1), 2)) + Math.pow((y2-y1), 2))))
      return Math.sqrt(Math.abs((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1)));
    }
  }, {
    key: "turn",
    value: function turn(id) {
      var nTurns = this.numberTurns();
      console.log(this.sizeFace);
      if (id === 'nose') this.rootStyles.setProperty('--turnsNose', "".concat(nTurns, "turn"));else this.rootStyles.setProperty('--turnsFace', "".concat(nTurns, "turn"));
    }
  }, {
    key: "numberTurns",
    value: function numberTurns() {
      var n,
          min = -2,
          max = 2;
      n = Math.round(Math.random() * (max - min) + min); // console.log(this.rootStylesGet.getPropertyValue('--vueltasBigote'))

      if (n === this.nLast) n++;
      this.nLast = n;
      return n;
    }
  }]);
  return Jake;
}();

exports.Jake = Jake;
},{"@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/defineProperty":"../node_modules/@babel/runtime/helpers/defineProperty.js"}],"app/js/Snail.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Snail = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _Jake2 = require("./Jake");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Jake = new _Jake2.Jake();

var Snail = /*#__PURE__*/function () {
  function Snail() {
    (0, _classCallCheck2.default)(this, Snail);
    (0, _defineProperty2.default)(this, "sizeSnail", parseInt(window.getComputedStyle(document.documentElement).getPropertyValue("--sizeSnail")));
    (0, _defineProperty2.default)(this, "rootStyles", document.documentElement.style);
    (0, _defineProperty2.default)(this, "snail", void 0);
    (0, _defineProperty2.default)(this, "xSnail", void 0);
    (0, _defineProperty2.default)(this, "ySnail", void 0);
  }

  (0, _createClass2.default)(Snail, [{
    key: "createSnail",
    value: function createSnail(e) {
      var snail = document.createElement('img'); // Insert classes and attributes

      snail.classList.add('snail');
      snail.id = 'snail';
      snail.setAttribute('src', 'snail.13182426.png');
      e.target.body.appendChild(snail); // Locate snail

      this.locateSnail();
    }
  }, {
    key: "locateSnail",
    value: function locateSnail() {
      var min = 0,
          maxX = window.innerWidth,
          maxY = window.innerHeight;

      do {
        this.xSnail = Math.round(Math.random() * (maxX - min) + min);
        this.ySnail = Math.round(Math.random() * (maxY - min) + min);
        console.log("x: ".concat(this.xSnail));
        console.log("y: ".concat(this.ySnail));
      } while (!(this.xSnail < _Jake.sizeFace.x - this.sizeSnail || this.xSnail > _Jake.sizeFace.right) && !(this.ySnail < _Jake.sizeFace.y - this.sizeSnail || this.ySnail > _Jake.sizeFace.bottom));

      if (this.xSnail + this.sizeSnail > maxX) this.xSnail -= this.sizeSnail;
      if (this.ySnail + this.sizeSnail > maxY) this.ySnail -= this.sizeSnail;
      console.log("x = ".concat(this.xSnail));
      console.log("y = ".concat(this.ySnail));
      this.rootStyles.setProperty('--snailX', this.xSnail);
      this.rootStyles.setProperty('--snailY', this.ySnail);
    }
  }, {
    key: "findSnail",
    value: function findSnail(snail) {
      var _this = this;

      console.log('=>');
      console.log(this.rootStyles);
      this.rootStyles.setProperty('--visible', 1);
      this.rootStyles.setProperty('--scaleSnail', 1.2);
      snail.addEventListener('transitionend', function () {
        return _this.rootStyles.setProperty('--scaleSnail', 1);
      });
      setTimeout(function () {
        // this.rootStyles.setProperty('--displayModalFin', 'flex')
        _this.rootStyles.setProperty('--scaleModalEnd', 1);
      }, 1000);
    }
  }]);
  return Snail;
}();

exports.Snail = Snail;
},{"@babel/runtime/helpers/classCallCheck":"../node_modules/@babel/runtime/helpers/classCallCheck.js","@babel/runtime/helpers/createClass":"../node_modules/@babel/runtime/helpers/createClass.js","@babel/runtime/helpers/defineProperty":"../node_modules/@babel/runtime/helpers/defineProperty.js","./Jake":"app/js/Jake.js"}],"app/js/app.js":[function(require,module,exports) {
"use strict";

var _Game2 = require("./Game");

var _Snail2 = require("./Snail");

var _Jake2 = require("./Jake");

// imports
// Objects instance 
var _Game = new _Game2.Game();

var _Snail = new _Snail2.Snail();

var _Jake = new _Jake2.Jake(); // Variables ========================


var face = document.getElementById('face'),
    modalEnd = document.getElementById('modalEnd');
var snail; // Listeners ========================

addEventListener('DOMContentLoaded', blurModal);
addEventListener('DOMContentLoaded', createSnail);
addEventListener('DOMContentLoaded', checkStorage);
addEventListener('mousemove', moveEyes);
addEventListener('click', jumpEyes);
addEventListener('click', sumCounter);
face.addEventListener('click', turn);
modalEnd.addEventListener('click', restartGame); // Functions ========================

function checkStorage() {
  _Game.checkStorage();
}

function blurModal() {
  _Game.blurModal();
}

function restartGame(e) {
  _Game.restartGame(e.target.id);
}

function sumCounter(e) {
  console.log(e.target.id);

  _Game.sumCounter(e.target.id);
} // -------------


function createSnail(e) {
  _Snail.createSnail(e);

  snail = document.getElementById('snail');
  snail.addEventListener('click', findSnail);
}

function findSnail() {
  _Snail.findSnail(snail);

  _Game.endGame();
} // -------------


function moveEyes(e) {
  _Jake.moveEyes(e);
}

function jumpEyes(e) {
  _Jake.jumpEyes(e, _Snail.xSnail, _Snail.ySnail, _Snail.sizeSnail);
}

function turn(e) {
  _Jake.turn(e.target.offsetParent.id);
}
},{"./Game":"app/js/Game.js","./Snail":"app/js/Snail.js","./Jake":"app/js/Jake.js"}],"index.js":[function(require,module,exports) {
"use strict";

require("./app/scss/main.scss");

require("./app/js/app");
},{"./app/scss/main.scss":"app/scss/main.scss","./app/js/app":"app/js/app.js"}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65445" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map