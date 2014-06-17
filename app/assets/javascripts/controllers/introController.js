// Intro Page Controller

heroesApp.controller('introController', ['$scope', 'ScenariosFactory', '$routeParams', '$rootScope', 'LocalStorageFactory', function($scope, ScenariosFactory, $routeParams, $rootScope, LocalStorageFactory){
  $scope.pageClass = "pageIntro";
  $scope.params = $routeParams;

  // Define Scenario

  var id = $routeParams.id;
  console.log(id);
  ScenariosFactory.getScenario(id).then(function(request){
    $rootScope.scenario = request.data;
    console.log(request.data.local)

    if (!$rootScope.scenario.local) {
      console.log('hi');
      LocalStorageFactory.addLocalStorage('scenarios', $rootScope.scenario);
    }
  });

}]);