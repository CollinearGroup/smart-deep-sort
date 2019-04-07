"use strict"

var deep_sort_object = require("deep-sort-object")
var array_sort = require("array-sort")
var sorty = require("sorty")
var util = require("util")
var _ = require("underscore")

/**
 *  Will return a deep sorted version of the object.
 */
function sortObject(originalSrc, options, done) {
  var callback

  if (options === undefined) {
    // do nothing
  } else if (typeof options === "function") {
    callback = options
  } else {
    callback = done
  }

  if (callback) {
    process.nextTick(function() {
      done(work(originalSrc))
    })
    return
  }

  function work(obj) {
    try {
      // Uses module to sort all objects key names based on standard
      // string ordering.
      var deepSorted = deep_sort_object(obj)

      // Once object keys are sorted, we still need to check for arrays.
      var out = deepInspect(deepSorted)
      return out
    } catch (e) {
      console.log(e)
      throw e
    }
  }

  return work(originalSrc)
}

/**
 * Will recursively inspect the object for arrays that need to be
 * sorted.
 */
function deepInspect(the_object) {
  var out = the_object
  if (getConstructorName(the_object) === "Array") {
    out = keyCompare(out)
  } else if (getConstructorName(the_object) === "Object") {
    Object.keys(out).forEach(function(key) {
      if (_.isArray(out[key])) {
        out[key] = keyCompare(out[key])
      } else if (_.isObject(out[key])) {
        out[key] = deepInspect(out[key])
      } else {
        // do nothing.
      }
    })
  }
  return out
}

/**
 * Dynamically checks the contents of an array and orders:
 *   Order is determined by sorting constructor names of array elements. Ex:
 *   Array
 *   Boolean
 *   Date
 *   Object
 *   Number
 *   String
 *
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function keyCompare(arr) {
  if (!_.isArray(arr)) {
    throw new Error("Failed will processing expect array: " + util.inspect(arr))
  }

  var keyArr = []

  // keeps track of the various types of mixed objects.
  var typeLists = {}

  arr.forEach(function(elmnt) {
    // want to collect types and put certains types first.
    var typeName = getConstructorName(elmnt)
    if (!typeLists[typeName]) {
      typeLists[typeName] = []
    }
    if (_.isArray(elmnt)) {
      typeLists[typeName].push(keyCompare(elmnt))
    } else if (_.isObject(elmnt)) {
      // ensure obj is sorted underneath.
      var obj = deepInspect(elmnt)

      // populate set of keys by which to sort in the near future.
      // TODO: figure out how not to prune 'undefined'?
      var modObj = {}
      Object.keys(obj).forEach(function(key) {
        keyArr.push(key)
        modObj[key] = JSON.stringify(obj[key])
      })
      typeLists[typeName].push(modObj)
    } else {
      typeLists[typeName].push(elmnt)
    }
  })

  // Sorts parents based on children by looking the the string representation
  // of the children nodes.
  if (!_.isEmpty(keyArr)) {
    keyArr = _.unique(keyArr)
    sorty(createSortyOpts(keyArr.sort()), typeLists["Object"])

    // Need to undo stringify
    typeLists["Object"].forEach(function(elmnt) {
      Object.keys(elmnt).forEach(function(key) {
        elmnt[key] = JSON.parse(elmnt[key])
      })
    })
  }

  // Put it all back together.
  var resultList = []
  Object.keys(typeLists)
    .sort()
    .forEach(function(key) {
      var result = array_sort(typeLists[key])
      resultList = resultList.concat(result)
    })
  return resultList
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

/**
 * Using experimental api of Object.constructor.[name]
 */
function getConstructorName(o) {
  if (o !== undefined && o !== null) {
    return o.constructor.name
  } else {
    return o
  }
}

module.exports = sortObject
