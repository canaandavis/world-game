// Factory to return all Heroes

heroesApp.factory('HeroesFactory', ['$http', function($http){
  factory = {};
  factory.getHeroes = function(){
    var request = $http.get('/api/heroes');
    return request;
  }
  return factory;
}]);

// Factory to return single hero

heroesApp.factory('HeroFactory', ['$http', 'LocalStorageFactory', function($http, LocalStorageFactory){
  factory = {};

  // Method will check if hero's data exist in local storage
  // will return mocked promise from local storage is so
  // will return http request otherwise

  factory.getHero = function(id){
    var heroLocal = LocalStorageFactory.getLocalStorage('heroes');
    if (heroLocal[id]) {
      return LocalStorageFactory.mockPromiseReturn(heroLocal[id]);
    }
    else {
      var request = $http.get('/api/heroes/' + id);
      return request;
    }
  }
  return factory;
}]);
