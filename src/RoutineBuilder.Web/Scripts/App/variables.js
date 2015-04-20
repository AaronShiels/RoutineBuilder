(function () {
    'use strict';

    angular
        .module('app')
        .directive('rbVariables', variables);

    function variables() {
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: '/Templates/rbVariables.html',
            scope: {
                routineId: '=',
                variables: '='
            },
            controllerAs: 'ctrl',
            controller: variablesController,
            bindToController: true
        }

        return directive;
    }

    variablesController.$inject = ['localStorageService'];
    function variablesController(localStorageService) {
        this.isCollapsed = true;

        this.save = function () {
            //localStorageService.set(this.routineId, this.variables);
            //console.log('fuckenSaved');
        };
    }
})();