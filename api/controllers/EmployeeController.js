/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing employees
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    index: function (req, res) {
	
	
	
	var socket = req.socket;
    var io = sails.io;
	
	  io.sockets.emit('message', {thisIs: 'theMessage'});
	
	console.log('hello from api/employe controller');
	
	
    res.view(null, {
        title: "Employee"
		
		
    });
	
  }
  
};

