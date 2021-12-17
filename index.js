const flexContainer = document.querySelector('.flex-container')
const image = document.querySelector('.image')
const description = document.querySelector('.description')
const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')


button.addEventListener('click', e => {

    let value = input.value
    let plane = select.value
    if (plane === 'none' && !value) {
        flexContainer.innerHTML = 'You haven\'t choose a plane and input mass yet'
    }
    else if (plane === 'none') {
        flexContainer.innerHTML = 'You haven\'t choose a plane yet'
    } else if (!value) {
        flexContainer.innerHTML = 'Mass is required'
    }
    
    // switch plane:
    //     case 'earth'
})








































