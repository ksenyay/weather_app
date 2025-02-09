import "./styles.css";

document.body.style.zoom = "110%"; // Adjusting default page zoom

// Hangle display of the data on the page

class UIManager {
  static updateLocation(location) {
    document.querySelector(".location").textContent = location;
  }

  static updateCurrentTemp(temp) {
    document.querySelector(".temperature").textContent = `${Math.round(temp)}`;
  }

  static updateCondition(condition) {
    document.querySelector(".condition").textContent = condition;
  }

  static updateFeelsLike(feelsLike) {
    document.querySelector(".feels-like").textContent =
      `Feels like ${Math.round(feelsLike)} °C`;
  }

  static updateIcon(icon) {
    document.querySelector(".weather-icon").src = icon;
  }

  static updateAlert(alert, severity) {
    const alertElement = document.querySelector(".alert");
    if (severity === "Extreme") {
      alertElement.style.color = "#FF4C4C";
    } else if (severity === "Severe") {
      alertElement.style.color = "#FF7F32";
    } else if (severity === "Moderate") {
      alertElement.style.color = "#FFB84D";
    } else if (severity === "Minor") {
      alertElement.style.color = "#4D89FF";
    } else if (severity === "Unknown") {
      alertElement.style.color = "#4D89FF";
    }

    alertElement.textContent = alert;
  }

  static removeAlert() {
    document.querySelector(".alert").textContent = "";
    document.querySelector(".alert").title = "";
  }

  static updateAlertDescription(alertDescription) {
    document.querySelector(".alert").title = alertDescription;
  }

  static updateHumidity(humidity) {
    document.querySelector(".humidity-percentage").textContent = `${humidity}%`;

    let circle = document.querySelector(".fill-circle");
    let maxDashOffset = 251.2;
    let newOffset = maxDashOffset - (humidity / 100) * maxDashOffset;
    circle.style.strokeDashoffset = newOffset;
  }

  static updateWind(wind) {
    const windIndex = document.querySelector("#wind");
    const windContainer = document.querySelector("#wind-details");
    const roundedWind = Math.round(wind);

    // Update the title and the border color based on wind speed
    if (roundedWind < 1) {
      windContainer.title = "Calm";
      windIndex.style.borderBottom = "2px solid rgba(255, 255, 255, 0.8)";
    } else if (roundedWind >= 1 && roundedWind <= 5) {
      windContainer.title = "Light air";
      windIndex.style.borderBottom = "2px solid rgba(174, 241, 249, 0.8)";
    } else if (roundedWind > 5 && roundedWind <= 11) {
      windContainer.title = "Light breeze";
      windIndex.style.borderBottom = "2px solid rgba(150, 247, 220, 0.8)";
    } else if (roundedWind > 11 && roundedWind <= 19) {
      windContainer.title = "Gentle breeze";
      windIndex.style.borderBottom = "2px solid rgba(150, 247, 180, 0.8)";
    } else if (roundedWind > 19 && roundedWind <= 28) {
      windContainer.title = "Moderate breeze";
      windIndex.style.borderBottom = "2px solid rgba(111, 244, 111, 0.8)";
    } else if (roundedWind > 29 && roundedWind <= 38) {
      windContainer.title = "Fresh breeze";
      windIndex.style.borderBottom = "2px solid rgba(115, 237, 18, 0.8)";
    } else if (roundedWind > 38 && roundedWind <= 49) {
      windContainer.title = "Strong breeze";
      windIndex.style.borderBottom = "2px solid rgba(164, 237, 18, 0.8)";
    } else if (roundedWind > 49 && roundedWind <= 61) {
      windContainer.title = "Moderate Gale";
      windIndex.style.borderBottom = "2px solid rgba(218, 237, 18, 0.8)";
    } else if (roundedWind > 61 && roundedWind <= 74) {
      windContainer.title = "Gale";
      windIndex.style.borderBottom = "2px solid rgba(237, 194, 18, 0.8)";
    } else if (roundedWind > 74 && roundedWind <= 88) {
      windContainer.title = "Strong Gale";
    } else if (roundedWind > 88 && roundedWind <= 102) {
      windContainer.title = "Storm";
    } else if (roundedWind > 102 && roundedWind <= 117) {
      windContainer.title = "Violent Storm";
    } else if (roundedWind > 117) {
      windContainer.title = "Hurricane";
    }

    windIndex.textContent = `${roundedWind} km/h`;
  }

