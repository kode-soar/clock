const getWeather = () => {
  const API_KEY = "6147de83b38a6b55d32ac3ba6013d816";

  navigator.geolocation.getCurrentPosition(e => {
    const lat = e.coords.latitude;
    const lon = e.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(json => {
        const weather = json.weather[0].main;
        const temp = Math.round(json.main.temp - 273.15);
        const weatherDom = document.getElementsByClassName("js-weather")[0];
        weatherDom.textContent = `${weather}, ${temp}ºC`;
      })
      .catch(err => console.log(err));
  });
};

async function init() {
  await getWeather();
}

init();
