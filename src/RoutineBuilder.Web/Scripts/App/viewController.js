(function () {
    'use strict';

    angular
        .module('app')
        .controller('viewController', viewController);

    viewController.$inject = ['routineId', 'routineDefinition'];
    function viewController(routineId, routineDefinition) {
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