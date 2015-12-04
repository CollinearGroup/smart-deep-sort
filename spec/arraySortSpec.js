var sortBy = require("../index");  

var data = require("./testdata");

describe("First level key sorting", function() {
  var MusicStores = { "b": "bb", "a": "aa", "c": undefined, "d": "dd"}

  it("sorts when all fields are defined", function() {
    var result = sortBy(MusicStores);
    expect(Object.keys(result).length).toBe(4);
    expect(Object.keys(result)).toEqual(["a", "b", "c", "d"]);
	  expect(result["d"]).toBe("dd");
  });
  
  it("sort maintains undefined fields", function() {
    var result = sortBy(MusicStores);
	  expect(result["c"]).toBe(null);
  });
});

describe("Deeper sort by key then inner arrays' first field values", function() {
  it("sort handles string values, maintaining undefined fields as null, sorted to bottom", function() {
    var result = sortBy(data.musicStoresWithStringArray);
	  expect(result).toEqual(data.sortedMusicStoresWithStringArray);
  });

  it("sort handles number values", function() {
    var result = sortBy(data.teamsWithNumberArray);
	  expect(result).toEqual(data.sortedTeamsWithNumberArray);
  });
  
  it("sort handles object values, maintaining undefined fields as null, sorted to bottom", function() {
    var result = sortBy(data.musicStoresWithObjectArray);
	  expect(result).toEqual(data.sortedMusicStoresWithObjectArray);	  
  });
  
  it("sort handles date strings in ISO 8601 format", function() {
    var result = sortBy(data.birthdays);
	  expect(result).toEqual(data.sortedBirthdays);
  });
  
});
