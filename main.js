//Selectores del DOM
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
const suggestionsBox = document.querySelector("#suggestions");

//LOGICA DE AUTOCOMPLETADO
//Funciona cada vez que el usuario escribe en el campo de busqueda
searchField.addEventListener("input", async (e) => {
    const query = e.target.value.trim();

    //Solo buscamos si el usuario ha escrito 3 o mas caracteres
    if (query.length < 3) {
        suggestionsBox.innerHTML = "";
        return;
    }

    try {
        const res = await fetch(`https://api.weatherapi.com/v1/search.json?key=aa0903ca1d74404f89805015251312&q=${query}`);
        const locations = await res.json();

        //Generamos el HTML de sugerencias
        suggestionsBox.innerHTML = locations
            .map(loc => `<div class="suggestion-item" data-name="${loc.name}">${loc.name}, ${loc.country}</div>`)
            .join("");

        //Agregamos un evento de click a cada sugerencia que se genere
        document.querySelectorAll(".suggestion-item").forEach(item => {
            item.addEventListener("click", () => {
                const selectedCity = item.getAttribute("data-name");
                searchField.value = selectedCity;
                suggestionsBox.innerHTML = "";
                fetchResults(selectedCity);
            });
        });

    } catch (error) {
        console.error("Error al obtener sugerencias:", error);
    }
});

//Cierre de sugerencia si el usuario hace click fuera
document.addEventListener("click", (e) => {
    if (!e.target.closest(".search_container")) {
        suggestionsBox.innerHTML = "";
    }
});

form.addEventListener("submit", searchForLocation);

//PETICION DE DATOS CLIMATICOS
const fetchResults = async (targetLocation) => {
    try {
        const url = `https://api.weatherapi.com/v1/current.json?key=aa0903ca1d74404f89805015251312&q=${targetLocation}&aqi=no`;
        const res = await fetch(url);

        if (!res.ok) throw new Error("City not found");

        //Variables especificas del objeto json
        const data = await res.json();
        const { name } = data.location;
        const { localtime } = data.location;
        const { temp_c, condition, is_day, humidity, wind_kph, feelslike_c, uv, pressure_mb } = data.current;

        //Enviamos los datos procesados a la funcion que actualiza la pantalla
        updateDetails(temp_c, name, localtime, condition.text, condition.icon, is_day, humidity, wind_kph, feelslike_c, uv, pressure_mb);

    } catch (error) {
        alert("Location not found. Please try again.");
    }
};

//INTERFAZ DE USUARIO (UI)
function updateDetails(temp, locationName, time, condition, icon, isDay, humidity, wind, feelsLike, uv, pressure) {
    //Formateo de la fecha y hora con el Date nativo
    const dateObject = new Date(time);
    const currentDay = dateObject.toLocaleDateString('en-US', { weekday: 'long' });
    const [splitDate, splitTime] = time.split(" ");

    //Insercion de texto en los campos correspondientes
    temperatureField.innerText = `${temp} °C`;
    locationField.innerText = locationName;
    dateAndTimeField.innerText = `${currentDay}, ${splitDate} | ${splitTime}`;
    conditionField.innerText = condition;
    conditionIcon.src = `https:${icon}`;
    humidityField.innerText = `${humidity}%`;
    windField.innerText = `${wind} km/h`;
    feelsLikeField.innerText = `${feelsLike} °C`;
    uvField.innerText = uv;
    pressureField.innerText = `${pressure} hPa`;

    //Cambio de tema (dia, noche)
    container.classList.toggle("day-mode", isDay === 1);
    container.classList.toggle("night-mode", isDay !== 1);

    //Ajuste del color de texto segun el tema
    const weatherContainer = document.querySelector(".weather_container");
    weatherContainer.style.color = (isDay === 1) ? "#212121" : "#FFFFFF";
}

function searchForLocation(e) {
    e.preventDefault();
    if (searchField.value.trim() !== "") {
        fetchResults(searchField.value);
        searchField.value = "";
    }
}

//INICIO DE LA APLICACION Y GEOLOCALIZACION
//Obtener la ubicacion del usuario al cargar la pagina
function getLocalWeather() {
    //navigator.geolocation es una API del navegador
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                fetchResults(`${lat},${lon}`); //Buscamos por coordenadas
            },
            () => {
                fetchResults("Medellín"); //Si el usuario rechaza la geolocalizacion, hace fallback en Medellin
            }
        );
    } else {
        fetchResults("Medellín");
    }
}

//Ejecucion Inicial
getLocalWeather();