'use strict';

angular.module('jlistApp')
  .controller('MainCtrl', function($scope, localStorageService, dateFilter) {

    var todosInStore = localStorageService.get('todos');

    $scope.todos = todosInStore || [];

    $scope.$watch('todos', function() {
      localStorageService.set('todos', $scope.todos);
    }, true);

    $scope.addTodo = function() {
      $scope.todos.push({
        taskName: $scope.todo.taskName,
        isDone: false,
        Description: $scope.todo.Description,
        deadLine: $scope.todo.deadLine,
      });
      $scope.todo = '';
    };

    $scope.removeTodo = function(index) {
      $scope.todos.splice(index, 1);
    };

    $scope.setisDone = function(index) {
      $scope.todos[index].isDone = !$scope.todos[index].isDone;
    };

    $scope.getToday = function() {
      var today = 0;
      angular.forEach($scope.todos, function(todo) {
        today += Number(todo.deadLine) === Number(dateFilter(new Date(), 'yyyyMMdd')) ? 1 : 0;
      });
      return today;
    };

    $scope.getTotal = function() {
      return $scope.todos.length;
    };

    $scope.getDead = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.deadLine < Number(dateFilter(new Date(), 'yyyyMMdd')) ? 1 : 0;
      });
      return count;
    };
  });
