const isPalindrome = require('./is-palindrome');
const cleanup = require('../src/cleanup');

module.exports = (st) => {
    st = cleanup(st);
    var palindromes = [];
    if (st.length) {
        for (let i = 0; i < st.length; i++) {
            let subStr1 = st.substr(i, st.length);

            for (let j = subStr1.length; j >= 0; j--) {
                let subStr2 = subStr1.substr(0, j);

                if (subStr2.length > 2 && isPalindrome(subStr2)) {
                    palindromes.push(subStr2);
                }
            }
        }
    }
    return palindromes;
}