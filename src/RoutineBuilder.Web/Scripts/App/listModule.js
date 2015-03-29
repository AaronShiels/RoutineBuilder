angular.module('listModule', [])
    .directive('rbList', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/Templates/rbList.html',
            scope: {
                routineList: '='
            },
            controllerAs: 'ctrl',
            controller: 'listCtrl',
            bindToController: true
        }
    })
    .controller('listCtrl', function () {
    });