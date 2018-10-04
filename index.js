// Code your solution in this file
function findMatching(collection, name) {

  let result = filter(collection, function(individual) {return name.toUppercase()===individual.name.toUppercase()})
  return result
}

function fuzzyMatch() {

}

function matchName() {

}
