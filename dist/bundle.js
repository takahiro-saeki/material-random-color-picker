'use strict';

/**
 * Checks if `value` is `null`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
 * @example
 *
 * _.isNull(null);
 * // => true
 *
 * _.isNull(void 0);
 * // => false
 */
function isNull(value) {
  return value === null;
}

var isNull_1 = isNull;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeFloor = Math.floor;
var nativeRandom = Math.random;

/**
 * The base implementation of `_.random` without support for returning
 * floating-point numbers.
 *
 * @private
 * @param {number} lower The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the random number.
 */
function baseRandom(lower, upper) {
  return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
}

var _baseRandom = baseRandom;

/**
 * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @param {number} [size=array.length] The size of `array`.
 * @returns {Array} Returns `array`.
 */
function shuffleSelf(array, size) {
  var index = -1,
      length = array.length,
      lastIndex = length - 1;

  size = size === undefined ? length : size;
  while (++index < size) {
    var rand = _baseRandom(index, lastIndex),
        value = array[rand];

    array[rand] = array[index];
    array[index] = value;
  }
  array.length = size;
  return array;
}

var _shuffleSelf = shuffleSelf;

/**
 * A specialized version of `_.shuffle` for arrays.
 *
 * @private
 * @param {Array} array The array to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
function arrayShuffle(array) {
  return _shuffleSelf(_copyArray(array));
}

var _arrayShuffle = arrayShuffle;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return _arrayMap(props, function(key) {
    return object[key];
  });
}

var _baseValues = baseValues;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$2.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$2.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$3.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$1.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag = '[object Function]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$3.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]';
var funcTag$1 = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : _baseValues(object, keys_1(object));
}

var values_1 = values;

/**
 * The base implementation of `_.shuffle`.
 *
 * @private
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 */
function baseShuffle(collection) {
  return _shuffleSelf(values_1(collection));
}

var _baseShuffle = baseShuffle;

/**
 * Creates an array of shuffled values, using a version of the
 * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to shuffle.
 * @returns {Array} Returns the new shuffled array.
 * @example
 *
 * _.shuffle([1, 2, 3, 4]);
 * // => [4, 1, 3, 2]
 */
function shuffle(collection) {
  var func = isArray_1(collection) ? _arrayShuffle : _baseShuffle;
  return func(collection);
}

var shuffle_1 = shuffle;

/** *
  note! this file is automatically generated!
  please don't edit this file!
** */

