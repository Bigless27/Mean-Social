//inject as dependency
var mongoose = require('mongoose');

/*

*/

//first parameter is the name of the dataset
module.exports = mongoose.model('User', {
	email: String,
	username: String,
	password: String,
	image: String,
	bio: String,
	following: ({userId: String, username: String}),
	followers: ({userId: String, username: String})
});
