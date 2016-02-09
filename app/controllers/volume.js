import ConversionController from 'unit-converter/controllers/conversion';

export default ConversionController.extend({

  conversionUnits: [
    { value: 0.001, label: 'Mililiters', propertyName: 'mililiters' },
    { value: 1, label: "Liters", propertyName: 'liter' },
    { value: 3.785412, label: "Gallons", propertyName: 'gallon' },
    { value: 0.946352946, label: "Quarts", propertyName: 'quart' },
    { value: 0.473176, label: 'Pints', propertyName: 'pint' },
    { value: 0.24, label: 'US Cups', propertyName: 'cup' },
    { value: 0.0295735, label: 'Fluid Ounces', propertyName: 'floz' },
    { value: 0.0147868, label: 'Table Spoons', propertyName: 'tablespoon' },
    { value: 0.00492892, label: 'Teaspoons', propertyName: 'tsp' },
    { value: 1000, label: 'Cubic Meter', propertyName: 'cubicmeter' }
  ]
});
