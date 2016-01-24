(function () {
    'use strict';

    angular
        .module('app')
        .config(iconConfig);

    function iconConfig($mdThemingProvider, $mdIconProvider) {
        $mdIconProvider
            .defaultIconSet("./images/svg/avatars.svg", 128)
            .icon("menu", "./images/svg/menu.svg", 24)
            .icon("share", "./images/svg/share.svg", 24)
            .icon("google_plus", "./images/svg/google_plus.svg", 512)
            .icon("hangouts", "./images/svg/hangouts.svg", 512)
            .icon("twitter", "./images/svg/twitter.svg", 512)
            .icon("phone", "./images/svg/phone.svg", 512)
            .icon("search", "./images/svg/search.svg", 24);

        $mdThemingProvider.theme('default');
    }
})();