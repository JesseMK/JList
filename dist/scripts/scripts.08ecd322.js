"use strict";angular.module("jlistApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.sortable","LocalStorageModule"]).config(["localStorageServiceProvider",function(a){a.setPrefix("ls")}]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("jlistApp").controller("MainCtrl",["$scope","localStorageService","dateFilter",function(a,b,c){var d=b.get("todos");a.todos=d||[],a.$watch("todos",function(){b.set("todos",a.todos)},!0),a.addTodo=function(){a.todos.push({taskName:a.todo.taskName,isDone:!1,Description:a.todo.Description,deadLine:a.todo.deadLine}),a.todo=""},a.removeTodo=function(b){a.todos.splice(b,1)},a.setisDone=function(b){a.todos[b].isDone=!a.todos[b].isDone},a.getToday=function(){var b=0;return angular.forEach(a.todos,function(a){b+=Number(a.deadLine)===Number(c(new Date,"yyyyMMdd"))?1:0}),b},a.getTotal=function(){return a.todos.length},a.getDead=function(){var b=0;return angular.forEach(a.todos,function(a){b+=a.deadLine<Number(c(new Date,"yyyyMMdd"))?1:0}),b}}]),angular.module("jlistApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("jlistApp").controller("ContactCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("jlistApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/contact.html","<p>This is the contact view.</p>"),a.put("views/main.html",'<div class="container"> <h2>J List</h2> <!-- Todos input --> <form role="form" ng-submit="addTodo()" ng-init="editable = false"> <div class="row"> <div class="input-group"> <input type="text" ng-model="todo.taskName" placeholder="What needs to be done?" class="form-control"> <span class="input-group-btn"> <input type="button" class="btn btn-info" value="More" ng-click="editable = !editable"> <input type="submit" class="btn btn-primary" value="Add"> </span> </div> <div class="input-group" ng-show="editable"> <span class="input-group-btn"> <input type="button" class="btn btn-default" value="Tack Description"> </span> <input type="text" ng-model="todo.Description" placeholder="Tack Description" class="form-control"> <span class="input-group-btn"> <input type="button" class="btn btn-default" value="Deadline"> </span> <input type="text" ng-model="todo.deadLine" placeholder="Deadline:yyyymmdd" class="form-control"> </div> </div> </form> <!-- Todo List --> <div ui-sortable ng-model="todos"> <ul class="nav nav-pills" ng-repeat="todo in todos" style="padding:5px 10px; cursor: move" ng-init="detail = false, editable = false"> <span class="input-group-btn"> <button class="btn btn-warning" ng-hide="todo.isDone" ng-click="setisDone($index)" arialabel="notYet!">notYet</button> <button class="btn btn-success" ng-show="todo.isDone" ng-click="setisDone($index)" arialabel="Done!">Done!</button> </span> <span class="input-group-btn"> <input class="btn btn-default" ng-click="details = !details" value="{{todo.taskName}}"> </span> <span class="input-group-btn"> <!-- <button class="btn btn-info" ng-click="editTodo($index)" arialabel="Edit">Edit</button> --> <button class="btn btn-danger" ng-click="removeTodo($index)" arialabel="Remove">X</button> </span> <div class="input-group" ng-show="details"> <span class="input-group-btn"> <input class="btn btn-default" value="Task Description"> <input class="btn btn-default" value="{{todo.Description}}"> </span> </div> <div class="input-group" ng-show="details"> <span class="input-group-btn"> <input class="btn btn-default" value="Deadline"> <input type="text" class="btn btn-default" value="{{todo.deadLine}}"> </span> </div> </ul> </div> <!-- Count --> <div class="list-group"> <div class="input-group"> <input class="btn btn-default" value="Today:"> <input class="btn btn-default" value="{{getToday()}}"> </div> <div class="input-group"> <input class="btn btn-default" value="Total:"> <input class="btn btn-default" value="{{getTotal()}}"> </div> <div class="input-group"> <input class="btn btn-default" value="Dead:"> <input class="btn btn-default" value="{{getDead()}}"> </div> </div> </div>')}]);