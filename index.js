// Code your solution here
function findMatching(collection,string) {
    return collection.filter((x) => x.toLowerCase() === string.toLowerCase())
    }

function fuzzyMatch(collection,string) {
    return collection.filter((element) => element.substring(0,string.length) === string)
}

function matchName (collection,string) {
    return collection.filter((element) => element.name === string)
}