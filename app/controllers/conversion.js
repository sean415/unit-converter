export default Ember.Controller.extend({
  referenceValue: '',
  conversionUnits: [],
  synthesizeProperty(key, conversionValue) {
    Ember.defineProperty(this, key, Ember.computed('referenceValue', {
      get() {
        if(!this.get('referenceValue')) { return; }
        return this.get('referenceValue') / conversionValue;
      },
      set(key, value) {
        this.set('referenceValue', conversionValue * value);
        return value;
      }
    }));
    return Ember.computed.alias(key);
  },

  synthesizeComputedProperties: (function() {
    var props = this.get('conversionUnits'),
        key;
    props.forEach(function(prop) {
      var key   = prop.propertyName,
          value = prop.value;

      this.synthesizeProperty(key, value);
      prop.property = Ember.computed.alias(key);
    }, this);
  }).on('init')
});