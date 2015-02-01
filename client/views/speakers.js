//client/views/speaker.js

Router.route('speakers',{
	path: '/speakers',
	template: 'speakers'
});

Template.speakers.helpers({
	speakers: function(){
		return Speakers.find({});
	}
});

Template.speakers.events({

	'click #delete': function(ev, speaker){
		Speakers.remove(this._id);
	},

	'click .edit': function(ev, speaker){
		Session.set('selectedDocId', this._id);
	}
});




