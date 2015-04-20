(function () {
    'use strict';

    angular
        .module('app')
        .controller('ViewController', ViewController);

    ViewController.$inject = ['routineId', 'routineDefinition'];
    function ViewController(routineId, routineDefinition) {
        this.routineId = routineId;
        this.routineDefinition = routineDefinition;
        this.variables = {
            'benchPressTrainingMax': 122.5,
            'squatTrainingMax': 0,
            'deadliftTrainingMax': 182.5,
            'overheadPressTrainingMax': 57.5
        };
    }
})();