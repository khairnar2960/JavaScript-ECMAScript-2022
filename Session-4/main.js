"use strict";
// alert('main.js loaded'); // will pause until ok
// prompt('Enter name');
// confirm('Confirm somthing');

/**
/* CSS Selector
**/

// by id => #id-name

let demo = document.getElementById('demo'); // will return single element if exist
if (demo !== null) {
// if (demo) { // this is also same
	// console.log(demo.innerText); // Get only text inside element
	// demo.innerText = 'New Demo Value';
	// console.log(demo.innerText);
	// console.log(demo.innerHTML);
	
	// demo.innerHTML = '<h1>Hello</h1>'; // change html inside demo div
	// console.log(demo.childNodes); // get child element list
	
	// demo.parentElement // get parent element 
	
}

// by class => .class-name
let h1 = document.getElementsByClassName('h1'); // will return HTMLCollection Array of matching elements
console.log(h1);

// by tagname => body, div, input, ..etc. 
let h2 = document.getElementsByTagName('h2'); // will return HTMLCollection Array of matching elements
console.log(h2);

// by name => name="some_name"
let firstName = document.getElementsByName('first_name');

console.log(firstName);

// single element by query
// Attribute Selector
let bstoggle = document.querySelector('[data-bs-toggle]');

let contactFname = document.querySelector('#register-form input[name="first_name"]');
console.log(contactFname);

// multiple element by query
let allInputs = document.querySelectorAll('input');
console.log(allInputs);