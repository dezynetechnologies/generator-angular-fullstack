'use strict';

angular.module('<%= scriptAppName %>') <%
    if (filters.ngroute) { %> .config(function ($routeProvider) {
            $routeProvider
                .when('/', {
                    templateUrl: 'app/main/main.html',
                    controller: 'MainCtrl'
                });
        }); <%
    } %> <%
if (filters.uirouter) { %> .config(function ($stateProvider, $urlRouterProvider, RouteHelpersProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('main.frontpage', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            })
            .state('main', {
                //url: '/',
                abstract: true,
                templateUrl: 'app/main/app.html',
                resolve: RouteHelpersProvider.resolveFor('modernizr', 'icons')
            })

    }); <%
} %>