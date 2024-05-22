// Exercis 3


const numbers = 1; 


function countOccurrences(array, searchElement) {
	if (!Array.isArray(array))
		throw new Error('Your first argument is not an array');

  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}


try {
	const count = countOccurrences(numbers, 1); 
	console.log(count); 
} 
catch (e) {
	console.log(e.message)
}




// Exercise 2:

// const circle = {
// 	radius: 2,
// 	get area() {
// 		return (Math.PI * this.radius ** 2)
// 	}
// };

// console.log(circle.area)


// Exercise 1


// function sum(...numbers) {
// 	if (numbers.length === 1 && Array.isArray(numbers[0]))
// 		numbers = [...numbers[0]];

// 	return numbers.reduce((total, currentValue) => total + currentValue)
// }

// console.log(sum([1, 2, 3]))

