class CatalogService {

  constructor($http) {
    "ngInject";
    this.http_ = $http;
  }
  loadCatalog() {
    return this.http_.get('http://127.0.0.1:8081/item').
        then(response => response.data);
  }
};

export default CatalogService;