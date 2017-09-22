import Ember from 'ember';

export default Ember.Route.extend({
	fb: Ember.inject.service(),
	model() {
    return this.get('fb').api('/me').then((response)=>{
    	alert(response.name);
    });
  }
});
