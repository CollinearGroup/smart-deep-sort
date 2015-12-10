var sortBy = require('../index') , 
       data = require('./testdata')

describe('First level keys sort', function() {
  var simpleObj = { 'b': 'bb', 'a': 'aa', 'c': undefined, 'd': 'dd' }
  
  it('sorts when all fields are defined', function() {
    var result = sortBy(simpleObj)
    expect(Object.keys(result).length).toBe(4)
    expect(JSON.stringify(result)).toEqual(JSON.stringify({'a': 'aa', 'b': 'bb', 'c': undefined, 'd': 'dd'}))
    expect(JSON.stringify(result['d'])).toEqual(JSON.stringify('dd'))
  })

  it('maintains undefined fields', function() {
    var result = sortBy(simpleObj)
	  expect(result['c']).not.toBeDefined()
  })
})

describe('Sort by key then inner arrays\' first field values', function() {
  it('sort handles strings and undefined fields', function() {
    var result = sortBy(data.musicStoresWithStringArray)
	  expect(JSON.stringify(result)).toEqual(JSON.stringify(data.sortedMusicStoresWithStringArray))
  })

  it('sort handles number values', function() {
    var result = sortBy(data.teamsWithNumberArray)
	  expect(JSON.stringify(result)).toEqual(JSON.stringify(data.sortedTeamsWithNumberArray))
  })

  it('sort is stable', function() {
    var result = sortBy(data.stableCheck)
	  expect(JSON.stringify(result)).toEqual(JSON.stringify(data.sortedStableCheck))
  })

  it('sort handles nested objects', function() {
    var result = sortBy(data.musicStoresWithObjectArray)
	  expect(JSON.stringify(result)).toEqual(JSON.stringify(data.sortedMusicStoresWithObjectArray))
  })

  it('sort handles date strings in ISO 8601 format', function() {
    var result = sortBy(data.birthdays)
	  expect(JSON.stringify(result)).toEqual(JSON.stringify(data.sortedBirthdays))
  })

  it('sort handles CJK characters', function() {
    var result = sortBy(data.cjk)
	  expect(JSON.stringify(result)).toEqual(JSON.stringify(data.sortedcjk))
  })
})
