const images = document.querySelectorAll('.image img')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')
const close = document.querySelector('.close')
const gallery = document.querySelector('.gallery')
const galleryImg = document.querySelector('.gallery__inner img')

let curIndex = 0

const addShowClass = () => {
    gallery.classList.add('show')
}

const removeShowClass = () => {
    gallery.classList.remove('show')
}

const changeImg = (index) => {

    if (curIndex === 0) {
        prev.classList.add('hide')
    } else {
        prev.classList.remove('hide')
    }

    if (curIndex === (images.length - 1)) {
        next.classList.add('hide')
    } else {
        next.classList.remove('hide')
    }


    galleryImg.src = images[index].src
} 

images.forEach( (item, index) => {
    item.addEventListener('click', () => {
        curIndex = index
        changeImg(curIndex)
        addShowClass()
    })
})

close.addEventListener('click', () => {
    // gallery.classList.remove('show')
    removeShowClass()
})

document.addEventListener('keyup', (e) => {
    if (e.keyCode === 27) {
        removeShowClass()
    }
})

prev.addEventListener('click', () => {
        console.log(curIndex)
        curIndex--
        changeImg(curIndex)
})

next.addEventListener('click', () => {
        console.log(curIndex)
        curIndex++
        changeImg(curIndex)
})