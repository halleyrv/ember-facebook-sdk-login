import Ember from 'ember';

export default Ember.Route.extend({
	name:"",
	email:"",
	actions:{
	  loginWithFacebook(){
		  this.get('fb').login('public_profile,email').then((response)=> {
            if (response.authResponse) {
			   this.get('fb').api('/me?fields=id,name,email').then((res)=> {
			  	 alert("Welcome: " + res.name + "your email is " + res.email);
			   });
			}else {
			  console.log('User cancelled login or did not fully authorize.');
			}
        
          });
		}
	},
	beforeModel() {
		
    return this.get('fb').FBInit();
  }
});
