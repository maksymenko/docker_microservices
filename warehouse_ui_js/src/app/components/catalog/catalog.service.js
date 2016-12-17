class CatalogService {

  constructor($http, $q) {
    "ngInject";
    this._$http = $http;
    this._$q = $q;
  }
  loadCatalog() {
    let deferred = this._$q.defer();

    this._$http({
      url: 'http://127.0.0.1:8081/item',
      method: 'GET'
    }).then(
      (response) => deferred.resolve(response.data),
      (err) => deferred.reject(err)
    );
    return deferred.promise;
  }
};

export default CatalogService;