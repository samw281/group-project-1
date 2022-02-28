
var concertsContainer = document.getElementById("concerts-container");
var cityName = document.getElementById("city-name");
var searchBtn = document.getElementById("search-btn")

// event listeners to fetch data from tickemaster api and display on the page
searchBtn.addEventListener("click", function () {
    var ticketmasterApiUrl = "https://app.ticketmaster.com/discovery/v2/events.json?size=9&city="+ cityName.value +"&apikey=lZue0rCxljAKRpD2FdMAM9O7pIks2mQI";
  fetch(ticketmasterApiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          console.log(data._embedded.events)
          console.log(data._embedded.events[1].name)
          console.log(data._embedded.events[1].url)
          console.log(data._embedded.events[1].images[0].url)
          console.log(data._embedded.events[1].dates.start.localDate)

          var eventsArr = data._embedded.events
          
        //   for loop to loop through events, create an anchor element for each and, style
          for(var i = 0; i < eventsArr.length; i ++){
              var concert1 = document.createElement("a");
              concert1.setAttribute("style", "border-radius: 10px; background-color: #00bcd4; color: white; height: 200px; width: 100%;")
              concert1.href = eventsArr[i].url;
              concert1.textContent = eventsArr[i].name +" - "+ eventsArr[i].dates.start.localDate
              concertsContainer.appendChild(concert1);
          };
          
        });
      } else {
        //   alerts need to be converted to modals
        alert("Error: City Not Found");
      }
    })
    .catch(function (error) {
        //   alerts need to be converted to modals
      alert("Unable to connect to Project-1");
    });
});

