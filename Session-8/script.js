'use strict';
// Standard Way
function getNames() {
	const container = document.getElementById("data");
	const limit = Number(document.querySelector('#limit').value);
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		   // Typical action to be performed when the document is ready:
		   const data = JSON.parse(xhttp.responseText);
		   const reqdElm = data.slice(0, limit);
		   container.innerHTML = '';
		   reqdElm.forEach(user => {
			   const div = document.createElement('div');
			   div.innerHTML = `Name: ${user.first_name} ${user.last_name}<br>
			   Email: ${user.email}<br>
			   Gender: ${user.gender}<br>
			   id: ${user.id}<br>`;
			   container.append(div);
		   });
		}
	};
	xhttp.open("GET", "./MOCK_DATA.json", true);
	xhttp.send();
}

/*
HTTP Methods
GET -> get data
POST -> add data
PUT -> update data
DELETE -> delete data
PATCH -> update
*/
function getUsers(search=''){
	const container = document.getElementById("data");
	const limit = Number(document.querySelector('#limit').value);
	const req = fetch('./MOCK_DATA.json')
	.then(data => data.json())
	.then(users => {
		const reqdElm = users.slice(0, limit);
		container.innerHTML = '';
		reqdElm.forEach(user => {
			if (user.first_name.toLowerCase().includes(search)) {
				const div = document.createElement('div');
			   div.innerHTML = `Name: ${user.first_name} ${user.last_name}<br>
			   Email: ${user.email}<br>
			   Gender: ${user.gender}<br>
			   id: ${user.id}<br>`;
			   container.append(div);
			}
		});
	})
	.catch(err => console.log(err));
}