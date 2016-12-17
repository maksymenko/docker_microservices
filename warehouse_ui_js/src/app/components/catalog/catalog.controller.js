class CatalogController {
  constructor($http, $scope, catalogService) {
    "ngInject";
    this.items = [];
    this.message;

    catalogService.loadCatalog().then(
      (response) => {
        this.items = response
      },
      (err) => {
        this.message = 'error from server' + err;
      }
    );
  }
};

export default CatalogController;