(function(){
	angular.module('TimeWaste')
	.controller('FollowController',['$scope', '$http', function($scope, $http){
		$scope.test = "Bigless the boss of fat kids";
		$http.get('api/users/get').then(function(response){
			$scope.users = response.data;
		})
	}])
}())