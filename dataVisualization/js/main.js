const subtitle = document.querySelector('.subtitle')
const totalPopulation = countries.reduce((acc, cur) => acc + cur.population, 0)
const sortedByPopulation = countries.sort((a, b) => b.population - a.population)
const population = document.querySelector('.population')
const languages = document.querySelector('.languages')
const graphTitle = document.querySelector('.graph-title')
const graphs = document.querySelector('.graphs')
const graphWrapper = document.querySelector('.graph-wrapper')


population.addEventListener('click', () => {
    let numberOfCountries = Number(prompt('Input number of countries:', 10))
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
                <img src="${coun.flag}" alt="">
                ${coun.name}
            </div>
            
            <div class="percentage percenOf${coun.name}" style="width: ${coun.population / totalPopulation * 100}%;"></div>
            <div class="graph-population">${coun.population}</div>
        </div>
        `
    })
})

subtitle.innerHTML = `Currently, we have ${countries.length} countries`
languages.addEventListener('click', () => {
    // Filter out an array of all languages
    let allLang = []
    let mostSpokenLang = []
    countries.forEach(coun => {
        coun.languages.forEach( eachLang => {
            allLang.push(eachLang)
        })
    })
    let uniqueLang = [ ... new Set(allLang)]
    console.log(uniqueLang)

    countries.forEach(coun => {
        coun.languages.forEach( eachLang => {
            
        })
    })
})
// Phần coun.flag bị lỗi bên api











































