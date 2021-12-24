const url = 'https://restcountries.com/v2/all' // countries api
const searchDescription = document.querySelector('h2')
const container = document.querySelector('.container')
const input = document.querySelector('input')


// Display country to div.container 
const countriesOutput = (country) => {
    let languages = []

    country.languages.forEach( lang => {
        languages.push(lang.name)
    })
    container.innerHTML += `
        <div class="country">
            <img class="country-flag" src=${country.flag} alt="">
            <h4 class="country-name">${country.name}</h4>
            <span class="country-lang">Capital: ${country.capital}</span>
            <span class="country-lang">${ languages.length > 1 ? `Languages: ${languages.join(', ')}` : `Language: ${languages}` }</span>
            <span class="country-population">Population: ${country.population}</span>
        </div>
    `
}

async function getData() {
    const response = await fetch(url)
    const data = await response.json()
    const countries = []
    searchDescription.innerHTML = `Currently we have ${data.length} countries`
    // console.log(data)
    data.forEach( country => {
        let name = country.name
        let flag = country.flag
        let capital = country.capital
        let population = country.population
        let languages = []

        country.languages.forEach( lang => {
            languages.push(lang.name)
        })

        countries.push({
            name,
            flag,
            capital,
            population,
            languages
        })
        countriesOutput(country)
    })

    input.addEventListener('input', () => {
        container.innerHTML = ''
        let value = input.value

        const countriesFilter = countries.filter((country) => country.name.toLowerCase().includes(value.toLowerCase()))
        console.log(countriesFilter)
        searchDescription.textContent = `${countriesFilter.length} countries satisified the search criteria`
    })
    return countries
}
getData()
.catch(err => console.error(err))

console.log(getData())
















