// Index Heros Controller

heroesApp.controller('indexHeroesController', ['$scope', 'HeroesFactory', '$rootScope', function($scope, HeroesFactory, $rootScope){
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
  }

  var updateTeamStats = function(team) {
    $scope.teamStrength = 0;
    $scope.teamIntellect = 0;
    $scope.teamAgility = 0;
    $scope.teamDexterity = 0;

    if (team.length > 0) {
      for (var i in team) {
        $scope.teamStrength += team[i].strength;
        $scope.teamIntellect += team[i].strength;
        $scope.teamAgility += team[i].agility;
        $scope.teamDexterity += team[i].dexterity;
      }
      $scope.teamStrength = ($scope.teamStrength / team.length).toFixed(1);
      $scope.teamIntellect = ($scope.teamIntellect / team.length).toFixed(1);
      $scope.teamAgility = ($scope.teamAgility / team.length).toFixed(1);
      $scope.teamDexterity = ($scope.teamDexterity / team.length).toFixed(1);
    }
  }

  // var updateTeamStats = function(team) {
  //   var strength = 0;
  //   var intellect = 0;
  //   var agility = 0;
  //   var dexterity = 0;

  //   if (team.length > 0) {
  //     for (var i in team) {
  //       strength += team[i].strength;
  //       intellect += team[i].intellect;
  //       agility += team[i].agility;
  //       dexterity += team[i].dexterity;
  //     }

  //     var teamData = [
  //       {
  //         value: (strength / team.length),
  //         color:"#fa2bfb"
  //       },
  //       {
  //         value : (intellect / team.length),
  //         color : "#bb37f7"
  //       },
  //       {
  //         value : (agility / team.length),
  //         color : "#102fe2"
  //       },
  //       {
  //         value : (dexterity / team.length),
  //         color : "#72bbf9"
  //       }
  //     ]
  //   }
  //   else {
  //     var teamData = [
  //       {
  //         value: 100,
  //         color:"#fff"
  //       }
  //     ]
  //   }
  //     var ctx = document.getElementById("team-stats").getContext("2d");
  //     console.log(ctx);
  //     new Chart(ctx).Doughnut(teamData);

  // }



}]);