  static updateRain(rain) {
    const rainIndex = document.querySelector("#rain");
    const rainContainer = document.querySelector("#rain-details");

    if (rain <= 0.5) {
      rainContainer.title = "No rain";
      rainIndex.style.borderBottom = "2px solid rgba(255, 255, 255)";
    } else if (rain > 0.5 && rain <= 2) {
      rainContainer.title = "Light rain";
      rainIndex.style.borderBottom = "2px solid rgba(137, 194, 217)";
    } else if (rain > 2 && rain <= 6) {
      rainContainer.title = "Moderate rain";
      rainIndex.style.borderBottom = "2px solid rgba(70, 143, 175)";
    } else if (rain > 6 && rain <= 10) {
      rainContainer.title = "Heavy rain";
      rainIndex.style.borderBottom = "2px solid rgba(44, 125, 160)";
    } else if (rain > 10 && rain <= 18) {
      rainContainer.title = "Very heavy rain";
      rainIndex.style.borderBottom = "2px solid rgba(1, 79, 134)";
    } else if (rain > 18 && rain <= 30) {
      rainContainer.title = "Shower";
      rainIndex.style.borderBottom = "2px solid rgba(1, 58, 99)";
    } else if (rain > 30) {
      rainContainer.title = "Cloudburst";
      rainIndex.style.borderBottom = "2px solid rgba(1, 42, 74)";
    }

    rainIndex.textContent = `${rain} mm`;
  }

  static updateUv(uv) {
    const uvIndex = document.querySelector("#uv");
    const uvContainer = document.querySelector("#uv-details");
    const roundedUv = Math.round(uv);

    if (roundedUv <= 2) {
      uvContainer.title = "Low";
      uvIndex.style.borderBottom = "2px solid rgb(62, 167, 45)";
    } else if (roundedUv > 2 && roundedUv <= 5) {
      uvContainer.title = "Moderate";
      uvIndex.style.borderBottom = "2px solid rgb(255, 243, 0)";
    } else if (roundedUv > 5 && roundedUv <= 7) {
      uvContainer.title = "High";
      uvIndex.style.borderBottom = "2px solid rgb(241, 139, 0)";
    } else if (roundedUv > 7 && roundedUv <= 10) {
      uvContainer.title = "Very High";
      uvIndex.style.borderBottom = "2px solid rgb(229, 50, 16)";
    } else if (roundedUv >= 11) {
      uvContainer.title = "Extreme";
      uvIndex.style.borderBottom = "2px solid rgb(181, 103, 164)";
    }

    uvIndex.textContent = `${roundedUv}`;
  }

  static updateChanceOfRain(chanceOfRain) {
    document.querySelector("#rain-chance").textContent = `${chanceOfRain}%`;
  }

  static updateForecast(forecast) {
    for (let i = 0; i < 7; i++) {
      const day = document.querySelector(`#forecast-${i + 1} .day`);
      const condition = document.querySelector(`#forecast-${i + 1} img`);
      const dayTemp = document.querySelector(`#forecast-${i + 1} .day-temp`);

      if (day && condition && dayTemp) {
        let dayOfTheWeek = convertDate(forecast[i]["date"]);
        day.textContent = dayOfTheWeek;
        condition.src = forecast[i]["day"]["condition"]["icon"];
        dayTemp.textContent = `${Math.round(forecast[i]["day"]["avgtemp_c"])} °C`;
      }
    }
  }

  static updateHourlyWeather(hourlyData) {
    let index = 0;
    for (let i = 0; i <= 23; i += 3) {
      let hour = hourlyData.hour[i];
      if (hour) {
        document.querySelector(`#hourly-${index + 1} div p`).textContent =
          `${Math.round(hour.temp_c)} °C`;
        document.querySelector(`#hourly-${index + 1} div img`).src =
          hour.condition.icon;
        index += 1;
      }
    }
    document.querySelector(`#hourly-9 div p`).textContent =
      `${Math.round(hourlyData.hour[23].temp_c)} °C`;
    document.querySelector(`#hourly-9 div img`).src =
      hourlyData.hour[23].condition.icon;
  }
}

// Stores current weather data from API

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
}

// Stores forecast data from API

class Forecast {
  constructor(data) {
    this.forecast = data.forecast.forecastday;
    this.chanceOfRain = data.forecast.forecastday[0].day.daily_chance_of_rain;
    this.hourlyData = data.forecast.forecastday[0];
  }
}

// Stores alert data from API

class Alert {
  constructor(data) {
    this.alertLength = data.alerts.alert.length;
    this.alert = `${data.alerts.alert[this.alertLength - 1].severity} Weather Alert: ${data.alerts.alert[this.alertLength - 1].event}`;
    this.alertDescription = data.alerts.alert[this.alertLength - 1].desc;
    this.severity = data.alerts.alert[this.alertLength - 1].severity;
  }
}

// Handles fetch activities

class APIHandler {
  constructor(apiKey, baseUrl) {
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
  }

