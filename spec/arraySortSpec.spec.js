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
xdescribe('SmartDeepSort async', function() {
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

//TODO
xdescribe('SmartDeepSort options', function() {
  var data

  beforeEach(function() {
    data = require('./testdata')
  })

  afterEach(function() {
    delete data
  })

  it('should treat as mutable by default', function() {
    // By default we should change the passed in object.
    sortBy(data.musicStoresWithStringArray)
    expect(data.musicStoresWithStringArray).toBe(data.sortedMusicStoresWithStringArray)
  });

  it('should provide mutable option', function() {
    // By default we should change the passed in object.
    var opts = {
      mutable: false,
    }
    var result = sortBy(data.musicStoresWithStringArray, opts)
    expect(data.musicStoresWithStringArray).not.toBe(data.sortedMusicStoresWithStringArray)
    expect(result).toBe(data.sortedMusicStoresWithStringArray)
  });

});

// TODO
xdescribe('SmartDeepSort polyglot objects', function() {
  var data

  beforeEach(function() {
    data = require('./testdata')
  })

  afterEach(function() {
    delete data
  })

  it('should sort example object', function() {
    sortBy(data.mixedTypesCheck)
    expect(data.mixedTypesCheck).toBe(data.sortedMixedTypesCheck)
  });

});