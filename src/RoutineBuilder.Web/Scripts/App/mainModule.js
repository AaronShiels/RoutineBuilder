angular.module('mainModule', [])
    .controller('mainCtrl', ['$routeParams', 'routineProvider', function ($routeParams, routineProvider)
    {
        this.variables = {
            'benchPressTrainingMax': 122.5,
            'squatTrainingMax': 0,
            'deadliftTrainingMax': 182.5,
            'overheadPressTrainingMax' : 57.5
        };
        this.routineDefinition = routineProvider.getByName('Beyond 531');
    }]);