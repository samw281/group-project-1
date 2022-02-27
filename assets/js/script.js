
var cityName = document.getElementById("city-name");
var searchBtn = document.getElementById("search-btn")

searchBtn.addEventListener("click", function () {
    
    var ticketmasterApiUrl = "https://app.ticketmaster.com/discovery/v2/events.json?size=10&city="+ cityName.value +"&apikey=lZue0rCxljAKRpD2FdMAM9O7pIks2mQI";
  fetch(ticketmasterApiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
        });
      } else {
        alert("Error: City Not Found");
      }
    })
    .catch(function (error) {
      alert("Unable to connect to Project-1");
    });
});

