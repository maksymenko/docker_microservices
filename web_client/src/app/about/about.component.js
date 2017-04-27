import AboutController from './about.controller';
import aboutTemplate from './about.html';

export default {
  name : 'about',
  config : {
    template: aboutTemplate,
    controller: AboutController
  }
};
