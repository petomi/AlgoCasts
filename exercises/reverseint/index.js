// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    var stringVer = n.toString()
    var isNegative = false
    if (stringVer[0] === '-') {
        isNegative = true
        stringVer = stringVer.substring(1)
    }
    var reversedString = Array.from(stringVer).reverse().join('')
    return isNegative ? parseInt(-reversedString, 10) : parseInt(reversedString, 10)
}

module.exports = reverseInt;
