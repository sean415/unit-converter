import evenRound from 'unit-converter/utils/even-round';

export default Ember.Controller.extend({
  referenceValue: '',
  conversionUnits: [],

  displayUnits: (function() {
    return this.get('conversionUnits').map(function(item) {
      var unit = Ember.Object.create(item);
      unit.set('property', Ember.computed.alias(unit.get('propertyName')));
      return unit;
    });
  }).property('conversionUnits'),

  synthesizeProperty(key, conversionValue) {
    Ember.defineProperty(this, key, Ember.computed('referenceValue', {
      get() {
        if(!this.get('referenceValue')) { return; }
        return evenRound(this.get('referenceValue') / conversionValue, 4);
      },
      set(key, value) {
        this.set('referenceValue', conversionValue * value);
        return value;
      }
    }));
  },

  synthesizeComputedProperties: (function() {
    var props = this.get('conversionUnits');
    props.forEach(function(prop) {
      var key   = prop.propertyName,
          value = prop.value;

      this.synthesizeProperty(key, value);
    }, this);
  }),

  setup: (function() {
    this.synthesizeComputedProperties();
  }).on('init')
});
