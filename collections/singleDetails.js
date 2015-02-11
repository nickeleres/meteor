//collections/singleDetails.js

singleDetails = new Meteor.Collection('singleDetails');

singleDetails.attachSchema(new SimpleSchema({

	location: {
		type: String
	},

	items: {
		type: String
	},

	guests: {
		type: String
	},

	speakerId: {
		type: String
	}

}));
