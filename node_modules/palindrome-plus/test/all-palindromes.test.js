const assert = require('assert');
const allPalindromes = require('../index').allPalindromes;
const testData = require('./test-data');

//['', 'Malayalam', 'Lorem Ipsum', '1abbba1', 'A nut for a jar of tuna', 'Ed, I saw Harpo Marx ram Oprah W. aside.'];

describe('allPalindromes ::', function () {

    describe('-EMPTY-', function () {
        it('should return empty Array', function () {
            assert.deepEqual(allPalindromes(testData[0]), []);
        });
    });

    describe(testData[1], function () {
        it('should return an array of 6 palindromes', function () {
            assert.deepEqual(allPalindromes(testData[1]), ['MALAYALAM', 'ALAYALA', 'ALA', 'LAYAL', 'AYA', 'ALA']);
        });
    });

    describe(testData[2], function () {
        it('should return empty Array', function () {
            assert.deepEqual(allPalindromes(testData[2]), []);
        });
    });

    describe(testData[3], function () {
        it('should return an array of 3 palindromes', function () {
            assert.deepEqual(allPalindromes(testData[3]), ['1ABBBA1', 'ABBBA', 'BBB']);
        });
    });

    describe(testData[4], function () {
        it('should return an array of 8 palindromes', function () {
            assert.deepEqual(allPalindromes(testData[4]), ['ANUTFORAJAROFTUNA', 'NUTFORAJAROFTUN', 'UTFORAJAROFTU', 'TFORAJAROFT', 'FORAJAROF', 'ORAJARO', 'RAJAR', 'AJA']);
        });
    });

    describe(testData[5], function () {
        it('should return an array of 14 palindromes', function () {
            assert.deepEqual(allPalindromes(testData[5]), ['EDISAWHARPOMARXRAMOPRAHWASIDE', 'DISAWHARPOMARXRAMOPRAHWASID', 'ISAWHARPOMARXRAMOPRAHWASI', 'SAWHARPOMARXRAMOPRAHWAS', 'AWHARPOMARXRAMOPRAHWA', 'WHARPOMARXRAMOPRAHW', 'HARPOMARXRAMOPRAH', 'ARPOMARXRAMOPRA', 'RPOMARXRAMOPR', 'POMARXRAMOP', 'OMARXRAMO', 'MARXRAM', 'ARXRA', 'RXR']);
        });
    });
});