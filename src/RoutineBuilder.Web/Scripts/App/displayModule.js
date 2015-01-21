angular.module('displayModule', [])
    .directive('rbDisplay', function ()
    {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/Templates/rbDisplay.html',
            scope: {
                variables: '=',
                routineDefinition: '='
            },
            controllerAs: 'ctrl',
            controller: 'displayCtrl',
            bindToController: true
        }
    })
    .controller('displayCtrl', ['formulaProvider', function (formulaProvider)
    {
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
            
            var formula = formulaProvider.getByDescriminator(weightFormula.descriminator);
            var availableVariables = this.variables;
            var formulaValues = extractFormulaValues(weightFormula, availableVariables);

            return formula.apply(formula, formulaValues);
        }
    }]);