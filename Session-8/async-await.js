'use strict';
async function log() {
	let a = new Promise((resolve, reject) => {
		setTimeout(()=>{
			resolve('time out completed');
		}, 2000);
	});
	return a;
}
/*
let a = log();
a.then((value) => {
	console.log(value);
});
*/

async function second() {
	let a = await log();
	console.log(a);
	console.log('After time out');
}
second();
/*
const sayHello = () => {
	console.log('Hello');
}
*/

// setInterval(sayHello, 2000);
