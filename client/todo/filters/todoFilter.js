angular.module('meteor-angular-material-todomvc').filter('todoFilter', [
    '$location', function($location) {
        return function(input) {
            var filtered = {};
            var path = $location.hash();
            angular.forEach(input, function(todo, id) {
                if (path === 'active') {
                    if (!todo.completed) {
                        filtered[id] = todo;
                    }
                } else if (path === 'completed') {
                    if (todo.completed) {
                        filtered[id] = todo;
                    }
                } else {
                    filtered[id] = todo;
                }
            });
            return filtered;
        };
    }
]);