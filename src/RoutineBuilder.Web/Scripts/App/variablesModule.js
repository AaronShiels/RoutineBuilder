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
        this.variables = localStorage.get(this.routineId) || {
            'benchPressTrainingMax': 122.5,
            'squatTrainingMax': 0,
            'deadliftTrainingMax': 182.5,
            'overheadPressTrainingMax': 57.5
        };
        
        this.save = function () {
            localStorage.set(this.routineId, this.variables);
            console.log('fuckenSaved');
        };
    }]);