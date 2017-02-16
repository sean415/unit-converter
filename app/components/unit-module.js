export default Ember.Component.extend({
  layoutName: 'components/unit-module',
  classNames: 'unit-module',
  inputId: (function() {
    return this.get('label').replace(/[^a-z09\s]/ig, '').camelize();
  }).property('label')
});
