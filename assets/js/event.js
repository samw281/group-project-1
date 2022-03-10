var concertsContainer = document.getElementById("concerts-container");
var cityName = document.getElementById("city-name");
var searchBtn = document.getElementById("search-btn");
var clearBtn = document.getElementById("clear-btn");
var searchForm = document.getElementById("search-form");

var event1 = document.getElementById("event-1");
var event2 = document.getElementById("event-2");
var event3 = document.getElementById("event-3");
var event4 = document.getElementById("event-4");
var event5 = document.getElementById("event-5");
var event6 = document.getElementById("event-6");
var event7 = document.getElementById("event-7");
var event8 = document.getElementById("event-8");
var event9 = document.getElementById("event-9");

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
              "border-radius: 10px; color: white; height: 200px; width: 100%; border: 2px solid #00bcd4;"
            );
            events.href = eventsArr[i].url;
            events.textContent =
              eventsArr[i].name +
              "  -  " +
              eventsArr[i].dates.start.localDate.substring(5, 10) +
              "-" +
              eventsArr[0].dates.start.localDate.substring(0, 4);
            events.style.backgroundImage =
              "url('" + eventsArr[i].images[0].url + "')";
            concertsContainer.appendChild(events);
          }

          // stores event names to local storage
          localStorage.setItem("event-1-h2", eventsArr[0].name);
          localStorage.setItem("event-2-h2", eventsArr[1].name);
          localStorage.setItem("event-3-h2", eventsArr[2].name);
          localStorage.setItem("event-4-h2", eventsArr[3].name);
          localStorage.setItem("event-5-h2", eventsArr[4].name);
          localStorage.setItem("event-6-h2", eventsArr[5].name);
          localStorage.setItem("event-7-h2", eventsArr[6].name);
          localStorage.setItem("event-8-h2", eventsArr[7].name);
          localStorage.setItem("event-9-h2", eventsArr[8].name);

          // stores formated dates to local storage
          localStorage.setItem(
            "event-1-date",
            eventsArr[0].dates.start.localDate.substring(5, 10) +
              "-" +
              eventsArr[0].dates.start.localDate.substring(0, 4)
          );
          localStorage.setItem(
            "event-2-date",
            eventsArr[1].dates.start.localDate.substring(5, 10) +
              "-" +
              eventsArr[1].dates.start.localDate.substring(0, 4)
          );
          localStorage.setItem(
            "event-3-date",
            eventsArr[2].dates.start.localDate.substring(5, 10) +
              "-" +
              eventsArr[2].dates.start.localDate.substring(0, 4)
          );
          localStorage.setItem(
            "event-4-date",
            eventsArr[3].dates.start.localDate.substring(5, 10) +
              "-" +
              eventsArr[3].dates.start.localDate.substring(0, 4)
          );
          localStorage.setItem(
            "event-5-date",
            eventsArr[4].dates.start.localDate.substring(5, 10) +
              "-" +
              eventsArr[4].dates.start.localDate.substring(0, 4)
          );
          localStorage.setItem(
            "event-6-date",
            eventsArr[5].dates.start.localDate.substring(5, 10) +
              "-" +
              eventsArr[5].dates.start.localDate.substring(0, 4)
          );
          localStorage.setItem(
            "event-7-date",
            eventsArr[6].dates.start.localDate.substring(5, 10) +
              "-" +
              eventsArr[6].dates.start.localDate.substring(0, 4)
          );
          localStorage.setItem(
            "event-8-date",
            eventsArr[7].dates.start.localDate.substring(5, 10) +
              "-" +
              eventsArr[7].dates.start.localDate.substring(0, 4)
          );
          localStorage.setItem(
            "event-9-date",
            eventsArr[8].dates.start.localDate.substring(5, 10) +
              "-" +
              eventsArr[8].dates.start.localDate.substring(0, 4)
          );
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
