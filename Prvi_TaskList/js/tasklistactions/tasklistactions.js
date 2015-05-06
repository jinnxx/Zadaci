var myapp = angular.module('MyApp', []);




myapp.controller('TaskActionsCtrl', ['$scope', function($scope) {
  $scope.editorEnabled = -1;
  $scope.inputerror = false;	
  $scope.errormessage = "";
  $scope.errormessage2ManyTasks = "Limited to 20 tasks!";
  $scope.errormessageEmptyInput = "Enter your task!";
  
  $scope.currenttasktext = "";
  $scope.taskidcounter = 1;
  $scope.maxtasks = 20;
  $scope.tasks = [];
  $scope.donetasks = [];
  
  $scope.resetErrors = function(){
	  	$scope.inputerror = false;
	  
  }
  
  $scope.addTask = function(){
	  $scope.resetErrors();
	  
		if(!$scope.currenttasktext){
			$scope.inputerror = true;
			$scope.errormessage = $scope.errormessageEmptyInput;
			$( "#inputtask" ).focus();
			return;
		}
		
		if(($scope.tasks.length + $scope.donetasks.length)>=$scope.maxtasks)
		{
			$scope.inputerror = true;
			$scope.errormessage = $scope.errormessage2ManyTasks;
			return;
		}
		
	  
	  
	  var task = {
		  taskid: $scope.taskidcounter,
		  taskname: $scope.currenttasktext,
		  timeofcreation: new Date(),
		  editabletaskname: "", 
		  emptytaskinputerror:false}; 
		  
	  $scope.tasks.push(task);
	  $scope.taskidcounter ++;
	  console.log("Added task: " + $scope.taskidcounter-1);
	  console.log("Task list size: " + $scope.tasks.length);
	  $scope.currenttasktext = "";
	  $( "#inputtask" ).focus();
	  
  }
  
  $scope.removeTaskActive = function(index){
		$scope.tasks.splice(index, 1);
		$scope.resetErrors();

		console.log("Task list size: " + $scope.tasks.length);
  }
  
    
  $scope.removeTaskDone = function(index){
		$scope.donetasks.splice(index, 1);
		$scope.resetErrors();

		console.log("Done Task list size: " + $scope.donetasks.length);
  }
  
  $scope.enableEditTask = function(index){
	  console.log("Enabling edit for: " + index + ", editablename:" + $scope.tasks[index].editabletaskname + " name: " +  $scope.tasks[index].taskname);
	  $scope.tasks[index].editabletaskname = $scope.tasks[index].taskname;
	  $scope.tasks[index].emptytaskinputerror = false;
	  $scope.inputerror = false;
	  $scope.editorEnabled = index; 
	  
	  
	  
	  console.log("Enabled edit for: " + index + ", editablename:" + $scope.tasks[index].editabletaskname + " name: " +  $scope.tasks[index].taskname);
	  console.log("Focus: " + "#task"+ index);
  }
  
  $scope.disableEditTask = function(){
	  $scope.editorEnabled = -1;  
  }
  
  $scope.cancelEditTask = function(index){
	  console.log("Disabled edit for: " + index + ", editablename:" + $scope.tasks[index].editabletaskname + " name: " +  $scope.tasks[index].taskname);
	  
	  $scope.disableEditTask();	 
	  console.log("Disabled edit for: " + index + ", editablename:" + $scope.tasks[index].editabletaskname);
  }
  
  
  $scope.saveEditTask = function(index){
	  
	if(!$scope.tasks[index].editabletaskname){
	  
		$scope.tasks[index].emptytaskinputerror = true;
		console.log("Task name not entered: " + $scope.tasks[index].emptytaskinputerror);
		return;
	}
		  
	  console.log("Saving edit for: " + index + ", editablename:" + $scope.tasks[index].editabletaskname + " name: " +  $scope.tasks[index].taskname);
	  $scope.tasks[index].taskname = $scope.tasks[index].editabletaskname;
	  
	  $scope.disableEditTask();
	  
  }
  
  
  
  
  $scope.marktaskdone = function(index){
		var donetask = $scope.tasks.splice(index, 1);
		
		 $scope.donetasks.push(donetask[0]);
		console.log("Done Task list size: " + $scope.donetasks.length);
		
  }
  
    $scope.marktaskactive = function(index){
		var activetask = $scope.donetasks.splice(index, 1);
		
		$scope.tasks.push(activetask[0]);
		console.log("Active Task list size: " + $scope.tasks.length);

  }
  
  $scope.keydownItem = function(index){
		if($scope.tasks[index].editabletaskname){
			$scope.inputerror = false;
			$scope.tasks[index].emptytaskinputerror = false;
			return;
		}
	  
	  
  }
  
    $scope.keydown = function(){
		if($scope.currenttasktext){
			$scope.resetErrors();
			return;
		}
	  
	  
  }
 
}]);

$(window).resize(function() {
  if ($(this).width() >= 1200) {
    console.log(">1200");
  }
  else if ($(this).width() < 1200 && $(this).width()>= 992) {
    console.log("992<x<1200");
  }
  else if ($(this).width() < 992 && $(this).width()>= 768) {
    console.log("768<x<992");
  }
  else {
	  
	  console.log("<768");
	  
  }
});




  



