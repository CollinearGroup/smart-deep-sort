"use strict"

var deep_sort_object = require('deep-sort-object')
var array_sort = require('array-sort')
var sorty = require('sorty')
var util = require('util')
var _ = require('underscore')

/**
 *  Will return a deep sorted version of the object.
 */
function sortObject(originalSrc, options) {
  var callback

  if (typeof(options) == 'function') {
    callback = true;
  }

  // Uses module to sort all objects key names based on standard
  // string ordering.
  var deepSorted = deep_sort_object(originalSrc)

  // Once object keys are sorted, we still need to check for arrays.
  var out = deepInspect(deepSorted)

  if (callback == true) {
    return options(out)
  } else {
    return out
  }
}

/**
 * Will recursively inspect the object for arrays that need to be
 * sorted.
 */
function deepInspect(the_object) {
  if (_.isArray(the_object)) {
    throw new Error('Recursive inspection of object failed.')
    return
  }
  var out = the_object

  // TODO: watch out for different kinds of objects
  Object.keys(out).forEach(function(key) {
    if (_.isArray(out[key])) {
      out[key] = keyCompare(out[key])
    } else if (_.isObject(out[key])) {
      out[key] = deepInspect(out[key])
    } else {
      // do nothing.
    }
  })

  return out
}


/**
 * Dynamically checks the contents of an array and orders:
 *   TODO: determine order.
 *   booleans
 *   numbers
 *   strings
 *   objects
 *   arrays
 *
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function keyCompare(arr) {
  if (!_.isArray(arr)) {
    throw new Error('Failed will processing expect array: ' + util.inspect(arr))
    return
  }

  var keyArr = []
  var objectList = []
  var otherList = []

  arr.forEach(function(elmnt) {
    // want to collect types and put certains types first.
    if (_.isArray(elmnt)) {
      otherList.push(keyCompare(elmnt))
    } else if (_.isObject(elmnt)) {
      // ensure obj is sorted underneath.
      var obj = deepInspect(elmnt)

      // populate set of keys by which to sort in the near future.
      var modObj = {}
      Object.keys(obj).forEach(function(key) {
        keyArr.push(key)
          // TODO: figure out how not to prune 'undefined'?
        modObj[key] = JSON.stringify(obj[key])
      })
      objectList.push(modObj)

    } else {
      otherList.push(elmnt)
    }
  })

  // Sorts parents based on children by looking the the string representation
  // of the children nodes.
  if (!_.isEmpty(keyArr)) {
    keyArr = _.unique(keyArr)
    sorty(createSortyOpts(keyArr), objectList)
      // Need to undo stringify
    objectList.forEach(function(elmnt) {
      Object.keys(elmnt).forEach(function(key) {
        elmnt[key] = JSON.parse(elmnt[key])
      })
    })
    otherList = otherList.concat(objectList)
  }

  otherList = array_sort(otherList)
  return otherList
}

/**
 * Creates the sorty module opts from the provided object keys.
 */
function createSortyOpts(keys) {
  var result = []
  keys.forEach(function(keyName) {
    result.push({
      name: keyName,
      dir: "asc"
    })
  })
  return result
}

module.exports = sortObject