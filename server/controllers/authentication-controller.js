var User = require('../datasets/users')

module.exports.signup = function(req,res){
	var user = new User(req.body);
	user.save();

	res.json(req.body);

}

module.exports.login = function(req,res){
	User.find(req.body, function(err, results){
		if (err){
			console.log("ERROR OUT");
		}
		if (results && results.length === 1){
			console.log("loggin in")
			var userData = results[0];//only object in array

			res.json({email: req.body.email,
						_id: userData._id,
						username: userData.username,
						image: userData.image});//sending back json
			//hey! above is what's being stored in the localStorage
			
		}

	})
}