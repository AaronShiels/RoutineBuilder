angular.module('formulaModule', [])
    .factory('formulaProvider', function () {
        var formulas = {
            'VariableCoefficientConstant': function (base, coefficient, constant) {
                return base * coefficient + constant;
            }
        };

        return {
            getByDescriminator: function (descriminator) {
                return formulas[descriminator];
            }
        }
    })
    .filter('round', function () {
        return function (input) {
            var floatVal = parseFloat(input);

            if (isNaN(floatVal))
                return null;
            else 
                return (Math.round(floatVal * 4) / 4).toFixed(2);
        };
    })
    .filter('weight', function () {
        return function (input) {
            return input ? (input + " kg") : "-";
        }
    });