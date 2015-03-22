angular.module('meteor-angular-material-todomvc').controller('TodoCtrl', [
    '$scope', '$meteor', '$location',
    function($scope, $meteor, $location) {
        'use strict';
        $scope.location = $location;

        $scope.todos = $meteor.collection(Todos).subscribe('todos');

        $scope.$watch('todos', function() {
            var total = 0;
            var remaining = 0;
            angular.forEach($scope.todos, function(todo) {
                if (!todo) {
                    return;
                }

                total++;
                if (todo.completed === false) {
                    remaining++;
                }
            });
            $scope.totalCount = total;
            $scope.remainingCount = remaining;
            $scope.completedCount = total - remaining;
            $scope.allChecked = remaining === 0;
        }, true);

        $scope.addTodo = function() {
            var newTodo = $scope.newTodo.trim();
            if (!newTodo.length) {
                return;
            }
            $scope.todos.push({
                title     : newTodo,
                completed : false
            });
            $scope.newTodo = '';
        };

        $scope.editTodo = function(todo) {
            $scope.editedTodo = todo;
            $scope.originalTodo = angular.copy($scope.editedTodo);
        };

        $scope.doneEditing = function(todo) {
            var title = todo.title.trim();
            if (!title) {
                $scope.removeTodo(todo);
            }
            $scope.editedTodo = null;
        };

        $scope.revertEditing = function(todo) {
            var index = $scope.todos.indexOf(todo);
            $scope.todos[index] = $scope.originalTodo;
            $scope.doneEditing(todo);
        };

        $scope.removeTodo = function(todo) {
            $scope.todos.splice($scope.todos.indexOf(todo), 1);
        };

        $scope.clearCompletedTodos = function() {
            lodash.remove($scope.todos, 'completed');
        };

        $scope.newTodo = '';
        $scope.editedTodo = null;
    }
]);