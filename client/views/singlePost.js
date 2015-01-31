//client/views/singlePost.js

Router.route('speaker', {
	path:'/speakers/:_id',
	template: 'speaker',
	data: function(){
		return Speakers.findOne(this.params._id);
	},
	selectedDocId: function(){
		Session.set('selectedDocId', this._id);
	}
});

Template.speaker.helpers({

	editingDoc: function(){
		return Speakers.findOne({_id: Session.get('selctedDocId')});
	}

});

Template.speaker.events({

	'click .single-speaker-info a': function(ev, speaker){
		ev.preventDefault();
		Session.set('selctedDocId', this._id);
	}
})
