angular.module('viewModule', [])
    .controller('viewCtrl', ['routine', function (routine)
    {
        this.routineDefinition = routine;
        this.variables = {
            'benchPressTrainingMax': 122.5,
            'squatTrainingMax': 0,
            'deadliftTrainingMax': 182.5,
            'overheadPressTrainingMax' : 57.5
        };
    }]);