//client/views/home.js

Template.home.helpers({

	speakers: function(){
		return Speakers.find({});
	}
});

Router.route('home', {
	path: '/',
	template: 'home'
});