(function () {
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
                variables: '=',
                routineDefinition: '='
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
            for (var i = 0; i < vm.routineDefinition.metadata.colours.length; i++)
                if (vm.routineDefinition.metadata.colours[i].exerciseName == name)
                    return vm.routineDefinition.metadata.colours[i].hexCode;
        }

        function applyFormula(weightFormula) {
            if (!weightFormula)
                return;

            var formula = formulas.getByDescriminator(weightFormula.descriminator);
            var availableVariables = vm.variables;
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

