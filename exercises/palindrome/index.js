// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let reverse = str.split('').reverse().join('');
    return reverse === str;
}

// //// SOLUTION 2:
// function palindrome2(str) {
//     // if any function within the "every" returns false, the "every" function returns false
//     // this is not as fast because you will compare each value twice
//     return str.split('').every((char, index) => {
//         return char === str[str.length - 1 - i];
//     });
// }

module.exports = palindrome;
