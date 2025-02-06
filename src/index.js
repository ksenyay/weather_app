/* eslint-disable no-undef */
import "./styles.css";

const apiKey = process.env.API_KEY;
const baseUrl = process.env.API_URL;

document.body.style.zoom = "110%"; // Adjusting default page zoom

const form = document.querySelector("form");
const input = document.querySelector("input");

window.onload = function () {
  setBackground("countryside");
  displayWeather("Lviv"); // Set a default location
  displayForecast("Lviv");
  displayHourlyTemp("Lviv");
};

// CURRENT WEATHER & HUMIDITY

class CurrentWeather {
  constructor(data) {
    this.location = `${data.location.name}, ${data.location.country}`;
    this.currentTemp = data.current.temp_c;
    this.condition = data.current.condition.text;
    this.feelsLike = data.current.feelslike_c;
    this.icon = data.current.condition.icon;
    this.humidity = data.current.humidity;
    this.rain = data.current.precip_mm;
    this.wind = data.current.wind_kph;
    this.uv = data.current.uv;
  }

  updateUI() {
    document.querySelector(".location").textContent = this.location;
    document.querySelector(".temperature").textContent =
      `${Math.round(this.currentTemp)}`;
    document.querySelector(".condition").textContent = this.condition;
    document.querySelector(".feels-like").textContent =
      `Feels like ${Math.round(this.feelsLike)} °C`;
    document.querySelector(".weather-icon").src = this.icon;
    document.querySelector(".humidity-percentage").textContent =
      `${this.humidity}%`;
    document.querySelector("#wind").textContent =
      `${Math.round(this.wind)} km/h`;
    document.querySelector("#rain").textContent = `${this.rain} mm`;
    document.querySelector("#uv").textContent = `${this.uv}`;
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
  displayForecast(location);
  displayHourlyTemp(location);
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
    this.forecast = data.forecast.forecastday;
    this.chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
  }

  updateForecastUI() {
    for (let i = 0; i < 7; i++) {
      const day = document.querySelector(`#forecast-${i + 1} .day`);
      const condition = document.querySelector(`#forecast-${i + 1} img`);
      const dayTemp = document.querySelector(`#forecast-${i + 1} .day-temp`);

      if (day && condition && dayTemp) {
        let dayOfTheWeek = convertDate(this.forecast[i]["date"]);
        day.textContent = dayOfTheWeek;
        condition.src = this.forecast[i]["day"]["condition"]["icon"];
        dayTemp.textContent = `${Math.round(this.forecast[i]["day"]["avgtemp_c"])} °C`;
      }
    }
    document.querySelector("#rain-chance").textContent =
      `${this.chanceOfRain}%`;
  }
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
  }
}

async function displayForecast(location) {
  if (!location) {
    return;
  }

  const weatherData = await fetchForecast(location);
  if (weatherData) {
    weatherData.updateForecastUI();
  }
}

function convertDate(dateStr) {
  const [year, month, day] = dateStr.split("-").map((num) => parseInt(num));
  const date = new Date(year, month - 1, day);

  const dayOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return dayOfTheWeek[date.getDay()];
}

// HOURLY FORECAST

class HourlyWeather {
  constructor(data) {
    this.hourlyData = data.forecast.forecastday[0];
    this.index = 0;
  }

  updateHourlyWeather() {
    for (let i = 0; i <= 23; i += 3) {
      let hour = this.hourlyData.hour[i];
      if (hour) {
        document.querySelector(`#hourly-${this.index + 1} div p`).textContent =
          `${Math.round(hour.temp_c)} °C`;
        document.querySelector(`#hourly-${this.index + 1} div img`).src =
          hour.condition.icon;
        this.index += 1;
      }
    }
    document.querySelector(`#hourly-9 div p`).textContent =
      `${Math.round(this.hourlyData.hour[23].temp_c)} °C`;
    document.querySelector(`#hourly-9 div img`).src =
      this.hourlyData.hour[23].condition.icon;
  }
}

async function fetchHourlyTemp(location) {
  try {
    const response = await fetch(
      `${baseUrl}/forecast.json?key=${apiKey}&q=${encodeURIComponent(location)}&days=1`,
    );
    const responseData = await response.json();
    return new HourlyWeather(responseData);
  } catch (error) {
    console.error("Failed to fetch weather data:", error.message);
  }
}

async function displayHourlyTemp(location) {
  if (!location) {
    return;
  }

  const weatherData = await fetchHourlyTemp(location);
  if (weatherData) {
    weatherData.updateHourlyWeather();
  }
}

// THEME SELECTOR

function setBackground(value) {
  const appBackground = document.querySelector(".background");
  console.log(value);

  appBackground.style.backgroundImage = `url("/img/${value}.jpg")`;
}

function openDropdown(event) {
  event.stopPropagation(); // Prevents bubbling
  const dropdown = document.querySelector(".dropdown-container");
  dropdown.classList.toggle("show");
}

document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".dropdown-container");
  if (!event.target.closest(".dropdown-container")) {
    dropdown.classList.remove("show");
  }
});

function selectDropdownElement() {
  const dropdownElements = document.querySelectorAll(".dropdown-container div");
  dropdownElements.forEach((element) => {
    element.addEventListener("click", () => {
      document.querySelector(".dropdown-button").textContent =
        element.textContent;
      document.querySelector(".dropdown-container").classList.remove("show");
      setBackground(element.getAttribute("data-value"));
    });
  });
}

document
  .querySelector(".dropdown-button")
  .addEventListener("click", openDropdown);

selectDropdownElement();
