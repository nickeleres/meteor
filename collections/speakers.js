//collection/speakers.js

Speakers = new Meteor.Collection('speakers');

Speakers.attachSchema(new SimpleSchema({
		first: {
			type: String,
			label: "first name",
			max: 200
		},

		last: {
			type: String,
			label: "last name",
			max: 200
		},

		date: {
			type: Date,
			label: 'date'
		}, 

		userId: {
			type: String,
			autoValue: function(){
				return Meteor.userId();
			}
		}
}));
