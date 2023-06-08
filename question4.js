/* 
Using only the filter method on the numbers array, create a function that returns a new array that only contains the numbers divisible by both 3 and 6 but NOT 9. 

const numbers = [48, 20, 18, 7, 12,9, 8,10,12, 96, 3,36,51];
*/

const numbers = [48, 20, 18, 7, 12,9, 8,10,12, 96, 3,36,51];

let filterNumbers = (arr) => {	// create arrow function named filterNumbers that takes in array argument
	const array2 = arr.filter((number) => {	// store filtered array in a variable called array2
		return (number % 9 !== 0 && number % 6 === 0 && number % 3 === 0)	// use modulus to determine conditions
	});

	return array2;	// send back the filtered array
}
	

console.log(filterNumbers(numbers));