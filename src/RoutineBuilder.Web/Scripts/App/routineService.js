(function () {
    'use strict';

    angular
        .module('app')
        .factory('routineService', routineService);

    routineService.$inject = ['$http'];
    function routineService($http) {
        var service = {
            getList: getList,
            getRoutine: getRoutine
        };
        return service;

        function getList() {
            return $http.get('/routine/list').then(function (result) {
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