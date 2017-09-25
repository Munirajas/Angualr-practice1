app.controller('usersController', function($scope){
	
	// uservalues have been stored in local storage
	
	$scope.users = JSON.parse(localStorage.getItem('newUser'));  
	console.log($scope.users);

})