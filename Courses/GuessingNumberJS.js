// Get value and convert it into a number
var number =Number( prompt("Guess a number"));

var saveNum = 6;

if(number === saveNum){
	alert("You guess it");
}else if (number > saveNum) {
	alert("Too high, GUES AGAIN");
}else{
	alert("Too low, GUES AGAIN");
}