import ConversionController from 'unit-converter/controllers/conversion';
import CommonCurrencies from 'unit-converter/utils/common-currency';

export default ConversionController.extend({
  conversionUnits: (function() {
  	var rates = this.get('model.rates') || [];
    return Object.keys(rates).map(function(rate) {
      return { value: rates[rate], label: rate, propertyName: rate };
    });
  }).property('model.rates'),

  currencies: Ember.computed('model.rates', function() {
    let rates = this.get('model.rates') || [];
    return Object.keys(rates).map((rate) => {
      let currencyDef = CommonCurrencies[rate];
      return {
        value: rate,
        displayName: `${currencyDef.name_plural} (${currencyDef.symbol_native})`
      };
    });
  }),

  setup: (function() {
  	return;
  }).on('init'),

  recalculate: (function() {
  	this.synthesizeComputedProperties();
  }).observes('model.rates')

});
