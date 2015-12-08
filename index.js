"use strict"

var sortKeys = require('deep-sort-object')

/**
  * Sorts by keys using json-stable-stringify, maintaining undefined,
  * including by first key's values of first level nested arrays.
  */
function sortObject(originalSrc) {
  var out = {}

  var src = sortKeys(originalSrc)
  Object.keys(src).forEach(function(key) {
    if (Array.isArray(src[key])) {
      out[key] = src[key].sort(firstKeyCompare)
    } else {
      out[key] = src[key]
    }
  })
  return out
}
 
var getFirstKey = function(obj) {
  return Object.keys(obj)[0]
}

// Sorts by first key.  If undefined, sort to bottom maintain original order. 
var firstKeyCompare = function (a, b) {
  var key = getFirstKey(a)
  
  var valueA = a[key],
         valueB = b[key]
  
  // need to delve deeper if value is non-null object
  if (a[key] && typeof(a[key]) === "object") {
    var subkey = getFirstKey(a[key])
	  valueA = a[key][subkey]
	  valueB = b[key] ? b[key][subkey] : null
  }
  return valueA && valueB ? compare(valueA, valueB)
               : !valueA && !valueB ? 0
                 : !valueA ? 1 : -1;
}

function compare(a, b) {
  return isNaN(a) ? a.localeCompare(b) : a-b
}

function retainUndefined(key, value) {
  return value ? value : null
}

module.exports = sortObject