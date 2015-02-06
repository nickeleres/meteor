//client/views/home.js

Router.route('home', {
	path: '/',
	template: 'home'
});


Template.home.helpers({

	speakers: function(){
		return Speakers.find({});
	}
});
