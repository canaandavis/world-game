// Show singel hero controller

heroesApp.controller('showHeroController',
  ['$scope', '$routeParams', 'HeroFactory',
  'LocalStorageFactory',
  function($scope, $routeParams, HeroFactory,
    LocalStorageFactory){

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
