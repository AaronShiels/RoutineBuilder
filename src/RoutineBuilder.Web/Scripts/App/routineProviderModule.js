angular.module('routineProviderModule', [])
    .factory('routineProvider', ['$http', function ($http) {
        return {
            getList: function () {
                return $http.get('/routine/list').then(function (result) {
                    return result.data;
                });
            },
            getRoutine: function (id) {
                var routineUrl = '/routine/' + id;

                return $http.get(routineUrl).then(function (result) {
                    return result.data;
                });
            }
        };
    }]);