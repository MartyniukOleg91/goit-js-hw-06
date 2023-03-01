

const form = document.querySelector('.login-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget

    if (!email.value.trim()) {
        return alert('Будь ласка, заповніть Email')
    }
    if (!password.value.trim()) {
        return alert('Будь ласка, заповніть Password!')
    }
    const userDetails = { email: email.value, Password: password.value }
    
    console.log(userDetails)
    event.currentTarget.reset()
}

