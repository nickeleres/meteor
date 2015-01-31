
Intros = new Meteor.Collection('intros');

Intros.attachSchema(new SimpleSchema({
		greeting: {
			type: String,
			max: 200
		}
}));

