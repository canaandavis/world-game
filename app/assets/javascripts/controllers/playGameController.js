// Play game controller

heroesApp.controller('playGameController', ['$scope', 'HeroesFactory', 'ScenariosFactory',  function($scope, HeroesFactory, ScenariosFactory){
  $scope.pageClass = "pagePlayGame";
  $scope.team = HeroesFactory.getTeam();
  $scope.scenario = ScenariosFactory.currentScenario();
  $scope.weakness = 0;
  $scope.score = 0;


  (function(){
    var weakness = $scope.scenario.weakness;
    for (var i in $scope.team) {
      $scope.weakness += $scope.team[i][weakness];
    };
    if ($scope.weakness > 350) {
      for (var i = 0; i < 35; i ++){
       $scope.score += Math.floor((Math.random() * 10) + 1);
      };
    }
    else if ($scope.weakness > 300) {
      for (var i = 0; i < 25; i ++){
       $scope.score += Math.floor((Math.random() * 10) + 1);
      }
    }
    else if ($scope.weakness > 250) {
      for (var i = 0; i < 15; i ++){
       $scope.score += Math.floor((Math.random() * 10) + 1);
      }
    }
    else {
      for (var i = 0; i < 10; i ++){
       $scope.score += Math.floor((Math.random() * 10) + 1);
      }
    };

  })();

  $scope.playGame = function(){
    if ($scope.score > 100) {
      return true;
    }
    else {
      return false;
    }
  };


}]);
