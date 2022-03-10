var hotelsContainer = document.getElementById("hotels-container");
var cityName = document.getElementById("city-name");
var searchBtn = document.getElementById("search-btn");
var searchForm = document.getElementById("search-form");

// event listener to fetch data from hotels api and display on the page
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  hotelsContainer.setAttribute("style", "display: inherent;");

  fetch("https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete?query=" + cityName.value + "lang=en_US&units=mi", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      "x-rapidapi-key": "a1f1e4f2a3msh6da74de769912dcp109e5ajsn6e99b5c4d1d2"
    }
    
  })
  .then((response) => response.json())
      .then((data) => {
      console.log(data);
  })
  .catch(err => {
    console.error(err);
  });


});
