const cleanup = require('./src/cleanup');
const isPalindrome = require('./src/is-palindrome');
const allPalindromes = require('./src/all-palindromes');
const longestPalindrome = require('./src/longest-palindrome');
const isPrimeNumber = require('./src/is-prime-number');
const luckyPalindrome = require('./src/lucky-palindrome');
const longestLuckyPalindrome = require('./src/longest-lucky-palindrome');

let getAllResults = (st) => {
    return {
        'isPalindrome': isPalindrome(st),
        'allPalindromes': allPalindromes(st),
        'longestPalindrome': longestPalindrome(st),
        'luckyPalindrome': luckyPalindrome(st),
        'longestLuckyPalindrome': longestLuckyPalindrome(st)
    };
};

module.exports = {
    cleanup,
    isPalindrome,
    allPalindromes,
    longestPalindrome,
    isPrimeNumber,
    luckyPalindrome,
    longestLuckyPalindrome,
    getAllResults
}