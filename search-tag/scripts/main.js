const content = document.querySelector('.content')
const input = document.querySelector('.content input')
const btnRemoveAll = document.querySelector('.remove-all')

let tags = ['NodeJS', 'ReactJS']

function Render() {
    content.innerHTML = ''
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i]
        content.innerHTML += `<li>
            ${tag}
            <i class="fas fa-times" onclick="removeTag(${i})"></i>
        </li>`
    }

    content.appendChild(input)
    input.focus()
}

function removeTag (index) {
    tags.splice(index, 1)
    Render()
}

Render()

input.addEventListener('keydown', function(event) {
    if(event.key === 'Enter') {
        tags.push(input.value.trim())
        Render()
    }
})

btnRemoveAll.addEventListener('click', () => {
    tags = []
    Render()
})