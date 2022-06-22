function current() {
  const currentWeather = {
    key: "f1c3723a3521e1fd9d452efeed593642",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
    city: "Dhapakhel",
  };
  fetch(
    `${currentWeather.baseUrl}?q=${currentWeather.city}&appid=${currentWeather.key}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log(data);
      document.getElementById("current-icon").src =
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
      document.getElementById("current-main").innerText = data.weather[0].main;
      document.getElementById("max-temp").innerText = Math.floor(
        data.main.temp_max
      );
      setInterval(current, 900000);
      console.log("Current Temperature: ", data.main.temp_max);
    });
}
window.onload(current());
