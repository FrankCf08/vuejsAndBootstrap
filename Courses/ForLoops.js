// alert("CONNECTED");
//Print all numbers between 10 and -19
console.log("Print all numbers between 10 and -19");

for(var number = 10; number >= -19; number--){
	console.log(number);
}

//Print all even numbers between 10 and 40
console.log("Print all even numbers between 10 and 40");

for(var number = 10; number <= 40; number++){
	if(number%2 === 0){
		console.log(number);
	}
}
//Print all odd number between 300 and 333

console.log("Print all odd number between 300 and 333");

for(var number =300; number <=333; number ++){
	if(number%2 !== 0){
		console.log(number);
	}
}
//Print all numbers divisible between 5 and 3 between 5 and 50

console.log("Print all numbers divisible between 5 and 3 between 5 and 50");

for(var number = 5 ;number <=50; number ++){
	if(number%5 ===0 && number%3 ===0){
		console.log(number);
	}
}

