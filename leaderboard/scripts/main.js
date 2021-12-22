const firstName = document.querySelector('.firstName')
const lastName = document.querySelector('.lastName')
const country = document.querySelector('.country')
const scoce = document.querySelector('.scoce')
const addBtn = document.querySelector('.add')
const p = document.querySelector('p')
const main = document.querySelector('.main')
const input = document.querySelectorAll('input')
const addBtnClasses = addBtn.classList
// Get time function
function showTime(){
    let date = new Date()
    let dateNow = date.getDate()
    let year = date.getUTCFullYear()
    let h = date.getHours() 
    let m = date.getMinutes() 
    let s = date.getSeconds() 
    let session = "AM"
    const months = [
        "JAN", "FEB", 
        "MAR", "APR", "MAY", 
        "JUN", "JUL", "AUG",
        "SEP", "OCT", 
        "NOV", "DEC"
    ];

    if(h == 0){
        h = 12
    }
    
    if(h > 12){
        h = h - 12
        session = "PM"
    }
    
    h = (h < 10) ? "0" + h : h
    m = (m < 10) ? "0" + m : m
    s = (s < 10) ? "0" + s : s
    
    let time = `${months[date.getMonth()]} ${dateNow}, ${year} ${h}:${m} ${session}`
    return time
}

const sortPlayerScore = () => {
    player.sort((a, b) => b.score - a.score)
}

const showCurPlayer = () => {
    main.innerHTML = ''
    sortPlayerScore()
    player.forEach(eachPlayer => {
        // Show current (data) player + addBtn click player
        main.innerHTML += `
        <div class="player">
            <div class="nameDate">
                <span class="name">${eachPlayer.lastName} ${eachPlayer.firstName}</span>
                <span class="date">${eachPlayer.date}</span>
            </div>
            <span class="country">${eachPlayer.country}</span>
            <span class="score">${eachPlayer.score}</span>
            <div class="tool">
                <button class="delete" style="color: red;"><i class="fal fa-trash-alt"></i></button>
                <button class="plusFive">+5</button>
                <button class="decreaseFive">-5</button>
            </div>
        </div>
        `
    })
    
    // Handle delete Btn click
    const deleteBtn = document.querySelectorAll('.delete')
    deleteBtn.forEach((delectedBtn, index) => {
        delectedBtn.addEventListener('click', () => {
            player.splice(index, 1)
            showCurPlayer()
        })
    })
    // Handle plus 5 Btn click
    const plusFiveBtn = document.querySelectorAll('.plusFive')
    plusFiveBtn.forEach((delectedBtn, index) => {
        delectedBtn.addEventListener('click', () => {
            player[index].score += 5
            showCurPlayer()
        })
    })

    // Handle decrease 5 Btn click
    const decreaseFiveBtn = document.querySelectorAll('.decreaseFive')
    decreaseFiveBtn.forEach((delectedBtn, index) => {
        delectedBtn.addEventListener('click', () => {
            player[index].score -= 5
            showCurPlayer()
        })
    })
}
showCurPlayer()

const handleAddBtnClick = () => {
    p.innerText = ''
    const firstNameValue = firstName.value
    const lastNameValue = lastName.value
    const countryValue = country.value
    const scoceValue = scoce.value

    if (firstNameValue && lastNameValue && countryValue && scoceValue) {
        player.push({
            firstName: firstNameValue,
            lastName: lastNameValue,
            date: showTime(),
            country: countryValue,
            score: Number(scoceValue)
        })
        sortPlayerScore()
        showCurPlayer()
    } else {
        p.innerText = 'All fields are required'
    }
}


addBtn.addEventListener('click', () => {
    handleAddBtnClick()
})





