var colors = [{
  code: '#ffebee',
  color: 'red',
  type: 'lighten',
  level: 5,
  id: 1
}, {
  code: '#ffcdd2',
  color: 'red',
  type: 'lighten',
  level: 4,
  id: 2
}, {
  code: '#ef9a9a',
  color: 'red',
  type: 'lighten',
  level: 3,
  id: 3
}, {
  code: '#e57373',
  color: 'red',
  type: 'lighten',
  level: 2,
  id: 4
}, {
  code: '#ef5350',
  color: 'red',
  type: 'lighten',
  level: 1,
  id: 5
}, {
  code: '#f44336',
  color: 'red',
  level: 0,
  type: 'normal',
  id: 6
}, {
  code: '#e53935',
  color: 'red',
  type: 'darken',
  level: 1,
  id: 7
}, {
  code: '#d32f2f',
  color: 'red',
  type: 'darken',
  level: 2,
  id: 8
}, {
  code: '#c62828',
  color: 'red',
  type: 'darken',
  level: 3,
  id: 9
}, {
  code: '#b71c1c',
  color: 'red',
  type: 'darken',
  level: 4,
  id: 10
}, {
  code: '#ff8a80',
  color: 'red',
  type: 'accent',
  level: 1,
  id: 11
}, {
  code: '#ff5252',
  color: 'red',
  type: 'accent',
  level: 2,
  id: 12
}, {
  code: '#ff1744',
  color: 'red',
  type: 'accent',
  level: 3,
  id: 13
}, {
  code: '#d50000',
  color: 'red',
  type: 'accent',
  level: 4,
  id: 14
}, {
  code: '#fce4ec',
  color: 'pink',
  type: 'lighten',
  level: 5,
  id: 15
}, {
  code: '#f8bbd0',
  color: 'pink',
  type: 'lighten',
  level: 4,
  id: 16
}, {
  code: '#f48fb1',
  color: 'pink',
  type: 'lighten',
  level: 3,
  id: 17
}, {
  code: '#f06292',
  color: 'pink',
  type: 'lighten',
  level: 2,
  id: 18
}, {
  code: '#ec407a',
  color: 'pink',
  type: 'lighten',
  level: 1,
  id: 19
}, {
  code: '#e91e63',
  color: 'pink',
  level: 0,
  type: 'normal',
  id: 20
}, {
  code: '#d81b60',
  color: 'pink',
  type: 'darken',
  level: 1,
  id: 21
}, {
  code: '#c2185b',
  color: 'pink',
  type: 'darken',
  level: 2,
  id: 22
}, {
  code: '#ad1457',
  color: 'pink',
  type: 'darken',
  level: 3,
  id: 23
}, {
  code: '#880e4f',
  color: 'pink',
  type: 'darken',
  level: 4,
  id: 24
}, {
  code: '#ff80ab',
  color: 'pink',
  type: 'accent',
  level: 1,
  id: 25
}, {
  code: '#ff4081',
  color: 'pink',
  type: 'accent',
  level: 2,
  id: 26
}, {
  code: '#f50057',
  color: 'pink',
  type: 'accent',
  level: 3,
  id: 27
}, {
  code: '#c51162',
  color: 'pink',
  type: 'accent',
  level: 4,
  id: 28
}, {
  code: '#f3e5f5',
  color: 'purple',
  type: 'lighten',
  level: 5,
  id: 29
}, {
  code: '#e1bee7',
  color: 'purple',
  type: 'lighten',
  level: 4,
  id: 30
}, {
  code: '#ce93d8',
  color: 'purple',
  type: 'lighten',
  level: 3,
  id: 31
}, {
  code: '#ba68c8',
  color: 'purple',
  type: 'lighten',
  level: 2,
  id: 32
}, {
  code: '#ab47bc',
  color: 'purple',
  type: 'lighten',
  level: 1,
  id: 33
}, {
  code: '#9c27b0',
  color: 'purple',
  level: 0,
  type: 'normal',
  id: 34
}, {
  code: '#8e24aa',
  color: 'purple',
  type: 'darken',
  level: 1,
  id: 35
}, {
  code: '#7b1fa2',
  color: 'purple',
  type: 'darken',
  level: 2,
  id: 36
}, {
  code: '#6a1b9a',
  color: 'purple',
  type: 'darken',
  level: 3,
  id: 37
}, {
  code: '#4a148c',
  color: 'purple',
  type: 'darken',
  level: 4,
  id: 38
}, {
  code: '#ea80fc',
  color: 'purple',
  type: 'accent',
  level: 1,
  id: 39
}, {
  code: '#e040fb',
  color: 'purple',
  type: 'accent',
  level: 2,
  id: 40
}, {
  code: '#d500f9',
  color: 'purple',
  type: 'accent',
  level: 3,
  id: 41
}, {
  code: '#aa00ff',
  color: 'purple',
  type: 'accent',
  level: 4,
  id: 42
}, {
  code: '#ede7f6',
  color: 'deep-purple',
  type: 'lighten',
  level: 5,
  id: 43
}, {
  code: '#d1c4e9',
  color: 'deep-purple',
  type: 'lighten',
  level: 4,
  id: 44
}, {
  code: '#b39ddb',
  color: 'deep-purple',
  type: 'lighten',
  level: 3,
  id: 45
}, {
  code: '#9575cd',
  color: 'deep-purple',
  type: 'lighten',
  level: 2,
  id: 46
}, {
  code: '#7e57c2',
  color: 'deep-purple',
  type: 'lighten',
  level: 1,
  id: 47
}, {
  code: '#673ab7',
  color: 'deep-purple',
  level: 0,
  type: 'normal',
  id: 48
}, {
  code: '#5e35b1',
  color: 'deep-purple',
  type: 'darken',
  level: 1,
  id: 49
}, {
  code: '#512da8',
  color: 'deep-purple',
  type: 'darken',
  level: 2,
  id: 50
}, {
  code: '#4527a0',
  color: 'deep-purple',
  type: 'darken',
  level: 3,
  id: 51
}, {
  code: '#311b92',
  color: 'deep-purple',
  type: 'darken',
  level: 4,
  id: 52
}, {
  code: '#b388ff',
  color: 'deep-purple',
  type: 'accent',
  level: 1,
  id: 53
}, {
  code: '#7c4dff',
  color: 'deep-purple',
  type: 'accent',
  level: 2,
  id: 54
}, {
  code: '#651fff',
  color: 'deep-purple',
  type: 'accent',
  level: 3,
  id: 55
}, {
  code: '#6200ea',
  color: 'deep-purple',
  type: 'accent',
  level: 4,
  id: 56
}, {
  code: '#e8eaf6',
  color: 'indigo',
  type: 'lighten',
  level: 5,
  id: 57
}, {
  code: '#c5cae9',
  color: 'indigo',
  type: 'lighten',
  level: 4,
  id: 58
}, {
  code: '#9fa8da',
  color: 'indigo',
  type: 'lighten',
  level: 3,
  id: 59
}, {
  code: '#7986cb',
  color: 'indigo',
  type: 'lighten',
  level: 2,
  id: 60
}, {
  code: '#5c6bc0',
  color: 'indigo',
  type: 'lighten',
  level: 1,
  id: 61
}, {
  code: '#3f51b5',
  color: 'indigo',
  level: 0,
  type: 'normal',
  id: 62
}, {
  code: '#3949ab',
  color: 'indigo',
  type: 'darken',
  level: 1,
  id: 63
}, {
  code: '#303f9f',
  color: 'indigo',
  type: 'darken',
  level: 2,
  id: 64
}, {
  code: '#283593',
  color: 'indigo',
  type: 'darken',
  level: 3,
  id: 65
}, {
  code: '#1a237e',
  color: 'indigo',
  type: 'darken',
  level: 4,
  id: 66
}, {
  code: '#8c9eff',
  color: 'indigo',
  type: 'accent',
  level: 1,
  id: 67
}, {
  code: '#536dfe',
  color: 'indigo',
  type: 'accent',
  level: 2,
  id: 68
}, {
  code: '#3d5afe',
  color: 'indigo',
  type: 'accent',
  level: 3,
  id: 69
}, {
  code: '#304ffe',
  color: 'indigo',
  type: 'accent',
  level: 4,
  id: 70
}, {
  code: '#e3f2fd',
  color: 'blue',
  type: 'lighten',
  level: 5,
  id: 71
}, {
  code: '#bbdefb',
  color: 'blue',
  type: 'lighten',
  level: 4,
  id: 72
}, {
  code: '#90caf9',
  color: 'blue',
  type: 'lighten',
  level: 3,
  id: 73
}, {
  code: '#64b5f6',
  color: 'blue',
  type: 'lighten',
  level: 2,
  id: 74
}, {
  code: '#42a5f5',
  color: 'blue',
  type: 'lighten',
  level: 1,
  id: 75
}, {
  code: '#2196f3',
  color: 'blue',
  level: 0,
  type: 'normal',
  id: 76
}, {
  code: '#1e88e5',
  color: 'blue',
  type: 'darken',
  level: 1,
  id: 77
}, {
  code: '#1976d2',
  color: 'blue',
  type: 'darken',
  level: 2,
  id: 78
}, {
  code: '#1565c0',
  color: 'blue',
  type: 'darken',
  level: 3,
  id: 79
}, {
  code: '#0d47a1',
  color: 'blue',
  type: 'darken',
  level: 4,
  id: 80
}, {
  code: '#82b1ff',
  color: 'blue',
  type: 'accent',
  level: 1,
  id: 81
}, {
  code: '#448aff',
  color: 'blue',
  type: 'accent',
  level: 2,
  id: 82
}, {
  code: '#2979ff',
  color: 'blue',
  type: 'accent',
  level: 3,
  id: 83
}, {
  code: '#2962ff',
  color: 'blue',
  type: 'accent',
  level: 4,
  id: 84
}, {
  code: '#e1f5fe',
  color: 'light-blue',
  type: 'lighten',
  level: 5,
  id: 85
}, {
  code: '#b3e5fc',
  color: 'light-blue',
  type: 'lighten',
  level: 4,
  id: 86
}, {
  code: '#81d4fa',
  color: 'light-blue',
  type: 'lighten',
  level: 3,
  id: 87
}, {
  code: '#4fc3f7',
  color: 'light-blue',
  type: 'lighten',
  level: 2,
  id: 88
}, {
  code: '#29b6f6',
  color: 'light-blue',
  type: 'lighten',
  level: 1,
  id: 89
}, {
  code: '#03a9f4',
  color: 'light-blue',
  level: 0,
  type: 'normal',
  id: 90
}, {
  code: '#039be5',
  color: 'light-blue',
  type: 'darken',
  level: 1,
  id: 91
}, {
  code: '#0288d1',
  color: 'light-blue',
  type: 'darken',
  level: 2,
  id: 92
}, {
  code: '#0277bd',
  color: 'light-blue',
  type: 'darken',
  level: 3,
  id: 93
}, {
  code: '#01579b',
  color: 'light-blue',
  type: 'darken',
  level: 4,
  id: 94
}, {
  code: '#80d8ff',
  color: 'light-blue',
  type: 'accent',
  level: 1,
  id: 95
}, {
  code: '#40c4ff',
  color: 'light-blue',
  type: 'accent',
  level: 2,
  id: 96
}, {
  code: '#00b0ff',
  color: 'light-blue',
  type: 'accent',
  level: 3,
  id: 97
}, {
  code: '#0091ea',
  color: 'light-blue',
  type: 'accent',
  level: 4,
  id: 98
}, {
  code: '#e0f7fa',
  color: 'cyan',
  type: 'lighten',
  level: 5,
  id: 99
}, {
  code: '#b2ebf2',
  color: 'cyan',
  type: 'lighten',
  level: 4,
  id: 100
}, {
  code: '#80deea',
  color: 'cyan',
  type: 'lighten',
  level: 3,
  id: 101
}, {
  code: '#4dd0e1',
  color: 'cyan',
  type: 'lighten',
  level: 2,
  id: 102
}, {
  code: '#26c6da',
  color: 'cyan',
  type: 'lighten',
  level: 1,
  id: 103
}, {
  code: '#00bcd4',
  color: 'cyan',
  level: 0,
  type: 'normal',
  id: 104
}, {
  code: '#00acc1',
  color: 'cyan',
  type: 'darken',
  level: 1,
  id: 105
}, {
  code: '#0097a7',
  color: 'cyan',
  type: 'darken',
  level: 2,
  id: 106
}, {
  code: '#00838f',
  color: 'cyan',
  type: 'darken',
  level: 3,
  id: 107
}, {
  code: '#006064',
  color: 'cyan',
  type: 'darken',
  level: 4,
  id: 108
}, {
  code: '#84ffff',
  color: 'cyan',
  type: 'accent',
  level: 1,
  id: 109
}, {
  code: '#18ffff',
  color: 'cyan',
  type: 'accent',
  level: 2,
  id: 110
}, {
  code: '#00e5ff',
  color: 'cyan',
  type: 'accent',
  level: 3,
  id: 111
}, {
  code: '#00b8d4',
  color: 'cyan',
  type: 'accent',
  level: 4,
  id: 112
}, {
  code: '#e0f2f1',
  color: 'teal',
  type: 'lighten',
  level: 5,
  id: 113
}, {
  code: '#b2dfdb',
  color: 'teal',
  type: 'lighten',
  level: 4,
  id: 114
}, {
  code: '#80cbc4',
  color: 'teal',
  type: 'lighten',
  level: 3,
  id: 115
}, {
  code: '#4db6ac',
  color: 'teal',
  type: 'lighten',
  level: 2,
  id: 116
}, {
  code: '#26a69a',
  color: 'teal',
  type: 'lighten',
  level: 1,
  id: 117
}, {
  code: '#009688',
  color: 'teal',
  level: 0,
  type: 'normal',
  id: 118
}, {
  code: '#00897b',
  color: 'teal',
  type: 'darken',
  level: 1,
  id: 119
}, {
  code: '#00796b',
  color: 'teal',
  type: 'darken',
  level: 2,
  id: 120
}, {
  code: '#00695c',
  color: 'teal',
  type: 'darken',
  level: 3,
  id: 121
}, {
  code: '#004d40',
  color: 'teal',
  type: 'darken',
  level: 4,
  id: 122
}, {
  code: '#a7ffeb',
  color: 'teal',
  type: 'accent',
  level: 1,
  id: 123
}, {
  code: '#64ffda',
  color: 'teal',
  type: 'accent',
  level: 2,
  id: 124
}, {
  code: '#1de9b6',
  color: 'teal',
  type: 'accent',
  level: 3,
  id: 125
}, {
  code: '#00bfa5',
  color: 'teal',
  type: 'accent',
  level: 4,
  id: 126
}, {
  code: '#e8f5e9',
  color: 'green',
  type: 'lighten',
  level: 5,
  id: 127
}, {
  code: '#c8e6c9',
  color: 'green',
  type: 'lighten',
  level: 4,
  id: 128
}, {
  code: '#a5d6a7',
  color: 'green',
  type: 'lighten',
  level: 3,
  id: 129
}, {
  code: '#81c784',
  color: 'green',
  type: 'lighten',
  level: 2,
  id: 130
}, {
  code: '#66bb6a',
  color: 'green',
  type: 'lighten',
  level: 1,
  id: 131
}, {
  code: '#4caf50',
  color: 'green',
  level: 0,
  type: 'normal',
  id: 132
}, {
  code: '#43a047',
  color: 'green',
  type: 'darken',
  level: 1,
  id: 133
}, {
  code: '#388e3c',
  color: 'green',
  type: 'darken',
  level: 2,
  id: 134
}, {
  code: '#2e7d32',
  color: 'green',
  type: 'darken',
  level: 3,
  id: 135
}, {
  code: '#1b5e20',
  color: 'green',
  type: 'darken',
  level: 4,
  id: 136
}, {
  code: '#b9f6ca',
  color: 'green',
  type: 'accent',
  level: 1,
  id: 137
}, {
  code: '#69f0ae',
  color: 'green',
  type: 'accent',
  level: 2,
  id: 138
}, {
  code: '#00e676',
  color: 'green',
  type: 'accent',
  level: 3,
  id: 139
}, {
  code: '#00c853',
  color: 'green',
  type: 'accent',
  level: 4,
  id: 140
}, {
  code: '#f1f8e9',
  color: 'light-green',
  type: 'lighten',
  level: 5,
  id: 141
}, {
  code: '#dcedc8',
  color: 'light-green',
  type: 'lighten',
  level: 4,
  id: 142
}, {
  code: '#c5e1a5',
  color: 'light-green',
  type: 'lighten',
  level: 3,
  id: 143
}, {
  code: '#aed581',
  color: 'light-green',
  type: 'lighten',
  level: 2,
  id: 144
}, {
  code: '#9ccc65',
  color: 'light-green',
  type: 'lighten',
  level: 1,
  id: 145
}, {
  code: '#8bc34a',
  color: 'light-green',
  level: 0,
  type: 'normal',
  id: 146
}, {
  code: '#7cb342',
  color: 'light-green',
  type: 'darken',
  level: 1,
  id: 147
}, {
  code: '#689f38',
  color: 'light-green',
  type: 'darken',
  level: 2,
  id: 148
}, {
  code: '#558b2f',
  color: 'light-green',
  type: 'darken',
  level: 3,
  id: 149
}, {
  code: '#33691e',
  color: 'light-green',
  type: 'darken',
  level: 4,
  id: 150
}, {
  code: '#ccff90',
  color: 'light-green',
  type: 'accent',
  level: 1,
  id: 151
}, {
  code: '#b2ff59',
  color: 'light-green',
  type: 'accent',
  level: 2,
  id: 152
}, {
  code: '#76ff03',
  color: 'light-green',
  type: 'accent',
  level: 3,
  id: 153
}, {
  code: '#64dd17',
  color: 'light-green',
  type: 'accent',
  level: 4,
  id: 154
}, {
  code: '#f9fbe7',
  color: 'lime',
  type: 'lighten',
  level: 5,
  id: 155
}, {
  code: '#f0f4c3',
  color: 'lime',
  type: 'lighten',
  level: 4,
  id: 156
}, {
  code: '#e6ee9c',
  color: 'lime',
  type: 'lighten',
  level: 3,
  id: 157
}, {
  code: '#dce775',
  color: 'lime',
  type: 'lighten',
  level: 2,
  id: 158
}, {
  code: '#d4e157',
  color: 'lime',
  type: 'lighten',
  level: 1,
  id: 159
}, {
  code: '#cddc39',
  color: 'lime',
  level: 0,
  type: 'normal',
  id: 160
}, {
  code: '#c0ca33',
  color: 'lime',
  type: 'darken',
  level: 1,
  id: 161
}, {
  code: '#afb42b',
  color: 'lime',
  type: 'darken',
  level: 2,
  id: 162
}, {
  code: '#9e9d24',
  color: 'lime',
  type: 'darken',
  level: 3,
  id: 163
}, {
  code: '#827717',
  color: 'lime',
  type: 'darken',
  level: 4,
  id: 164
}, {
  code: '#f4ff81',
  color: 'lime',
  type: 'accent',
  level: 1,
  id: 165
}, {
  code: '#eeff41',
  color: 'lime',
  type: 'accent',
  level: 2,
  id: 166
}, {
  code: '#c6ff00',
  color: 'lime',
  type: 'accent',
  level: 3,
  id: 167
}, {
  code: '#aeea00',
  color: 'lime',
  type: 'accent',
  level: 4,
  id: 168
}, {
  code: '#fffde7',
  color: 'yellow',
  type: 'lighten',
  level: 5,
  id: 169
}, {
  code: '#fff9c4',
  color: 'yellow',
  type: 'lighten',
  level: 4,
  id: 170
}, {
  code: '#fff59d',
  color: 'yellow',
  type: 'lighten',
  level: 3,
  id: 171
}, {
  code: '#fff176',
  color: 'yellow',
  type: 'lighten',
  level: 2,
  id: 172
}, {
  code: '#ffee58',
  color: 'yellow',
  type: 'lighten',
  level: 1,
  id: 173
}, {
  code: '#ffeb3b',
  color: 'yellow',
  level: 0,
  type: 'normal',
  id: 174
}, {
  code: '#fdd835',
  color: 'yellow',
  type: 'darken',
  level: 1,
  id: 175
}, {
  code: '#fbc02d',
  color: 'yellow',
  type: 'darken',
  level: 2,
  id: 176
}, {
  code: '#f9a825',
  color: 'yellow',
  type: 'darken',
  level: 3,
  id: 177
}, {
  code: '#f57f17',
  color: 'yellow',
  type: 'darken',
  level: 4,
  id: 178
}, {
  code: '#ffff8d',
  color: 'yellow',
  type: 'accent',
  level: 1,
  id: 179
}, {
  code: '#ffff00',
  color: 'yellow',
  type: 'accent',
  level: 2,
  id: 180
}, {
  code: '#ffea00',
  color: 'yellow',
  type: 'accent',
  level: 3,
  id: 181
}, {
  code: '#ffd600',
  color: 'yellow',
  type: 'accent',
  level: 4,
  id: 182
}, {
  code: '#fff8e1',
  color: 'amber',
  type: 'lighten',
  level: 5,
  id: 183
}, {
  code: '#ffecb3',
  color: 'amber',
  type: 'lighten',
  level: 4,
  id: 184
}, {
  code: '#ffe082',
  color: 'amber',
  type: 'lighten',
  level: 3,
  id: 185
}, {
  code: '#ffd54f',
  color: 'amber',
  type: 'lighten',
  level: 2,
  id: 186
}, {
  code: '#ffca28',
  color: 'amber',
  type: 'lighten',
  level: 1,
  id: 187
}, {
  code: '#ffc107',
  color: 'amber',
  level: 0,
  type: 'normal',
  id: 188
}, {
  code: '#ffb300',
  color: 'amber',
  type: 'darken',
  level: 1,
  id: 189
}, {
  code: '#ffa000',
  color: 'amber',
  type: 'darken',
  level: 2,
  id: 190
}, {
  code: '#ff8f00',
  color: 'amber',
  type: 'darken',
  level: 3,
  id: 191
}, {
  code: '#ff6f00',
  color: 'amber',
  type: 'darken',
  level: 4,
  id: 192
}, {
  code: '#ffe57f',
  color: 'amber',
  type: 'accent',
  level: 1,
  id: 193
}, {
  code: '#ffd740',
  color: 'amber',
  type: 'accent',
  level: 2,
  id: 194
}, {
  code: '#ffc400',
  color: 'amber',
  type: 'accent',
  level: 3,
  id: 195
}, {
  code: '#ffab00',
  color: 'amber',
  type: 'accent',
  level: 4,
  id: 196
}, {
  code: '#fff3e0',
  color: 'orange',
  type: 'lighten',
  level: 5,
  id: 197
}, {
  code: '#ffe0b2',
  color: 'orange',
  type: 'lighten',
  level: 4,
  id: 198
}, {
  code: '#ffcc80',
  color: 'orange',
  type: 'lighten',
  level: 3,
  id: 199
}, {
  code: '#ffb74d',
  color: 'orange',
  type: 'lighten',
  level: 2,
  id: 200
}, {
  code: '#ffa726',
  color: 'orange',
  type: 'lighten',
  level: 1,
  id: 201
}, {
  code: '#ff9800',
  color: 'orange',
  level: 0,
  type: 'normal',
  id: 202
}, {
  code: '#fb8c00',
  color: 'orange',
  type: 'darken',
  level: 1,
  id: 203
}, {
  code: '#f57c00',
  color: 'orange',
  type: 'darken',
  level: 2,
  id: 204
}, {
  code: '#ef6c00',
  color: 'orange',
  type: 'darken',
  level: 3,
  id: 205
}, {
  code: '#e65100',
  color: 'orange',
  type: 'darken',
  level: 4,
  id: 206
}, {
  code: '#ffd180',
  color: 'orange',
  type: 'accent',
  level: 1,
  id: 207
}, {
  code: '#ffab40',
  color: 'orange',
  type: 'accent',
  level: 2,
  id: 208
}, {
  code: '#ff9100',
  color: 'orange',
  type: 'accent',
  level: 3,
  id: 209
}, {
  code: '#ff6d00',
  color: 'orange',
  type: 'accent',
  level: 4,
  id: 210
}, {
  code: '#fbe9e7',
  color: 'deep-orange',
  type: 'lighten',
  level: 5,
  id: 211
}, {
  code: '#ffccbc',
  color: 'deep-orange',
  type: 'lighten',
  level: 4,
  id: 212
}, {
  code: '#ffab91',
  color: 'deep-orange',
  type: 'lighten',
  level: 3,
  id: 213
}, {
  code: '#ff8a65',
  color: 'deep-orange',
  type: 'lighten',
  level: 2,
  id: 214
}, {
  code: '#ff7043',
  color: 'deep-orange',
  type: 'lighten',
  level: 1,
  id: 215
}, {
  code: '#ff5722',
  color: 'deep-orange',
  level: 0,
  type: 'normal',
  id: 216
}, {
  code: '#f4511e',
  color: 'deep-orange',
  type: 'darken',
  level: 1,
  id: 217
}, {
  code: '#e64a19',
  color: 'deep-orange',
  type: 'darken',
  level: 2,
  id: 218
}, {
  code: '#d84315',
  color: 'deep-orange',
  type: 'darken',
  level: 3,
  id: 219
}, {
  code: '#bf360c',
  color: 'deep-orange',
  type: 'darken',
  level: 4,
  id: 220
}, {
  code: '#ff9e80',
  color: 'deep-orange',
  type: 'accent',
  level: 1,
  id: 221
}, {
  code: '#ff6e40',
  color: 'deep-orange',
  type: 'accent',
  level: 2,
  id: 222
}, {
  code: '#ff3d00',
  color: 'deep-orange',
  type: 'accent',
  level: 3,
  id: 223
}, {
  code: '#dd2c00',
  color: 'deep-orange',
  type: 'accent',
  level: 4,
  id: 224
}, {
  code: '#efebe9',
  color: 'brown',
  type: 'lighten',
  level: 5,
  id: 225
}, {
  code: '#d7ccc8',
  color: 'brown',
  type: 'lighten',
  level: 4,
  id: 226
}, {
  code: '#bcaaa4',
  color: 'brown',
  type: 'lighten',
  level: 3,
  id: 227
}, {
  code: '#a1887f',
  color: 'brown',
  type: 'lighten',
  level: 2,
  id: 228
}, {
  code: '#8d6e63',
  color: 'brown',
  type: 'lighten',
  level: 1,
  id: 229
}, {
  code: '#795548',
  color: 'brown',
  level: 0,
  type: 'normal',
  id: 230
}, {
  code: '#6d4c41',
  color: 'brown',
  type: 'darken',
  level: 1,
  id: 231
}, {
  code: '#5d4037',
  color: 'brown',
  type: 'darken',
  level: 2,
  id: 232
}, {
  code: '#4e342e',
  color: 'brown',
  type: 'darken',
  level: 3,
  id: 233
}, {
  code: '#3e2723',
  color: 'brown',
  type: 'darken',
  level: 4,
  id: 234
}, {
  code: '#fafafa',
  color: 'grey',
  type: 'lighten',
  level: 5,
  id: 235
}, {
  code: '#f5f5f5',
  color: 'grey',
  type: 'lighten',
  level: 4,
  id: 236
}, {
  code: '#eeeeee',
  color: 'grey',
  type: 'lighten',
  level: 3,
  id: 237
}, {
  code: '#e0e0e0',
  color: 'grey',
  type: 'lighten',
  level: 2,
  id: 238
}, {
  code: '#bdbdbd',
  color: 'grey',
  type: 'lighten',
  level: 1,
  id: 239
}, {
  code: '#9e9e9e',
  color: 'grey',
  level: 0,
  type: 'normal',
  id: 240
}, {
  code: '#757575',
  color: 'grey',
  type: 'darken',
  level: 1,
  id: 241
}, {
  code: '#616161',
  color: 'grey',
  type: 'darken',
  level: 2,
  id: 242
}, {
  code: '#424242',
  color: 'grey',
  type: 'darken',
  level: 3,
  id: 243
}, {
  code: '#212121',
  color: 'grey',
  type: 'darken',
  level: 4,
  id: 244
}, {
  code: '#eceff1',
  color: 'blue-grey',
  type: 'lighten',
  level: 5,
  id: 245
}, {
  code: '#cfd8dc',
  color: 'blue-grey',
  type: 'lighten',
  level: 4,
  id: 246
}, {
  code: '#b0bec5',
  color: 'blue-grey',
  type: 'lighten',
  level: 3,
  id: 247
}, {
  code: '#90a4ae',
  color: 'blue-grey',
  type: 'lighten',
  level: 2,
  id: 248
}, {
  code: '#78909c',
  color: 'blue-grey',
  type: 'lighten',
  level: 1,
  id: 249
}, {
  code: '#607d8b',
  color: 'blue-grey',
  level: 0,
  type: 'normal',
  id: 250
}, {
  code: '#546e7a',
  color: 'blue-grey',
  type: 'darken',
  level: 1,
  id: 251
}, {
  code: '#455a64',
  color: 'blue-grey',
  type: 'darken',
  level: 2,
  id: 252
}, {
  code: '#37474f',
  color: 'blue-grey',
  type: 'darken',
  level: 3,
  id: 253
}, {
  code: '#263238',
  color: 'blue-grey',
  type: 'darken',
  level: 4,
  id: 254
}, {
  code: '#000000',
  color: 'black',
  level: 0,
  type: 'normal',
  id: 255
}, {
  code: '#ffffff',
  color: 'white',
  level: 0,
  type: 'normal',
  id: 256
}];

