app.controller('homeController', ['$scope', '$route','$routeParams', '$location',
     function($scope, $route, $routeParams, $location){

    $scope.$location = $location;
        console.log($scope.$location);
    $scope.$route = $route;
        console.log($scope.$route);
    
    $scope.$routeParams = $routeParams;
        console.log($scope.$routeParams);


    $scope.reDirect = function(){
        $location.path('/contact');
    };



}]);