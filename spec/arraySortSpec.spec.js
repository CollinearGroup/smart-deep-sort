var sortBy = require('../lib/index')

describe('First level keys sort', function() {
  var simpleObj = {
    'b': 'bb',
    'a': 'aa',
    'c': undefined,
    'd': 'dd'
  }

  it('sorts when all fields are defined', function() {
    var result = sortBy(simpleObj)
    expect(Object.keys(result).length).toBe(4)
    expect(JSON.stringify(result)).toBe(JSON.stringify({
      'a': 'aa',
      'b': 'bb',
      'c': undefined,
      'd': 'dd'
    }))
    expect(JSON.stringify(result['d'])).toBe(JSON.stringify('dd'))
  })

  it('maintains undefined fields', function() {
    var result = sortBy(simpleObj)
    expect(result['c']).not.toBeDefined()
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
    expect(JSON.stringify(result)).toBe(JSON.stringify(data.sortedMusicStoresWithStringArray))
  })

  it('sort handles number values', function() {
    var result = sortBy(data.teamsWithNumberArray)
    expect(JSON.stringify(result)).toBe(JSON.stringify(data.sortedTeamsWithNumberArray))
  })

  it('sort is stable', function() {
    var result = sortBy(data.stableCheck)
    expect(JSON.stringify(result)).toBe(JSON.stringify(data.sortedStableCheck))
  })

  it('sort handles nested objects', function() {
    var result = sortBy(data.musicStoresWithObjectArray)
    console.log(JSON.stringify(result, null, '  '))
    console.log(JSON.stringify(data.sortedMusicStoresWithObjectArray, null, '  '))
    expect(JSON.stringify(result)).toBe(JSON.stringify(data.sortedMusicStoresWithObjectArray))
  })

  it('sort handles date strings in ISO 8601 format', function() {
    var result = sortBy(data.birthdays)
    expect(JSON.stringify(result)).toBe(JSON.stringify(data.sortedBirthdays))
  })

  it('sort handles CJK characters', function() {
    var result = sortBy(data.cjk)
    expect(JSON.stringify(result)).toBe(JSON.stringify(data.sortedcjk))
  })
})

//TODO
describe('SmartDeepSort async', function() {
  var data
  beforeEach(function() {
    data = require('./testdata')
  })
  afterEach(function() {
    delete data
  })
  it('should provide async api', function(done) {
    // TODO: should type check second option to determine if callback function or opts.
    sortBy(data.musicStoresWithStringArray, function(result) {
      expect(JSON.stringify(result)).toBe(JSON.stringify(data.sortedMusicStoresWithStringArray))
      done()
    })
  });

});


// TODO
xdescribe('SmartDeepSort variant objects', function() {
  var data

  beforeEach(function() {
    data = require('./testdata')
  })

  afterEach(function() {
    delete data
  })

  it('should sort example object', function() {
    sortBy(data.mixedTypesCheck)
    expect(JSON.stringify(data.mixedTypesCheck)).toBe(JSON.stringify(data.sortedMixedTypesCheck))
  });

});