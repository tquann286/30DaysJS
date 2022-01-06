const btnSearch = document.querySelector('.search-box__btn')

btnSearch.addEventListener('click', function() {
    // Arrow function doesn't support 'this' key
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus()
})

window.onclick = function(event) {
    if (!btnSearch.parentElement.contains(event.target)) {
        btnSearch.parentElement.classList.remove('open')
    }
}