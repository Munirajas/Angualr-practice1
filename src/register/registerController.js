app.controller('registerController',['$scope', function ($scope) {

	var userDetails = {};		

	$scope.submitForm = function(){
	//user values are going to be stored in the local storage

		userDetails.firstname = $scope.username;
		userDetails.lastname = $scope.lastname;
		userDetails.Email = $scope.Email;
		userDetails.Password = $scope.Password;
		userDetails.gender = $scope.gender;
		userDetails.adress = $scope.Address;
		//console.log(userDetails);

		var myUsers = [];
		var listedUsers = JSON.parse(localStorage.getItem('newUser'));		
		if (listedUsers == null){				
			myUsers.push(userDetails);
			localStorage.setItem('newUser', JSON.stringify(myUsers));
		}
		else {				
			listedUsers.push(userDetails);
			localStorage.setItem('newUser', JSON.stringify(listedUsers));
		}		
	}


	

}]);