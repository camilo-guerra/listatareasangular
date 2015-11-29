'use strict';

/**
 * @ngdoc function
 * @name listadetareasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the listadetareasApp
 */
angular.module('listadetareasApp')
  .controller('MainCtrl', function ($scope) {
   $scope.tareas = ['item1','item2','item3'];

   $scope.addTarea = function(){
     $scope.tareas.push($scope.tarea);
     $scope.tarea = '';

   };
   $scope.eliminarTarea =function(index){
$scope.tareas.splice(index,1);

   };
  });
