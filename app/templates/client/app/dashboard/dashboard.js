'use strict';

angular.module('<%= scriptAppName %>')
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider, RouteHelpersProvider) {
        $stateProvider
            .state('main.dashboard', {
                url: '^/dashboard',
                //abstract : true,
                templateUrl: 'app/dashboard/dashboard.html',
                //controller: 'AppController',
                //resolve: RouteHelpersProvider.resolveFor('modernizr', 'icons', 'screenfull', 'animo', 'sparklines', 'slimscroll', 'classyloader', 'toaster', 'whirl')
                //resolve: RouteHelpersProvider.resolveFor('modernizr', 'icons')
            });
    });