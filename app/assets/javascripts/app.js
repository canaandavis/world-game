var heroesApp = angular.module('heroesApp', ['ngRoute','ngAnimate']);

// heroesApp.run(['$rootScope',function($rootScope){
//   $rootScope.scenario = false,
//   $rootScope.team = [];
// }]);

heroesApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/splash', {
      templateUrl: '../templates/page-splash.html',
      controller: 'splashController'
    })
    .when('/intro/:id', {
      templateUrl: '../templates/page-intro.html',
      controller: 'introController'
    })
    .when('/index', {
      templateUrl: '../templates/page-index-heroes.html',
      controller: 'indexHeroesController'
    })
    .when('/show/:id', {
      templateUrl: '../templates/page-show-hero.html',
      controller: 'showHeroController'
    })
    .when('/play', {
      templateUrl: '../templates/page-play-game.html',
      controller: 'playGameController'
    })
    .when('/end', {
      templateUrl: '../templates/page-end-game.html',
      controller: 'endGameController'
    })
    .otherwise({
      templateUrl: '../templates/page-splash.html',
      controller: 'splashController'
    });
}]);



