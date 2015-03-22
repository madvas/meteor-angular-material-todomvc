angular.module('meteor-angular-material-todomvc',[
    'angular-meteor',
    'ui.router',
    'ngMaterial'
]);

function onReady() {
    angular.bootstrap(document, ['meteor-angular-material-todomvc']);
}

if (Meteor.isCordova)
    angular.element(document).on("deviceready", onReady);
else
    angular.element(document).ready(onReady);

