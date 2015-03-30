angular.module('viewModule', [])
    .controller('viewCtrl', ['routineId', 'routineDefinition', function (routineId, routineDefinition)
    {
        this.routineId = routineId;
        this.routineDefinition = routineDefinition;
    }]);