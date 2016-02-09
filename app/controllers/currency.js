import ConversionController from 'unit-converter/controllers/conversion';

export default ConversionController.extend({
  conversionUnits: (function() {
  	var rates = this.get('model.rates'),
  	    arr = [];
  	if(!rates) { return arr; }
  	for(let prop in rates) {
  	  arr.push({ value: rates[prop], label: prop, propertyName: prop });
  	}
  	return arr;
  }).property('model.rates'),

  setup: (function() {
  	return;
  }).on('init'),

  recalculate: (function() {
  	this.synthesizeComputedProperties();
  }).observes('model.rates')

});
