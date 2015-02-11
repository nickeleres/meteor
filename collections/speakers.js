//collection/speakers.js

Speakers = new Meteor.Collection('speakers');

Speakers.attachSchema(new SimpleSchema({
		title: {
			type: String,
			label: "list title",
			max: 200
		},

		date: {
			type: Date
		},

		userId: {
			type: String,
			autoValue: function(){
				return Meteor.userId();
			}
		}
}));
