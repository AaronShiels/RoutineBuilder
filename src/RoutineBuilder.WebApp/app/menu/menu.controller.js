(function () {
    'use strict';

    angular
        .module('app')
        .controller('MenuController', menuController);

    function menuController($mdSidenav, api) {
        var vm = this;
        vm.routines = [];
        vm.toggleMenu = toggleMenu;

        loadRoutines();

        function toggleMenu() {
            $mdSidenav('left').toggle();
        }

        function loadRoutines() {
            api
                .routines()
                .then(storeRoutines, handleError);

            function storeRoutines(response) {
                vm.routines = response.data;
            }

            function handleError(response) {

            }
        }
    }
})();