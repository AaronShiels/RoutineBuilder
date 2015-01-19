﻿angular.module('displayModule', [])
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
    .controller('displayCtrl', [function ()
    {
    }]);