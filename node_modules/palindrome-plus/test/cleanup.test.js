const assert = require('assert');
const testData = require('./test-data');
const cleanup = require('../index').cleanup;

describe('Cleanup ::', function () {

    describe('-EMPTY-', function () {
        it('should return empty string', function () {
            assert.equal(cleanup(testData[0]), '');
        });
    });

    describe(testData[1], function () {
        it('should return "MALAYALAM"', function () {
            assert.equal(cleanup(testData[1]), 'MALAYALAM');
        });
    });

    describe(testData[2], function () {
        it('should return "LOREMIPSUM"', function () {
            assert.equal(cleanup(testData[2]), 'LOREMIPSUM');
        });
    });

    describe(testData[3], function () {
        it('should return "1ABBBA1"', function () {
            assert.equal(cleanup(testData[3]), '1ABBBA1');
        });
    });

    describe(testData[4], function () {
        it('should return "ANUTFORAJAROFTUNA"', function () {
            assert.equal(cleanup(testData[4]), 'ANUTFORAJAROFTUNA');
        });
    });

    describe(testData[5], function () {
        it('should return "EDISAWHARPOMARXRAMOPRAHWASIDE"', function () {
            assert.equal(cleanup(testData[5]), 'EDISAWHARPOMARXRAMOPRAHWASIDE');
        });
    });
});