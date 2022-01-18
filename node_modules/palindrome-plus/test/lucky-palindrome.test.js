const assert = require('assert');
const luckyPalindrome = require('../index').luckyPalindrome;
const testData = require('./test-data');

//['', 'Malayalam', 'Lorem Ipsum', '1abbba1', 'A nut for a jar of tuna', 'Ed, I saw Harpo Marx ram Oprah W. aside.'];

describe('luckyPalindrome ::', function () {

    describe('-EMPTY-', function () {
        it('should return empty Array', function () {
            assert.deepEqual(luckyPalindrome(testData[0]), []);
        });
    });

    describe(testData[1], function () {
        it('should return an array of 5 lucky palindromes', function () {
            assert.deepEqual(luckyPalindrome(testData[1]), ['ALAYALA', 'ALA', 'LAYAL', 'AYA', 'ALA']);
        });
    });

    describe(testData[2], function () {
        it('should return empty Array', function () {
            assert.deepEqual(luckyPalindrome(testData[2]), []);
        });
    });

    describe(testData[3], function () {
        it('should return an array of 3 lucky palindromes', function () {
            assert.deepEqual(luckyPalindrome(testData[3]), ['1ABBBA1', 'ABBBA', 'BBB']);
        });
    });

    describe(testData[4], function () {
        it('should return an array of 6 lucky palindromes', function () {
            assert.deepEqual(luckyPalindrome(testData[4]), ['ANUTFORAJAROFTUNA', 'UTFORAJAROFTU', 'TFORAJAROFT', 'ORAJARO', 'RAJAR', 'AJA']);
        });
    });

    describe(testData[5], function () {
        it('should return an array of 9 lucky palindromes', function () {
            assert.deepEqual(luckyPalindrome(testData[5]), ['EDISAWHARPOMARXRAMOPRAHWASIDE', 'SAWHARPOMARXRAMOPRAHWAS', 'WHARPOMARXRAMOPRAHW', 'HARPOMARXRAMOPRAH', 'RPOMARXRAMOPR', 'POMARXRAMOP', 'MARXRAM', 'ARXRA', 'RXR']);
        });
    });
});