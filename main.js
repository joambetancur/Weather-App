const temperatureField = document.querySelector(".temperature");
const locationField = document.querySelector(".time_location p");
const dateAndTimeField = document.querySelector(".time_location span");
const conditionField = document.querySelector(".condition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector("form");
const conditionIcon = document.querySelector(".weather_icon");
const container = document.querySelector(".container");
const humidityField = document.querySelector("#humidity_val");
const windField = document.querySelector("#wind_val");
const feelsLikeField = document.querySelector("#feels_like_val");
const uvField = document.querySelector("#uv_val");
const pressureField = document.querySelector("#pressure_val");

form.addEventListener("submit", searchForLocation)

let target = "Medellín"

const fetchResults = async (targetLocation) => {
    let url = `https://api.weatherapi.com/v1/current.json?key=aa0903ca1d74404f89805015251312&q=${targetLocation}&aqi=no`
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    let locationName = data.location.name
    let time = data.location.localtime
    let temperature = data.current.temp_c
    let condition = data.current.condition.text
    let icon = data.current.condition.icon
    let isDay = data.current.is_day;
    let humidity = data.current.humidity;
    let wind = data.current.wind_kph;
    let feelsLike = data.current.feelslike_c;
    let uv = data.current.uv;
    let pressure = data.current.pressure_mb;

    updateDetails(temperature, locationName, time, condition, icon, isDay, humidity, wind, feelsLike, uv, pressure)
}

function updateDetails(temperature, locationName, time, condition, icon, isDay, humidity, wind, feelsLike, uv, pressure) {
    const dateObject = new Date(time);
    let currentDay = getDayName(dateObject.getDay());
    let splitDate = time.split(" ")[0]
    let splitTime = time.split(" ")[1]

    temperatureField.innerText = `${temperature} °C`
    locationField.innerText = locationName
    dateAndTimeField.innerText = `${currentDay}, ${splitDate} | ${splitTime}`;
    conditionField.innerText = condition
    conditionIcon.src = `https:${icon}`;
    humidityField.innerText = `${humidity}%`;
    windField.innerText = `${wind} km/h`;
    feelsLikeField.innerText = `${feelsLike} °C`;
    uvField.innerText = uv;
    pressureField.innerText = `${pressure} hPa`;

    if (isDay === 1) {
        container.classList.add("day-mode");
        container.classList.remove("night-mode");
    } else {
        container.classList.add("night-mode");
        container.classList.remove("day-mode");
    }
    const weatherContainer = document.querySelector(".weather_container");
    weatherContainer.style.color = (isDay === 1) ? "#212121" : "#FFFFFF";
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

