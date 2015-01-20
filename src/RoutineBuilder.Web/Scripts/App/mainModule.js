angular.module('mainModule', [])
    .directive('rbMain', function ()
    {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/Templates/rbMain.html',
            scope: {},
            controllerAs: 'ctrl',
            controller: 'mainCtrl',
            bindToController: true
        }
    })
    .controller('mainCtrl', ['routineProviderFactory', function (routineProviderFactory)
    {
        this.variables = {
            'benchPressTrainingMax': 110,
            'squatTrainingMax': 0,
            'deadliftTrainingMax': 162.5,
            'overheadPressTrainingMax' : 55
        };
        this.routineDefinition = routineProviderFactory.getRoutineDefinitionByName('Beyond 531');
    }]);