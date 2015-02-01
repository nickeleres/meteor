//client/views/singlePost.js

Router.route('speaker', {
	path:'/speakers/:_id',
	template: 'speaker',
	data: function(){
		return Speakers.findOne(this.params._id);
	}
});

Template.speaker.helpers({

	editingDoc: function(){
		return Speakers.findOne({_id: Session.get('seelctedDocId')});
	}

});

Template.speaker.events({

	'click .single-speaker-info a': function(ev, speaker){
		ev.preventDefault();
		Session.set('seelctedDocId', this._id);
		
	}
})
