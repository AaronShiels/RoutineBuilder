﻿(function () {
    'use strict';

    angular
        .module('app')
        .directive('rbDisplay', rbDisplay);

    function rbDisplay() {
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: '/Templates/rbDisplay.html',
            scope: {
                routine: '='
            },
            controllerAs: 'vm',
            controller: DisplayController,
            bindToController: true
        };

        return directive;
    }

    DisplayController.$inject = ['formulas'];
    function DisplayController(formulas) {
        var vm = this;

        vm.getColourForExercise = getColourForExercise;
        vm.applyFormula = applyFormula;

        function getColourForExercise(name) {
            if (vm.routine.metadata.colours.hasOwnProperty(name))
                return vm.routine.metadata.colours[name];
        }

        function applyFormula(weightFormula) {
            if (!weightFormula)
                return;

            var formula = formulas.getByDescriminator(weightFormula.descriminator);
            var availableVariables = vm.routine.variables;

            var formulaValues = extractFormulaValues(weightFormula, availableVariables);

            return formula.apply(formula, formulaValues);

            function extractFormulaValues(weightFormulaObj, availableVariables) {
                var formulaValuesArray = [];
                for (var prop in weightFormula)
                    if (weightFormula.hasOwnProperty(prop))
                        if (prop == 'variable' && availableVariables[weightFormula[prop]])
                            formulaValuesArray.push(availableVariables[weightFormula[prop]]);
                        else if (prop != 'descriminator')
                            formulaValuesArray.push(weightFormula[prop]);

                return formulaValuesArray;
            }
        }
    }
})();

