const search = document.querySelector('.search')
const city = document.querySelector('.city')
const country = document.querySelector('.country')
const time = document.querySelector('.time')
const value = document.querySelector('.value')
const shortDesc = document.querySelector('.short-desc')
const visibility = document.querySelector('.visibility span')
const wind = document.querySelector('.wind span')
const sun = document.querySelector('.sun span')
const content = document.querySelector('.content')
const body = document.querySelector('body')

async function changeWeatherUI (capitalSearch = 'ha noi') {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=52856f7930554325a903fd2629980764`
    let data = await fetch(apiURL).then(res => res.json())
    if (data.cod >= 200 && data < 300) {
        body.classList = ''
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + ' m/s'
        sun.innerText = data.main.humidity + '%'
        let temp = Math.round(data.main.temp - 273.15)
        value.innerHTML = `${temp} <sup>o</sup>C`
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''
        time.innerText = new Date().toLocaleString('vi')

        if (temp <= 20) {
            body.classList.add('cool')
        } else if ( temp > 20 && temp <= 25) {
            body.classList.add('cold')
        } else if ( temp > 25 && temp <= 30) {
            body.classList.add('warm')
        } else if ( temp > 30) {
            body.classList.add('hot')
        }

    } else {
        city.innerText = 'unknown'
    }
}

changeWeatherUI()

search.addEventListener('keypress', (e) => {
    if (e.code === 'Enter') {
        let capitalSearch = search.value.trim()
        changeWeatherUI(capitalSearch)
    }
})

changeWeatherUI('Ha noi')