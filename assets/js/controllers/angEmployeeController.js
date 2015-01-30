


define(function () {
    return ['$scope', '$http', function($scope, $http) {
      
io.sails.url = 'behave1.cloudcontrolapp.com';
socket = io.connect();
socket.on("employee", function(event){console.log(event);})
socket.get("/employee/find", function(resData, jwres) {console.log(resData);});
	 $scope.predicate = '-id';
$scope.reverse = false;
	 
io.socket.on('employee', function (obj) {
  if(obj.verb === 'created'){
		
		$scope.items.push(obj.data);
		// Add the data to current chatList
		// Call $scope.$digest to make the changes in UI
		$scope.$digest();
	}
});
	  
 

 

 
 

 

        $scope.removeItem = function (data) {
          
            $http['delete']('/employee/' + data.id).success(function() {
              $scope.items.splice($scope.items.indexOf(data), 1);
            });
          
        };
 


      //  $http.get('/employee/find').success(function(data) {
       //   for (var i = 0; i < data.length; i++) {
       //     data[i].index = i;
       //   }
      //    $scope.items = data;
		 
      //  });
		
		
		
	
	  var refreshData = function(callback,req,res) {
    $http.get('/employee/find')
      .success(function (data, status, headers, config) {
       $scope.items = data;
	console.log('hellooooooooooooooooooooooooo frrom angular');
	  
             $scope.items.push(data);
            $scope.displayForm = '';
	
	
   });
};
        

  refreshData();
  
  return {
    get: function () {
      return $scope.items;
    },
    refresh: function(callback) {
      return refreshData(callback);
    }
  };
	
	
	

	
	
	
	
	
		
		  
        function removeModal(){
          $('.modal').modal('hide');          
      }
 
    }];
});