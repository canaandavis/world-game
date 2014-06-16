var heroesApp = angular.module('heroesApp', ['ngRoute']);

heroesApp.config(function($routeProvider){
  $routeProvider
    .when('/splash', {
      templateUrl: '../templates/page-splash.html',
      controller: 'splashController'
    })
    .when('/intro', {
      templateUrl: '../templates/page-intro.html',
      controller: 'introController'
    })
    .when('/index', {
      templateUrl: '../templates/page-index-heroes.html',
      controller: 'indexHeroesController'
    })
    .when('/show', {
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
});

// Factory =============================

heroesApp.factory('HeroesFactory', ['$http', function($http){
  factory = {};
  factory.getHeroes = function(){
    var request = $http.get('/api/heroes');
    return request;
  }
  return factory;
}])