  async fetchData(endpoint) {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch: ${response.status} ${response.statusText}`,
        );
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching data: ", error);
      return;
    }
  }

  fetchCurrentWeather(location) {
    return this.fetchData(
      `/current.json?key=${this.apiKey}&q=${encodeURIComponent(location)}`,
    );
  }

  fetchForecast(location) {
    return this.fetchData(
      `/forecast.json?key=${this.apiKey}&q=${encodeURIComponent(location)}&days=7`,
    );
  }

  fetchAlert(location) {
    return this.fetchData(
      `/alerts.json?key=${this.apiKey}&q=${encodeURIComponent(location)}`,
    );
  }
}

// Handles events

class EventHandler {
  constructor(apiHandler) {
    this.apiHandler = apiHandler;
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const location = document.querySelector("input").value.trim();
    this.fetchAndDisplayWeather(location);
  }

  async fetchAndDisplayWeather(location) {
    try {
      if (!location) {
        alert("The field cannot be empty!");
        return;
      }

      const currentWeatherData =
        await this.apiHandler.fetchCurrentWeather(location);

      if (!currentWeatherData || !currentWeatherData.location) {
        alert("City not found! Please enter a valid city.");
        return;
      }

      localStorage.setItem("userLocation", location);

      const forecastData = await this.apiHandler.fetchForecast(location);
      const alertData = await this.apiHandler.fetchAlert(location);
      const currentWeather = new CurrentWeather(currentWeatherData);
      const forecast = new Forecast(forecastData);
      if (alertData.alerts.alert.length === 0) {
        UIManager.removeAlert();
      } else {
        const alerts = new Alert(alertData);

        UIManager.updateAlert(alerts.alert, alerts.severity);
        UIManager.updateAlertDescription(alerts.alertDescription);
      }
      UIManager.updateLocation(currentWeather.location);
      UIManager.updateCurrentTemp(currentWeather.currentTemp);
      UIManager.updateCondition(currentWeather.condition);
      UIManager.updateFeelsLike(currentWeather.feelsLike);
      UIManager.updateIcon(currentWeather.icon);
      UIManager.updateHumidity(currentWeather.humidity);
      UIManager.updateUv(currentWeather.uv);
      UIManager.updateWind(currentWeather.wind);
      UIManager.updateRain(currentWeather.rain);
      UIManager.updateChanceOfRain(forecast.chanceOfRain);
      UIManager.updateForecast(forecast.forecast);
      UIManager.updateHourlyWeather(forecast.hourlyData);
    } catch (error) {
      alert("Failed to fetch weather data. Please try again.");
      console.log(error);
      return;
    }
  }
}

// Initiating all the processes of the page load

// eslint-disable-next-line no-undef
const apiHandler = new APIHandler(process.env.API_KEY, process.env.API_URL);
const eventHandler = new EventHandler(apiHandler);

window.onload = () => {
  const savedCity = localStorage.getItem("userLocation") || "Lviv";
  const savedBg = localStorage.getItem("userBackground") || "countryside";
  eventHandler.fetchAndDisplayWeather(savedCity); // Set default location
  document.querySelector(".dropdown-button").textContent =
    localStorage.getItem("backgroundValue") || "Countryside";
  document
    .querySelector("form")
    .addEventListener("submit", (event) =>
      eventHandler.handleFormSubmit(event),
    );
  new ThemeManager(savedBg);
};

// Theme Selector logic

class ThemeManager {
  constructor(currentBg) {
    this.defaultBg = "countryside";
    this.appBackground = document.querySelector(".background");
    this.dropdown = document.querySelector(".dropdown-container");
    this.dropdownButton = document.querySelector(".dropdown-button");
    this.init();

    this.setBackground(currentBg);
  }

  async imageExists(imageUrl) {
    const response = await fetch(imageUrl, { method: "HEAD" });
    return response.ok;
  }

  async setBackground(value) {
    const imageUrl = `img/${value}.jpg`;
    const imageExists = await this.imageExists(imageUrl);

    if (imageExists) {
      this.appBackground.style.backgroundImage = `url("img/${value}.jpg")`;
      localStorage.setItem("userBackground", value); // Saves background in local storage
    } else {
      this.appBackground.style.backgroundImage = `url("img/${this.defaultBg}.jpg")`;
      this.dropdownButton.textContent = `${this.defaultBg[0].toUpperCase()}${this.defaultBg.slice(1)}`;
      localStorage.setItem("userBackground", this.defaultBg); // Saves default background if the image doesn't exist
      localStorage.setItem(
        "backgroundValue",
        `${this.defaultBg[0].toUpperCase()}${this.defaultBg.slice(1)}`,
      );
    }
  }

  openDropdown(event) {
    event.stopPropagation();
    this.dropdown.classList.toggle("show");
  }

  closeDropdown(event) {
    if (!event.target.closest(".dropdown-container")) {
      this.dropdown.classList.remove("show");
    }
  }

  selectBackground() {
    const dropdownElements = document.querySelectorAll(
      ".dropdown-container div",
    );
    dropdownElements.forEach((element) => {
      element.addEventListener("click", () => {
        this.dropdownButton.textContent = element.textContent;
        localStorage.setItem("backgroundValue", element.textContent); // Name of the background
        this.dropdown.classList.remove("show");
        this.setBackground(element.getAttribute("data-value"));
      });
    });
  }

  init() {
    this.dropdownButton.addEventListener("click", (event) =>
      this.openDropdown(event),
    );
    document.addEventListener("click", (event) => this.closeDropdown(event));
    this.selectBackground();
  }
}

// Converts yyyy-mm-dd to the day of the week

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
