import CatalogController from './catalog.controller'

export default {
  name : 'catalog',
  config : {
    bindings: {  selected: '<' },
    template:  require('./catalog.html'),
    controller: CatalogController
  }
};
