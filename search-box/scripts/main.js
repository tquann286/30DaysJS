const btnSearch = document.querySelector('.search-box__btn')

btnSearch.addEventListener('click', function() {
    // Arrow function không có 'this'
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus()
})