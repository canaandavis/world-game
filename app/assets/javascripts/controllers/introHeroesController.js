// Index Heros Controller

heroesApp.controller('indexHeroesController', ['$scope', 'HeroesFactory', function($scope, HeroesFactory){
  $scope.pageClass = "pageHeroesIndex";

  // Return list of all heroes
  HeroesFactory.getHeroes().then(function(request){
    $scope.heroes = request.data;
  });

}]);
