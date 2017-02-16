import Ember from 'ember';

const ROUTE_TO_TITLE_MAP = {
  'index': 'Unit Converter',
  'mass': 'Mass / Weight',
  'volume': 'Liquid Volume',
  'currency': "Currency",
};

export default Ember.Controller.extend({
  currentPath: '',

  headerTitle: (function() {
    var currentPath = this.get('currentPath') || 'index';
    return ROUTE_TO_TITLE_MAP[currentPath] || '';
  }).property('currentPath'),

  hideNavBar: Ember.computed.equal('currentPath', 'index')

});
