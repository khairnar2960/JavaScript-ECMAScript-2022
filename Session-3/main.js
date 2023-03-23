"use strict";
const MIN_VOTING_AGE = 18; // variable in global scope

// console.log(sum([1,2,3]));
// console.log(average(1,2,3)); // this will throw an error
const obj = {
	name: 'Tanaya',
	age: 24,
	mobile: 9876543210,
	salary: 1000.50,
	canVote: function() {
		if (this.age >= MIN_VOTING_AGE) {
			return 'Can Vote';
		}
		return "Can't \"Vote\"";
	},
	arr: [1,2,3],
	languages: {
		fe: ['html', 'css', 'js'],
		be: ['php', 'python', 'java', 'node'],
	}
};
// obj.oldObj = obj;
/*
function sum(n1, n2) {
	return n1 + n2;
}
*/
function sum(numbers) {
	let sum = 0;
	numbers.forEach(
		// if function passed as argument then this called as callback function
		function(n) { // anonymus function
			sum += n;
		}
	);
	return sum;
}
const average = function(n1, n2, n3, callback=null) {
	let avg = (n1+n2+n3)/3;
	if (callback!==null) {
		return callback(avg);
	} else {
		return avg;
	}
	
}
// console.log(obj);

/*
obj.canVote = function() {
	const oldobj = this;
	if (oldobj.age >= MIN_VOTING_AGE) {
		return 'Can Vote';
	} else {
		// escape caracters
		// \n => new line
		// \t => tab
		// \ => escape seq. char
		return "Can't \"Vote\"";
	}
}
*/

/*
// Simplified way
obj.canVote = function() {
	if (this.age >= MIN_VOTING_AGE) {
		return 'Can Vote';
	}
	return "Can't \"Vote\"";
}
*/

// Arrow Function
const canVote = (o) => {
	// obj.age = 16;
	// obj.name = 'Ravi';
	let obj = {
		age: 16,
		mobile: 9876543210,
		name: "Ravi",
		salary: 1000.5
	}
	console.log(obj);
	let somevar = 'text'; // vaiable in local scope
	if (o.age >= MIN_VOTING_AGE) {
		return 'Can Vote';
	}
	return "Can't \"Vote\"";
}
// console.log(somevar); // this will throw an error