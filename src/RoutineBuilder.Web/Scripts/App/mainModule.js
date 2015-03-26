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
        this.showOptions = true;

        this.variables = {
            'benchPressTrainingMax': 125,
            'squatTrainingMax': 0,
            'deadliftTrainingMax': 182.5,
            'overheadPressTrainingMax' : 57.5
        };
        this.routineDefinition = routineProvider.getByName('Beyond 531');
    }]);