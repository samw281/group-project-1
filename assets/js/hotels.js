var hotelsContainer = document.getElementById("hotels-container");
var cityName = document.getElementById("city-name");
var searchBtn = document.getElementById("search-btn");
var searchForm = document.getElementById("search-form");






// event listener to fetch data from hotels api and display on the page
searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    hotelsContainer.setAttribute("style", "display: inherent;");
    console.log(cityName.value)
    localStorage.setItem("cityName", cityName.value);

    //var hotelApiUrl =
     

    fetch("https://hotels4.p.rapidapi.com/locations/v2/search?query=new%20york&locale=en_US&currency=USD", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "hotels4.p.rapidapi.com",
		"x-rapidapi-key": "a1f1e4f2a3msh6da74de769912dcp109e5ajsn6e99b5c4d1d2"
	}
})
.then(response => {
	//console.log(response);
})
.catch(err => {
	console.error(err);
});
      
  });


 