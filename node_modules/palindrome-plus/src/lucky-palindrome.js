const allPalindromes = require('./all-palindromes');
const isPrimeNumber = require('./is-prime-number');

module.exports = (st) => {
    var palindromes = allPalindromes(st);
    palindromes = palindromes.filter((palindrome) => {
        return isPrimeNumber(palindrome.length);
    });
    return palindromes;
}