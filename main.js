const temperatureField = document.querySelector(".temperature");
const locationField = document.querySelector(".time_location p");
const dateAndTimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");

form.addEventListener("submit", searchForLocation)

let target = "Medellín"

const fetchResults = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=aa0903ca1d74404f89805015251312&q=${targetLocation}&aqi=no`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    let locationName = data.location.name
    let time = data.location.localtime
    let temperature = data.current.temp_c
    let condition = data.current.condition.text
    updateDetails(temperature, locationName, time, condition)
}

function updateDetails(temperature, locationName, time, condition) {
    const dateObject = new Date(time);
    let currentDay = getDayName(dateObject.getDay());
    let splitDate = time.split(" ")[0]
    let splitTime = time.split(" ")[1]

    temperatureField.innerText = temperature
    locationField.innerText = locationName
    dateAndTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`;
    conditionField.innerText = condition
}

function searchForLocation(e) {
    e.preventDefault()
    target = searchField.value
    fetchResults(target)
}

fetchResults(target)

function getDayName(number) {
    switch (number) {
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
    }
}