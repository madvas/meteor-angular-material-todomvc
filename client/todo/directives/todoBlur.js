angular.module('meteor-angular-material-todomvc').directive('todoBlur', function () {
    return function (scope, elem, attrs) {
        elem.bind('blur', function () {
            scope.$apply(attrs.todoBlur);
        });
    };
});