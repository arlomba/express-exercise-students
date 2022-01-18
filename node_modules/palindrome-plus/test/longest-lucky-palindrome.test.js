const assert = require('assert');
const longestLuckyPalindrome = require('../index').longestLuckyPalindrome;
const testData = require('./test-data');

describe('longestLuckyPalindrome ::', function () {

    describe('-EMPTY-', function () {
        it('should return empty string', function () {
            assert.equal(longestLuckyPalindrome(testData[0]), '');
        });
    });

    describe(testData[1], function () {
        it('should return ALAYALA', function () {
            assert.equal(longestLuckyPalindrome(testData[1]), 'ALAYALA');
        });
    });

    describe(testData[2], function () {
        it('should return empty string', function () {
            assert.equal(longestLuckyPalindrome(testData[2]), '');
        });
    });

    describe(testData[3], function () {
        it('should return 1ABBBA1', function () {
            assert.equal(longestLuckyPalindrome(testData[3]), '1ABBBA1');
        });
    });

    describe(testData[4], function () {
        it('should return ANUTFORAJAROFTUNA', function () {
            assert.equal(longestLuckyPalindrome(testData[4]), 'ANUTFORAJAROFTUNA');
        });
    });

    describe(testData[5], function () {
        it('should return EDISAWHARPOMARXRAMOPRAHWASIDE', function () {
            assert.equal(longestLuckyPalindrome(testData[5]), 'EDISAWHARPOMARXRAMOPRAHWASIDE');
        });
    });
});