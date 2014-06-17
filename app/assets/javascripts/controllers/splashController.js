// Splash Page Controller

heroesApp.controller('splashController', ['$scope', 'ScenariosFactory', function($scope, ScenariosFactory){
  $scope.pageClass = "pageSplash";
  ScenariosFactory.getScenarios().then(function(request){
    $scope.scenarios = request.data;
    $scope.scenarioId = false;
  })
}]);
