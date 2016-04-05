import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=3b10e510ff1b4db3a95ad4cfa6d67214&parent_committee';
    return new Ember.RSVP.hash({
      house: Ember.$.getJSON(url + '_id=HSWM').then(function(responseJSON){
        return responseJSON.results;
      }),
      senate: Ember.$.getJSON(url).then(function(responseJSON){
        return responseJSON.results;
      }),
    });
  }
});
    // var committeeChamber = responseJSON.committees.chamber;
    // if(committeeChamber !== "senate") {
    //   return Ember.String.append('<li>'+committeeChamber+'</li>');
    // }
