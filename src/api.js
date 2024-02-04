// Get weather data from weather api
async function getWeatherData() {
  // let userLocation = prompt("Location?");
  let userLocation = "san jose";
  try {
    // Days in the url remains 3 (including current day) because we have the free version which only can forecast up to 3 days
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=76fcad5f297045359a7222047241501&q=${userLocation}&days=3&aqi=no&alerts=no`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    console.log(weatherData.location.name);
    console.log(weatherData.location.region);

    return weatherData;
  } catch (err) {
    console.log("Error fetching data:", err);
  }
}

export default getWeatherData;