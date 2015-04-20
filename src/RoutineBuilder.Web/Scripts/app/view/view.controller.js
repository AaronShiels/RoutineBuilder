﻿(function () {
    'use strict';

    angular
        .module('app')
        .controller('ViewController', ViewController);

    ViewController.$inject = ['routineId', 'routineDefinition'];
    function ViewController(routineId, routineDefinition) {
        var vm = this;
        vm.routineId = routineId;
        vm.routineDefinition = routineDefinition;
        vm.variables = {
            'benchPressTrainingMax': 122.5,
            'squatTrainingMax': 0,
            'deadliftTrainingMax': 182.5,
            'overheadPressTrainingMax': 57.5
        };
    }
})();