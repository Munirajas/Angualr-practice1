app.controller('planetDetailsController',['$scope','$http','$route','$routeParams', '$location',
	 function($scope,$http,$route,$routeParams, $location){

	 	$scope.value = $routeParams.orbital_period;
	 	console.log($scope.value);
}])