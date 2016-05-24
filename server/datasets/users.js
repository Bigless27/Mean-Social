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
	bio: String
});
