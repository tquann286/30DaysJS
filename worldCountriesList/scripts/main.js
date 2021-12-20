const totalCountries = document.querySelector('h2')
const searchDescription = document.querySelector('h3')
const countriesList = document.querySelector('.countries-list')
const input = document.querySelector('input')
const countriesContainer = document.querySelector('.countries-container')

totalCountries.textContent = `Total number of countries: ${countries.length}`

const fullListCountries = () => {
    countries.forEach( country => {
        countriesContainer.innerHTML += `
            <div class="country">${country.toUpperCase()}</div>
        `
    })
}
fullListCountries()

input.addEventListener('input', e => {
    countriesContainer.innerHTML = ''
    let value = e.target.value
    // console.log(value)
    if (value) {
        searchDescription.textContent = `Countries start with ${e.target.value} are 52`
        const countriesFilter = countries.filter((country) => country.toLowerCase().includes(value.toLowerCase()))
        // console.log(countriesFilter)
        countriesFilter.forEach( country => {
            // console.log(country)
            countriesContainer.innerHTML += `
                <div class="country">${country.toUpperCase()}</div>
            `
        })
    } else (fullListCountries())
    
})