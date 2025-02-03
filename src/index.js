import "./styles.css";

const form = document.querySelector("#location_form");
const input = document.querySelector("#location");

// CURRENT WEATHER

const currentCity = document.querySelector("#city");
const currentCountry = document.querySelector("#country");
const currentTemperature = document.querySelector("#temperature");
const currentCondition = document.querySelector("#condition");
const feelsLike = document.querySelector("#feels_like");

// END OF CURRENT WEATHER

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const location = input.value.trim();
  if (!location) {
    alert("The field cannot be empty!");
  }
  getCurrentWeather(location);
});

async function getCurrentWeather(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=9b55a3d3f82343e0bde92555250302&q=${encodeURIComponent(location)}`,
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    const responseData = await response.json();
    console.log(responseData);
    setLocation(responseData.location.name, responseData.location.country);
    setTemperature(responseData.current.temp_c);
    setCondition(responseData.current.condition.text);
    setFeelsLike(responseData.current.feelslike_c);
  } catch (error) {
    console.error("Failed to fetch weather data:", error.message);
    alert("Please enter a valid value!");
  }
}

function setLocation(city, country) {
  currentCity.textContent = `${city}, `;
  currentCountry.textContent = country;
}

function setTemperature(temp) {
  currentTemperature.textContent = `${Math.round(temp)}`;
}

function setCondition(condition) {
  currentCondition.textContent = condition;
}

function setFeelsLike(feelsTemp) {
  feelsLike.textContent = `Feels like ${Math.round(feelsTemp)} °C`;
}
