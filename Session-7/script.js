/*
const btn = document.querySelector('button');
btn.onclick = function(e) {
	console.log('button clicked');
}
*/

/*
Node - Selected Element
Node.className - get class name
Node.children - get all childNodes
Node.nextElementSibling - get first sibling
Node.closest('element') - get element from parent
Node.remove() - removes element
*/

// Add Elements

/*
// for single selector
const btn = document.querySelector('button');
const elList = document.querySelector('.el-list');
btn.onclick = function(e) {
	const div = document.createElement('div');
	
	// Set properties of created element
	div.innerText = 'hello append';
	div.classList.add('fclass'); // add class to element
	div.classList.add('sclass'); // add class to element
	div.classList.remove('sclass'); // remove class from element
	const isFclass = div.classList.contains('fclass'); // check is class present
	console.log(isFclass);
	// Event Listener on created element
	div.addEventListener('click', function(e) {
		this.remove();
	});
	
	elList.appendChild(div);
}
*/
/*
const btns = document.querySelectorAll('button');
let btnCount = 0;
btns.forEach(function(btn){
	btn.addEventListener('click', function(e) {
		const elList = this.closest('section').querySelector('.el-list');
		const div = document.createElement('div');
		
		// Set properties of created element
		div.innerText = 'hello append ' + btnCount;
		// `hello append ${btnCount}` // multiline
		div.classList.add('fclass'); // add class to element
		div.classList.add('sclass'); // add class to element
		div.classList.remove('sclass'); // remove class from element
		const isFclass = div.classList.contains('fclass'); // check is class present
		console.log(isFclass);
		// Event Listener on created element
		div.addEventListener('click', function(e) {
			this.remove();
		});
		
		// elList.appendChild(div); // add element after last element
		// elList.prepend(div); // add element before first element
		// elList.after(div); // add element after el-list 
		elList.before(div);
		btnCount++;
	});
});
*/

// Dispach custom events
// Node.dispatchEvent(new Event('eventName'))

/*
// Exception Handeling
try {
	console.log(hello);
} catch (e) {
	console.log(e)
}
*/
document.querySelectorAll('.dropdown').forEach(
(dropdown) => {
	dropdown.querySelector('.btn')
	.addEventListener('click', (e) => {
		console.log(e);
		const dropdownMenu = e.target.nextElementSibling.style;
		if (dropdownMenu.display === 'block') {
			dropdownMenu.display = 'none';
		} else {
			dropdownMenu.display = 'block';
		}
	})
}
)
function sayHello() {
	alert('hello');
}