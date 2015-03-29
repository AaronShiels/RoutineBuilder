angular.module('routineBuilderApp', [
        'routineProviderModule',
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
                routine: ['$route', 'routineProvider', function ($route, routineProvider) {
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