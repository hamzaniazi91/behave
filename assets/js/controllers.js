define(function (require) {
   
  var angular = require('angular'),
      Controllers = angular.module('controllers', []);
   
  Controllers.controller('angEmpController', require('controllers/angEmployeeController'));
   Controllers.controller('angGesController',require('controllers/angGestureController'));
   

  return Controllers;
   
});