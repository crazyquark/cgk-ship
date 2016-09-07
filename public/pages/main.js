angular.module('trackingApp')
  .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'MainCtrl',
            label: 'Main'
        });
  });