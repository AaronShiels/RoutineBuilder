angular.module('storageProviderModule', [])
    .factory('localStorage', ['$window', function ($window) {
        return {
            set: function (key, value) {
                $window.localStorage[key] = JSON.stringify(value);
            },
            get: function (key) {
                return JSON.parse($window.localStorage[key] || '{}');
            }
        }
    }]);