//Print all numbers between 10 and -19
console.log("Print all numbers between 10 and -19");
var number = 10;

while(number >= -19){
	console.log(number);
	number--;
}

//Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");
number = 10;
while(number <= 40){
	if(number%2 === 0){
		console.log(number);
	}
	number++;
}
//Print all odd number between 300 and 333

console.log("Print all odd number between 300 and 333");
number = 300

while(number <=333){
	if(number%2 !== 0){
		console.log(number);
	}
	number++;
}
//Print all numbers divisible between 5 and 3 between 5 and 50

console.log("Print all numbers divisible between 5 and 3 between 5 and 50");
number= 5;
while(number <=50){
	if(number%5 ===0 && number%3 ===0){
		console.log(number);
	}
	number++;
}

