(function () {
    'use strict';

    angular
        .module('app')
        .controller('ViewController', ViewController);

    ViewController.$inject = ['routine'];
    function ViewController(routine) {
        var vm = this;
        vm.routine = routine;
    }
})();