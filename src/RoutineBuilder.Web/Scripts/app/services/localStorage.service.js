(function () {
    'use strict';

    angular
        .module('app')
        .factory('localStorage', localStorageService);

    localStorageService.$inject = ['$window'];
    function localStorageService($window) {
        var service = {
            set: set,
            get: get
        }
        return service;

        function set(key, value) {
            $window.localStorage[key] = value;
        }

        function get(key) {
            return $window.localStorage[key];
        }
    }
})();