# Palindrome Plus

#### For any given string,
+ Check if it is [Palindrome](https://en.wikipedia.org/wiki/Palindrome)
+ Get all possible Palindromes from substrings
+ Get the longest Palindrome
+ Get all Lucky Palindromes from substrings (A palindrome sub-string is called lucky if its length is a prime number. [Read More...](https://www.hackerearth.com/fr/problem/algorithm/lucky-palindrome/))
+ Get the longest Lucky Palindrome

### Usage:

Inside your application `npm install --save palindrome-plus`

*Install **mocha** to run built-in tests `npm test`*

### Require and define input: 

```
let palP = require('palindrome-plus');
let inputString = 'A nut for a jar of tuna';
```
#### Get all results as an object

```
let palindromeResults = palP.getAllResults(inputString);

/* 

Result :: 

{
    'isPalindrome': true,
    'allPalindromes': ['ANUTFORAJAROFTUNA', 'NUTFORAJAROFTUN', ...],
    'longestPalindrome': 'ANUTFORAJAROFTUNA',
    'luckyPalindrome': ['ANUTFORAJAROFTUNA', 'UTFORAJAROFTU', ...],
    'longestLuckyPalindrome': ANUTFORAJAROFTUNA
}

*/
```

#### or Get individual results: 
```
let isPalindrome = palP.isPalindrome(inputString); 
// true

let allPalindromes = palP.allPalindromes(inputString); 
// [ 'ANUTFORAJAROFTUNA','NUTFORAJAROFTUN', ...]

let longestPalindrome = palP.longestPalindrome(inputString); 
// ANUTFORAJAROFTUNA

let luckyPalindrome = palP.luckyPalindrome(inputString); 
// [ 'ANUTFORAJAROFTUNA','UTFORAJAROFTU', ...]

let longestLuckyPalindrome = palP.longestLuckyPalindrome(inputString); 
// ANUTFORAJAROFTUNA

```
