(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];
    function config($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/view/:routineId', {
                templateUrl: '/Templates/rbView.html',
                controller: 'viewController',
                controllerAs: 'ctrl',
                resolve: {
                    routineId: routineIdResolver,
                    routineDefinition: routineDefinitionResolver
                }
            })
            .when('/', {
                templateUrl: '/Templates/rbHome.html',
                controller: 'homeController',
                controllerAs: 'ctrl',
                resolve: {
                    routineList: routineListResolver
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    routineIdResolver.$inject = ['$route'];
    function routineIdResolver($route) {
        return $route.current.params.routineId;
    }

    routineDefinitionResolver.$inject = ['$route', 'routineService'];
    function routineDefinitionResolver($route, routineService) {
        return routineService.getRoutine($route.current.params.routineId);
    }

    routineListResolver.$inject = ['routineService'];
    function routineListResolver(routineService) {
        return routineService.getList();
    }
})();