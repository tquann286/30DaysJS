const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm-password')
const form = document.querySelector('form')


function showError (input, message) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess (input) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError (listInput) {
    let isEmptyError = false
    listInput.forEach( input => {
        input.value = input.value.trim()

        if (!input.value) {
            showError(input, 'Please fill this field')
        } else {
            showSuccess(input)
        }
    })

    return isEmptyError
}

function checkEmailError (input) {
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    input.value = input.value.trim()

    let isEmailError = !regexEmail.test(input.value)
    if (!isEmailError) {
        showSuccess(input)
    } else {
        showError(input, 'Email Invalid')
    }

    return isEmailError
}

function checkLengthError (input, min, max) {
    input.value = input.value.trim()

    if (input.value.length < min) {
        showError(input, `At least ${min} characters`)
        return true
    }

    if (input.value.length > max) {
        showError(input, `Max is ${max} characters`)
        return true
    }

    showSuccess(input)
    return false
}

function checkMatchPasswordError (passwordInput, cfPasswordInput) {
    if (passwordInput.value !== cfPasswordInput.value) {
        showError(cfPasswordInput, 'Password does not match')
        return true
    }
    return false
}

form.addEventListener('submit', function(e) {
    e.preventDefault()

    let isEmptyError = checkEmptyError([username, email, password, confirmPassword])
    let isEmailError = checkEmailError(email)
    let isUsernameLengthError = checkLengthError(username, 1, 14)
    let isPasswordLengthError = checkLengthError(password, 1, 14)
    let isMatchError = checkMatchPasswordError(password, confirmPassword)

    if (isEmptyError || isEmailError || isUsernameLengthError || isPasswordLengthError || isMatchError) {
        // do nothing
    } else {
        // Logic, Call API,... 
    }
})