(function () {
    'use strict';

    angular
        .module('app')
        .directive('rbList', rbList);

    function rbList() {
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: '/Templates/rbList.html',
            scope: {
                routineList: '='
            },
            controllerAs: 'vm',
            controller: ListController,
            bindToController: true
        };

        return directive;
    }

    function ListController() {
        var vm = this;
    }
})();