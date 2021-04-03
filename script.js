let now = new Date();
let h2 = document.querySelector("h2");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
h2.innerHTML = `Last Updated: <br /> ${day} ${month} ${date}, ${year}`;  
  
  function formatHours(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    return `${hours}:${minutes}`;
  }
  
  function displayWeatherCondition(response) {
  
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#temperature");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");
  
  celsiusTemperature = response.data.main.temp;
  
  cityElement.innerHTML = response.data.name;
  
  temperatureElement.innerHTML = Math.round (celsiusTemperature);
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round (response.data.wind.speed);
 
  
  iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  
  }
  
  
  function displayForecast (response) {
    let forecastElement=document.querySelector("#forecast");
    let forecast = response.data.list[0];
  
    forecastElement.innerHTML=
    `  <div class = "col-2">
    <h3>
      ${formatHours(forecast.dt * 1000)}
    </h3>
    <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" />
    <div class = "weather-forecast-temperature">
      <strong>${Math.round(forecast.main.temp_max)}° | </strong>${Math.round(forecast.main.temp_min)}°   
  </div>
  </div>`;
  
  forecast = response.data.list[1];
  forecastElement.innerHTML +=`
  <div class = "col-2">
    <h3>
      ${formatHours(forecast.dt * 1000)}
    </h3>
    <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" />
    <div class = "weather-forecast-temperature">
      <strong>${Math.round(forecast.main.temp_max)}° | </strong>${Math.round(forecast.main.temp_min)}°   
  </div>
  </div>`;
  
  forecast = response.data.list[2];
  forecastElement.innerHTML +=`
  <div class = "col-2">
    <h3>
      ${formatHours(forecast.dt * 1000)}
    </h3>
    <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" />
    <div class = "weather-forecast-temperature">
      <strong>${Math.round(forecast.main.temp_max)}° | </strong>${Math.round(forecast.main.temp_min)}°   
  </div>
  </div>`;
  
  forecast = response.data.list[3];
  forecastElement.innerHTML +=`
  <div class = "col-2">
    <h3>
      ${formatHours(forecast.dt * 1000)}
    </h3>
    <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" />
    <div class = "weather-forecast-temperature">
      <strong>${Math.round(forecast.main.temp_max)}° | </strong>${Math.round(forecast.main.temp_min)}°   
  </div>
  </div>`;
  
  forecast = response.data.list[4];
  forecastElement.innerHTML +=`
  <div class = "col-2">
    <h3>
      ${formatHours(forecast.dt * 1000)}
    </h3>
    <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" />
    <div class = "weather-forecast-temperature">
      <strong>${Math.round(forecast.main.temp_max)}° | </strong>${Math.round(forecast.main.temp_min)}°   
  </div>
  </div>`;
  
  forecast = response.data.list[5];
  forecastElement.innerHTML +=`
  <div class = "col-2">
    <h3>
      ${formatHours(forecast.dt * 1000)}
    </h3>
    <img src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png" />
    <div class = "weather-forecast-temperature">
      <strong>${Math.round(forecast.main.temp_max)}° | </strong>${Math.round(forecast.main.temp_min)}°   
  </div>
  </div>`;
  }
  
  
  function searchCity (city) {
  let apiKey = "b41bf430779b02c52dcbfecec30e2a8e";  
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
  
  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
  }
  
  function handleSubmit (event) {
    debugger;
    event.preventDefault();
    let city = document.querySelector("#city-input").value;
    searchCity (city);
    
  }
  
  function searchLocation(position) {
  let apiKey = "b41bf430779b02c52dcbfecec30e2a8e";  
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
  }
  
  function getCurrentLocation (event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }
  
  function convertToFarenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    celsiusLink.classList.remove("active");
    farenheitLink.classList.add ("active");
    let farenheitTemperature = (celsiusTemperature * 9 ) / 5 + 32;
    temperatureElement.innerHTML = Math.round (farenheitTemperature);
  }
  
  
  function convertToCelsius(event) {
    event.preventDefault();
    celsiusLink.classList.add("active");
    farenheitLink.classList.remove("active");
    let temperatureElement = document.querySelector ("#temperature");
    temperatureElement.innerHTML = Math.round (celsiusTemperature);
  }
  
  let celsiusTemperature = null;
  
  let searchForm = document.querySelector("#search-form");
  
  let farenheitLink = document.querySelector("#farenheit-link");
  farenheitLink.addEventListener("click", convertToFarenheit);
  
  let celsiusLink = document.querySelector("#celsius-link");
  celsiusLink.addEventListener("click", convertToCelsius);
  
  
  searchForm.addEventListener("submit", handleSubmit);
  
  
  let currentLocationButton = document.querySelector ("#current-location-button");
  currentLocationButton.addEventListener("click", getCurrentLocation);
  
  searchCity ("Toronto");