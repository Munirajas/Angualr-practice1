var app = angular.module('myPractice',['ngRoute']);


app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/login', {
    templateUrl: 'src/login/login.html',
    controller: 'loginController'
  })
  .when('/home', {
    templateUrl: 'src/home/home.html',
    //controller: 'homeController',    
  })
   .when('/planet', {
    templateUrl: 'src/planet/planet.html',
    controller: 'planetController',    
  })
  .when('/contact', {
    templateUrl: 'src/contact/contact.html',
    controller: 'contactController'
  })
  .otherwise('',{
  	templateUrl: 'src/login/login.html',
    controller: 'loginController'
  });
  // configure html5 to get links working on jsfiddle
  $locationProvider.html5Mode(true);
});


