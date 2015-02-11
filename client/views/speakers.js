//client/views/speaker.js

Router.route('speakers',{
	path: '/speakers',
	template: 'speakers',
	waitOn: function(){
		return Meteor.subscribe('speakers', function(){
			Speakers.findOne({_id:this.params._id})
		});
	}
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
	},

	'submit form': function(ev){
		ev.preventDefault();
		
		var date = new Date();
		var speaker = {

			title: $(ev.target).find('[name = title]').val(),
			date: new Date(),
			userId: $(ev.target).find('[name = userId]').val()
		}

		Speakers.insert(speaker);

		$('.form-group').children().val('');
	}
});


