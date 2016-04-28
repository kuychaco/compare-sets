var set1 = new Set([1, 2, 3, 4])
var set2 = new Set([2, 4, 5, 6])

var compareSets = require('./')

function toArray(set) {
  var result = []
  set.forEach(function(item) { result.push(item) })
  return result.sort()
}

module.exports = {
  testAdded: function(test) {
    test.deepEqual(toArray(compareSets(set1, set2).added), [5, 6])
    test.done()
  },
  testRetained: function(test) {
    test.deepEqual(toArray(compareSets(set1, set2).retained), [2, 4])
    test.done()
  },
  testRemoved: function(test) {
    test.deepEqual(toArray(compareSets(set1, set2).removed), [1, 3])
    test.done()
  }
}
