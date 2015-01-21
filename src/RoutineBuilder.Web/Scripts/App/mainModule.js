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
    .controller('mainCtrl', ['routineProvider', function (routineProvider)
    {
        this.variables = {
            'benchPressTrainingMax': 112.5,
            'squatTrainingMax': 0,
            'deadliftTrainingMax': 170,
            'overheadPressTrainingMax' : 50
        };
        this.routineDefinition = routineProvider.getByName('Beyond 531');
    }]);