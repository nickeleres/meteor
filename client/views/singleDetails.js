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
			occasion: $(e.target).find('[name = occasion]').val(),
			speakerId: $(e.target).find('[name = speakerId]').val()
		}

		singleDetails.insert(detail);
	}
});