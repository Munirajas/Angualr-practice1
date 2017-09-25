app.service('loginService',['$http', function($http) {	
        this.login = function () {
           return $http({
              method: 'GET',
              //url: 'https://api.myjson.com/bins/rvia5' 
              url: 'https://swapi.co/api/people'             
           });
        } 
}]);


// app.factory('loginService',['$http',function($http){
// 	  this.Users = '';
//       this.errors = '';
//       $http({
//          method: 'GET',
//          url: 'https://api.myjson.com/bins/rvia5',            
//       	}).then(onSuccess, onError);

//         var onSuccess = function (response) {
//           this.Users = response.data;
//           this.errors = '';
//        };
//       var onError = function (reason) {
//           this.users = null;
//           this.errors = "Error in retrieving data.";
//        };
//      } 


// }]);



