const h2 = document.querySelector('h2')
const searchDescription = document.querySelector('h3')
const container = document.querySelector('.countries-container')
const input = document.querySelector('input')
const sortName = document.querySelector('.sort-name')
const sortCapital = document.querySelector('.sort-capital')
const sortPopulation = document.querySelector('.sort-population')
const graphTitle = document.querySelector('.graph-title')
const graphs = document.querySelector('.graphs')
const graphWrapper = document.querySelector('.graph-wrapper')

const sortNameClass = sortName.classList
const sortCapitalClass = sortCapital.classList
const sortPopulationClass = sortPopulation.classList



// Display country to div.container 
const countriesOutput = (data) => {
    data.forEach( country => {
        container.innerHTML += `
        <div class="country">
            <img class="country-flag" src=${country.flag} alt="">
            <h4 class="country-name">${country.name}</h4>
            <span class="country-lang">Capital: ${country.capital}</span>
            <span class="country-lang">${ country.languages.length > 1 ? `Languages: ${country.languages.join(', ')}` : `Language: ${country.languages}` }</span>
            <span class="country-population">Population: ${country.population}</span>
        </div>
    `
    }) 
}

// Get essential countries value from data (name, flag link, capital, population, languages)
const countries =  countriesData.map( country => {
    let name = country.name
    let flag = country.flag
    let capital = country.capital
    let population = country.population
    let languages = []

    country.languages.forEach( lang => {
        languages.push(lang.name)
    })
    
    return {
        name,
        flag,
        capital,
        population,
        languages
    }
})


// Display top populous countries to HTML 
const showCountries = (countries) => {
    countries.forEach(coun => {
        graphs.innerHTML += `
        <div class="graph-wrapper">
            <div class="graph-name">
                ${coun.name}
            </div>
            
            <div class="percentage percenOf${coun.name}" style="width: ${coun.population / totalPopulation * 100}%;"></div>
            <div class="graph-population">${coun.population}</div>
        </div>
        `
    })
}

h2.innerHTML = `Currently we have ${countries.length} countries`
const totalPopulation = countries.reduce((acc, cur) => acc + cur.population, 0)

graphTitle.textContent = `Top World Population`
const showWorldPopulation = () => {
    graphs.innerHTML = `
    <div class="graph-wrapper">
        <div class="graph-name">World</div>
        <div class="percentage"></div>
        <div class="graph-population">${totalPopulation}</div>
    </div>
    `
}
showWorldPopulation()
showCountries(countries)



// Display all countries at the first user's visit
countriesOutput(countries)

// Initial sort buttons
// Sort Name
const sortNameBtnContent = () => {
    sortNameClass.remove('activated')
    sortName.innerHTML = `
    NAME
    <i class="fas fa-sort-alpha-down sort-icon"></i>
    `
}
sortNameBtnContent()

// Sort capital
const sortCapitalBtnContent = () => {
    sortCapitalClass.remove('activated')
    sortCapital.innerHTML = `
    CAPITAL
    <i class="fas fa-sort-alpha-down sort-icon"></i>
    `
}
sortCapitalBtnContent()

// Sort population
const sortPopulationBtnContent = () => {
    sortPopulationClass.remove('activated')
    sortPopulation.innerHTML = `
    POPULATION
    <i class="fas fa-sort-numeric-down sort-icon"></i>
    `
}
sortPopulationBtnContent()


// Handle input event
const handleInputEvent = () => {
    container.innerHTML = ''
    let value = input.value

    const countriesFilter = countries.filter((country) => {
        // Check if language contains input value
        let lowerCasedLanguages = country.languages.map(lang => lang.toLowerCase())
        let found = false
        for (let i = 0; i < lowerCasedLanguages.length && !found; i++) {
            if (lowerCasedLanguages[i].includes(value.toLowerCase())) {
                found = true
            }
        }
        if (found) {
            return found
        }

        // Check if capital contains input value
        if (country.capital !== undefined) {
            return country.capital.toLowerCase().includes(value.toLowerCase())
        }

        // Check if name contains input value
        return country.name.toLowerCase().includes(value.toLowerCase())
    })

    // Check if sorted Buttons is activated
    let sortedCountries = countriesFilter
    if (sortNameClass.contains('activated')) {
        sortName.innerHTML = `
        NAME
        <i class="fas fa-sort-alpha-down-alt sort-icon"></i>
        `
        sortedCountries = countriesFilter.sort((a,b) => (b.name > a.name) ? 1 : ((a.name > b.name) ? -1 : 0))
    } else if (sortCapitalClass.contains('activated')) {
        sortCapital.innerHTML = `
        CAPITAL
        <i class="fas fa-sort-alpha-down-alt sort-icon"></i>
        `
        sortedCountries = countriesFilter.sort((a,b) => (b.capital > a.capital) ? 1 : ((a.capital > b.capital) ? -1 : 0))
    } else if (sortPopulationClass.contains('activated')) {
        sortPopulation.innerHTML = `
        POPULATION
        <i class="fas fa-sort-numeric-down-alt sort-icon"></i>
        `
        sortedCountries = countriesFilter.sort((a,b) => (b.population > a.population) ? 1 : ((a.population > b.population) ? -1 : 0))
    } else {
        sortNameBtnContent()
        sortCapitalBtnContent()
        sortPopulationBtnContent()
    }
    graphTitle.textContent = `Top ${sortedCountries.length} Most Populous Countries`
    countriesOutput(sortedCountries)

    // Display search description content
    if (value) {
        searchDescription.textContent = `${countriesFilter.length} countries satisified the search criteria`
    } else {
        searchDescription.textContent = ''
    }
    showWorldPopulation()
    showCountries(sortedCountries)
}

input.addEventListener('input', () => {
    handleInputEvent()
})

// Add sort button click event (Name, Capital, Population)
sortName.addEventListener('click', () => {
    if (sortPopulationClass.contains('activated')) {
        sortPopulationBtnContent()
    } else if (sortCapitalClass.contains('activated')) {
        sortCapitalBtnContent()
    }
    sortNameClass.toggle('activated')
    handleInputEvent()
})
sortCapital.addEventListener('click', () => {
    if (sortNameClass.contains('activated')) {
        sortNameBtnContent()
    } else if (sortPopulationClass.contains('activated')) {
        sortPopulationBtnContent()
    }
    sortCapitalClass.toggle('activated')
    handleInputEvent()
})
sortPopulation.addEventListener('click', () => {
    if (sortNameClass.contains('activated')) {
        sortNameBtnContent()
    } else if (sortCapitalClass.contains('activated')) {
        sortCapitalBtnContent()
    }
    sortPopulationClass.toggle('activated')
    handleInputEvent()
})

//Get the button:
scrollToTop = document.getElementById('scroll-to-top');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
}



// When the user clicks on the button, scroll to the top of the document
function handleScrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}