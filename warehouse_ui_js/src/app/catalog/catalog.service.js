class CatalogService {

  /* @ngInject */
  constructor($resource) {
    this._$resource = $resource;
  }

  loadCatalog() {
    let itemsResource = this._$resource('http://127.0.0.1:8081/item');
    return itemsResource.query();
  }
}

export default CatalogService;