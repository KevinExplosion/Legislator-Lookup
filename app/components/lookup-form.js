import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    lookUpZip() {
      var zipInput = {
        zip: this.get('zipcode')
      };
      this.sendAction('lookUpZip', zipInput);
    }
  }
});
