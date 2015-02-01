//client/views/singlePost.js

Router.route('speaker', {
	path:'/speakers/:_id',
	template: 'speaker',
	data: function(){
		return Speakers.findOne(this.params._id);
	},

	onBeforeAction: function(){
		console.log('speaker route has run');
		Session.set('selectedDocId', this.params._id);
		console.log(this.params._id);
		this.next();
	}
});

Template.speaker.helpers({

	editingDoc: function(){
		return Speakers.findOne({_id: Session.get('selectedDocId')});
	}

});

Template.speaker.events({

	'click .single-speaker-info a': function(ev, speaker){
		ev.preventDefault();
		Session.set('selectedDocId', this._id);
		console.log(this._id);
	}
})
