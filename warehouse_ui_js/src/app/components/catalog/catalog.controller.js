class CatalogController {
  constructor($http, $scope, $mdToast, catalogService) {
    "ngInject";

    this._$mdToast = $mdToast;
    catalogService.loadCatalog().then(
      (response) => {
        this.items = response;
      },
      (err) => {
        this._$mdToast.show(
          this._$mdToast.simple()
            .textContent('Error from serve ' + err)
            .hideDelay(3000)
            .highlightClass('md-accent'));
      }
    );
  }

  addItem() {
    this._$mdToast.show(
      this._$mdToast.simple()
        .textContent('Action is not implemented')
        .hideDelay(3000)
        .highlightClass('md-accent'));
  }
};

export default CatalogController;