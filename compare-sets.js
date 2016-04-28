module.exports = function compareSets (oldSet, newSet) {
  var added = new Set()
  var retained = new Set()
  var removed = new Set(oldSet)

  newSet.forEach(function (item) {
    if (oldSet.has(item)) {
      retained.add(item)
      removed.delete(item)
    } else {
      added.add(item)
    }
  })

  return {added: added, retained: retained, removed: removed}
}
