const assert = require('assert');
const isPrimeNumber = require('../index').isPrimeNumber;

describe('isPrimeNumber ::', function () {

    describe('-EMPTY-', function () {
        it('should return false', function () {
            assert.equal(isPrimeNumber(), false);
        });
    });

    describe('1', function () {
        it('should return false', function () {
            assert.equal(isPrimeNumber(1), false);
        });
    });

    describe('2', function () {
        it('should return true', function () {
            assert.equal(isPrimeNumber(2), true);
        });
    });

    describe('4', function () {
        it('should return false', function () {
            assert.equal(isPrimeNumber(4), false);
        });
    });

    describe('5', function () {
        it('should return true', function () {
            assert.equal(isPrimeNumber(5), true);
        });
    });

    describe('18', function () {
        it('should return false', function () {
            assert.equal(isPrimeNumber(18), false);
        });
    });
});