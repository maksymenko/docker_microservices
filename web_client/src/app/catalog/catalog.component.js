import CatalogController from './catalog.controller';
import catalogTemplate from './catalog.html';

export default {
  name : 'catalog',
  config : {
    bindings: {  selected: '<' },
    template:  catalogTemplate,
    controller: CatalogController
  }
};
