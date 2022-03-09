var concertsContainer = document.getElementById("concerts-container");
var cityName = document.getElementById("city-name");
var searchBtn = document.getElementById("search-btn");
var clearBtn = document.getElementById("clear-btn");
var searchForm = document.getElementById("search-form");
var modal = document.getElementById("modal")



// event listener to fetch data from tickemaster api and display on the page
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  concertsContainer.setAttribute("style", "display: inherent;");
  localStorage.setItem("cityName", cityName.value);
  var ticketmasterApiUrl =
    "https://app.ticketmaster.com/discovery/v2/events.json?size=9&city=" +
    cityName.value +
    "&apikey=lZue0rCxljAKRpD2FdMAM9O7pIks2mQI";
    fetch(ticketmasterApiUrl)
    .then(function (response) {
      if (response.ok) {
        console.log(response);
        response.json().then(function (data) {
          console.log(data);
          if(!data._embedded.length) {
            modal.classList.remove("hidden")
            
         }
          console.log(data._embedded.events);
          console.log(data._embedded.events[0].name);
          console.log(data._embedded.events[0].url);
          console.log(data._embedded.events[0].images[0].url);
          console.log(data._embedded.events[0].dates.start.localDate);

          var eventsArr = data._embedded.events;
          concertsContainer.innerHTML = "";
          // for loop to loop through events, create an anchor element for each and, style
          for (var i = 0; i < eventsArr.length; i++) {
            var events = document.createElement("a");
            events.setAttribute(
              "style",
              "border-radius: 10px; color: white; height: 200px; width: 100%; border: 2px solid #00bcd4; text-align: center;"
            );
            events.href = eventsArr[i].url;
            events.style.backgroundImage =
              "url('" + eventsArr[i].images[0].url + "')";
            var eventsH2 = document.createElement("h2")
            eventsH2.textContent = eventsArr[i].name +
            "  -  " +
            eventsArr[i].dates.start.localDate.substring(5, 10) +
            "-" +
            eventsArr[0].dates.start.localDate.substring(0, 4);
            eventsH2.classList.add("events-text")
            events.appendChild(eventsH2);
            concertsContainer.appendChild(events);
          }

        })

      } else {
        //   alerts need to be converted to modals
      }
    })

    

    .catch(function (error) {
      //   alerts need to be converted to modals
      alert("Unable to connect to Project-1");
    });
});
