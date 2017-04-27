import { AboutModule } from './about.module';

describe('AboutModule', () => {
  let $controller, $rootScope, $state, $location, $compile;

  beforeEach(() => {
    window.module(AboutModule);
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

  describe('Module', () => {
    it('About module is available under root /about', () => {
      $location.url('/about');
      $rootScope.$digest();
      expect($state.current.component).toEqual('about');
    });
  });

  describe('Controller', () => {
    let ctrl;
    beforeEach(() => {
      ctrl = $controller('aboutController', {});
    });

    it('method getAuthor return valid string', () => {
      expect(ctrl.getAuthor()).toEqual('First Last Name');
    });
  });

  describe('View', () => {
    let scope, template;

    beforeEach(() => {
      scope = $rootScope.$new();
      template = $compile('<about></about>')(scope);
      scope.$apply();
    });

    it('Contains phrase in div element', () => {
      expect(template.find('div').html()).toEqual('About page author: First Last Name');
    });
  });
});
