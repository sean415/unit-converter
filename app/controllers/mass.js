import ConversionController from 'unit-converter/controllers/conversion';
export default ConversionController.extend({

  conversionUnits: [
    { value: 0.000001, label: 'Micrograms', propertyName: 'micrograms' },
    { value:  0.001, label: 'Miligrams', propertyName: 'miligrams' },
    { value: 1, label: "Grams", propertyName: 'grams' },
    { value: 1000, label: 'Kilograms', propertyName: 'kilograms' },
    { value: 28.3495, label: "Ounces", propertyName: 'ounce' },
    { value: 453.592, label: "Pounds", propertyName: 'pounds' },
    { value: 6350.288, label: "Stone", propertyName: 'stone' },
    { value: 907184, label: "Ton (US)", propertyName: 'usTon' }
  ]

});
