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
	'click #clear-people': function(){
		Session.set('selectedDocId', null);
	},

	'click #delete': function(ev, speaker){
		var id = Session.get('selectedDocId');
		Speakers.remove(this._id);
	}
});




