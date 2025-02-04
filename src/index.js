import "./styles.css";

const form = document.querySelector("form");
const input = document.querySelector("input");
const apiKey = "9b55a3d3f82343e0bde92555250302";
const baseUrl = "http://api.weatherapi.com/v1";

window.onload = function () {
  displayWeather("Lviv"); // Set a default location
  displayForecast("Lviv");
};

// CURRENT WEATHER & HUMIDITY

class CurrentWeather {
  constructor(data) {
    this.city = data.location.name;
    this.country = data.location.country;
    this.currentTemp = data.current.temp_c;
    this.condition = data.current.condition.text;
    this.feelsLike = data.current.feelslike_c;
    this.icon = data.current.condition.icon;
    this.humidity = data.current.humidity;
  }

  updateUI() {
    document.querySelector(".city").textContent = `${this.city}, `;
    document.querySelector(".country").textContent = this.country;
    document.querySelector(".temperature").textContent =
      `${Math.round(this.currentTemp)}`;
    document.querySelector(".condition").textContent = this.condition;
    document.querySelector(".feels-like").textContent =
      `Feels like ${Math.round(this.feelsLike)} °C`;
    document.querySelector(".weather-icon").src = this.icon;
    document.querySelector(".humidity-percentage").textContent =
      `${this.humidity}%`;
  }

  updateHumidity() {
    let circle = document.querySelector(".fill-circle");
    let maxDashOffset = 251.2; // Circumference of the circle (2 * π * r)
    let newOffset = maxDashOffset - (this.humidity / 100) * maxDashOffset;
    circle.style.strokeDashoffset = newOffset;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = input.value.trim();
  displayWeather(location);
});

async function displayWeather(location) {
  if (!location) {
    alert("The field cannot be empty!");
    return;
  }

  const weatherData = await fetchCurrentWeather(location);
  if (weatherData) {
    weatherData.updateUI();
    weatherData.updateHumidity();
  }
}

async function fetchCurrentWeather(location) {
  try {
    const response = await fetch(
      `${baseUrl}/current.json?key=${apiKey}&q=${encodeURIComponent(location)}`,
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const responseData = await response.json();
    return new CurrentWeather(responseData);
  } catch (error) {
    console.error("Failed to fetch weather data:", error.message);
    alert("Please enter a valid value!");
  }
}

// FORECAST

class Forecast {
  constructor(data) {
    this.forecast = data.forecast;
  }

  printWeather() {
    console.log(this.forecast);
  }

  displayForecast() {}
}

async function fetchForecast(location) {
  try {
    const response = await fetch(
      `${baseUrl}/forecast.json?key=${apiKey}&q=${encodeURIComponent(location)}&days=7`,
    );
    const responseData = await response.json();
    console.log(responseData);
    return new Forecast(responseData);
  } catch (error) {
    console.error("Failed to fetch weather data:", error.message);
    alert("Please enter a valid value!");
  }
}

async function displayForecast(location) {
  if (!location) {
    alert("The field cannot be empty!");
    return;
  }

  const weatherData = await fetchForecast(location);
  if (weatherData) {
    weatherData.printWeather();
  }
}
