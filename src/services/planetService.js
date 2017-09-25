// Planets list service 

app.service('planetService',['$http', function($http) {	
        this.allPlanet = function () {
           return $http({
              method: 'GET',             
              url: 'https://swapi.co/api/planets'             
           });
        } 
}]);
