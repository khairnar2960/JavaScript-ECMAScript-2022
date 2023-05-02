'use strict';
// console.log($);
// console.log(jQuery);

const input = $('#emailHelp');
// html & text 
console.log(input.text()) // get innerText
console.log(input.text('hello')) // set innerText
input.html() // get innerHTML

// css
console.log(input.css('color'));
input.css('backgroundColor', 'red');
input.css('color', 'white');

// class names
input.addClass('new-class')
console.log(input.hasClass('form-text'));
input.removeClass('form-text')
input.toggleClass('again-new')

// $('#exampleCheck1').prop('checked', true)
// $('#exampleCheck1').prop('indeterminate', 'true')
// $('#exampleCheck1').prop('disabled', true)
$('#exampleInputEmail1').prop('readonly', true)

// $('#exampleInputPassword1').attr('type', 'text')
// $('#exampleInputPassword1').removeAttr('id')
console.log($('#exampleInputPassword1').attr('id'))

$('#exampleInputPassword1').on('input', function(e){
	console.log(this.value)
});

const data = $('<div class="test" id="new">hello</div>')
$('#exampleInputPassword1').after(data)

console.log($('#exampleInputPassword1').next())


let formdata = new FormData($('form')[0]); // alternate $('form').serialize()
$.ajax({
	url: 'index.html',
	method: 'GET' // or POST
	data: {name: 'someone'}, // name=something&mobile=98765422
	beforeSend: function() {
		
	},
	success: function(response) {
		// do something on response after success
	},
	error: function(xhr) {},
	complete: function() {
		// after complete success/ error
	}
});