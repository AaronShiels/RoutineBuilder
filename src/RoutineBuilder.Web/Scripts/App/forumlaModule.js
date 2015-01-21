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
        return function (input, increment) {
            var floatVal = parseFloat(input);

            if (isNaN(floatVal))
                return null;
            else 
                return (Math.round(floatVal / increment) * increment);
        };
    })
    .filter('weight', function () {
        return function (input, unit) {
            return input ? (input + " " + unit) : "-";
        }
    });