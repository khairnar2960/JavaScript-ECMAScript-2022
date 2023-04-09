"use strict";
/*
Q1 Ans 
const users = {
	name: '',
	email: '',
	mobile: 987654321,
	age: 24,
	gender: ''
}; */

/*
Q2 Ans
for (let i=0; i<=20; i++) {
	if (i%3 === 0) {
		console.log(i);
	}
}
*/
/*
// Q3 Ans
const evenNos = [];
for (let i=0; i<=20; i++) {
	if (i%2 !== 0) {
		evenNos.push(i);
	}
}
console.log(evenNos);
*/
/*
// Q4 Ans
const oddNos = [];
for (let i=0; i<=20; i++) {
	if (i%2 === 0) {
		oddNos.push(i);
	}
}
console.log(oddNos);
*/
/*
// Q5 Ans
function square(n) {
	return n ** 2;
}
let sqr = square(4);
console.log({sqr});
*/

// Q6 Ans
function generateIntegral(n) {
	const testObj = {};
	if (n > 0) {
		let i = 1;
		while (i <= n) {
			testObj[i] = i*i;
			i++;
		}
	}
	return testObj;
}
// console.log(generateIntegral(8));

// Q7 Ans
let str = "34,67,55,33,12,98";
console.log(str.split(','))