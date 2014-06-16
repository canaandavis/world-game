var testApp = angular.model('testApp', ['ngRoute']);

testApp.config(function($routeProvider){
  $routeProvider
    .when('/help', {
      templateUrl: '../templates/help.html',
      controller: 'helpController'
    })
});

testApp.controller('helpController', ['$scope', function($scope){
  $scope.help = "HELP ME";
}]);
