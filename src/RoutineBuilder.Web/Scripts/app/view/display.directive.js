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
            controllerAs: 'ctrl',
            controller: DisplayController,
            bindToController: true
        };

        return directive;
    }

    DisplayController.$inject = ['formulas'];
    function DisplayController(formulas) {
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

            var formula = formulas.getByDescriminator(weightFormula.descriminator);
            var availableVariables = this.variables;
            var formulaValues = extractFormulaValues(weightFormula, availableVariables);

            return formula.apply(formula, formulaValues);
        };
    }
})();

