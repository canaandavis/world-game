// Factory to return localStorage item

heroesApp.factory('LocalStorageFactory', ['$q', function($q){
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
    object.local = true;
    itemLocal[object.id] = object;
    localStorage.setItem(item, JSON.stringify(itemLocal));
  };

  factory.mockPromiseReturn = function(obj) {
    var myPromise = $q.defer();
    myPromise.resolve({
      data: obj
    });
    return myPromise.promise;
  };

  return factory;

}]);
