class CatalogController {
  /* @ngInject */
  constructor($http, $scope, $mdToast, catalogService) {
    this._$mdToast = $mdToast;

    this.items = catalogService.loadCatalog();
    this.cnt = 0;
  }

  addItem() {
    this.items.push({
      sku: 'sku_' + this.cnt,
      name: 'name_' + this.cnt,
      description: 'description_' + this.cnt,
      price: this.cnt
    });
    this.cnt++;

    this._$mdToast.show(
      this._$mdToast.simple()
        .textContent('Item created locally')
        .hideDelay(3000)
        .highlightClass('md-accent'));
  }
}

export default CatalogController;