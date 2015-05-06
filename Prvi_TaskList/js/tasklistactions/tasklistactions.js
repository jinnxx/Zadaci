var myapp = angular.module('MyApp', []);



// main task list controller
myapp.controller('TaskActionsCtrl', ['$scope', function($scope) {
	// task item editor enabled
  $scope.editorEnabled = -1;
  // input error flag
  $scope.inputerror = false;	
  // input error message
  $scope.errormessage = "";
  $scope.errormessage2ManyTasks = "Limited to 20 tasks!";
  $scope.errormessageEmptyInput = "Enter your task!";
  
  // task name input field model
  $scope.currenttasktext = "";
  // every task has a different id
  $scope.taskidcounter = 1;
  // max number of tasks
  $scope.maxtasks = 20;
  // array for tasks and done tasks
  $scope.tasks = [];
  $scope.donetasks = [];
  
  
  // reset errors method
  $scope.resetErrors = function(){
	  	$scope.inputerror = false;
	  
  }
  
  // add task method
  $scope.addTask = function(){
	  $scope.resetErrors();
		// error checking
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
		
	  
	  // new task
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
	  // focus on the task name input field
	  $( "#inputtask" ).focus();
	  
  }
  // remove/delete active task
  $scope.removeTaskActive = function(index){
		$scope.tasks.splice(index, 1);
		$scope.resetErrors();

		console.log("Task list size: " + $scope.tasks.length);
  }
  
  // remove/delete done task  
  $scope.removeTaskDone = function(index){
		$scope.donetasks.splice(index, 1);
		$scope.resetErrors();

		console.log("Done Task list size: " + $scope.donetasks.length);
  }
  
  // enable edit field for a chosen task
  $scope.enableEditTask = function(index){
	  console.log("Enabling edit for: " + index + ", editablename:" + $scope.tasks[index].editabletaskname + " name: " +  $scope.tasks[index].taskname);
	  $scope.tasks[index].editabletaskname = $scope.tasks[index].taskname;
	  $scope.tasks[index].emptytaskinputerror = false;
	  $scope.inputerror = false;
	  $scope.editorEnabled = index; 
	  console.log("Enabled edit for: " + index + ", editablename:" + $scope.tasks[index].editabletaskname + " name: " +  $scope.tasks[index].taskname);
	  console.log("Focus: " + "#task"+ index);
  }
  // disable edit field for a chosen task
  $scope.disableEditTask = function(){
	  $scope.editorEnabled = -1;  
  }
  // cancel edit for a chosen task
  $scope.cancelEditTask = function(index){
	  console.log("Disabled edit for: " + index + ", editablename:" + $scope.tasks[index].editabletaskname + " name: " +  $scope.tasks[index].taskname);
	  
	  $scope.disableEditTask();	 
	  console.log("Disabled edit for: " + index + ", editablename:" + $scope.tasks[index].editabletaskname);
  }
  
  // save edit for a chosen task
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
  
  // mark task as done (move to done task list)
  $scope.marktaskdone = function(index){
		var donetask = $scope.tasks.splice(index, 1);
		 $scope.donetasks.push(donetask[0]);
		 $scope.resetErrors();
		console.log("Done Task list size: " + $scope.donetasks.length);
		
  }
  // mark task as active (move to active tasks list)
  $scope.marktaskactive = function(index){
		var activetask = $scope.donetasks.splice(index, 1);
		$scope.tasks.push(activetask[0]);
		$scope.resetErrors();
		console.log("Active Task list size: " + $scope.tasks.length);

  }
  // called on change for a task edit field
  // removes error messages (main and for the task)
  $scope.keydownItem = function(index){
		if($scope.tasks[index].editabletaskname){
			$scope.resetErrors();
			$scope.tasks[index].emptytaskinputerror = false;
			return;
		}
	  
	  
  }
  // called on change for the main task name input
  // removes the main error message
    $scope.keydown = function(){
		if($scope.currenttasktext){
			$scope.resetErrors();
			return;
		}  
  }
 
}]);

// outputs the size of the window as it changes
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




  



