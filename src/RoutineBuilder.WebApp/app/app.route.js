(function () {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('app', {
              url: '/',
              templateProvider: function($templateCache) {
                  return $templateCache.get('menu.html');
              },
              controller: 'MenuController',
              controllerAs: 'vm'
          })

        .state('app.home', {
            url: '^/home',
            template: '<h1>Hello Home</h1>',
            controller: 'HomeController'
        });

        $urlRouterProvider.otherwise('/');
    }
})();