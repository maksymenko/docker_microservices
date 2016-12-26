class LayoutController {
  /*@ngInject*/
  constructor($mdSidenav) {
    this._$mdSidenav = $mdSidenav;
  }

  toggleMenu() {
    this._$mdSidenav('layout-left-menu').toggle();
  }
    
}

export default LayoutController;