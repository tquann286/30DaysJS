//    ***Định dùng async await fetch api từ server nhưng mà bị mỗi lần change input phải chạy lại fetch làm chậm web :(
// const url = 'https://restcountries.com/v2/all' // countries api  
// async function getData() {
//     const response = await fetch(url)
//     const data = await response.json()
//     h2.innerHTML = `Currently we have ${data.length} countries`
//     // console.log(data)
//     const countries =  data.map( country => {
//         let name = country.name
//         let flag = country.flag
//         let capital = country.capital
//         let population = country.population
//         let languages = []

//         country.languages.forEach( lang => {
//             languages.push(lang.name)
//         })
        
//         return {
//             name,
//             flag,
//             capital,
//             population,
//             languages
//         }
//     })

//     input.addEventListener('input', () => {
//         container.innerHTML = ''
//         let value = input.value

//         const countriesFilter = countries.filter((country) => country.name.toLowerCase().includes(value.toLowerCase()))
//         console.log(countriesFilter)
//         countriesFilter.forEach( country => countriesOutput(country))
        
        
//         searchDescription.textContent = `${countriesFilter.length} countries satisified the search criteria`
//     })
// }
// getData()
// .catch(err => console.error(err))