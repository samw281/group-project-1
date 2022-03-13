var hotelsContainer = document.getElementById("hotels-container");
var cityName = document.getElementById("city-name");
var searchBtn = document.getElementById("search-btn");
var searchForm = document.getElementById("search-form");
const geoUrl = "https://ip-geo-location.p.rapidapi.com/ip/check?format=json&language=en"

const airBnbUrl ="https://airbnb13.p.rapidapi.com/autocomplete?query=city" + cityName.value

const geoHost = "ip-geo-location.p.rapidapi.com/"

const airBnbHost = "airbnb13.p.rapidapi.com"

const rapidApiKey = "a1f1e4f2a3msh6da74de769912dcp109e5ajsn6e99b5c4d1d2"

//event listener to fetch data from hotels api and display on the page
  searchForm.addEventListener("submit", function (event) {
  
    event.preventDefault();
    hotelsContainer.setAttribute("style", "display: inherent;");


const getData = async (url,host) => {
  const response = await fetch(url, {
    method:"GET",
    headers: {
      accept: "application/json",
      'x-rapidapi-key': rapidApiKey,
      'xrapidapi-host': host,
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

const runApiQueries = async () => {
  //get city name
  const airBnbData = await getData(airBnbUrl, airBnbHost);
  console.log(airBnbData);

//   console.log(airBnbUrl + geoData.city.name)

//   //Get hotels by location 
//   const airBnbData = await getData(
//     airBnbUrl + geoData.city.name,
//     airBnbHost
//   );
//     console.log(airBnbData);
};

runApiQueries();

});
