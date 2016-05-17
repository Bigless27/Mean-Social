//anonymous function
//

(function(){
	angular.module('TimeWaste', ['ui.router'])
	.config(function($stateProvider){
		$stateProvider
			.state('signUp',{
				//pass in a url 
				url: "/signup",
				templateUrl: "app/signup/signup.html",
				controller: "SignupController"
			})
	})
}());