var mrcp$1 = function mrcp() {
  var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    color: null,
    type: null,
    level: null,
    isObject: false
  };
  var color = option.color,
      type = option.type,
      level = option.level,
      isObject = option.isObject;

  if (isNull_1(color) && isNull_1(type) && isNull_1(level)) {
    var _render = shuffle_1(colors);
    if (isObject) {
      return _render[0];
    }
    return _render[0].code;
  }

  var box = colors;
  if (color) {
    box = box.filter(function (item) {
      return item.color === color;
    });
  }

  if (type) {
    box = box.filter(function (item) {
      return item.type === type;
    });
  }

  if (level) {
    box = box.filter(function (item) {
      return item.level === level;
    });
  }

  var render = shuffle_1(box);

  if (isObject) {
    return render[0];
  }
  return render[0].code;
};

document.body.innerHTML = '\n  <style>\n    body {\n      margin: 0;\n    }\n    section {\n      display: flex;\n      flex-direction: column;\n      text-align: center;\n    }\n    header {\n      background: ' + mrcp$1({ type: 'darken' }) + ';\n      width: 100%;\n      padding: 1rem;\n      text-align: center;\n    }\n    main {\n      display: flex;\n      flex-direction: row;\n      padding: 1rem;\n      height: 500px;\n      background: ' + mrcp$1({ type: 'normal' }) + ';\n    }\n    aside {\n      background: ' + mrcp$1({ type: 'lighten', level: 5 }) + ';\n      padding: 1rem;\n      flex: 1;\n    }\n    div {\n      background: ' + mrcp$1({ type: 'lighten', level: 4 }) + ';\n      width: 70%;\n      padding: 1rem;\n    }\n    footer {\n      padding: 1rem;\n      background: ' + mrcp$1({ type: 'darken', color: 'blue' }) + ';\n    }\n  </style>\n  <section>\n    <header>title</header>\n    <main>\n      <aside>sidebar</aside>\n      <div>main</div>\n    </main>\n    <footer>footer</footer>\n  </section>\n';
