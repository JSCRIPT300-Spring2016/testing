var vent = require('../Vent');
var NavView = require('../NavView');

describe('Views', function () {

  describe('NavView', function () {
    
    var triggerSpy = sinon.spy(vent.prototype, 'trigger');

    before(function () {
      this.$fixture = $('<div id="nav"></div>');
    });

    beforeEach(function () {
      this.$fixture.empty().appendTo($('#fixtures'));
      this.view = new NavView({
        el: '#nav'
      });
    });

    it('triggers an event when click ', function () {
      $('#allTrucks').click();

      expect(triggerSpy).to.have.been.calledWithMatch('allTrucks:selected');
    });

    afterEach(function () {
      this.view.remove();
    });

    after(function () {
      $('#fixtures').empty();
    });
  });
});