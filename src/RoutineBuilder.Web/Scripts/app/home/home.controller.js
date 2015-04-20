(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['routineList'];
    function HomeController(routineList) {
        var vm = this;
        vm.routineList = routineList;
    }
})();
