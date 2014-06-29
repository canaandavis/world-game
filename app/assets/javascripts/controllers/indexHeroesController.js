// Index Heros Controller

heroesApp.controller('indexHeroesController', ['$scope', 'HeroesFactory', '$rootScope', '$location', function($scope, HeroesFactory, $rootScope, $location){
  $scope.pageClass = "pageHeroesIndex";

  // Return list of all heroes
  HeroesFactory.getHeroes().then(function(request){
    $scope.heroes = request.data;
    $scope.team = HeroesFactory.getTeam();
    updateTeamStats($scope.team);
  });

  $scope.removeHero = function(id){
    if (id) {
      HeroesFactory.removeFromTeam(id);
      $scope.team = HeroesFactory.getTeam();
    }
    updateTeamStats($scope.team);
  };

  $scope.addHero = function(hero){
    console.log("dbl");
    if(hero) {
      HeroesFactory.addToTeam(hero);
      $scope.team = HeroesFactory.getTeam();
    }
    updateTeamStats($scope.team);
  };

  $scope.showHeroPage = function(path){
    $location.path(path);
  };

  var updateTeamStats = function(team) {
    $scope.teamStrength = 0;
    $scope.teamIntellect = 0;
    $scope.teamAgility = 0;
    $scope.teamDexterity = 0;

    if (team.length > 0) {
      for (var i in team) {
        $scope.teamStrength += team[i].strength;
        $scope.teamIntellect += team[i].intellect;
        $scope.teamAgility += team[i].agility;
        $scope.teamDexterity += team[i].dexterity;
      }
      $scope.teamStrength = ($scope.teamStrength / team.length).toFixed(1);
      $scope.teamIntellect = ($scope.teamIntellect / team.length).toFixed(1);
      $scope.teamAgility = ($scope.teamAgility / team.length).toFixed(1);
      $scope.teamDexterity = ($scope.teamDexterity / team.length).toFixed(1);
    };
  }

}]);
