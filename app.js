import angular from 'angular';
import 'angular-ui-grid';

// Import your app stylesheets
import './style.css';
import './ui-grid.min.css'

// Create an angular module named 'app'.
angular.module('app', ['ui.grid']);

angular.module('app').controller('MainCtrl', function($scope) {

  $scope.myData = [
    {
      firstName: 'Cox',
      lastName: 'Carney'
    }
  ];
});

// Bootstrap angular onto the 'app' element, injecting the 'app' module.
angular.bootstrap(document.getElementById('app'), ['app']);