var calculator = require('../calculator');

describe('calculator', function () {

  it('should return the sum of two numbers', function () {
    expect(calculator.add(1, 1)).to.equal(2);
  });

  it('should return the difference of two numbers', function () {
    expect(calculator.subtract(4, 2)).to.equal(2);
  });

  it('should return the product of two numbers', function () {
    expect(calculator.multiply(2, 2)).to.equal(4);
  });

  it('should return the quotient of two numbers', function () {
    expect(calculator.divide(4, 2)).to.equal(2);
  });
});