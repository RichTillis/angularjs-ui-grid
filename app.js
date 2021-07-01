import angular from 'angular';
import '@uirouter/angularjs';
import 'angular-ui-grid';

// Import your app stylesheets
import './style.css';
import './ui-grid.min.css'

// Import your app functionality
import './home'

// Create and bootstrap application
const requires = [
  'ui.router',
  'home',
  'ui.grid'
];

window.app = angular.module('app', requires);

angular.bootstrap(document.getElementById('app'), ['app']);