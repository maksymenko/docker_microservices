class CatalogController {
  /* @ngInject */
  constructor($http, $scope, $mdToast, catalogService) {
    this._$mdToast = $mdToast;

    this.items = catalogService.loadCatalog();
  }

  addItem() {
    this._$mdToast.show(
      this._$mdToast.simple()
        .textContent('Action is not implemented')
        .hideDelay(3000)
        .highlightClass('md-accent'));
  }
}

export default CatalogController;