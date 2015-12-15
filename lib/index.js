"use strict"

var sortKeys = require('deep-sort-object')
var sorty = require('sorty')

/**
  * Sorts by keys using json-stable-stringify, maintaining undefined,
  * including by first key's values of first level nested arrays.
  */
function sortObject(originalSrc, options) {
  var out = {},
    callback

  if (typeof(options) == 'function') {
    callback = true;
  }

  var src = sortKeys(originalSrc)
  Object.keys(src).forEach(function(key) {
    if (Array.isArray(src[key])) {
      out[key] = keyCompare(src[key])
    } else {
      out[key] = src[key]
    }
  })
  
  if (callback == true) return options(out)
  return out
}

 function keyCompare (arr) {
  var keyArr = []
  var objStrings = []
  var usedKeys = {}

  if (!Array.isArray(arr)) {
    Object.keys(arr).forEach(function(key) {
      if (arr[key] !== undefined && Array.isArray(arr[key])) {
        arr[key] = keyCompare(arr[key])
      }

      keyArr.push(key)
    })
  } else {
    arr.forEach(function(elmnt) {
      if (elmnt !== undefined && Array.isArray(elmnt)) {
        arr[elmnt] = keyCompare(elmnt)
      } else if((elmnt) !== undefined) {
        Object.keys(elmnt).forEach(function(key) {
          if (elmnt[key] !== undefined && Array.isArray(elmnt[key])) {
            elmnt[key] = keyCompare(elmnt[key])
        }

          if (usedKeys[key] === undefined) {
            keyArr.push(key)
            usedKeys[key] = ""
          }
        })
        objStrings.push(JSON.stringify(elmnt))

      }
    })
    sort(objStrings, keyArr)
  }
  
  return sort(arr, keyArr)
}

function sort(arr, keyArr) {
    if (Array.isArray(arr)) {
    var params = createSortyString(keyArr)

    sorty(params, arr)
  } else if (typeof(arr) === 'object') {
    var data = []
    var params = createSortyString(keyArr)
    data.push(arr)

    sorty(params, arr)
  }
  return arr
}

function createSortyString(keys) {
  var result = []
  keys.forEach(function(keyName) {
    result.push({name: keyName, dir: "asc"})
  })
  return result
}

module.exports = sortObject