// Splash Page Controller

heroesApp.controller('splashController', ['$scope', 'ScenariosFactory', 'HeroesFactory', function($scope, ScenariosFactory, HeroesFactory){
  $scope.pageClass = "pageSplash";
  ScenariosFactory.getScenarios().then(function(request){
    $scope.scenarios = request.data;
    $scope.scenarioId = false;
    HeroesFactory.resetTeam();
  });
}]);
