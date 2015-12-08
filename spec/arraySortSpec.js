var sortBy = require('../index') , 
       data = require('./testdata')

describe('First level keys sort', function() {
  var simpleObj = { 'b': 'bb', 'a': 'aa', 'c': undefined, 'd': 'dd' }

  it('sorts when all fields are defined', function() {
    var result = sortBy(simpleObj)
    expect(Object.keys(result).length).toBe(4)
    expect(Object.keys(result)).toEqual(['a', 'b', 'c', 'd'])
	  expect(result['d']).toBe('dd')
  })

  it('maintains undefined fields', function() {
    var result = sortBy(simpleObj)
	  expect(result['c']).not.toBeDefined()
  })
})

describe('Sort by key then inner arrays\' first field values', function() {
  it('sort handles strings and undefined fields', function() {
    var result = sortBy(data.musicStoresWithStringArray)
	  expect(result).toEqual(data.sortedMusicStoresWithStringArray)
  })

  it('sort handles number values', function() {
    var result = sortBy(data.teamsWithNumberArray)
	  expect(result).toEqual(data.sortedTeamsWithNumberArray)
  })

  it('sort is stable', function() {
    var result = sortBy(data.stableCheck)
	  expect(result).toEqual(data.sortedStableCheck)
  })

  it('sort handles nested objects', function() {
    var result = sortBy(data.musicStoresWithObjectArray)
	  expect(result).toEqual(data.sortedMusicStoresWithObjectArray)
  })

  it('sort handles date strings in ISO 8601 format', function() {
    var result = sortBy(data.birthdays)
	  expect(result).toEqual(data.sortedBirthdays)
  })

  it('sort handles CJK characters', function() {
    var result = sortBy(data.cjk)
	  expect(result).toEqual(data.sortedcjk)
  })
})
