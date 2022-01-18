const assert = require('assert');
const longestPalindrome = require('../index').longestPalindrome;
const testData = require('./test-data');

describe('longestPalindrome ::', function () {

    describe('-EMPTY-', function () {
        it('should return empty string', function () {
            assert.equal(longestPalindrome(testData[0]), '');
        });
    });

    describe(testData[1], function () {
        it('should return MALAYALAM', function () {
            assert.equal(longestPalindrome(testData[1]), 'MALAYALAM');
        });
    });

    describe(testData[2], function () {
        it('should return empty string', function () {
            assert.equal(longestPalindrome(testData[2]), '');
        });
    });

    describe(testData[3], function () {
        it('should return 1ABBBA1', function () {
            assert.equal(longestPalindrome(testData[3]), '1ABBBA1');
        });
    });

    describe(testData[4], function () {
        it('should return ANUTFORAJAROFTUNA', function () {
            assert.equal(longestPalindrome(testData[4]), 'ANUTFORAJAROFTUNA');
        });
    });

    describe(testData[5], function () {
        it('should return EDISAWHARPOMARXRAMOPRAHWASIDE', function () {
            assert.equal(longestPalindrome(testData[5]), 'EDISAWHARPOMARXRAMOPRAHWASIDE');
        });
    });
});