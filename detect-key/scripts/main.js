const eKey = document.querySelector('.key p:last-child')
const eLocation = document.querySelector('.location p:last-child')
const eWhich = document.querySelector('.which p:last-child')
const eCode = document.querySelector('.code p:last-child')
const alert = document.querySelector('.alert')
const box = document.querySelector('.box')
const result = document.querySelector('.result')

document.addEventListener('keydown', e => {
    
    eKey.innerText = e.key
    eLocation.innerText = e.location
    eWhich.innerText = e.which
    eCode.innerText = e.code
    result.innerText = e.which

    alert.classList.add('hide')
    box.classList.remove('hide')
})



