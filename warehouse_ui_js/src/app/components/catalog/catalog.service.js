class CatalogService {

  constructor($resource) {
    'ngInject';
    this._$resource = $resource;
  }

  loadCatalog() {
    let itemsResource = this._$resource('http://127.0.0.1:8081/i1tem');
    return itemsResource.query();
  }
}

export default CatalogService;