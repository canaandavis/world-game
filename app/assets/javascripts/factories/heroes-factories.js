// Factory to return all Heroes

heroesApp.factory('HeroesFactory', ['$http', function($http){
  factory = {};
  var team = [];

  var locateHero = function(id){
    for (var i in team) {
      if (team[i].id === id) {
        return i
      }
    }
    return false;
  };
  factory.onTeam = function(id){
    if(locateHero(id)) {
      return true;
    }
    else {
      return false;
    }
  }
  factory.getHeroes = function(){
    var request = $http.get('/api/heroes');
    return request;
  };
  factory.getTeam = function(){
    return team;
  };
  factory.addToTeam = function(data){
    if (team.length < 4 && !locateHero(data.id)) {
      team.push(data);
    }
  };
  factory.removeFromTeam = function(id){
    var index = locateHero(id);
    console.log(index);
    if (index) {
      team.splice(index, 1);
    }
  };

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
