var enhancedDate = require('../enhancedDate');

describe('enhancedDate', function () {

  beforeEach(function () {
    // June 13, 2016
    enhancedDate.setDate(1465805915935)
  });

  it('returns milliseconds when calling getDate()', function () {
    expect(enhancedDate.getDate()).to.be.a.Number;
  });

  it('formats milliseconds on request', function () {
    expect(enhancedDate.getDate({ format: 'milliseconds' })).to.be.a.Number;
  });

  it('formats date when requested', function () {
    expect(enhancedDate.getDate({ format: 'formatted' }))
      .to.equal('Monday, June 13');
  });

  it('returns the day name for the set date', function () {
    expect(enhancedDate.getDayName()).to.equal('Monday');
  });

  it('returns the month name for the set date', function () {
    expect(enhancedDate.getMonthName()).to.equal('June');
  });

  it('returns true if the stored date is today', function () {
    var today = new Date();
    enhancedDate.setDate(today);
    expect(enhancedDate.isToday()).to.be.true;
  });

  it('returns false if the stored date is before isFuture is called', function () {
    var now = new Date();
    enhancedDate.setDate(now);
    expect(enhancedDate.isFuture()).to.be.false;
  });
});