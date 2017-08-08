
/* 
  jGet JavaScript library v 0.1

  Copyright Mayank Srivastav

  Date: 27-June-2017
*/

(function (windo) {
  "use strict";
  // Global shorthands
  let _arr = [],
    _keys = Object.keys,
    _values = Object.values,
    _splice = _arr.splice,
    _proto = Object.prototype,
    _filter = _arr.filter,
    _map = _arr.map,
    _document = window.document;
  
  // jGet local copy
  // TODO: pass context argument
  let jGet = function(selector) {
    return new jGet.py.init(selector);
  };
})(window);
