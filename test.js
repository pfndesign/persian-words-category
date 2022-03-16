var test = require('tape')
var {
  findwordcategory,
  getcategorywords
} = require('.')
var fs = require('fs')
test('findwordcategory', function (t) {
  let wordcheck = findwordcategory('شهر');
  t.ok(typeof findwordcategory === 'function', 'should be an function')
  t.ok(typeof findwordcategory('test') === 'undefined', 'should have 0 english words')
  t.ok(typeof wordcheck[0] === 'string', 'categories should be string')
  t.ok(Array.isArray(wordcheck), 'should have array of categories')
  t.ok(wordcheck.length > 0, 'should have category')
  t.end()
})
test('getcategorywords', function (t) {
  let categorycheck = getcategorywords(["properNoun", "noun"]),
    singlecategorycheck = getcategorywords(["properNoun"]);
  t.ok(typeof getcategorywords === 'function', 'should be an function')
  t.ok(typeof getcategorywords('test') === 'undefined', 'should not have a test category')
  t.ok(typeof categorycheck == 'object', 'categories should be object')
  t.ok(typeof categorycheck.all !== 'undefined', 'there should ba all object')
  t.ok(typeof singlecategorycheck.all === 'undefined', 'there should not ba all object')
  t.ok(Array.isArray(categorycheck.noun), 'category should be an array')
  t.ok(categorycheck.noun.length > 100, 'category should not be empty')
  t.ok(typeof categorycheck.noun[0] === 'string', 'category data should be string')
  t.end()
})
test('data', function (t) {
  t.ok(fs.existsSync('./library/words.json'), 'words should exist')
  let words = JSON.parse(fs.readFileSync('./library/words.json').toString());
  t.ok(Object.entries(words).length > 343000, 'words should have more than 343000 words')
  t.ok(fs.existsSync('./library/category.json'), 'category should exist')
  t.ok(fs.existsSync('./library/wordcategory.json'), 'word category should exist')
  t.end()
})