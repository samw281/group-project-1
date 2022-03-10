var hotelsContainer = document.getElementById("hotels-container");
var cityName = document.getElementById("city-name");
var searchBtn = document.getElementById("search-btn");
var searchForm = document.getElementById("search-form");
const geoUrl = "https://ip-geo-location.p.rapidapi.com/ip/check?format=json&language=en"

const priceLineUrl ="https://priceline-com-provider.p.rapidapi.com/v1/hotels/search?date_checkin=2022-06-17&location_id=3000035821&date_checkout=2022-06-18&sort_order=HDR&amenities_ids=FINTRNT%2CFBRKFST&rooms_number=1&star_rating_ids=3.0%2C3.5%2C4.0%2C4.5%2C5.0"

const geoHost = "ip-geo-location.p.rapidapi.com"

const priceLineHost = "priceline-com-provider.p.rapidapi.com"

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
  const geoData = await getData(geoUrl, geoHost);
  console.log(geoData);

  //Get hotels by location 
  const priceLineData = await getData(
    priceLineUrl + geoData.city.name,
    priceLineHost
  );
    console.log(priceLineData);
};

runApiQueries();

 });
