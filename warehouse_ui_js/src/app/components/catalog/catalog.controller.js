class CatalogController {
  constructor($http, $scope, $mdToast, catalogService) {
    "ngInject";

    catalogService.loadCatalog().then(
      (response) => {
        this.items = response;
      },
      (err) => {
        $mdToast.simple()
          .textContent('Error from serve ' + err)
          .hideDelay(3000)
          .highlightClass('md-accent');
      }
    );
  }

  addItem() {
    $mdToast.simple()
      .textContent('Action is not implemented')
      .hideDelay(3000)
      .highlightClass('md-accent');
  }
};

export default CatalogController;