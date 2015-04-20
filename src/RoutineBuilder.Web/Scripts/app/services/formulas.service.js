(function () {
    'use strict';

    angular
        .module('app')
        .factory('formulas', formulasService)
        .filter('round', roundFilter)
        .filter('weight', weightFilter);
    
    function formulasService() {
        var formulaDictionary = {
            'VariableCoefficientConstant': function (base, coefficient, constant) {
                return base * coefficient + constant;
            }
        };

        var service = {
            getByDescriminator: getByDescriminator
        }
        return service;

        function getByDescriminator(descriminator) {
            return formulaDictionary[descriminator];
        }
    }
    
    function roundFilter() {
        return function (input, increment) {
            var floatVal = parseFloat(input);

            if (isNaN(floatVal))
                return null;
            else
                return (Math.round(floatVal / increment) * increment);
        };
    }

    function weightFilter() {
        return function (input, unit) {
            return input ? (input + " " + unit) : "-";
        }
    }
})();
