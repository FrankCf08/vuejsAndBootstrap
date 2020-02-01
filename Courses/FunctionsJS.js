// alert("Connected");

function isEven(num){
	if(num%2 === 0){
		return true;
	}
	return false;
	// return num%2 ===0;
}

function factorial(num){
	return num >0? num*factorial(num-1) : 1;
}

//Replace "-"s with "_"s 
//return str
function KebabToSnake(str){
	var newString = str.replace(/-/g, "_");
	return newString;
}