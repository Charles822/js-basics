// SECTION 2 EXERCISES


// Exercise 6

let priceRanges = [
	{ label: '$', tooltip: 'Inexpensive', minPerson: 0, maxPerson: 10 },
	{ label: '$$', tooltip: 'Moderate', minPerson: 11, maxPerson: 20 },
	{ label: '$$$', tooltip: 'Expensive', minPerson: 21, maxPerson: 50 },
	]

let restaurants = [
	{ averagePerPerson: 5}
	]

// Exercise 4 & 5


// function Post(title, body, author) {
// 	this.title = title;
//   	this.body = body;
//   	this.author = author;
//   	this.views = 0;
//   	this.comments = [];
//   	this.isLive = false;
  		
// }

// let myBp = new Post('Le J', 'Quel bel article', 'Le S')

// console.log(myBp)


// Exercise 2 & 3

// Factory Function

// function createAddress(street, city, zipCode) {
//   return {
//     street: street,
//     city: city,
//     zipCode: zipCode 
//   };
// }

// let address = createAddress('Redwood', 'New York', '23456665');

// // Constructor Function

// function Address(street, city, zipCode) {
//   this.street = street;
//   this.city = city;
//   this.zipCode = zipCode;
// }

// const myAddress = new Address('Redwood', 'New York', '23456665')

// let address1 = new Address('a', 'b', 'c')
// let address2 = new Address('a', 'b', 'c')
// address1 = address2

// function areEqual(address1, address2) {
// 	for (let key in address1)
// 		if (address1[key] !== address2[key]) return "These 2 objects are not equal"
// 	return "The 2 objects are equal"
// }

// function areSame(address1, address2) {
// 	if (address1 === address2) return "These 2 objects are the same"
// 	return "These 2 objects are NOT the same"
// }

// console.log(address);
// console.log(myAddress);
// console.log(areEqual(address1, address2))
// console.log(areSame(address1, address2))



// Exercise 1

// const address = {
// 	street: 'Redwood avenue',
// 	city: 'New York',
// 	zipCode: '23456665'
// }

// function showAddress(address) {
// 	for (let key in address)
// 		console.log(key, address[key])
// }

// showAddress(address)

// const circle = {
// 	radius: 1,
// 	draw() {
// 		console.log('Draw')
// 	}
// };

// const another = Object.assign({color: 'red'}, circle);

// console.log(another)


// SECTION 1 EXERCISES

// let obj = {value : 10}; 

// function increase(obj) {
// 	obj.value++;
// }

// increase(obj);
// console.log(obj);


// Exercise 9 bis 

// function isPrime(number) {
// 	for (let factor = 2; factor < number; factor++)
// 		if (number % factor === 0) return false;
// 	return true;
// }


// function showPrimes(limit) {
// 	for (let number = 2; number <= limit; number++)
// 		if (isPrime(number) === true) console.log(number);
// }


// showPrimes(20)


// Exercise 9 

// function showPrimes(limit) {
	
	
// 	for (let number = 2; number <= limit; number++) {

// 		let isPrime = true;
// 		for (let factor = 2; factor < number; factor++) {
// 			if (number % factor === 0) 
// 				isPrime = false;
// 				break;
// 		}

// 		if (isPrime === true) console.log(number);
// 	}
// }

// showPrimes(20)

// Exercise 8

// function showStars(maxRow) {
// 	let row = '';
// 	let i = 1;
// 	while (i <= maxRow) {
// 		row += '*';
// 		console.log(row);
// 		i++;
// 	}
//  }

// showStars(10)


// Exercise 7

// const marks = [100, 100, 100];


// function calculateAvergage(marks) {
// 	let total = 0;	
// 	for (let mark of marks) 
// 		total += mark
// 	let average = total / marks.length
// 	return average
// }



// function calculateGrade(average) {
// 	if (average < 60) return 'F';
// 	else if (average < 70) return 'D';
// 	else if (average < 80) return 'C';
// 	else if (average < 90) return 'B';
// 	return'A';
// }

// let average = calculateAvergage(marks)
// console.log(calculateGrade(average))

// Exercise 6

// function sum(limit) {
// 	let count = 0;

// 	for (let i = 0; i <= limit; i++)
// 		if (i % 3 === 0 || i % 5 === 0)
// 			count += i;

// 	return count	
// }

// let result = sum(100)

// console.log(result)


// Exercise 5

// const movie = {
// 	title: "The Bear",
// 	releaseYear: 2019,
// 	rating: 4.5, 
// 	director: 'Brrowna'
// };

// function showProperties(obj) {

// 	for (let key in obj) {
// 		if (typeof obj[key] === "string") console.log(key, obj[key]);
// 	}
// }

// showProperties(movie)


// const array = [0, null, undefined, "red", 2, 3]

// function countTruthy(array) {
// 	let count = 0;
// 	for (let value of array) {
// 		if (value) count++;
// 	}
// 	return count
// }

// let result = countTruthy(array)

// console.log(result)

// Exercise 4 

// function showNumber(limit) {
// 	let i = 0;
// 	while ( i <= limit) {
// 		if (i % 2 === 0) console.log(i, "EVEN");
// 		else console.log(i, "ODD");
// 		i++;
// 	}
// }

// let result = showNumber(10)

// console.log(result)

// function showNumber(limit) {
// 	for (let i = 0; i <= limit; i++) {
// 		const message = (i % 2 === 0) ? "EVEN" : "ODD";
// 		console.log(i, message)
//  	}
// }

// let result = showNumber(10)

// console.log(result)


// Exercise 3

// function checkSpeed(speed) {
// 	const speedLimit = 70
// 	const KmPerPoints = 5;
	
// 	const speedDiff = speed - speedLimit;
	
// 	if (speedDiff >= 5 && speedDiff < 60) 
// 		return Math.floor(speedDiff/KmPerPoints) + ' ' + 'Point(s)'
// 	else if (speedDiff >= 60) return 'License Suspended' 
// 	return "OK"
// }


// let result = checkSpeed(130)

// console.log(result)


// exercise 1

// function maxNum(a , b) {
// 	return (a > b) ? a : b;	
// }

// let result = maxNum(3, 8)

// console.log(result)


// exercise 2 
// function isLandscape(width , height) {
// 	return (width > height);
// }

// let result = isLandscape(900, 500)

// console.log(result)


// exercise 3

// function fizzbuzz(input) {
// 	let divisibleBy3 = input % 3 === 0;
// 	let divisibleBy5 = input % 5 === 0;
// 	if (isNaN(input)) return "Not a number";
// 	if (divisibleBy3 && divisibleBy5) return "FizzBuzz";
// 	else if (divisibleBy3) return 'Fizz';
// 	else if (divisibleBy5) return 'Buzz';
// 	return input;
// }

// let result = fizzbuzz('red')

// console.log(result)