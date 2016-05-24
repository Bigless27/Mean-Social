var mongoose = require('mongoose')//this is need for the mapping to mongo

module.exports = mongoose.model('Wastes', {

	user: String,
	userId: String,
	userImage: String,
	content: String,
	date: {type: Date, default: Date.now}
})
