angular.module("meteor-angular-material-todomvc").config([
    '$urlRouterProvider', '$stateProvider', '$locationProvider',
    function($urlRouterProvider, $stateProvider, $locationProvider) {
        'use strict';

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('todo', {
                url         : '/',
                templateUrl : 'client/todo/views/todo.ng.html',
                controller  : 'TodoCtrl'
            });

        $urlRouterProvider.otherwise("/");
    }
]);