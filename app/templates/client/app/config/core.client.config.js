'use strict';

// Configuring the Core module
angular.module('<%= scriptAppName %>').run(['Menus',
  function (Menus) {

            // Add default menu entry
            Menus.addMenuItem('sidebar', 'Home', 'home', null, '/home', true, null, null, 'icon-home');

  }
]).config(['$ocLazyLoadProvider', 'APP_REQUIRES', function ($ocLazyLoadProvider, APP_REQUIRES) {
        // Lazy Load modules configuration
        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: APP_REQUIRES.modules
        });

}]).config(['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
  function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
            // registering components after bootstrap
            angular.module('<%= scriptAppName %>').controller = $controllerProvider.register;
            angular.module('<%= scriptAppName %>').directive = $compileProvider.directive;
            angular.module('<%= scriptAppName %>').filter = $filterProvider.register;
            angular.module('<%= scriptAppName %>').factory = $provide.factory;
            angular.module('<%= scriptAppName %>').service = $provide.service;
            angular.module('<%= scriptAppName %>').constant = $provide.constant;
            angular.module('<%= scriptAppName %>').value = $provide.value;

}]).config(['$translateProvider', function ($translateProvider) {

        $translateProvider.useStaticFilesLoader({
            prefix: 'assets/i18n/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useLocalStorage();

}])
    .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {

        cfpLoadingBarProvider.includeBar = true;
        cfpLoadingBarProvider.includeSpinner = false;
        cfpLoadingBarProvider.latencyThreshold = 500;
        cfpLoadingBarProvider.parentSelector = '.wrapper > section';
}]);