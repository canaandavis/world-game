// Intro Page Controller

heroesApp.controller('introController', ['$scope', 'ScenariosFactory', '$routeParams', 'LocalStorageFactory', function($scope, ScenariosFactory, $routeParams, $rootScope, LocalStorageFactory){
  $scope.pageClass = "pageIntro";
  $scope.params = $routeParams;

  // Define Scenario

  var id = $routeParams.id;
  console.log(id);
  ScenariosFactory.getScenario(id).then(function(request){
    ScenariosFactory.setScenario(request.data);
    $scope.scenario = ScenariosFactory.currentScenario();
    var scenario = $scope.scenario;
    ScenariosFactory.resolveScenarioLocal(scenario);
  });

}]);
