angular.module('variablesModule', [])
    .directive('rbVariables', function () {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/Templates/rbVariables.html',
            scope: {
                routineId: '=',
                variables: '='
            },
            controllerAs: 'ctrl',
            controller: 'variablesCtrl',
            bindToController: true
        }
    })
    .controller('variablesCtrl', ['localStorage', function (localStorage) {
        this.isCollapsed = true;
        
        
        this.save = function () {
            //localStorage.set(this.routineId, this.variables);
            //console.log('fuckenSaved');
        };
    }]);