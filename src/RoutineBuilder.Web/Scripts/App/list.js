(function () {
    'use strict';

    angular
        .module('app')
        .directive('rbList', list);

    function list() {
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: '/Templates/rbList.html',
            scope: {
                routineList: '='
            },
            controllerAs: 'ctrl',
            controller: listController,
            bindToController: true
        };

        return directive;
    }

    function listController() {

    }
})();