"use strict";
const names = ['vinit', 'mohini', 'varsha', 'bharti', 'abhi', 12, 5, 45, 20, 30];

console.log(names);
/*
// filter
const strnames = names.filter(function(element){
	return typeof element === 'number';
	// return typeof element === 'string';
})

*/

/*
console.log(strnames.sort(function(a, b){
	// return a - b;
	return b - a;
}))
*/

const strnames = names.map(function(element){
	if (typeof element === 'number') {
		return element **2;
	}
	return element;
});
console.log(strnames);