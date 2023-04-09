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
"use strict";
window.addEventListener('load', function(){
	const mobile = document.querySelector('#mobile');
	const email = document.querySelector('#email');
	if (mobile) {
		mobile.addEventListener('keydown', function(event){
			// console.log('keypress', this.value);
			const key = Number(event.key);
			if (!isNaN(key) && key >=0) {
				//
			}
			if (isNaN(key)) {
				document.querySelector('#mobile-error').innerText = 'Please type numbers only';
			}
			
		});
		mobile.addEventListener('keyup', function(e){
			this.value = this.value.replaceAll(/[^0-9]/gi, '');
		});
	}
	if (email) {
		email.addEventListener('input', function(e) {
			this.value = this.value.toLowerCase();
		})
	}
	// Submit event
	const contactForm = document.querySelector('#contact-form');
	if (contactForm) {
		contactForm.addEventListener('submit', function(e) {
			e.preventDefault();
			const terms = document.querySelector('#terms');
			if (!terms.checked) {
				alert('please accept terms');
			} else {
				contactForm.submit();
			}
		});
	}
	/*
	const terms = document.querySelector('#terms');
	if (terms) {
		terms.addEventListener('change', function(e) {
			if (!this.checked) {
				alert('please accept terms');
			}
		});
	}
	*/
});