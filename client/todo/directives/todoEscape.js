angular.module('meteor-angular-material-todomvc').directive('todoEscape', function() {
    var ESCAPE_KEY = 27;
    return function(scope, elem, attrs) {
        elem.bind('keydown', function(event) {
            if (event.keyCode === ESCAPE_KEY) {
                scope.$apply(attrs.todoEscape);
            }
        });
    };
});