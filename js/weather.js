const weatherContainer = document.querySelector(".weather");
const loca = weatherContainer.querySelector(".location");
const info = weatherContainer.querySelector(".info");

function weathers() {
  const API_KEY = "b13f251ca3ce3a72bae2c37f28c4e513";
  fetch("https://ipapi.co/json/")
    .then((response) => response.json())
    .then((locationData) => {
      const lat = locationData.latitude;
      const lon = locationData.longitude;
      // console.log(lat, lon);
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
      return fetch(url);
    })
    .then((response) => response.json())
    .then((data) => {
      let names = data.name;
      let weather = data.weather[0].main;
      let temp = data.main.temp;
      loca.innerHTML = `현재 위치는 ${names}입니다.`;
      info.innerHTML = `현재 날씨는 ${weather}이며, 온도는${temp}℃ 입니다.`;
    });
}

weathers();
