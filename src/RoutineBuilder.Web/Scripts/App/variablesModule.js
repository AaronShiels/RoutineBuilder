angular.module('variablesModule', [])
    .directive('rbVariables', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/Templates/rbVariables.html',
            scope: {
                variables: '='
            },
            controllerAs: 'ctrl',
            controller: 'variablesCtrl',
            bindToController: true
        }
    })
    .controller('variablesCtrl', function (routineProvider) {
    });