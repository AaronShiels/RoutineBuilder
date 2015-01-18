angular.module('mainModule', ['displayModule', 'providerModule'])
    .directive('rbMain', function ()
    {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/Templates/rbMain.html',
            scope: {},
            controllerAs: 'ctrl',
            controller: 'mainCtrl',
            bindToController: true
        }
    })
    .controller('mainCtrl', ['routineProviderFactory', function (routineProviderFactory)
    {
        this.trainingMaxes = [{
            'Bench Press': 110,
            'Squat': 0,
            'Deadlift': 162.5,
            'Overhead Press' : 55
        }];
        this.routineDefinition = routineProviderFactory.getRoutineDefinitionByName('Beyond 531');
    }]);