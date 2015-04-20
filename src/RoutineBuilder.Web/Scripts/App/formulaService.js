(function () {
    'use strict';

    angular
        .module('app')
        .factory('formulaService', formulaService)
        .filter('round', round)
        .filter('weight', weight);
    
    function formulaService() {
        var formulas = {
            'VariableCoefficientConstant': function (base, coefficient, constant) {
                return base * coefficient + constant;
            }
        };

        var service = {
            getByDescriminator: getByDescriminator
        }
        return service;

        function getByDescriminator(descriminator) {
            return formulas[descriminator];
        }
    }
    
    function round() {
        return function (input, increment) {
            var floatVal = parseFloat(input);

            if (isNaN(floatVal))
                return null;
            else
                return (Math.round(floatVal / increment) * increment);
        };
    }

    function weight() {
        return function (input, unit) {
            return input ? (input + " " + unit) : "-";
        }
    }
})();
