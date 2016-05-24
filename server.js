/* 
	First thing to do is claime these things as dependencies for 
	building out the node server
*/
var express = require ('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path'); //you need to include this to use path
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

//make our application an instance of express/claiming dependencies
var app = express();
var authenticationController = require('./server/controllers/authentication-controller.js')
var profileController = require("./server/controllers/profile-controller")
var wasteController = require("./server/controllers/waste-controller")

//last parameter is the name of the mongo database you're using
mongoose.connect('mongodb://localhost:27017/time-waste')

//let express know that we are using these files
//use body parse to take inputted data and parse it for mongo
//this is how express serves static files
app.use(multipartMiddleware);
app.use(bodyParser.json());
app.use('/app',express.static(path.join(__dirname, '/app')))
app.use('/node_modules', express.static(__dirname + '/node_modules'))
app.use('/uploads', express.static(__dirname + '/uploads'))
//
app.get('/', function(req,res){
	//require path
	res.sendFile(path.join(__dirname, './index.html'));
})

//Authentication
app.post('/api/user/signup', authenticationController.signup);
//login
app.post('/api/user/login', authenticationController.login);


//Profile : These are all endpoints
app.post('/api/profile/editPhoto', multipartMiddleware, profileController.updatePhoto);
app.post('/api/profile/updateUsername', profileController.updateUsername);
app.post('/api/profile/updateBio', profileController.updateBio);


//Wastes : end points
app.post('/api/waste/post', wasteController.postWaste);
app.get('/api/waste/get', wasteController.getWaste);

//set up server
app.listen('3000', function(){
	console.log('Listening for local host 3000');
});


