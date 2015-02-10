//collections/singleDetails.js

singleDetails = new Meteor.Collection('singleDetails');

singleDetails.attachSchema(new SimpleSchema({

	location: {
		type: String,
		label: 'location',
		max: 200
	},

	number: {
		type: Number,
		label: 'number of attendees',
		max: 2000
	},

	occasion: {
		type: String,
		label: 'occasion for speech'
	},

	speakerId: {
		type: String
	}

}));
