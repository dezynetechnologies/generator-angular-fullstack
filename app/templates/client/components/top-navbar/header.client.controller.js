'use strict';

angular.module('<%= scriptAppName %>').controller('HeaderController', ['$scope', 'Auth', 'Menus',
    function ($scope, Auth, Menus) {
        //$scope.authentication = Authentication;

        $scope.isCollapsed = false;
        if (filters.auth) { %>
            $scope.isLoggedIn = Auth.isLoggedIn;
            $scope.isAdmin = Auth.isAdmin;
            $scope.getCurrentUser = Auth.getCurrentUser;

            $scope.logout = function () {
                Auth.logout();
                $location.path('/login');
            }; <%
        } %>

        $scope.menu = Menus.getMenu('topbar');

        $scope.toggleCollapsibleMenu = function () {
            $scope.isCollapsed = !$scope.isCollapsed;
        };

        // Collapsing the menu after navigation
        $scope.$on('$stateChangeSuccess', function () {
            $scope.isCollapsed = false;
        });
    }
]);