/**=========================================================
 * Module: colors.js
 * Services to retrieve global colors
 =========================================================*/

angular.module('<%= scriptAppName %>').factory('colors', ['APP_COLORS', function(colors) {
  'use strict';
  return {
    byName: function(name) {
      return (colors[name] || '#fff');
    }
  };

}]);
