angular.module('displayModule', [])
    .directive('rbDisplay', function ()
    {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/Templates/rbDisplay.html',
            scope: {
                trainingMaxes: '=',
                routineDefinition: '='
            },
            controllerAs: 'ctrl',
            controller: 'displayCtrl',
            bindToController: true
        }
    })
    .controller('displayCtrl', [function ()
    {
    }]);