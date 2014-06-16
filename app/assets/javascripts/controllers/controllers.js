// Controllers ========================

heroesApp.controller('splashController', ['$scope', function($scope){
  $scope.help = "SPLASH";
}]);

heroesApp.controller('introController', ['$scope', function($scope){
  $scope.help = "INTRO";
}]);

heroesApp.controller('indexHeroesController', ['$scope', 'HeroesFactory', function($scope, HeroesFactory){
  $scope.help = "Heroes Index";

  // Return list of all heroes

  (function(){
    HeroesFactory.getHeroes().then(function(request){
      $scope.heroes = request.data;
    })
  })();

}]);

heroesApp.controller('showHeroController', ['$scope', function($scope){
  $scope.help = "Hero Show";
}]);

heroesApp.controller('playGameController', ['$scope', function($scope){
  $scope.help = "Play Game";
}]);

heroesApp.controller('endGameController', ['$scope', function($scope){
  $scope.help = "End Game";
}]);
