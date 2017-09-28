var app = angular.module('myPractice',['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'src/login/login.html',
    controller: 'loginController'
  })  
  .when('/login', {
    templateUrl: 'src/login/login.html',
    controller: 'loginController'
  })
  .when('/home', {
    templateUrl: 'src/home/home.html',
    controller: 'homeController',    
  })
  .when('/planet', {
    templateUrl: 'src/planet/planet.html',
    controller: 'planetController',    
  })
  .when('/planet/planet-details', {
    templateUrl: 'src/planet/planet-details.html',
    controller: 'planetController',    
  })
  .when('/planet/:orbital_period', {
    templateUrl: 'src/planet/planet-details.html',
    controller: 'planetDetailsController',    
  })
  .when('/register', {
    templateUrl: 'src/register/register.html',
    controller: 'registerController'
  })  
  .when('/register/users', {
    templateUrl: 'src/register/users.html',
    controller: 'usersController'
  });
  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});

app.controller('mainController', function($scope,$rootScope,$location){
  
  // logout function 
  
  $rootScope.logOut = function(){
     $rootScope.loggedInUser = JSON.parse(localStorage.getItem('user'));  
     //console.log($rootScope.loggedInUser);     
     localStorage.removeItem('user');
     $location.path('/login');
  }

});


