//server/publication.js

Meteor.publish('speakers', function(){

	return Speakers.find();
});

Meteor.publish('singleDetails', function(){

	return singleDetails.find();
});