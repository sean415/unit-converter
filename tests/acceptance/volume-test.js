import { test } from 'qunit';
import moduleForAcceptance from 'unit-converter/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | volume');

test('visiting /volume', function(assert) {
  visit('/volume');

  andThen(function() {
    assert.equal(currentURL(), '/volume');
  });
});

test('conversion (metric)', function(assert) {
  visit('/volume');
  andThen(function() {
    fillIn('#liters', 1);
  });
  andThen(function() {
    assert.equal($('#liters').val(), 1);
    assert.equal($('#mililiters').val(), 1000);
  });
});

test('conversion (US)', function(assert) {
  visit('/volume');
  andThen(function() {
    fillIn('#gallons', 1);
  });
  andThen(function() {
    assert.equal($('#gallons').val(), 1);
    assert.equal($('#quarts').val(), 4);
    assert.equal($('#pints').val(), 8);
    assert.equal($('#cupUS').val(), 15.7726);
  });
});
