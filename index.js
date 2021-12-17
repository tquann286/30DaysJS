const flexContainer = document.querySelector('.flex-container')

const input = document.querySelector('input')
const select = document.querySelector('select')
const button = document.querySelector('button')
const valueOption = document.querySelectorAll('option')

button.addEventListener('click', e => {
    let value = Number(input.value)
    let plane = select.value
    if (plane === 'none' && !value) {
        flexContainer.innerHTML = 'You haven\'t choose a plane and input mass yet'
    }
    else if (plane === 'none') {
        flexContainer.innerHTML = 'You haven\'t choose a plane yet'
    } else if (!value) {
        flexContainer.innerHTML = 'Mass is required'
    } else {
        flexContainer.innerHTML = `
        <div class="flex-item image"></div>
        <div class="flex-item description"></div>
        `
        const image = document.querySelector('.image')
        const description = document.querySelector('.description')
        valueOption.forEach( eachPlane => {
            let gravity = Number(eachPlane.dataset.gravity)
            if (plane === eachPlane.value) {
                image.innerHTML = `
                <img src='./img/${plane}.png' class="planet-image" />
                `
                description.innerHTML = `
                    The weight of the object on ${eachPlane.textContent}\n
                    ${Math.round(value * gravity)} (N)
                `
            }
        })
    }

})








































