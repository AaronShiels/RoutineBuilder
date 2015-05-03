(function () {
    'use strict';

    angular
        .module('app')
        .directive('rbVariables', rbVariables);

    function rbVariables() {
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: '/Templates/rbVariables.html',
            scope: {
                variables: '='
            },
            controllerAs: 'vm',
            controller: VariablesController,
            bindToController: true
        }

        return directive;
    }

    VariablesController.$inject = ['localStorage'];
    function VariablesController(localStorage) {
        var vm = this;
        vm.isCollapsed = true;
        vm.save = function () {
            //localStorage.set(this.routineId, this.variables);
            //console.log('fuckenSaved');
        };
    }
})();