// Index Heros Controller

heroesApp.controller('indexHeroesController', ['$scope', 'HeroesFactory', '$rootScope', function($scope, HeroesFactory, $rootScope){
  $scope.pageClass = "pageHeroesIndex";

  // Return list of all heroes
  HeroesFactory.getHeroes().then(function(request){
    $scope.heroes = request.data;
    console.log($scope.scenario);
  });

}]);
