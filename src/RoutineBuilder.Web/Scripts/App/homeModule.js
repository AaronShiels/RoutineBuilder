angular.module('homeModule', [])
    .controller('homeCtrl', ['routineList', function (routineList)
    {
        this.routineList = routineList;
    }]);