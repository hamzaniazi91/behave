
define(['angular','controllers'], function (angular) {
    'use strict';  
	
    var app =  angular.module('employee', [
        'controllers'
    ]);
    return app;
	io.socket.get("/employee", function(resData, jwres) {console.log(resData);})

}); 