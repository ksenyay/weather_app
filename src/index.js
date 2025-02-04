import "./styles.css";

const form = document.querySelector("#location_form");
const input = document.querySelector("#location");
const apiKey = "9b55a3d3f82343e0bde92555250302";
const baseUrl = "http://api.weatherapi.com/v1";

window.onload = function () {
  displayWeather("Lviv"); // Set a default location
};

class CurrentWeatherData {
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
    document.querySelector("#city").textContent = `${this.city}, `;
    document.querySelector("#country").textContent = this.country;
    document.querySelector("#temperature").textContent =
      `${Math.round(this.currentTemp)}`;
    document.querySelector("#condition").textContent = this.condition;
    document.querySelector("#feels_like").textContent =
      `Feels like ${Math.round(this.feelsLike)} °C`;
    document.querySelector("#weather_icon").src = this.icon;
    document.querySelector("#humidity_percentage").textContent =
      `${this.humidity}%`;
  }

  updateHumidity() {
    let circle = document.getElementById("fill-circle");
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

  const weatherData = await getCurrentWeather(location);
  if (weatherData) {
    weatherData.updateUI();
    weatherData.updateHumidity();
  }
}

async function getCurrentWeather(location) {
  try {
    const response = await fetch(
      `${baseUrl}/current.json?key=${apiKey}&q=${encodeURIComponent(location)}`,
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const responseData = await response.json();
    console.log(responseData);
    return new CurrentWeatherData(responseData);
  } catch (error) {
    console.error("Failed to fetch weather data:", error.message);
    alert("Please enter a valid value!");
  }
}

// FORECAST

/*async function getForecast() {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=9b55a3d3f82343e0bde92555250302&q=${encodeURIComponent(location)}&days=6`,
    );
    const responseData = await response.json();
    console.log(responseData);
  } catch (error) {
    console.error("Failed to fetch weather data:", error.message);
    alert("Please enter a valid value!");
  }
}*/
