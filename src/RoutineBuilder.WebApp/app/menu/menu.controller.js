(function () {
    'use strict';

    angular
        .module('app')
        .controller('MenuController', menuController);

    function menuController() {
        var vm = this;
        console.log('MenuController');
    }
})();