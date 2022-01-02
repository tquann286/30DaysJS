const subtitle = document.querySelector('.subtitle')
const population = document.querySelector('.population')
const languages = document.querySelector('.languages')
const graphTitle = document.querySelector('.graph-title')
const graphs = document.querySelector('.graphs')
const graphWrapper = document.querySelector('.graph-wrapper')

subtitle.innerHTML = `Currently, we have ${countries.length} countries`

// Population handle 
const totalPopulation = countries.reduce((acc, cur) => acc + cur.population, 0)
const sortedByPopulation = countries.sort((a, b) => b.population - a.population)

population.addEventListener('click', () => {
    let numberOfCountries = Number(prompt('Input number of countries:', 10))
    while (isNaN(numberOfCountries) || numberOfCountries < 0) {
        numberOfCountries = Number(prompt('Please input number:', 10))
    } 
    let numberOfSortedCountries = sortedByPopulation.slice(0, numberOfCountries)


    graphTitle.textContent = `${numberOfCountries} Most populated countries in the world`
    graphs.innerHTML = `
        <div class="graph-wrapper">
            <div class="graph-name">World</div>
            <div class="percentage"></div>
            <div class="graph-population">${totalPopulation}</div>
        </div>
        `
    numberOfSortedCountries.forEach(coun => {
        graphs.innerHTML += `
        <div class="graph-wrapper">
            <div class="graph-name">
                ${coun.name}
            </div>
            
            <div class="percentage percenOf${coun.name}" style="width: ${coun.population / totalPopulation * 50}%;"></div>
            <div class="graph-population">${coun.population}</div>
        </div>
        `
    })
})

// Languages handle
// Filter out an array of all languages
let allLang = []
let mostSpokenLang = []
countries.forEach(coun => {
    coun.languages.forEach( eachLang => {
        allLang.push(eachLang)
    })
})
let uniqueLang = [ ... new Set(allLang)]
// console.log(uniqueLang)

uniqueLang.forEach(lang => {
    mostSpokenLang.push({
        name: lang,
        count: 0
    })
})
countries.forEach(coun => {
    coun.languages.forEach( lang => {
        mostSpokenLang.forEach( eachLang => {
            if ( lang === eachLang.name ) {
                eachLang.count++
            }
        })
    })
})
mostSpokenLang.sort((a, b) => b.count - a.count)
// console.log(mostSpokenLang)

languages.addEventListener('click', () => {
    graphs.innerHTML = ``
    let numberOfLanguages = Number(prompt('Input number of languages:', 10))
    while (isNaN(numberOfLanguages) || numberOfLanguages < 0) {
        numberOfLanguages = Number(prompt('Please input number:', 10))
    }
    let numberOfSortedLanguages = mostSpokenLang.slice(0, numberOfLanguages)

    graphTitle.textContent = `${numberOfLanguages} Most spoken languages in the world`
    numberOfSortedLanguages.forEach( (coun, index) => {
        graphs.innerHTML += `
        <div class="graph-wrapper">
            <div class="graph-name">
                ${coun.name}
            </div>
            
            <div class="percentage percenOf${coun.name}" style="width: ${coun.count / numberOfSortedLanguages[0].count * 100 * 0.5}%;"></div>
            <div class="graph-population">${coun.count}</div>
        </div>
        `
    })
})