console.log("CONNECTED");

//printReverse()

var array = [1,2,3,4,5];
var equals = ["a", "a" , "a"];
var maxNum = [100,-99,10,205,15,3];

function printReverse(ar){

	for(var i = ar.length-1 ; i>=0;i--){
		console.log(ar[i]);
	}
}

printReverse(array);

//isUniform()

function isUniform(ar){
	var first = ar[0];

	for(var i=1; i<ar.length;i++){
		if(ar[i] !== first){
			return false;
		}
	}
	return true;
}

console.log(isUniform(array));
console.log(isUniform(equals));

//isUniform: using forEach

// function isUniformEach(ar){
// 	var first = ar[0];

// 	ar.forEach(function(element){
// 		if(element !== first){
// 			return false;
// 		}
// 	});

// 	return true;
// }

// console.log(isUniformEach(array));


// sumArray()

function sumArray(arr){

	var total = 0;

	arr.forEach(function(element){
		total+=element;
	});

	return total;
}

console.log(sumArray(array));
console.log(sumArray(equals));

//max()

function max(arr){

	var max = arr[0];
	arr.forEach(function(element){
		if(element> max){
			max = element;
		}
	});

	return max;
}

console.log(max(maxNum));

array = [1,2,3,4,5];
equals = ["a", "a" , "a"];
maxNum = [100,-99,10,205,15,3];

var colors = ["red", "orange", "yellow"];

//Creating my Own forEach function()

function myForEach(arr, func){

	arr.forEach(function(element){
		func(element);
	});
}

// myForEach(array, alert);
myForEach(equals,console.log);
myForEach(colors, alert);

myForEach(colors, function(color){ 
    console.log(color);
})