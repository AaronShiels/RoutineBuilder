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

    routineResolver.$inject = ['$q', '$route', 'routines', 'localStorage'];
    function routineResolver($q, $route, routines, localStorage) {
        var routinePromise = routines.getRoutine($route.current.params.id);
        var combinedPromise = routinePromise.then(function (routine) {
            for (var key in routine.variables) {
                if (routine.variables.hasOwnProperty(key)) {
                    routine.variables[key] = localStorage.get(key) || 0;
                }
            }

            return routine;
        });

        return combinedPromise;
    }

    routineListResolver.$inject = ['routines'];
    function routineListResolver(routines) {
        return routines.getList();
    }
})();