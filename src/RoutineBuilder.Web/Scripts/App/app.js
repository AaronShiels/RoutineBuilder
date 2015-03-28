angular.module('routineBuilderApp', [
        'mainModule',
        'displayModule',
        'routineProviderModule',
        'formulaModule',
        'variablesModule',
        'ui.bootstrap',
        'ngRoute'
])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/:routineId?', {
        templateUrl: '/Templates/rbMain.html',
        controller: 'mainCtrl',
        controllerAs: 'ctrl'
    });
}]);