// Factory to return all scenarios

heroesApp.factory('ScenariosFactory', ['$http', 'LocalStorageFactory', function($http, LocalStorageFactory){
  factory = {};
  factory.getScenarios = function(){
    var request = $http.get('/api/scenarios');
    return request;
  };
  factory.getScenario = function(id){
    var scenarioLocal = LocalStorageFactory.getLocalStorage('scenarios');
    if (scenarioLocal[id]) {
      return LocalStorageFactory.mockPromiseReturn(scenarioLocal[id]);
    }
    else {
      var request = $http.get('/api/scenarios/' + id);
      return request;
    }
  };
  return factory;
}]);
