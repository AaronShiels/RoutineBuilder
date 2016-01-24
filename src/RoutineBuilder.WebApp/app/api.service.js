(function () {
    'use strict';

    angular
        .module('app')
        .factory('api', api);

    function api($http) {
        return {
            routines: routines
        };

        function routines() {
            return $http.get('/api/routines');
        }
    }
})();