import { test } from 'qunit';
import moduleForAcceptance from 'unit-converter/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | mass');

test('visiting /mass', function(assert) {
  visit('/mass');

  andThen(function() {
    assert.equal(currentURL(), '/mass');
  });
});

test('conversion (grams)', function(assert) {
  visit('/mass');
  andThen(function() {
    fillIn('#grams', 1);
  });
  andThen(function() {
    assert.equal($('#grams').val(), 1);
    assert.equal($('#miligrams').val(), 1000);
    assert.equal($('#micrograms').val(), 1000000);
    assert.equal($('#kilograms').val(), 0.001);
  });
});

test('conversion (pounds)', function(assert) {
  visit('/mass');
  andThen(function() {
    fillIn('#pounds', 1);
  });
  andThen(function() {
    assert.equal($('#ounces').val(), 16);
    assert.equal($('#stone').val(), 0.0714);
    assert.equal($('#tonUS').val(), 1/2000);
  });
});
