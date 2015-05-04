var myapp = angular.module('MyApp', []);

myapp.controller('TaskActionsCtrl', ['$scope', function($scope) {
	
  $scope.currenttasktext = "";
  $scope.taskidcounter = 1;
  $scope.maxtasks = 10;
  $scope.tasks = [];
  
  $scope.addTask = function(){
	  if($scope.taskidcounter > $scope.maxtasks)
		  return;
	  
	  var task = {
		  taskid: $scope.taskidcounter,
		  taskname: $scope.currenttasktext}; 
		  
	  $scope.tasks.push(task);
	  $scope.taskidcounter ++;
	  console.log("Added task: " + $scope.taskidcounter-1);
	  console.log("Task list size: " + $scope.tasks.length);
	  console.log("Task[0]: " + $scope.tasks[0].taskname);
	  
  }
 
}]);


/* 
$scope.returnDivTaskListItem = function(taskname, taskidcounter) {
			var elementString = '<div class="list-group-item" id="' + taskidcounter + '">	<div class="row itemelement-vcenter"><div class="col-sm-1 "><div class="checkbox">'
			+ '<label><input type="checkbox"></label></div></div><div class="col-sm-9 "><h4 class="list-group-item-heading">'+ taskname + 
			'</h4></div><div class="col-sm-1 lisitembuttons"><button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button></div>' +
			'<div class="col-sm-1 lisitembuttons"><button type="button" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></div></div></div>';
	
			taskidcounter ++;
	
	return elementString;
  
  
  };
  
  $scope.addTask = function($scope){
		
	$('#tasklist').append($scope.returnDivTaskListItem($scope.currentTaskText ,$scope.taskidcounter));
  
  };
  
  
  $scope.addTask(); */
  



