const allPalindromes = require('./all-palindromes');
module.exports = (st) => {
    let longestPalindrome = '';
    let palindromes = allPalindromes(st);

    if (palindromes.length) {
        let prev = '';
        longestPalindrome = palindromes.reduce((prev, currentVal) => {
            return (prev.length > currentVal.length) ? prev : currentVal;
        });
    }
    return longestPalindrome;
}