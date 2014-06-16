// Controllers ========================

heroesApp.controller('splashController', ['$scope', function($scope){
  $scope.help = "pageSplasy";
}]);

heroesApp.controller('introController', ['$scope', function($scope){
  $scope.help = "pageIntro";
}]);

heroesApp.controller('indexHeroesController', ['$scope', 'HeroesFactory', function($scope, HeroesFactory){
  $scope.help = "pageHeroesIndex";

  // Return list of all heroes
  HeroesFactory.getHeroes().then(function(request){
    $scope.heroes = request.data;
  });

}]);

heroesApp.controller('showHeroController', ['$scope', '$routeParams', 'HeroFactory', function($scope, $routeParams, HeroFactory){
  $scope.help = "pageHeroeShow";
  $scope.params = $routeParams;

  // Return Hero

  var id = $routeParams.id;
  HeroFactory.getHero(id).then(function(request){
    $scope.hero = request.data;
  });

}]);

heroesApp.controller('playGameController', ['$scope', function($scope){
  $scope.help = "pagePlayGame";
}]);

heroesApp.controller('endGameController', ['$scope', function($scope){
  $scope.help = "pageEndGame";
}]);
