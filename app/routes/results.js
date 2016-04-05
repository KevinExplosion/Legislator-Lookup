import Ember from 'ember';

export default Ember.Route.extend({
  model: function(zipInput) {
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=3b10e510ff1b4db3a95ad4cfa6d67214&zip=' + zipInput.zippy;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
