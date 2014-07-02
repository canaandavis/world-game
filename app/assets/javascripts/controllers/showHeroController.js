// Show singel hero controller

heroesApp.controller('showHeroController',
  ['$scope', '$routeParams', 'HeroFactory', 'HeroesFactory',
  'LocalStorageFactory',
  function($scope, $routeParams, HeroFactory, HeroesFactory,
    LocalStorageFactory){

    $scope.pageClass = "pageHeroShow";
    $scope.params = $routeParams;

    $scope.addHeroToTeam = function() {
      HeroesFactory.addToTeam($scope.hero);
    };

    $scope.confirmIfHero = function(hero){
      console.log(hero.id);
      return HeroesFactory.onTeam(hero.id);
    };

    $scope.removeHeroFromTeam = function(hero){
      HeroesFactory.removeFromTeam(hero.id);
    };

    // Return Hero

    var id = $routeParams.id;
    var chartOptions = {animateRotate : false};
    HeroFactory.getHero(id).then(function(request){
      $scope.hero = request.data;

      if (!$scope.hero.local) {
        console.log('hi');
        LocalStorageFactory.addLocalStorage('heroes', $scope.hero);
      }

      // Strength Chart

      var strengthData = [
        {
          value: $scope.hero.strength,
          color:"#fa2bfb"
        },
        {
          value : (100 - $scope.hero.strength),
          color : "#fff"
        }
      ];
      var ctx = document.getElementById("strength").getContext("2d");
      new Chart(ctx).Doughnut(strengthData, chartOptions);

      // Intellect Chart

      var intellectData = [
        {
          value: $scope.hero.intellect,
          color:"#bb37f7"
        },
        {
          value : (100 - $scope.hero.intellect),
          color : "#fff"
        }
      ];
      var ctx = document.getElementById("intellect").getContext("2d");
      new Chart(ctx).Doughnut(intellectData, chartOptions);

      // Agility Chart

      var agilityData = [
        {
          value: $scope.hero.agility,
          color:"#102fe2"
        },
        {
          value : (100 - $scope.hero.agility),
          color : "#fff"
        }
      ];
      var ctx = document.getElementById("agility").getContext("2d");
      new Chart(ctx).Doughnut(agilityData, chartOptions);

      // Dexterity Chart

      var dexterityData = [
        {
          value: $scope.hero.dexterity,
          color:"#72bbf9"
        },
        {
          value : (100 - $scope.hero.dexterity),
          color : "#fff"
        }
      ];
      var ctx = document.getElementById("dexterity").getContext("2d");
      new Chart(ctx).Doughnut(dexterityData, chartOptions);
    });

}]);
