const totalCountries = document.querySelector('h2')
const searchDescription = document.querySelector('h3')
const countriesList = document.querySelector('.countries-list')
const input = document.querySelector('input')
const countriesContainer = document.querySelector('.countries-container')
const startWord = document.querySelector('.start-word')
const endWord = document.querySelector('.end-word')
const arrange = document.querySelector('.arrange')


const startClass = startWord.classList
const endClass = endWord.classList
const arrangeClass = arrange.classList

totalCountries.textContent = `Total number of countries: ${countries.length}`


// Display country to div.container-country 
const countryOutput = (output) => {
    output.forEach( country => {
        countriesContainer.innerHTML += `
            <div class="country">${country.toUpperCase()}</div>
        `
    })
}

// Handle Input change event
const handleInputEvent = () => {
    countriesContainer.innerHTML = ''
    let value = input.value
    
    if (startClass.contains('activated') && value) {
        const countriesFilter = countries.filter((country) => country.toLowerCase().startsWith(value.toLowerCase()))
        searchDescription.textContent = `Countries start with ${value} are ${countriesFilter.length}`
        
        countryOutput(countriesFilter)
    } else if (endClass.contains('activated') && value) {
        const countriesFilter = countries.filter((country) => country.toLowerCase().endsWith(value.toLowerCase()))
        searchDescription.textContent = `Countries end with ${value} are ${countriesFilter.length}`
        
        countryOutput(countriesFilter)
    }  else if (!startClass.contains('activated') && !endClass.contains('activated') && value) {
        const countriesFilter = countries.filter((country) => country.toLowerCase().includes(value.toLowerCase()))
        searchDescription.textContent = `Countries containing ${value} are ${countriesFilter.length}`
        
        countryOutput(countriesFilter)
    } else if (!value) {
        fullListCountries()
    }
}

const fullListCountries = () => {
    searchDescription.textContent = ''
    countryOutput(countries)
}
fullListCountries()

startWord.addEventListener('click', e => {
    endClass.remove('activated')
    startClass.toggle('activated')
    handleInputEvent()
})

endWord.addEventListener('click', e => {
    startClass.remove('activated')
    endClass.toggle('activated')
    handleInputEvent()
})

arrange.addEventListener('click', e => {
    arrangeClass.toggle('activated')

    if (arrangeClass.contains('activated')) {
        arrange.innerHTML = `<i class="fas fa-sort-alpha-down-alt"></i>`
        countries.reverse()
    }
    if (!arrangeClass.contains('activated')) {
        arrange.innerHTML = `<i class="fas fa-sort-alpha-down"></i>`
        countries.sort()
    }
    handleInputEvent()
})

input.addEventListener('input', e => handleInputEvent(e))







































