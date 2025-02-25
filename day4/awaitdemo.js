async function fetchWeather(city) {
  //create fake wait for network connection
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = {
    city: city,
    temperature: 25,
    humidity: 70,
  };
  return response;
}
// console.log(fetchWeather("Chennai"));

// async function displayWeather(city) {
//   console.log(`Fetching weather for ${city}...`);
//   try{
//     const weather = await fetchWeather(city);
//     console.log(`Weather for ${weather.city}:`);
//     console.log(`Temperature: ${weather.temperature}°C`);
//     console.log(`Humidity: ${weather.humidity}%`);
//   } catch(error) {
//     console.error("Error fetching weather:", error);
//   }
// }
function displayWeather(city) {
  fetchWeather(city)
    .then((weather) => {
      console.log(`Weather for ${weather.city}:`);
      console.log(`Temperature: ${weather.temperature}°C`);
      console.log(`Humidity: ${weather.humidity}%`);
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
    })
    .finally(() => {
      console.log("Fetching weather complete.");
    });
}
displayWeather("Vijaywada");
