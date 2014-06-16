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
});

// Factory =============================

// Factory to return all Heroes

heroesApp.factory('HeroesFactory', ['$http', function($http){
  factory = {};
  factory.getHeroes = function(){
    var request = $http.get('/api/heroes');
    return request.data;
  }
  return factory;
}]);

// Factory to return single hero

heroesApp.factory('HeroFactory', ['$http', 'LocalStorageFactory', '$q', function($http, LocalStorageFactory, $q){
  factory = {};
  factory.getHero = function(id){
    var heroLocal = LocalStorageFactory.getLocalStorage('heroes');
    if (heroLocal[id]) {
      var myPromise = $q.defer();

      heroLocal[id].local = "true";
      myPromise.resolve({
        data: heroLocal[id]
      });
      return myPromise.promise;
    }
    else {
      var request = $http.get('/api/heroes/' + id);
      return request;
    }

  }
  return factory;
}]);

// Factory to return localStorage item

heroesApp.factory('LocalStorageFactory', [function(){
  factory = {};

  factory.getLocalStorage = function(item) {
    var itemLocal = localStorage.getItem(item);
    if (itemLocal) {
      return JSON.parse(itemLocal);
    }
    else {
      localStorage.setItem(item, JSON.stringify({}));
      return JSON.parse(localStorage.getItem(item));
    }
  };

  factory.addLocalStorage = function(item, object) {
    var itemLocal = this.getLocalStorage(item);
    console.log(itemLocal);
    itemLocal[object.id] = object;
    localStorage.setItem(item, JSON.stringify(itemLocal));
  };

  return factory;

}])

