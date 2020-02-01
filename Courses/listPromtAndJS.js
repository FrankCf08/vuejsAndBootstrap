//Create a list, View list and Quit

window.setTimeout(function() {
  //alert("Connected");
  var todos = [];

  var input = prompt("What would you like to do?");

  while(input !== "quit"){

  	//Show list
	  if(input === "list"){
	  	console.log(todos);
	  }
	  else if(input === "new"){
	  	var newString = prompt("Enter new Todo");
	  	todos.push(newString);
	  }

	  input = prompt("What would you like to do?");
  }

  console.log("OK, YOU QUIT THE APP");

}, 500);