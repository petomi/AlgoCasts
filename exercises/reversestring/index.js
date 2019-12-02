// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// my solution (#1 in answers)
function reverse(str) {
    //ezpz if you know Array.reverse() exists
    return str.split('').reverse().join('');
}


// // OTHER SOLUTIONS:
// // solution #2
// function reverse2(str) {
//     let reversed = '';
//     // using ES2015 let loop
//     for (let char of str) {
//         reversed = char + reversed;
//     }
//     return reversed;
// }

// // solution #3
// function reverse3(str) {
//     // ES5.1 reduce method -> reduce array to a single object (reversed), iterating over piece (character), into empty string
//     return str.split('').reduce((reversed, character) => {
//         return character + reversed;
//     }, '');
// }

module.exports = reverse;
