(function () {
    'use strict';

    angular
        .module('app')
        .directive('rbDisplay', display);

    function display() {
        var directive = {
            restrict: 'E',
            replace: true,
            templateUrl: '/Templates/rbDisplay.html',
            scope: {
                variables: '=',
                routineDefinition: '='
            },
            controllerAs: 'ctrl',
            controller: displayController,
            bindToController: true
        };

        return directive;
    }

    displayController.$inject = ['formulaService'];
    function displayController(formulaService) {
        this.getColourForExercise = function (name) {
            for (var i = 0; i < this.routineDefinition.colourCoding.length; i++)
                if (this.routineDefinition.colourCoding[i].exerciseName == name)
                    return this.routineDefinition.colourCoding[i].hexCode;
        };

        this.applyFormula = function (weightFormula) {
            var extractFormulaValues = function (weightFormulaObj, availableVariables) {
                var formulaValuesArray = [];
                for (var prop in weightFormula)
                    if (weightFormula.hasOwnProperty(prop))
                        if (prop == 'variable' && availableVariables[weightFormula[prop]])
                            formulaValuesArray.push(availableVariables[weightFormula[prop]]);
                        else if (prop != 'descriminator')
                            formulaValuesArray.push(weightFormula[prop]);

                return formulaValuesArray;
            };

            if (!weightFormula)
                return;

            var formula = formulaService.getByDescriminator(weightFormula.descriminator);
            var availableVariables = this.variables;
            var formulaValues = extractFormulaValues(weightFormula, availableVariables);

            return formula.apply(formula, formulaValues);
        };
    }
})();

