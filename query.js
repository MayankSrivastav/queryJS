
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
  
  jGet.isUndefined = function(obj) {
    return typeof obj === "undefined";
    //another way
    // obj === void 0;
  };
  
  // map utility function,
  // for now it is used only
  // on an Array type.
  // It's extending the jGet Object
  jGet.map = function(elems, callback) {
    let len,
      retArray = [],
      value;
     
    // const type = Object.prototype.toString.call(elems);
    if (!jGet.isArray(elems)) {
      throw new TypeError("type is not an array");
    }
    
    len = elems.length;
    for (let i = 0; i < len; ++i) {
      value = callback(elems[i], i);

      if (value !== null) {
        retArray.push(value);
      }
    }

    return retArray;
  };
  
  // iterate throught the object and call
  // callback for every element in coll.
  jGet.each = function(obj, callback) {
    let i;
    // if obj is fallacy, return silently
    if (!obj || typeof callback !== "function") {
      return;
    }
    if (jGet.isArrayLike(obj)) {
      let len = obj.length;
      for (i = 0; i < len; ++i) {
        callback(i, obj[i]);
      }
    } else {
      // TODO: check for hasOwnProperty,
      // if needed
      for (i in obj) {
        callback(i, obj[i]);
      }
    }
  };
  
  jGet.makeCamelCase = function(string) {
    let finalString = "";
    if (!string) {
      return string;
    }    
    let dashes = string.split("-");

    // Already in camelCase
    if (dashes.length === 0) {
      return string;
    } else {
      finalString = dashes[0];
      for (let i = 1; i < dashes.length; ++i) {
        dashes[i] =
          // dashes[i][0].toUpperCase() + dashes[i].split("").splice(1).join("");
          dashes[i][0].toUpperCase() + dashes[i].slice(1);
        finalString += dashes[i];
      }
      return finalString;
    }
  };
  
  // compare two objects, could be arrays,
  // strings, objects etc.
  jGet.equal = function(obj1, obj2) {
    // TODO: implement
  };
  
  // return items which matched from the
  // array. The original array is not
  // modified
  jGet.grep = function(items, callback) {
    return _filter.call(items, callback);
  };
  
  // Search for an item in the array & return
  // it's position (if found) in the array
  jGet.inArray = function(elem, array, ind) {
    return _arr.indexOf.call(array, elem, ind);
  };
  
  // Check and return if the value is a number
  jGet.isNumeric = function(value) {
    let type = typeof value,
      val = Number(value);
    if (type !== "string" && type !== "number") {
      return false;
    }
    
    if (val && !isNaN(val) && isFinite(val)) {
      return true;
    }

    return false;
  };

  // Check if the object is a function
  jGet.isFunction = function(obj) {
    return typeof obj === "function";
  };
  
  // Check if the object is a window object
  jGet.isWindow = function(obj) {
    return obj.window === window;
  };
  
  // Check if the object is a plain object
  jGet.isPlainObject = function(obj) {
    return typeof obj === 'object' &&
      !jGet.isWindow(obj) &&
      Object.getPrototypeOf(obj) === _proto;
  };
  
  / Trim the string from front & back
  // Return the object as is, if it's
  // not a string
  jGet.trim = function(string) {
    if (_proto.toString.call(string) !== "[object String]") {
      return string;
    }
    
    return string.trim();
  };
  
  // Constructor initializer for jGet root object
  let init = jGet.py.init = function(selector) {
    if (!selector) {
      return this;
    }
  };
})(window);
