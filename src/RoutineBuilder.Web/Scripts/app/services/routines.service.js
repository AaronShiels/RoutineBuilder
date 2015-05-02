(function () {
    'use strict';

    angular
        .module('app')
        .factory('routines', routinesService);

    routinesService.$inject = ['$http'];
    function routinesService($http) {
        var service = {
            getList: getList,
            getRoutine: getRoutine
        };
        return service;

        function getList() {
            return $http.get('/routine/').then(function (result) {
                return result.data;
            });
        }

        function getRoutine(id) {
            return $http.get('/routine/' + id).then(function (result) {
                return result.data;
            });
        }
    }
})();