var searchBtn = document.getElementById("search-btn");
var cityName = document.getElementById("city-name");
var searchForm = document.getElementById("search-form");
var currentWeather = document.querySelector(".current-weather");
var currentCity = document.getElementById("current-city");
var temp = document.getElementById("temp");
var wind = document.getElementById("wind");
var humidity = document.getElementById("humidity");
var uvi = document.getElementById("uvi");
var feelsLike = document.getElementById("feels-like");
var currentStats = document.getElementById("current-stats-container");
var day1 = document.getElementById("day-1");
var day1Date = document.getElementById("day-1-date");
var day1High = document.getElementById("day-1-high");
var day1Low = document.getElementById("day-1-low");
var day1Wind = document.getElementById("day-1-wind");
var day1Humidity = document.getElementById("day-1-humidity");
var day2 = document.getElementById("day-2");
var day2Date = document.getElementById("day-2-date");
var day2High = document.getElementById("day-2-high");
var day2Low = document.getElementById("day-2-low");
var day2Wind = document.getElementById("day-2-wind");
var day2Humidity = document.getElementById("day-2-humidity");
var day3 = document.getElementById("day-3");
var day3Date = document.getElementById("day-3-date");
var day3High = document.getElementById("day-3-high");
var day3Low = document.getElementById("day-3-low");
var day3Wind = document.getElementById("day-3-wind");
var day3Humidity = document.getElementById("day-3-humidity");
var day4 = document.getElementById("day-4");
var day4Date = document.getElementById("day-4-date");
var day4High = document.getElementById("day-4-high");
var day4Low = document.getElementById("day-4-low");
var day4Wind = document.getElementById("day-4-wind");
var day4Humidity = document.getElementById("day-4-humidity");
var day5 = document.getElementById("day-5");
var day5Date = document.getElementById("day-5-date");
var day5High = document.getElementById("day-5-high");
var day5Low = document.getElementById("day-5-low");
var day5Wind = document.getElementById("day-5-wind");
var day5Humidity = document.getElementById("day-5-humidity");
var modal = document.getElementById("modal");
var modalBtn = document.getElementById("modal-button");
var modalText1 = document.getElementById("modal-text-1");
var modalText2 = document.getElementById("modal-text-2");
modalBtn.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var geocodingUrl =
    "https://api.openweathermap.org/geo/1.0/direct?q=" +
    cityName.value +
    "&appid=e0d9ee6c1369f1e9f7efbfb5647c00b1";
  fetch(geocodingUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
            if (!data[0]) {
                modal.classList.remove("hidden");
                modalText1.textContent = "ERROR City not found.";
                modalText2.textContent = "Please try again.";
                return;
              }
          var lat = data[0].lat;
          var lon = data[0].lon;
          console.log(data);
          console.log(geocodingUrl)
          console.log(lat);
          console.log(lon);
          var oneCallUrl =
            "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=imperial&appid=e0d9ee6c1369f1e9f7efbfb5647c00b1";
          fetch(oneCallUrl)
            .then(function(response){
              if(response.ok) {
                console.log(response);
                response.json().then(function(data){
                    console.log(data)
                    if (!data.current) {
                        modal.classList.remove("hidden");
                        modalText1.textContent = "ERROR City not found.";
                        modalText2.textContent = "Please try again.";
                        return;
                      }
                currentStats.setAttribute("style", "background-color:  #06B6D4; color: white; border: solid 2px white; border-radius: 10px;");
                temp.textContent = "Current Temp: " + data.current.temp + " F";
                feelsLike.textContent = "Feels Like: " + data.current.feels_like + " F";
                wind.textContent = "Wind: " + data.current.wind_speed + " MPH";
                humidity.textContent = "Humidity: " + data.current.humidity + " %";
                uvi.textContent = "UV Index: " + data.current.uvi
                document.getElementById("current-icon").src = "https://openweathermap.org/img/wn/"+data.current.weather[0].icon+"@2x.png";
                day1.setAttribute("style", "background-color:  #06B6D4; color: white; border: solid 2px white; border-radius: 10px;");
                day1Date.textContent = moment().add(1, "d").format("MM/D/YYYY");
                day1High.textContent = "High Temp: "+data.daily[0].temp.max + " F";
                day1Low.textContent = "Low Temp: "+data.daily[0].temp.min + " F";
                day1Wind.textContent = "Wind: "+data.daily[0].wind_speed + " MPH";
                day1Humidity.textContent = "Humidity: " + data.daily[0].humidity + " %";
                document.getElementById("day-1-icon").src = "http://openweathermap.org/img/wn/"+data.daily[0].weather[0].icon+"@2x.png";
                day2.setAttribute("style", "background-color:  #06B6D4; color: white; border: solid 2px white; border-radius: 10px;");
                day2Date.textContent = moment().add(2, "d").format("MM/D/YYYY");
                day2High.textContent = "High Temp: "+data.daily[1].temp.max + " F";
                day2Low.textContent = "Low Temp: "+data.daily[1].temp.min + " F";
                day2Wind.textContent = "Wind: "+data.daily[1].wind_speed + " MPH";
                day2Humidity.textContent = "Humidity: " + data.daily[1].humidity + " %";
                document.getElementById("day-2-icon").src = "http://openweathermap.org/img/wn/"+data.daily[1].weather[0].icon+"@2x.png";
                day3.setAttribute("style", "background-color: #06B6D4; color: white; border: solid 2px white; border-radius: 10px;");
                day3Date.textContent = moment().add(3, "d").format("MM/D/YYYY");
                day3High.textContent = "High Temp: "+data.daily[2].temp.max + " F";
                day3Low.textContent = "Low Temp: "+data.daily[2].temp.min + " F";
                day3Wind.textContent = "Wind: "+data.daily[2].wind_speed + " MPH";
                day3Humidity.textContent = "Humidity: " + data.daily[2].humidity + " %";
                document.getElementById("day-3-icon").src = "http://openweathermap.org/img/wn/"+data.daily[2].weather[0].icon+"@2x.png";
                day4.setAttribute("style", "background-color:  #06B6D4; color: white; border: solid 2px white; border-radius: 10px;");
                day4Date.textContent = moment().add(4, "d").format("MM/D/YYYY");
                day4High.textContent = "High Temp: "+data.daily[3].temp.max + " F";
                day4Low.textContent = "Low Temp: "+data.daily[3].temp.min + " F";
                day4Wind.textContent = "Wind: "+data.daily[3].wind_speed + " MPH";
                day4Humidity.textContent = "Humidity: " + data.daily[3].humidity + " %";
                document.getElementById("day-4-icon").src = "http://openweathermap.org/img/wn/"+data.daily[3].weather[0].icon+"@2x.png";
                day5.setAttribute("style", "background-color:  #06B6D4; color: white; border: solid 2px white; border-radius: 10px;");
                day5Date.textContent = moment().add(5, "d").format("MM/D/YYYY");
                day5High.textContent = "High Temp: "+data.daily[4].temp.max + " F";
                day5Low.textContent = "Low Temp: "+data.daily[4].temp.min + " F";
                day5Wind.textContent = "Wind: "+data.daily[4].wind_speed + " MPH";
                day5Humidity.textContent = "Humidity: " + data.daily[4].humidity + " %";
                document.getElementById("day-5-icon").src = "http://openweathermap.org/img/wn/"+data.daily[4].weather[0].icon+"@2x.png";
                });
              } else {
                modal.classList.remove("hidden");
                modalText1.textContent = "ERROR City not found.";
                modalText2.textContent = "Please try again.";
              }
            })
            .catch(function(error){
                modal.classList.remove("hidden");
                modalText1.textContent = "ERROR Couldn't connect";
                modalText2.textContent = "to All Inclusive.";
            })
        });
      } else {
        modal.classList.remove("hidden");
        modalText1.textContent = "ERROR City not found.";
        modalText2.textContent = "Please try again.";
      }
    })
    .catch(function (error) {
        modal.classList.remove("hidden");
        modalText1.textContent = "ERROR Couldn't connect";
        modalText2.textContent = "to All Inclusive.";
    });
});