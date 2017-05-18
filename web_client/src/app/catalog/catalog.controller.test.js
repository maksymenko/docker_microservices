import { CatalogModule } from './catalog.module';

describe('Catalog controllert test suite', () => {
  let $controller, $rootScope, $state, $location, $compile;

  beforeEach(() => {
    window.module(CatalogModule);
  });


  beforeEach(() => {
    inject(($injector) => {
      $controller = $injector.get('$controller');
      $rootScope = $injector.get('$rootScope');
      $state = $injector.get('$state');
      $location = $injector.get('$location');
      $compile = $injector.get('$compile');
    });

  });

  describe('Calalog item creation', () => {
    it('get list of items', () => {
      let item = {
        sku: 'skuValue',
        name: 'nameValue',
        description: 'descriptionText',
        price: 12
      };
      let rootScope = $rootScope.$new();

      let catalogServiceSpy = jasmine.createSpyObj('catalogServiceSpy', ['loadCatalog', 'addItem']);
      catalogServiceSpy.loadCatalog.and.returnValue([item]);

      let ctrl = $controller('catalogController', {
        $http: {},
        $scope: rootScope,
        $mdToast: {},
        catalogService: catalogServiceSpy
      });

      rootScope.$digest();

      expect(ctrl.items.length).toEqual(1);
      expect(ctrl.items[0].sku).toEqual(item.sku);
      expect(ctrl.items[0].name).toEqual(item.name);
      expect(ctrl.items[0].description).toEqual(item.description);
      expect(ctrl.items[0].price).toEqual(item.price);
    });
  });
});
