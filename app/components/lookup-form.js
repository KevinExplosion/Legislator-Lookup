import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    lookUpZip() {
      var zipInput = {
        zippy: this.get('zipcode')

      };console.log(zipInput);
      
      this.sendAction('lookUpZip', zipInput);
    }
  }
});
