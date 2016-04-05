import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    lookUpZip(zipInput) {
      this.transitionTo('results', zipInput.zippy);
    }
  }
});
