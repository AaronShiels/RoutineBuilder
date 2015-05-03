(function () {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    routeConfig.$inject = ['$routeProvider', '$locationProvider'];
    function routeConfig($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/view/:id', {
                templateUrl: '/Templates/View.html',
                controller: 'ViewController',
                controllerAs: 'vm',
                resolve: {
                    routine: routineResolver
                }
            })
            .when('/', {
                templateUrl: '/Templates/Home.html',
                controller: 'HomeController',
                controllerAs: 'vm',
                resolve: {
                    routineList: routineListResolver
                }
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    routineResolver.$inject = ['$route', 'routines'];
    function routineResolver($route, routines) {
        return routines.getRoutine($route.current.params.id);
    }

    routineListResolver.$inject = ['routines'];
    function routineListResolver(routines) {
        return routines.getList();
    }
})();