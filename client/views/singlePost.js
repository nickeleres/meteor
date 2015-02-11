//client/views/singlePost.js

Router.route('speaker', {
	path:'/speakers/:_id',
	template: 'speaker',
	data: function(){
		return Speakers.findOne(this.params._id);
	},

	onBeforeAction: function(){
		Session.set('selectedDocId', this.params._id);
		console.log(this.params._id);
		this.next();
	},
	waitOn: function(){
		return Meteor.subscribe('speakers', function(){
			Speakers.findOne({_id: this.params._id})
		});
	}
});

Template.speaker.helpers({

	editingDoc: function(){
		return Speakers.findOne({_id: Session.get('selectedDocId')});
	}
});

Template.speaker.events({

	'click .single-speaker-info': function(ev){
		ev.preventDefault();
		Session.set('selectedDocId', this._id);
	}
});