
const textInput = document.querySelector('#validation-input')
textInput.getAttribute('data-length')


textInput.addEventListener('blur', event => {
	textInput.classList.remove('valid', 'invalid')
	if (event.target.value.length === Number(textInput.getAttribute('data-length'))) {
		textInput.classList.add('valid')
	} else {
		textInput.classList.add('invalid')
	}
})