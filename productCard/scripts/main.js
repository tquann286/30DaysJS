const root = document.querySelector(':root');
const body = document.querySelector('body');
const heart = document.querySelector('.card__heart') 
const cart = document.querySelector('.card__cart') 
const img = document.querySelector('.card__img') 
const title = document.querySelector('.card__title') 
const price = document.querySelector('.card__price') 
const description = document.querySelector('.card__description') 
const size = document.querySelector('.card__size') 
const color = document.querySelector('.card__color')
const green = document.querySelector('.card__color--green')
const red = document.querySelector('.card__color--red')
const white = document.querySelector('.card__color--white')
const action = document.querySelector('.card__action')

const spanSize = size.querySelectorAll('span')

const heartClass = heart.classList
const cartClass = cart.classList

// root.style.setProperty('--primary-color', 'red');


// 

heart.addEventListener('click', () => {
    heartClass.toggle('added')
    if (heartClass.contains('added')) {
        heart.innerHTML = `<i class='bx bxs-heart'></i>`
    } else {
        heart.innerHTML = `<i class='bx bx-heart'></i>`
    }
})

cart.addEventListener('click', () => {
    cartClass.toggle('added')
    if (cartClass.contains('added')) {
        cart.innerHTML = `<i class='bx bxs-cart-alt' ></i>`
    } else {
        cart.innerHTML = `<i class='bx bx-cart-alt'></i>`
    }
})

spanSize.forEach( size => {
    size.addEventListener('click', () => {
        let sizeClass = size.classList
        spanSize.forEach( otherSize => {
            otherSize.classList.remove('selected')
        })
        sizeClass.toggle('selected')
    })
})

const setTitleBodyActionStyle = () => {
    title.style.setProperty('background-image', 'var(--primary-color)');
    body.style.setProperty('background-image', 'var(--primary-color)');
    action.querySelectorAll('button').forEach( button => {
        button.style.setProperty('background-image', 'var(--primary-color)')
    })
}

green.addEventListener('click', () => {
    root.style.setProperty('--primary-color', 'linear-gradient(to right, #4daf54, #3d8880)');
    img.innerHTML = `<img src="./img/NikeZoomKD12Green.png" alt="">`
    setTitleBodyActionStyle()
})

red.addEventListener('click', () => {
    root.style.setProperty('--primary-color', 'linear-gradient(315deg, #42378f 0%, #f53844 74%)');
    img.innerHTML = `<img src="./img/NikeZoomKD12Red.png" alt="">`
    setTitleBodyActionStyle()
})

white.addEventListener('click', () => {
    root.style.setProperty('--primary-color', 'linear-gradient(315deg, #ffcfdf 0%, #b0f3f1 74%)');
    img.innerHTML = `<img src="./img/NikeZoomKD12White.png" alt="">`
    setTitleBodyActionStyle()
})






























