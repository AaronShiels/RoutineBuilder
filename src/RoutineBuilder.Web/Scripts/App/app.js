angular.module('routineBuilderApp', [
        'routineProviderModule',
        'storageProviderModule',
        'homeModule',
        'listModule',
        'viewModule',
        'variablesModule',
        'displayModule',
        'formulaModule',
        'ui.bootstrap',
        'ngRoute'
])
.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/view/:routineId', {
            templateUrl: '/Templates/rbView.html',
            controller: 'viewCtrl',
            controllerAs: 'ctrl',
            resolve: {
                routineId: ['$route', function($route) {
                    return $route.current.params.routineId;
                }],
                routineDefinition: ['$route', 'routineProvider', function ($route, routineProvider) {
                    return routineProvider.getRoutine($route.current.params.routineId);
                }]
            }
        })
        .when('/', {
            templateUrl: '/Templates/rbHome.html',
            controller: 'homeCtrl',
            controllerAs: 'ctrl',
            resolve: {
                routineList: ['routineProvider', function (routineProvider) {
                    return routineProvider.getList();
                }]
            }
        })
        .otherwise({
            redirectTo: '/'
        });
}]);