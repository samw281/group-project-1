var hotelsContainer = document.getElementById("hotels-container");
var cityName = document.getElementById("city-name");
var searchBtn = document.getElementById("search-btn");
var searchForm = document.getElementById("search-form");


// event listener to fetch data from hotels api and display on the page
searchForm.addEventListener("submit", function (event) {
  
  event.preventDefault();
  hotelsContainer.setAttribute("style", "display: inherent;");

 fetch("https://hotels4.p.rapidapi.com/locations/v2/search?query=" +cityName.value+ "&locale=en_US&currency=USD", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "hotels4.p.rapidapi.com",
		"x-rapidapi-key": "a1f1e4f2a3msh6da74de769912dcp109e5ajsn6e99b5c4d1d2"
	}
})
.then((response) => response.json())
  .then((data) =>{
    console.log(data);
    console.log(data._embedded.suggestions);
          console.log(data._embedded.suggestions[0].city);
          console.log(data._embedded.suggestions[0].hotel);
          console.log(data._embedded.suggestions[0].landmark);
          console.log(data._embedded.suggestions[0].transportation);

          var suggestionsArr = data._embedded.suggestions; hotelsContainer.innerHTML ="";
          //for loop to loop through suggestions, create
          for (var i = 0; i <suggestionsArr.length; i++)
            var suggestions = document.createElement("a");
            suggestions.setAttribute(
              "style",
              "border-radius: 10px; color: white; height: 200px; width: 100%; border: 2px solid #00bcd4;"
            );
            suggestions.href = suggestionsArr[i].url;
            suggestions.textContent =
              suggestionsArr[i].name +
              "  -  " +
              


  })
  .catch(err => {
	console.error(err);
  });

});
