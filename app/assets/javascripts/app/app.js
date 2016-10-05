angular
  .module('app', ['ui.router', 'templates'])
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/',
        template: 'home_controller_template.html',
        controller: 'HomeController as ctrl'
      });
    $urlRouterProvider.when('', '/');
  })