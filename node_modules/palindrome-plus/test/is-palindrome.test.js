const assert = require('assert');
const isPalindrome = require('../index').isPalindrome;
const testData = require('./test-data');

//['', 'Malayalam', 'Lorem Ipsum', '1abbba1', 'A nut for a jar of tuna', 'Ed, I saw Harpo Marx ram Oprah W. aside.'];

describe('isPalindrome ::', function () {

  describe('-EMPTY-', function () {
    it('should return false', function () {
      assert.equal(isPalindrome(testData[0]), false);
    });
  });

  describe(testData[1], function () {
    it('should return true', function () {
      assert.equal(isPalindrome(testData[1]), true);
    });
  });

  describe(testData[2], function () {
    it('should return false', function () {
      assert.equal(isPalindrome(testData[2]), false);
    });
  });

  describe(testData[3], function () {
    it('should return true', function () {
      assert.equal(isPalindrome(testData[3]), true);
    });
  });

  describe(testData[4], function () {
    it('should return true', function () {
      assert.equal(isPalindrome(testData[4]), true);
    });
  });

  describe(testData[5], function () {
    it('should return true', function () {
      assert.equal(isPalindrome(testData[5]), true);
    });
  });
});