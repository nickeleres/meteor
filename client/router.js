//client/router.js

Router.configure({

	layoutTemplate: 'layout'
	
});

var requireLogin = function(){
	if(! Meteor.user()){
		console.log('denied');
		this.render('accessDenied');
		this.stop();
	}
}

Router.before(requireLogin, {only: 'postSubmit'})