import angular from 'angular';
import 'angular-ui-grid';

// Import your app stylesheets
import './style.css';
import './ui-grid.min.css';

// Create an angular module named 'app'.
angular.module('app', ['ui.grid']);

angular.module('app').controller('MainCtrl', [
  'uiGridConstants',
  '$scope',
  '$timeout',
  '$http',
  function(uiGridConstants, $scope, $timeout, $http) {
    var ctrl = this;

    $scope.uiGrid = {
      enableSorting: true,
      enableHorizontalScrollbar: uiGridConstants.scrollbars.NEVER,
      enableRowSelection: false,
      enableGridMenu: true,

      enableSelectAll: false,
      enableFiltering: true,
      enableRowHeaderSelection: false,
      showExpandAllButton: false,
      onRegisterApi: function(gridApi) {
        $scope.gridApi = gridApi;

        console.log($scope.gridApi);
        $http.get('https://swapi.dev/api/people').then(function(response) {
          console.log('response: ', response.data.results);
          // ctrl.uiGrid.data = response.data;

        });

        $scope.uiGrid.data = [
          {
            firstName: 'Cox',
            lastName: 'Carney'
          }
        ];
      }
    };

    ctrl.$onInit = function() {
      console.log('hello');
    };
  }
]);

// Bootstrap angular onto the 'app' element, injecting the 'app' module.
angular.bootstrap(document.getElementById('app'), ['app']);
