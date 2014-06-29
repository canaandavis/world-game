// Factory to return all scenarios

heroesApp.factory('ScenariosFactory', ['$http', 'LocalStorageFactory', function($http, LocalStorageFactory){
  factory = {};
  var scenario = false;
  factory.getScenarios = function(){
    var request = $http.get('/api/scenarios');
    return request;
  };
  factory.getScenario = function(id){
    console.log("hello");
    var scenarioLocal = LocalStorageFactory.getLocalStorage('scenarios');
    if (scenarioLocal[id]) {
      return LocalStorageFactory.mockPromiseReturn(scenarioLocal[id]);
    }
    else {
      var request = $http.get('/api/scenarios/' + id);
      return request;
    }
  };
  factory.currentScenario = function() {
    return scenario;
  };

  factory.setScenario = function(data){
    scenario = data;
    console.log(data);
  };

  factory.resolveScenarioLocal = function(scenario){
    if (!scenario.local) {
      LocalStorageFactory.addLocalStorage('scenarios', scenario);
    }
  };
  return factory;
}]);
