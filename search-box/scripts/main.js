const btnSearch = document.querySelector('.search-box__btn')

btnSearch.addEventListener('click', function() {
    // Arrow function không có 'this'
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus()
    console.log('cc')
})

window.onclick = function(event) {
    if (!btnSearch.parentElement.contains(event.target)) {
        console.log('cl')
        btnSearch.parentElement.classList.remove('open')
    }
}