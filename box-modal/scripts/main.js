const btnOpen = document.querySelector('.open-modal-btn')
const modal = document.querySelector('.modal')
const iconClose = document.querySelector('.modal__header i')
const btnClose = document.querySelector('.modal__footer button')

console.log()

// const toggleModal = (e) => {
//     modal.classList.toggle('hide')
// }

const showModal = () => {
    modal.classList.add('show')
}

const hideModal = () => {
    modal.classList.remove('show')
}

btnOpen.addEventListener('click', showModal)
iconClose.addEventListener('click', hideModal)
btnClose.addEventListener('click', hideModal)
// modal.addEventListener('click', (e) => {
//     if (e.target === e.currentTarget) {
//         toggleModal()
//     }
// })

window.onclick = function(event) {
    if (event.target === modal) {
      modal.classList.remove('show');
    }
}