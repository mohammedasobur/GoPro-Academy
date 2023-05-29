let dayBox =  document.getElementById("days")
let hrBox = document.getElementById("hours")
let minBox = document.getElementById("min")
let secBox = document.getElementById("sec")
let endDate = new Date(2025, 0, 1, 00, 00)
let endTime = endDate.getTime()

function countDown() {
    let todayDate = new Date()
    let todayTime = todayDate.getTime()
    let remainingTime = endTime - todayTime
    let oneMin = 60 * 1000
    let oneHr = 60 * oneMin
    let oneDay = 24 * oneHr

    let addZeroes = (num) => (num < 10 ? `0${num}` : num)

    if (endTime < todayTime) {
        clearInterval(i)
        document.querySelector(".time-bar").innerHTML = `<h1>Count down has expired</h1>`
    } else {
        let daysLeft = Math.floor(remainingTime / oneDay)
        let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr)
        let minsLeft = Math.floor((remainingTime % oneHr) / oneMin)
        let secsLeft = Math.floor((remainingTime % oneMin) / 1000)

        dayBox.textContent = addZeroes(daysLeft)
        hrBox.textContent = addZeroes(hrsLeft)
        minBox.textContent = addZeroes(minsLeft)
        secBox.textContent = addZeroes(secsLeft)
            }   
    
}

let i = setInterval(countDown, 1000)
countDown