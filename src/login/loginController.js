app.controller('loginController',['$scope','$location','$http','loginService',
	 function($scope,$location,$http,loginService){
	
	var userValues = {};
	$scope.formSubmit = function() {

		$scope.userValues = {
			username : $scope.username,
			password : $scope.password
		};

	// Ajax logic code ................

		// $http.get("https://api.myjson.com/bins/rvia5")
		//     .then(function(response) {
		//         //First function handles success
		//         $scope.content = response.data;
		//         console.log($scope.content);
		//         if($scope.username == 'muniraja' && $scope.password == 'muni'){			
		// 			$scope.errorMessage = 'Succesfully logged in';
		// 			localStorage.setItem('user', JSON.stringify($scope.userValues));			
		// 			$location.path('/home');
		// 		}
		// 		else {
		// 			$scope.errorMessage = 'Enter valid credentials';
		// 		}
		//     }, function(response) {
		//         //Second function handles error
		//         $scope.content = "Something went wrong";
		//         console.log($scope.content);
		//     });
		
	   
	//Ajax logic through custom service...........

	//     var onSuccess = function (response) {
 //            $scope.user = response.data;
 //            $scope.error = '';
 //            console.log($scope.user);
 //            if($scope.username == $scope.user.username && $scope.password == $scope.user.password ){			
	// 			$scope.errorMessage = 'Succesfully logged in';
	// 			localStorage.setItem('user', JSON.stringify($scope.userValues));			
	// 			$location.path('/home');
	// 		}
	// 		else {				
	// 			$scope.errorMessage = 'Enter valid credentials';
	// 		}
            
 //       };
 //       var onError = function (reason) {
 //            //$scope.error = "Error in retrieving data.";
 //            console.log($scope.error);
 //            console.log('error');
 //            $scope.errorMessage = 'Enter valid credentials';
 //       };
	//    loginService.login().then(onSuccess, onError);			
	// }

	// Ajax logic through custom service on SWap api ...........

	    var onSuccess = function (response) {
            $scope.user = response.data;
            $scope.error = '';            
           var usersArray = $scope.user.results;
           console.log(usersArray);

            for (var i=0; i < usersArray.length; i++) {

		        if (usersArray[i].name == $scope.username && usersArray[i].birth_year == $scope.password ) {			        	
		            //return usersArray[i];
		            console.log(usersArray[i]);
		            $scope.errorMessage = 'Succesfully logged in';
		             console.log('successs');
		             localStorage.setItem('user', JSON.stringify($scope.userValues));			
				   	 $location.path('/home');		            
		        }
		        else {				
					$scope.errorMessage = 'Enter valid credentials';
				}
		    };            
       };

       var onError = function (reason) {
            //$scope.error = "Error in retrieving data.";
            console.log($scope.error);
            console.log('error');
            $scope.errorMessage = 'Enter valid credentials';
       };
	   loginService.login().then(onSuccess, onError);			
	}



}]);






