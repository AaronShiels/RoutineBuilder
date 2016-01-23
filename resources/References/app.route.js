(function() {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            //Start Routes
            .state('start', {
                url: '/start',
                abstract: true,
                templateProvider: function($templateCache) {
                    return $templateCache.get('start.html');
                }
            })
            .state('start.signin', {
                url: '/signin',
                templateProvider: function($templateCache) {
                    return $templateCache.get('start.signin.html');
                },
                controller: 'SignInController',
                controllerAs: 'vm'
            })
            .state('start.signup', {
                url: '/signup',
                templateProvider: function($templateCache) {
                    return $templateCache.get('start.signup.html');
                },
                controller: 'SignUpController',
                controllerAs: 'vm'

            })

            //Main routes
            .state('main', {
                url: '/main',
                abstract: true,
                templateProvider: function($templateCache) {
                    return $templateCache.get('main.html');
                }
            })

            //Subscription routes
            .state('main.subscriptions', {
                url: '/subscriptions',
                templateProvider: function($templateCache) {
                    return $templateCache.get('main.subscriptions.html');
                },
                abstract: true
            })
            .state('main.subscriptions.list', {
                url: '/list',
                templateProvider: function($templateCache) {
                    return $templateCache.get('main.subscriptions.list.html');
                },
                controller: 'SubscriptionsListController',
                controllerAs: 'vm',
                resolve: {
                    services: servicesResolver
                }
            })
            .state('main.subscriptions.details', {
                url: '/details/:id',
                templateProvider: function($templateCache) {
                    return $templateCache.get('main.subscriptions.details.html');
                },
                controller: 'SubscriptionsDetailsController',
                controllerAs: 'vm',
                resolve: {
                    serviceDetails: serviceDetailsResolver,
                    linkedAccounts: linkedAccountsResolver
                }
            })
            .state('main.subscriptions.link', {
                url: '/link',
                templateProvider: function($templateCache) {
                    return $templateCache.get('main.subscriptions.link.html');
                },
                controller: 'SubscriptionsLinkController',
                controllerAs: 'vm',
                resolve: {
                    linkedAccounts: linkedAccountsResolver
                }
            })

            //Offers routes
            .state('main.offers', {
                url: '/offers',
                templateProvider: function($templateCache) {
                    return $templateCache.get('main.offers.html');
                },
                abstract: true
            })
            .state('main.offers.list', {
                url: '/list',
                templateProvider: function($templateCache) {
                    return $templateCache.get('main.offers.list.html');
                },
                controller: 'OffersListController',
                controllerAs: 'vm',
                resolve: {
                    availableOffers: availableOffersResolver,
                    claimedOffers: claimedOffersResolver
                }
            })
            .state('main.offers.available', {
                url: '/available/:id/:ual',
                templateProvider: function($templateCache) {
                    return $templateCache.get('main.offers.available.html');
                },
                controller: 'OfferAvailableController',
                controllerAs: 'vm',
                resolve: {
                    balance: balanceResolver,
                    availableOfferDetails: availableOfferDetailsResolver
                }
            })
            .state('main.offers.claimed', {
                url: '/claimed/:id/:ual',
                templateProvider: function($templateCache) {
                    return $templateCache.get('main.offers.claimed.html');
                },
                controller: 'OfferClaimedController',
                controllerAs: 'vm',
                resolve: {
                    balance: balanceResolver,
                    claimedOfferDetails: claimedOfferDetailsResolver,
                    lionFinanceDetails: lionFinanceDetailsResolver
                }
            })
           .state('main.offers.tc', {
               url: '/tc/:id/:ual',
               templateProvider: function ($templateCache) {
                   return $templateCache.get('main.offers.tc.html');
               },
               controller: 'OfferTcController',
               controllerAs: 'vm',
               resolve: {
                   claimedOfferDetails: claimedOfferDetailsResolver
               }
           })
            .state('main.offers.payment', {
                url: '/payment/:id/:ual',
                templateProvider: function($templateCache) {
                    return $templateCache.get('main.offers.payment.html');
                },
                controller: 'OfferPaymentController',
                controllerAs: 'vm',
                resolve: {
                    balance: balanceResolver,
                    claimedOfferDetails: claimedOfferDetailsResolver
                }
            })
            .state('main.offers.pending', {
                url: '/pending/:id/:ual',
                templateProvider: function($templateCache) {
                    return $templateCache.get('main.offers.pending.html');
                },
                controller: 'OfferPendingController',
                controllerAs: 'vm',
                resolve: {
                    claimedOfferDetails: claimedOfferDetailsResolver,
                    latestPaymentDetails: latestPaymentDetailsResolver,
                    lionFinanceDetails: lionFinanceDetailsResolver
                }
            })
            .state('main.offers.confirmation', {
                url: '/confirmation/:id/:ual',
                templateProvider: function($templateCache) {
                    return $templateCache.get('main.offers.confirmation.html');
                },
                controller: 'OfferConfirmationController',
                controllerAs: 'vm',
                resolve: {
                    latestPaymentDetails: latestPaymentDetailsResolver,
                    lionFinanceDetails: lionFinanceDetailsResolver
                }
            })
            .state('main.offers.failed', {
                url: '/failed/:id/:ual',
                templateProvider: function($templateCache) {
                    return $templateCache.get('main.offers.failed.html');
                },
                controller: 'OfferFailedController',
                controllerAs: 'vm',
                resolve: {
                    latestPaymentDetails: latestPaymentDetailsResolver,
                    lionFinanceDetails: lionFinanceDetailsResolver
                }
            });

        $urlRouterProvider.otherwise('/main/offers/list');
    }

    function availableOffersResolver(api) {
        console.log('Resolving available offers');

        return api.availableOffers()
            .then(returnResults);
    }

    function claimedOffersResolver(api) {
        console.log('Resolving claimed offers');

        return api.claimedOffers()
            .then(returnResults);
    }

    function latestPaymentDetailsResolver($stateParams, api) {
        var offerId = $stateParams.id;
        var ual = $stateParams.ual;

        console.log('Resolving latest payment for UAL: ' + ual + ', OfferId: ' + offerId);

        return api.latestPaymentDetails(offerId, ual)
            .then(returnResults);
    }

    function availableOfferDetailsResolver($stateParams, api) {
        var offerId = $stateParams.id;
        var ual = $stateParams.ual;

        console.log('Resolving available offer for UAL: ' + ual + ', OfferId: ' + offerId);

        return api.availableOfferDetails(offerId, ual)
            .then(returnResults);
    }

    function claimedOfferDetailsResolver($stateParams, api) {
        var offerId = $stateParams.id;
        var ual = $stateParams.ual;

        console.log('Resolving claimed offer for UAL: ' + ual + ', OfferId: ' + offerId);

        return api.claimedOfferDetails(offerId, ual)
            .then(returnResults);
    }

    function balanceResolver($stateParams, api) {
        var ual = $stateParams.ual;

        console.log('Resolving balance for UAL: ' + ual);

        return api.balance(ual)
            .then(returnResults);
    }

    function servicesResolver(api) {
        console.log('Resolving services');

        return api.subscriptions()
            .then(returnResults);
    }

    function serviceDetailsResolver($stateParams, api) {
        var service = $stateParams.id;
        console.log('Resolving service details for service: ' + service);

        return api.subscription(service)
            .then(returnResults);
    }

    function lionFinanceDetailsResolver(api) {
        console.log('Resolving Lion Finance details');

        return api.subscription('lionfinance')
            .then(returnResults);
    }

    function linkedAccountsResolver(api) {
        console.log('Resolving linked accounts');

        return api.linkedAccounts()
            .then(returnResults);
    }

    function returnResults(response) {
        return response.data;
    }

})();