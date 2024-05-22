// Section 3 Exercise 

//const numbers = [1, 4, 3, 6];


// Exercise 7

// const movies = [
// 	{ title: 'a', year: 2018, ratings: 4.5 },
// 	{ title: 'b', year: 2018, ratings: 4.7 },
// 	{ title: 'c', year: 2018, ratings: 3 },
// 	{ title: 'd', year: 2017, ratings: 4.5 }
// ];

// const titles = movies
// 	.filter(m => m.year === 2018 && m.ratings >= 4)
// 	.sort((a, b) => a.ratings - b.ratings)
// 	.reverse()
// 	.map(m => m.title)

// console.log(titles);


// function filterByYearAndRatings(movies) {
// 	return movies.filter(function(value) {
// 	return (value.year > 2017 && value.ratings > 4);
// 	});

// };

// function sortByRatings(movies) {
// 	return movies.sort(function(a, b) {
// 		if (a.ratings < b.ratings) return -1; 
// 		if (a.ratings > b.ratings) return 1; 
// 		return 0;
// 	});
// };


// function sortByTitle(movies) {
// 	return movies.sort(function(a, b) {
// 		if (a.title < b.title) return 1; 
// 		if (a.title > b.title) return -1; 
// 		return 0;
// 	});
// };


// function bestMovies(movies) {
// 	movies = filterByYearAndRatings(movies);
// 	movies = sortByRatings(movies);
// 	movies = sortByTitle(movies);

// 	for (let key in movies) 
// 		console.log(movies[key].title);
// };



// bestMovies(movies);



// Exercise 6 


// function getMax(array) {
// 	if (array.length === 0) return undefined;
	
// 	return array.reduce(
// 		(accumulator, currentValue) => (accumulator < currentValue) ? currentValue : accumulator);
// }

// function getMax(array) {
// 	let max = 0;
// 	for (let element of array)
// 		if (element > max) max = element

// 	return max;
// }

//console.log(getMax(numbers))

// Exercise 5


// function repetition(array, searchElement) {
// 	return array.reduce((accumulator, currentValue) => {
// 	  if (currentValue === searchElement) {
// 	    accumulator += 1;
// 	  }
// 	  return accumulator;
// 	}, 0);
// }

// console.log(repetition(numbers, 3))

// Exercise 4

// what I should have done
// function move(array, index, offset) {
// 	const position = index + offset;
// 	if (position >= array.length || position < 0) 
//  		return console.error('Invalid offset')

// 	const output = [...array];
// 	const element = output.splice(index, 1)[0];
// 	output.splice(position, 0, element);
// 	return output;
// }

// console.log(move(numbers, 1, 1))

// my not very elegant solution
// function move(array, index, offset) {
// 	if (index + offset < 0 || index + offset >= array.length) 
// 		return console.error('Invalid offset')
	
// 	const output = [];
// 	for (let key in array)
// 		if (Number(key) === (index + offset)) {
// 			if (offset > 0) {
// 				output.push(array[key])
// 				output.push(array[index])
// 			}

// 			else if (offset < 0) {
// 				output.push(array[index])				
// 				output.push(array[key])
// 			}

// 			else if (offset === 0)
// 				output.push(array[index])
// 		}
		
// 		else if (Number(key) !== index) output.push(array[key])
			
// 	return output;
// }



// Exercise 3

// function except(array, excluded) {
// 	const newArray = [];
// 	for (let element of array)
// 		if (!excluded.includes(element)) newArray.push(element);
// 	return newArray
// }

// console.log(except(numbers, [1, 2]))

// Exercise 2

// const numbers = [1, 2, 3, 4];

// function includes(array, searchElement) {
// 	for (let key of array) 
// 		if (key === searchElement) return true;
// 	return false; 
// }

// console.log(includes(numbers, 7))



// Exercise 1

// function arrayFromRange(min, max) {
// 	let numbers = [];

// 	for (let i = min; i <= max; i++) {
// 		numbers.push(i);
// 	}
// 	return numbers;
// }

// const numbers = arrayFromRange(-1, 4);

// console.log(numbers)



// ------------------------------------
// let first = [{ id: 1 }];
// const second = [1, 2, 3];

// let combined = first.concat(second);

// first = [{ id: 10 }];;


// console.log(first);
// console.log(combined);


// let numbers = [1, 2, 3, 4];
// let another = numbers;

// // numbers = [];


// numbers.length = 0;

// console.log(another)


//end 

// numbers.push(5, 6);

// // begining

// numbers.unshift(1, 2);

// // middle

// numbers.splice(1, 0, 'a', 'b');

// console.log(numbers); 

// let a = 10; 
// let b = a;

// a = 20;


// console.log(b)

