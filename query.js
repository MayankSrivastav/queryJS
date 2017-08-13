
/* 
  jGet JavaScript library v 0.1

  Copyright Mayank Srivastav

  Date: 27-June-2017
*/

(function (window) {
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
  
  jGet.py = jGet.prototype = {
    constructor: jGet,

    map: function(elem, callback) {
      return jGet.map(elem, callback);
    }
  };
  
  // extends the source object with
  // destination object

  // TODO: Handle single arg
  jGet.extend = function() {
    let source, dest, args, len;
    let i;

    // do nothing if source is not
    // specified
    if (arguments.length === 0) {
      return;
    }

    i = len = arguments.length;

    source = arguments[0];
    // dest = arguments[1];
    
    // TODO: extend the jGet object
    if (len === 1) {
    } else {
      i = 1;
    }
})(window);
