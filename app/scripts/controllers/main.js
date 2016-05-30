'use strict';

angular.module('jlistApp')
  .controller('MainCtrl', function($scope, localStorageService) {

    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function() {
      localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTodo = function() {
      $scope.todos.push({
        taskName: $scope.todo,
        isDone: false,
      });
      $scope.todo = '';
    };

    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    };

  });
