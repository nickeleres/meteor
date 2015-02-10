//client/views/speaker.js

Router.route('speakers',{
	path: '/speakers',
	template: 'speakers'
});

Template.speakers.helpers({
	speakers: function(){
		return Speakers.find({userId: Meteor.userId()});
	}
});

Template.speakers.events({

	'click #delete': function(ev, speaker){
		Speakers.remove(this._id);
	},

	'click .edit': function(ev, speaker){
		console.log(this._id);
	}
});


var requireLogin = function(){
	if(! Meteor.user()){
		this.render('accessDenied');
		this.stop();
	}
}

Router.onBeforeAction(requireLogin, {only: 'speakers'})

