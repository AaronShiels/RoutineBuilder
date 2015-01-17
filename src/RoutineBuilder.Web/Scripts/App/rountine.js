var routineModule = angular.module('routineModule', []);

routineModule.directive('rbRoutine', [function ()
{
    return {
        restrict: 'E',
        templateUrl: '/Templates/rbRoutine.html',
        scope: {
            name: '=',
        },
        controllerAs: 'ctrl',
        controller: function ()
        {
        },
        bindToController: true
    }
}]);