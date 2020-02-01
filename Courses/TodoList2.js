window.setTimeout(function(){
	
	var list = [];
	var answer = prompt("What would you like to do?");

	while(answer !== "quit"){

		if (answer === "new") {

			addTodos();

		}else if(answer === "list"){

			printTodo();

		}else if(answer === "delete"){
			deleteTodo();
		}else{
			alert("Wrong choice");
		}

		answer = prompt("What would you like to do?");
	}

	console.log("OK, YOU QUIT THE APP");

	function addTodos(){
		var newString = prompt("Enter new todo");
		list.push(newString);
		console.log(newString + " added to List");
	}

	function printTodo(){

		console.log("*********************");
		list.forEach(function(p, i){
			console.log(i + ": " + p);
			i++;
		});
		console.log("*********************");

	}
	function deleteTodo(){
		// Ask for an index
		var index = prompt("Enter index of todo to delete");
		//Delete item using splice()
		if(index >= 0 && index < list.length){
			list.splice(index, 1);
		}else{
			alert("Index not Found");
		}

		console.log("Todo removed")
	}
},500);