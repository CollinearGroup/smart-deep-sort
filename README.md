# README #

### Deep Smart Sort ###

`npm install deep-smart-sort`

* Contains the node module for [deep smart(er) sorting](https://collineargroup.atlassian.net/wiki/display/COL/Smart+Deep+Sort+Node+Module)
* Version 1.0.0
* Learning [Node.js](https://nodejs.org/en/) and [jasmine-node](https://www.npmjs.com/package/jasmine-node).

### Usage ###

```js
var sort = require('deep-smart-sort')

var myPerson = {
  name: 'Fender',
  isParent: true,
  surNames: ['Boss', 'Luthier'],
}

sort(myPerson)

console.log(myPerson)
```

### The Rules ###

* Object is deep sorted by key
** keys at all levels are sorted using default string Unicode code sort order
* If a first level key's value is an array of objects, the array will be sorted based on the value of the object's first field.
** if the object's value is also another object, then the sort is based on the value of that object's first field.
*** Assumes string or number sorting.
*** Does not support Date objects.  Assumes dates use ISO 8601 string format (yyyy-mm-dd).
** any undefined or null key will sort to bottom, maintaining their original order, per ECMA 262 22.1.3.24.1 Note 1.
* The sort is not necessarily stable.  Equal key values will maintain original order only.

### How do I build the module? ###

To run unit tests, run `npm test`.

### Contribution guidelines ###

* Writing jasmine-node tests
* Code review

### Who do I talk to? ###

* ttrail@collineargroup.com
* dvilla@collineargroup.com