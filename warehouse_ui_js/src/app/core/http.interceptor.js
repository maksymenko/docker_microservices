function httpInterceptor($q, $injector) {
  'ngInject';

  return {
    responseError: function (response) {
      var mdToast = $injector.get("$mdToast");
      mdToast.show(
          mdToast.simple()
              .textContent('Failed to get data from server. Error code: ' + response .status)
              .hideDelay(3000)
              .highlightClass('md-accent'));
      return $q.reject(response);
    }
  };
}


export default httpInterceptor;
