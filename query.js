
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
     // for every object in args
    for (; i < len; ++i) {
      dest = arguments[i];
      // if dest is undefined or null
      // or not an object, then move
      // ahead
      if (dest && jGet.isObject(dest)) {
        // TODO: Use for...in for cross
        // browser compatibility
        const _keys = Object.keys(dest);
        // handle empty object case
        if (_keys.length < 1) {
          continue;
        }

        // for every key, assign it to the target
        // object
        for (let i = 0; i < _keys.length; ++i) {
          source[_keys[i]] = dest[_keys[i]];
        }
      }
    }

    return source;
  };
  
  // check if the arg is an
  // object. It could be a
  // function object also
  jGet.isObject = function(obj) {
    return (typeof obj === "object" || typeof obj === "function") && !!obj;
  };
  
  // check if object is an
  // array
  jGet.isArray = function(obj) {
    // object is null or undefined
    if (!obj) {
      return false;
    }

    return Object.prototype.toString.call(obj) === "[object Array]";
  };
  
  // check if the object is an Array
  // like structure, i.e having length
  // property

  // TODO: refactor; not the best code
  jGet.isArrayLike = function(obj) {
    if (
      obj === null ||
      obj === undefined ||
      typeof obj === "boolean" ||
      typeof obj === "number"
    ) {
      return false;
    }

    return "length" in obj;
  };
  
})(window);
