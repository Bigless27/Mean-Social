//anonymous function
//
(function(){
	angular.module('TimeWaste', ['ui.router','ngFileUpload'])
	.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise('/'); //fires to index path if none of the routes are hit

		$stateProvider
			.state('signUp',{
				//pass in a url 
				url: "/signup",
				templateUrl: "app/signup/signup.html",
				controller: "SignupController"
			})

			.state('editProfile',{
				url:"/edit-profile",
				templateUrl: 'app/profile/edit-profile-view.html',
				controller: 'EditProfileController'
			})

			.state('main', {
				url: '/',
				templateUrl: 'app/main/main.html',
				controller: 'MainController'

			})
	})
}());