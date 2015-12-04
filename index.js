var stringify = require('json-stable-stringify');
 
module.exports = sortobjectByFirstKey;
 
var getFirstKey = function(obj) {
  return Object.keys(obj)[0];
}
  
// sorts by first key.  If undefined, sort to bottom maintaining original order. 
var firstKeyCompare = function (a, b) {
  var key = getFirstKey(a);
  
  var valueA = a[key];
  var valueB = b[key];
  
  // need to delve deeper if value is non-null object
  if (a[key] && typeof(a[key]) === "object") {
    var subkey = getFirstKey(a[key]);
	  valueA = a[key][subkey];
	  valueB = b[key] ? b[key][subkey] : null;
  }
  
  return valueA && valueB ? compare(valueA, valueB)             // both values defined so compare normally
                 : !valueA && !valueB ? 0                                               // neither value defined so treat as equal
				           : !valueA ? 1 : -1;		                                                   // a > b when only a undefined, otherwise a < b.
}

function compare(a, b) {
  return isNaN(a) ? a.localeCompare(b) : a-b;
}

function retainUndefinedAsNull(key, value) {
  return value ? value : null;
}

function sortobjectByFirstKey(originalSrc) { 
  var out = {};
  
  var src = JSON.parse(stringify(originalSrc, {replacer: retainUndefinedAsNull}));
  Object.keys(src).forEach(function(key) {
    if (Array.isArray(src[key])) {
      out[key] = src[key].sort(firstKeyCompare);
    } else {
      out[key] = src[key];
    }
  });

  return out;
}
