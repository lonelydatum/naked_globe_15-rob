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
    tl.from('#line', .5, { width: 0 }, "+=1.2");
    tl.from('#t2', .3, { opacity: 0 });

    tl.to('.frame1', .5, { opacity: 0 }, '+=2');

    tl.add('f2', '-=.2');
    tl.set(".frame2", { opacity: 1 });
    tl.from('.frame2 #logo', .5, { opacity: 0 }, 'f2');
    tl.from('#t3', .5, { opacity: 0 }, 'f2');
    tl.to('.frame2', .5, { opacity: 0 }, '+=4');

    tl.add('f3', '+=4');
    tl.set(".frame3", { opacity: 1 });
    tl.from('#medium', .5, { y: _commonJsCommon.size.h });
    tl.from('.frame3 #logo', .5, { opacity: 0 }, '-=.3');
    tl.from('#t4', .3, { opacity: 0 });

    tl.from('#cta', .5, { opacity: 0 }, '+=.3');

    // tl.gotoAndPlay("f3")
}

start();

module.exports = {};

},{"../../_common/js/common":1}]},{},[2])


//# sourceMappingURL=main.js.map
