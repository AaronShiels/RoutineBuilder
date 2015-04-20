(function () {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider', '$locationProvider'];
    function routeConfig($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/view/:routineId', {
                templateUrl: '/Templates/rbView.html',
                controller: 'ViewController',
                controllerAs: 'ctrl',
                resolve: {
                    routineId: routineIdResolver,
                    routineDefinition: routineDefinitionResolver
                }
            })
            .when('/', {
                templateUrl: '/Templates/rbHome.html',
                controller: 'HomeController',
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

    routineDefinitionResolver.$inject = ['$route', 'routines'];
    function routineDefinitionResolver($route, routines) {
        return routines.getRoutine($route.current.params.routineId);
    }

    routineListResolver.$inject = ['routines'];
    function routineListResolver(routines) {
        return routines.getList();
    }
})();