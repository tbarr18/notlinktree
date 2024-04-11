// selecting html elements
let emailElement = document.querySelector('#email');
let messageElement = document.querySelector('#message');

let submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', function(e) {
	e.preventDefault();

	let emailValue = emailElement.value;
	let messageValue = messageElement.value;

	if(emailValue.includes('@')) {
		// all good
		alert('Thank you for your message');
	} else {
		alert('Oh no. That does not look like a valid email address. Please try again.');
	}

	if(messageValue.includes(' crap ')) {
		// NSFW
		alert('NSFW');
	} else {
		alert('TY for your message');
	}
	// getting double TY message.. hmmmmm ??
})


// attaching 'click listener'
// getting user entered values
// javascript validations
