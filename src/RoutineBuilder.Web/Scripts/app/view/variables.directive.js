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
                routineId: '=',
                variables: '='
            },
            controllerAs: 'ctrl',
            controller: VariablesController,
            bindToController: true
        }

        return directive;
    }

    VariablesController.$inject = ['localStorage'];
    function VariablesController(localStorage) {
        this.isCollapsed = true;

        this.save = function () {
            //localStorage.set(this.routineId, this.variables);
            //console.log('fuckenSaved');
        };
    }
})();