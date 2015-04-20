(function () {
    'use strict';

    angular
        .module('app')
        .controller('homeController', homeController);

    homeController.$inject = ['routineList'];
    function homeController(routineList) {
        this.routineList = routineList;
    }
})();
