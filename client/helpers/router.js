//client/router.js

Router.configure({

	layoutTemplate: 'layout'
	
});


var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLogin, {only: 'speakers'});