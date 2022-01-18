const luckyPalindromes = require('../src/lucky-palindrome');

module.exports = (st) => {
    let longestLuckyPalindrome = '';
    let palindromes = luckyPalindromes(st);

    if (palindromes.length) {
        let prev = '';
        longestLuckyPalindrome = palindromes.reduce((prev, currentVal) => {
            return (prev.length > currentVal.length) ? prev : currentVal;
        });
    }
    return longestLuckyPalindrome;
}