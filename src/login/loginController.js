app.controller('loginController', function($scope,$location){

	$scope.username = "";
	$scope.password = "";


	$scope.formSubmit = function() {
		//$scope.name = "muniraja";
		// console.log($scope.username);
		// console.log($scope.password);
		if($scope.username == 'muniraja' && $scope.password == 'muni'){			
			$scope.errorMessage = 'Succesfully logged in';
			$location.path('/home');
		}
		else {
			$scope.errorMessage = 'Enter valid credentials';
		}
	}


})