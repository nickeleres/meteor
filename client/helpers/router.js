//client/router.js

Router.configure({

	layoutTemplate: 'layout'
	
});

var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('home');
  } else {
    this.next();
  }
}

var signInRoute = function(){
	if(!(Meteor.loggingIn() || Meteor.user())){
		this.render('home');
		this.next();
	} else {
		this.render('speakers');
	}
};

Router.onBeforeAction(requireLogin, {except: 'home'});
Router.onBeforeAction(signInRoute, {only: 'home'});