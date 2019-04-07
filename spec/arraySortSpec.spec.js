var sortBy = require('../lib/index')
let { expect } = require('chai')

describe('First level keys sort', function() {
  var simpleObj = {
    'b': 'bb',
    'a': 'aa',
    'c': undefined,
    'd': 'dd'
  }

  it('sorts when all fields are defined', function() {
    var result = sortBy(simpleObj)
    expect(Object.keys(result).length).to.equal(4)
    expect(JSON.stringify(result)).to.equal(JSON.stringify({
      'a': 'aa',
      'b': 'bb',
      'c': undefined,
      'd': 'dd'
    }))
    expect(JSON.stringify(result['d'])).to.equal(JSON.stringify('dd'))
  })

  it('maintains undefined fields', function() {
    var result = sortBy(simpleObj)
    expect(result['c']).to.not.exist
  })
})

describe('Sort by key then inner arrays\' first field values', function() {
  var data
  beforeEach(function() {
    data = require('./testdata')
  })
  afterEach(function() {
    delete data
  })
  it('sort handles strings and undefined fields', function() {
    var result = sortBy(data.musicStoresWithStringArray)
    expect(JSON.stringify(result)).to.equal(JSON.stringify(data.sortedMusicStoresWithStringArray))
  })

  it('sort handles number values', function() {
    var result = sortBy(data.teamsWithNumberArray)
    expect(JSON.stringify(result)).to.equal(JSON.stringify(data.sortedTeamsWithNumberArray))
  })

  it('sort is stable', function() {
    var result = sortBy(data.stableCheck)
    expect(JSON.stringify(result)).to.equal(JSON.stringify(data.sortedStableCheck))
  })

  it('sort handles nested objects', function() {
    var result = sortBy(data.musicStoresWithObjectArray)
    expect(JSON.stringify(result)).to.equal(JSON.stringify(data.sortedMusicStoresWithObjectArray))
  })

  it('sort handles date strings in ISO 8601 format', function() {
    var result = sortBy(data.birthdays)
    expect(JSON.stringify(result)).to.equal(JSON.stringify(data.sortedBirthdays))
  })

  it('sort handles CJK characters', function() {
    var result = sortBy(data.cjk)
    expect(JSON.stringify(result)).to.equal(JSON.stringify(data.sortedcjk))
  })
})

describe('SmartDeepSort async', function() {
  var data
  beforeEach(function() {
    data = require('./testdata')
  })
  afterEach(function() {
    delete data
  })
  it('should provide async api', function(done) {
    var opts = {}
    var after = false
    sortBy(data.musicStoresWithStringArray, opts, function(result) {
      expect(JSON.stringify(result)).to.equal(JSON.stringify(data.sortedMusicStoresWithStringArray))
      after = true
      done()
    })
    expect(after).to.equal(false)
  });

});


describe('SmartDeepSort variant objects', function() {
  var data

  beforeEach(function() {
    data = require('./testdata')
  })

  afterEach(function() {
    delete data
  })

  it('should sort example object', function() {
    var result = sortBy(data.mixedTypesCheck)
    expect(JSON.stringify(result)).to.equal(JSON.stringify(data.sortedMixedTypesCheck))
  });

  it('should sort by type when mixed', function() {
    var result1 = sortBy(data.mixedTypesWithStringFirst)
    var result2 = sortBy(data.mixedTypesWithArrayFirst)
    expect(JSON.stringify(result1)).to.equal(JSON.stringify(result2))
  });

});

describe('SmartDeepSort arrays', function() {
  var data

  beforeEach(function() {
    data = require('./testdata')
  })

  afterEach(function() {
    delete data
  })

  it('should sort example object', function() {
    var result = sortBy(data.arrayOfThings)
    expect(JSON.stringify(result)).to.equal(JSON.stringify(data.sortedArrayOfThings))
  });
});