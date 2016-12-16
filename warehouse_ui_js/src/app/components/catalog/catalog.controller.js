class CatalogController {
  constructor() {
    'ngInject';
    this.items = [{
        sku: 'sku_1',
        price: 21.87,
        name: 'name_1',
        description: 'description_1'
    },{
        sku: 'sku_2',
        price: 7834.4,
        name: 'name_2',
        description: 'description_2'
    },{
       sku: 'sku_3',
        price: 45.43,
        name: 'name_3',
        description: 'description_3'
    }];
  }
};

export default CatalogController;