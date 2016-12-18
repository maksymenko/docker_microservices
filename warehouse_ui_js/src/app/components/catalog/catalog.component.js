import CatalogController from './catalog.controller';
import templateUrl from './catalog.html';

export default {
  name : 'catalog',
  config : {
    bindings: {  selected: '<' },
    template:  templateUrl,
    controller: CatalogController
  }
};
