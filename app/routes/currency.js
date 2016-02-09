import Ember from 'ember';
export default Ember.Route.extend({
  model() {
    return new Ember.RSVP.Promise((resolve) => {
      $.get('//api.fixer.io/latest?base=USD')
        .done((response) => {
          Ember.run.next(() => {
            response.rates[response.base] = 1;
            return resolve(response);
          });
        });
    });
  }
});
