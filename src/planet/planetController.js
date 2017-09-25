app.controller('planetController', ['$scope','$http','planetService', function($scope,$http,planetService){

	//$scope.planets = "";

	planetService.allPlanet().then(function (response) {

		$scope.planets = response.data.results;
		console.log($scope.planets);
	},
	function (response) {
		console.log('No planets found');
	});


}]);