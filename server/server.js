/* 
	First thing to do is claime these things as dependencies for 
	building out the node server
*/
var express = require ('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path'); //you need to include this to use path

//make our application an instance of express
var app = express();
var authenticationController = require('./controllers/authentication-controller.js')


//last parameter is the name of the mongo database you're using
mongoose.connect('mongodb://localhost:27017/time-waste')

//let express know that we are using these files
//use body parse to take inputted data and parse it for mongo
app.use(bodyParser.json());
app.use('/app',express.static(path.join(__dirname, '../app')))

//
app.get('/', function(req,res){
	//require path
	res.sendFile(path.join(__dirname, '../index.html'));
})

//Authentication
app.post('/api/user/signup', authenticationController.signup);
//login
app.post('/api/user/login', authenticationController.login);


//set up server
app.listen('3000', function(){
	console.log('Listening for local host 3000');
});


