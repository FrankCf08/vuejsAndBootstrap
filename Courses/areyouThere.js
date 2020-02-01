//Carry-on asking till received No
// alert("CONNECTED");
// alert("Game On");

// var answer = prompt("Are you there yet");

// while(answer !== "yes" && answer !== "yeah"){
// 	answer = prompt("Are you there yet");
// }

// alert("YAHH we made it!");


//VERSION 2 to mmake this using str.indexOf(name);

var answer = prompt("Are you there yet?");

while(answer.indexOf("yes") === -1){
	answer = prompt("Are you there yet?");
}

alert("YAHH we made it!");