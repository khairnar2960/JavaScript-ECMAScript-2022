'use strict';
// Selector
// const clickBtn = document.querySelector('#click-btn');
// Events

/*
load
click
mouseenter
mouseleave
submit
keyup
keypress
keydown
input
change
*/
window.addEventListener('load', function(event) {
	
	const clickBtn = document.querySelector('#click-btn');
	// on click
	clickBtn.addEventListener('click', function(e) {
		const clickTxt = document.querySelector('#click-text');
		clickTxt.innerText = 'Thanks';
	})
	
	// on mouseover (hover)
	clickBtn.addEventListener('mouseover', function(e) {
		this.style.backgroundColor = '#ff0000';
	});
	clickBtn.addEventListener('mouseleave', function(e) {
		this.style.backgroundColor = '';
	});

});
