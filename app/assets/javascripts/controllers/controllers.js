// Splash Page Controller

heroesApp.controller('splashController', ['$scope', 'ScenariosFactory', function($scope, ScenariosFactory){
  $scope.pageClass = "pageSplash";
  ScenariosFactory.getScenarios().then(function(request){
    $scope.scenarios = request.data;
    $scope.scenarioId = false;
    $scope.update = function(){
      // console.log(change);
    };
  })
}]);

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

// Index Heros Controller

heroesApp.controller('indexHeroesController', ['$scope', 'HeroesFactory', function($scope, HeroesFactory){
  $scope.pageClass = "pageHeroesIndex";

  // Return list of all heroes
  HeroesFactory.getHeroes().then(function(request){
    $scope.heroes = request.data;
  });

}]);

// Show singel hero controller

heroesApp.controller('showHeroController', ['$scope', '$routeParams', 'HeroFactory', 'LocalStorageFactory', function($scope, $routeParams, HeroFactory, LocalStorageFactory){
  $scope.pageClass = "pageHeroeShow";
  $scope.params = $routeParams;

  // Return Hero

  var id = $routeParams.id;
  HeroFactory.getHero(id).then(function(request){
    $scope.hero = request.data;

    if (!$scope.hero.local) {
      console.log('hi');
      LocalStorageFactory.addLocalStorage('heroes', $scope.hero);
    }
  });

}]);

// Play game controller

heroesApp.controller('playGameController', ['$scope', function($scope){
  $scope.pageClass = "pagePlayGame";
}]);

// End game controller

heroesApp.controller('endGameController', ['$scope', function($scope){
  $scope.pageClass = "pageEndGame";
}]);
