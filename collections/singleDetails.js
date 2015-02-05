//collections/singleDetails.js

singleDetails = new Meteor.Collection('singleDetails');

singleDetails.attachSchema(new SimpleSchema({

	location: {
		type: String,
		label: 'location',
		max: 200,
		optional: true
	},

	number: {
		type: Number,
		label: 'number of attendees',
		max: 200,
		optional: true
	},

	occasion: {
		type: String,
		label: 'occasion for speech'
	},

	speakerId: {
		type: String,
		autoValue: function(){
			return this.params._id;
		}
	}

}));

