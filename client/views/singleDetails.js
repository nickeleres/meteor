//client/views/singleDetails.js

Router.route('singleDetails', {
	path: '/speakers/singleDetails/:_id',
	template: 'singleDetails',
	data: function(){
		var pojo = Speakers.findOne({_id: this.params._id});
		pojo.details = singleDetails.find({speakerId: this.params._id});
		return pojo;
	},
	onBeforeAction: function(){
		console.log(this.params._id);
		this.next();
	}
});

Template.singleDetails.events({
	'submit form': function(e){
		e.preventDefault();

		var detail = {
			location: $(e.target).find('[name = location]').val(),
			number: $(e.target).find('[name = number]').val(),
			occasion: $(e.target).find('[name = occasion]').val(),
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