function forecast() {
  const forecast = {
    key: "65b0870f20a2a1ca20a2eaef7355d6d4",
    baseUrl: "https://api.openweathermap.org/data/2.5/forecast",
    city: "Dhapakhel",
  };

  let monthsNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  fetch(
    `${forecast.baseUrl}?q=${forecast.city}&appid=${forecast.key}&units=metric`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      setTimeout(forecast, 900000);
      console.log("15 minutes passed");

      //-----1st Forecast------
      let firstDate = data.list[2].dt_txt;
      document.getElementById("one-date").innerText = firstDate;
      document.getElementById("one-icon").src =
        "https://openweathermap.org/img/wn/" +
        data.list[2].weather[0].icon +
        ".png";
      document.getElementById("one-short-desc").innerText =
        data.list[2].weather[0].main;
      let oneTemp = Math.floor(data.list[2].main.temp);
      document.getElementById("one-temp").innerText = oneTemp;

      //------2nd Forecast------
      let secondDate = data.list[3].dt_txt;
      document.getElementById("two-date").innerText = secondDate;
      document.getElementById("two-icon").src =
        "https://openweathermap.org/img/wn/" +
        data.list[3].weather[0].icon +
        ".png";
      document.getElementById("two-short-desc").innerText =
        data.list[3].weather[0].main;
      document.getElementById("two-temp").innerText = Math.floor(
        data.list[3].main.temp
      );

      //------3rd Forecast------
      let thirdDate = data.list[4].dt_txt;
      document.getElementById("three-date").innerText = thirdDate;
      document.getElementById("three-icon").src =
        "https://openweathermap.org/img/wn/" +
        data.list[4].weather[0].icon +
        ".png";
      document.getElementById("three-short-desc").innerText =
        data.list[4].weather[0].main;
      document.getElementById("three-temp").innerText = Math.floor(
        data.list[4].main.temp
      );
      //-----4th Forecest-------
      let fourthDate = data.list[5].dt_txt;
      document.getElementById("four-date").innerText = fourthDate;
      document.getElementById("four-icon").src =
        "https://openweathermap.org/img/wn/" +
        data.list[5].weather[0].icon +
        ".png";
      document.getElementById("four-short-desc").innerText =
        data.list[5].weather[0].main;
      document.getElementById("four-temp").innerText = Math.floor(
        data.list[5].main.temp
      );

      //-----5th Forecest-------
      let fifthDate = data.list[6].dt_txt;
      document.getElementById("five-date").innerText = fifthDate;
      document.getElementById("five-icon").src =
        "https://openweathermap.org/img/wn/" +
        data.list[6].weather[0].icon +
        ".png";
      document.getElementById("five-short-desc").innerText =
        data.list[6].weather[0].main;
      document.getElementById("five-temp").innerText = Math.floor(
        data.list[6].main.temp
      );

      //-----6th Forecest-------
      let sixthDate = data.list[7].dt_txt;
      document.getElementById("six-date").innerText = sixthDate;
      document.getElementById("six-icon").src =
        "https://openweathermap.org/img/wn/" +
        data.list[7].weather[0].icon +
        ".png";
      document.getElementById("six-short-desc").innerText =
        data.list[7].weather[0].main;
      document.getElementById("six-temp").innerText = Math.floor(
        data.list[7].main.temp
      );

      //-----7th Forecest-------
      let seventhDate = data.list[8].dt_txt;
      document.getElementById("seven-date").innerText = seventhDate;
      document.getElementById("seven-icon").src =
        "https://openweathermap.org/img/wn/" +
        data.list[8].weather[0].icon +
        ".png";
      document.getElementById("seven-short-desc").innerText =
        data.list[8].weather[0].main;
      document.getElementById("seven-temp").innerText = Math.floor(
        data.list[8].main.temp
      );

      //-----8th Forecest-------
      let eighthDate = data.list[9].dt_txt;
      document.getElementById("eight-date").innerText = eighthDate;
      document.getElementById("eight-icon").src =
        "https://openweathermap.org/img/wn/" +
        data.list[9].weather[0].icon +
        ".png";
      document.getElementById("eight-short-desc").innerText =
        data.list[9].weather[0].main;
      document.getElementById("eight-temp").innerText = Math.floor(
        data.list[9].main.temp
      );
    });
}
window.onload(forecast());
