//client/views/singleDetails.js

Router.route('singleDetails', {
	path: '/speakers/singleDetails/:_id',
	template: 'singleDetails',
	data: function(){
		var pojo = Speakers.findOne({_id: this.params._id});
		console.log(pojo);
		pojo.details = singleDetails.find({speakerId: this.params._id});
		return pojo;
	},
	onBeforeAction: function(){
		console.log(this.params._id);
		this.next();
	},
	waitOn: function(){
		// return Meteor.subscribe('Speakers');
		return Meteor.subscribe('singleDetails', function(){
			singleDetails.find({speakerId: this.params.id})
		});
	}
});

Template.singleDetails.events({
	'submit form': function(e){
		e.preventDefault();

		var detail = {
			location: $(e.target).find('[name = location]').val(),
			items: $(e.target).find('[name = items]').val(),
			guests: $(e.target).find('[name = guests]').val(),
			speakerId: $(e.target).find('[name = speakerId]').val()
		}

		singleDetails.insert(detail);
		console.log(detail.speakerId);
	},

	'click #delete': function(e){
		e.preventDefault();

		singleDetails.remove(this._id);
	}
});
