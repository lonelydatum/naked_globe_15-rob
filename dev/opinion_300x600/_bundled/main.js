(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

exports.size = size;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommon = require('../../_common/js/common');

function start() {
    var tl = new TimelineMax();
    tl.set(".frame1", { opacity: 1 });
    tl.from('#t1', .3, { opacity: 0 });
    tl.to('#t1', .3, { y: 68 }, '+=2');

    tl.add('f1b');
    tl.from('#line', .5, { width: 0 }, 'f1b');
    tl.from('#t2', .3, { opacity: 0 }, 'f1b');

    tl.add('f2', '+=2');
    tl.to('#t1', .5, { x: _commonJsCommon.size.w }, 'f2');
    tl.to('#t2', .6, { x: _commonJsCommon.size.w }, 'f2');

    tl.add('f2b', '-=.2');
    tl.from('#logo', .5, { x: -_commonJsCommon.size.w }, 'f2b');
    tl.from('#t3', .6, { x: -_commonJsCommon.size.w }, 'f2b');

    tl.add('f3', '+=4');
    tl.set('#line', { transformOrigin: "100% 0%" }, 'f3');
    tl.to('#line', .6, { scale: 0 }, 'f3');
    tl.to('#t3', .6, { x: _commonJsCommon.size.w }, 'f3');

    tl.add('f3b', '-=.2');
    tl.from('#t4', .6, { x: -_commonJsCommon.size.w }, 'f3b');
    tl.from('#cta', .5, { opacity: 0 }, '+=.3');
    tl.from('#medium', .5, { opacity: 0 }, '+=.3');

    // tl.gotoAndPlay("f3")
}

start();

module.exports = {};

},{"../../_common/js/common":1}]},{},[2])


//# sourceMappingURL=main.js.map
