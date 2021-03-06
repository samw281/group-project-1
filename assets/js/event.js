var concertsContainer = document.getElementById("concerts-container");
var cityName = document.getElementById("city-name");
var searchBtn = document.getElementById("search-btn");
var searchForm = document.getElementById("search-form");
var modal = document.getElementById("modal");
var modalBtn = document.getElementById("modal-button");
var modalText1 = document.getElementById("modal-text-1");
var modalText2 = document.getElementById("modal-text-2");

modalBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
});


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

       return response.json()

    })
    .then(function (data) {
        console.log(data);
        if (!data._embedded) {
          modal.classList.remove("hidden");
          modalText1.textContent = "ERROR City not found.";
          modalText2.textContent = "Please try again.";
          return;
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
            "border-radius: 10px; color: white; height: 200px; width: 100%; border: 2px solid #00bcd4"
          );
          var eventsText = document.createElement("p")
          events.appendChild(eventsText);
          eventsText.textContent = eventsArr[i].name +"  -  " + eventsArr[i].dates.start.localDate.substring(5, 10) + "-" + eventsArr[0].dates.start.localDate.substring(0, 4);
          eventsText.classList.add("events-text");
          events.href = eventsArr[i].url;
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
      })
    .catch(function (error) {
      modal.classList.remove("hidden");
      modalText1.textContent = "ERROR Couldn't connect";
      modalText2.textContent = "to trip planner.";
 
    });



});
