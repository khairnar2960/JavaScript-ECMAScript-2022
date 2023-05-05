"use strict";
/**
 * @var e   :   event
 * @var o   :   option
 * @var l   :   length
 * @var c   :   Case (upper|lower) 
 **/
function allowType(e, o = 'number', l = false, c=false) {
    let val = e.target.value;
    const devn = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
    switch (o) {
        case 'alfanum':
            if (l) {
                val = val.substr(0, l).replaceAll(/[^0-9a-zA-Z]/gmi, '');
            } else {
                val = val.replaceAll(/[^0-9a-zA-Z]/gmi, '');
            }
            break;
        case 'number':
            devn.forEach(dn => {
                val = val.replaceAll(dn, devn.indexOf(dn));
            });
            if (l) {
                val = val.substr(0, l).replaceAll(/[^0-9]/gmi, '');
            } else {
                val = val.replaceAll(/[^0-9]/gmi, '');
            }
            break;
        case 'mobile':
            devn.forEach(dn => {
                val = val.replaceAll(dn, devn.indexOf(dn));
            });
            val = val.replaceAll(/[^0-9]/gmi, '');
            val = val.substr(0, 10);
            if (!val.charAt(0).match(/[6-9]/)) {
                val = val.substr(1);
            }
            break;
        case 'pincode':
            // RegEX to find pin code
            // ^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$
            devn.forEach(dn => {
                val = val.replaceAll(dn, devn.indexOf(dn));
            });
            val = val.replaceAll(/[^0-9]/gmi, '');
            val = val.substr(0, 6);
            if (!val.charAt(0).match(/[1-9]/)) {
                val = val.substr(1);
            }
            break;
        case 'decimal':
            devn.forEach(dn => {
                val = val.replaceAll(dn, devn.indexOf(dn));
            });
            let i = val.search(/\./gmi);
            if (val.length === 1) {
                val = val.replaceAll(/[^0-9]/gmi, '');
            }
            if (i >= 0) {
                if (l) {
                    val = val.substr(0, i + 1) + val.substr(i).substr(0, l + 1).replaceAll(/\./gmi, '');
                } else {
                    val = val.substr(0, i + 1) + val.substr(i).replaceAll(/\./gmi, '');
                }
            }
            val = val.replaceAll(/[^0-9.]/gmi, '');
            break;
    }
    if (c=='upper') {
        val = val.toUpperCase();
    } else if (c=='lower') {
        val = val.toLowerCase();
    } else if (c=='title') {
        val = val.toTitleCase();
    }
    e.target.value = val;
}

console.log($)
console.log(jQuery)
// const demo = document.getElementById('demo');
const demo = $('#demo');
const innerDemo = $('.inner-demo');
// console.log(demo);

// Node.innerHTML = 'html'
// demo.html('<h6>I am updated</h6>'); // add html
// console.log(demo.html()); // get html

// Node.innerText = 'text'
// console.log(demo.text('new text'));
// console.log(demo.text());

// Node.style.{cssProperty} = ''
// demo.css('color', 'red')
let i = 5;
const colors = ['red','blue', 'green', 'orange', 'purple']
for (let i = 0; i < innerDemo.length; i++) {
	$(innerDemo[i]).css('color', colors[i])
}
innerDemo.text('new text')
// demo.css('background-color', 'black')
// console.log(demo.css('color'));
// demo.append(innerDemo);
// demo.prepend(innerDemo);

// innerDemo.appendTo(demo);
// innerDemo.prependTo(demo);

// document.createElement('tagname')
// let div = $('<div></div>'); // or
let div = $('<div/>');
div.text('hello');
$('body').append(div);

// Node.getAttribute('attrName')
const textInput = $('[name="text_input"]');
console.log(textInput.attr('value'))

// Node.setAttribute('attrName', 'value')
textInput.attr('value', 'updated text')

// Node.removeAttribute('attrName')
textInput.removeAttr('placeholder')

// textInput.prop('disabled', true);
// console.log(textInput.prop('disabled'))

console.log(demo.find('.inner-demo'))
console.log(demo.next()) // prev
console.log(innerDemo.closest('#demo'))

// EvenListeners
// Node.onClick = function () {} // not good

// Node.addEventListener('event', callback)
// textInput.on('input', function(e){
// 	console.log(this.value = this.value.replace(/[^0-9]/ig, ''));
// });
//textInput.on('input', function(e){
//	allowType(e, 'decimal', 2)
//});

/*
$.ajax({
	url: 'req_url',
	method: 'POST',
	beforeSend: function(jqXHR) {
		// do something with jqXHR OR anything before beforeSend
	},
	data: new FormData(this),
	dataType: 'json', // The type of data that you're expecting back from the server (xml, json, script, or html)
	contentType: false,
	processData: false,
	cache: false,
	success: function(data, textStatus, jqXHR) {
		console.log(data);
	},
	error: function(jqXHR, textStatus, errorThrown) {
		console.log(textStatus);
	},
	complete: function (jqXHR, textStatus) {
		// this will called after success and error
		console.log(textStatus);
	}
});
*/
innerDemo.each((index, element) => {console.log(element)})