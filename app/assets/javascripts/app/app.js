angular
  .module('app', ['ui.router', 'templates'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/home_controller_template.html',
        controller: 'HomeController as ctrl'
      });
    $urlRouterProvider.when('', '/');
  })