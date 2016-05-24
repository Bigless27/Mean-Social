(function(){
	angular.module('TimeWaste')
	.controller('NavigationController', ['$scope', '$http',
	 '$state', function($scope, $http, $state)
	 {
	 	//check if user is logged in
	 	if(localStorage['User-Data']){
	 		$scope.loggedIn = true;
	 	}
	 	else{
	 		$scope.loggedIn = false;
	 	};


		$scope.logUserIn= function(){
			$http.post('api/user/login', $scope.login).success(function(response){
				localStorage.setItem('User-Data', JSON.stringify(response))
				console.log('Nav Controller log in')
				$scope.loggedIn = true;
			}).error(function(error){
				console.log('I errored, definetly a problem with the database')
				console.log(error);
			})
		};

		$scope.logOut = function() {
			localStorage.clear();
			$scope.loggedIn = false;
		};

	}])
}())

