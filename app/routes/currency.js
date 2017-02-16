import Ember from 'ember';
import fetch from 'ember-network/fetch';

export default Ember.Route.extend({
  fastboot: Ember.inject.service(),
  model() {
    let shoebox = this.get('fastboot.shoebox');
    let shoeboxStore = shoebox.retrieve('my-store');
    let isFastBoot = this.get('fastboot.isFastBoot');
    if(isFastBoot || !(shoeboxStore && shoeboxStore.currency_rates)) {
      return fetch('http://api.fixer.io/latest?base=USD')
             .then(function(response) {
               return response.json();
             })
             .then(function(json) {
               json.rates[json.base] = 1;
               if(isFastBoot) {
                 if (isFastBoot && shoebox && !shoeboxStore) {
                   shoeboxStore = {};
                   shoebox.put('my-store', shoeboxStore);
                 }
                 shoeboxStore.currency_rates = json;
               }
               return json;
             });
    } else {
      return shoeboxStore.currency_rates;
    }
  }
});
