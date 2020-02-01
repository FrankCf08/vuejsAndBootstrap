// alert("Hello from the JS file")

// var userName = prompt("What is your name?");

// console.log("Nice to meet you " +  userName);
// alert("Nice to meet you "+ userName);

// var firstName = prompt("What is your Name?");
// var lastName = prompt("What is your Last Name?");
// var age = prompt("What is your age?");
// var computeAge = age*365.25;

// var fullName = firstName + " " + lastName

// console.log("Your full name is "+ fullName);
// console.log("You are "+ age+ " years old");

// alert(age + " year is roughly " + computeAge + " days");

// Exercise Finding age - IF ELSE IF AND ELSE
var number =  prompt("What is your age?")

if(number<0){
	console.log("Error Message")
}
if(number === 21){
	console.log("Happy 21st Birthday")
}
if(number%2 !== 0){
	console.log("Your age is odd")
}
if(number%Math.sqrt(number) === 0){
	console.log("Yoy age is a perfect square")
}