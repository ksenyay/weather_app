import "./styles.css";

const form = document.querySelector("#location_form");
const input = document.querySelector("#location");

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
    console.log(responseData.current.humidity);
  } catch (error) {
    console.error("Failed to fetch weather data:", error.message);
    alert("Please enter a valid value!");
  }
}

//function setLocation(location) {}
