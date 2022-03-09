var recentCity = document.getElementById("recent-city");

var recentContainer1 = document.getElementById("recent-1");
var recentContainer2 = document.getElementById("recent-2");
var recentContainer3 = document.getElementById("recent-3");
var recentContainer4 = document.getElementById("recent-4");
var recentContainer5 = document.getElementById("recent-5");
var recentContainer6 = document.getElementById("recent-6");
var recentContainer7 = document.getElementById("recent-7");
var recentContainer8 = document.getElementById("recent-8");
var recentContainer9 = document.getElementById("recent-9");

var recent1H2 = document.getElementById("recent-1-h2");
var recent2H2 = document.getElementById("recent-2-h2");
var recent3H2 = document.getElementById("recent-3-h2");
var recent4H2 = document.getElementById("recent-4-h2");
var recent5H2 = document.getElementById("recent-5-h2");
var recent6H2 = document.getElementById("recent-6-h2");
var recent7H2 = document.getElementById("recent-7-h2");
var recent8H2 = document.getElementById("recent-8-h2");
var recent9H2 = document.getElementById("recent-9-h2");

// gets city name for last search from local storage
var cityName = localStorage.getItem("cityName");

// formats city name to be in all caps incase a user inputs lowercase or mixed case
recentCity.textContent = cityName.toUpperCase();

// gets event names for the last search from local storage
recent1H2.textContent = localStorage.getItem("event-1-h2");
recent2H2.textContent = localStorage.getItem("event-2-h2");
recent3H2.textContent = localStorage.getItem("event-3-h2");
recent4H2.textContent = localStorage.getItem("event-4-h2");
recent5H2.textContent = localStorage.getItem("event-5-h2");
recent6H2.textContent = localStorage.getItem("event-6-h2");
recent7H2.textContent = localStorage.getItem("event-7-h2");
recent8H2.textContent = localStorage.getItem("event-8-h2");
recent9H2.textContent = localStorage.getItem("event-9-h2");

var recent1Date = document.getElementById("recent-date-1");
var recent2Date = document.getElementById("recent-date-2");
var recent3Date = document.getElementById("recent-date-3");
var recent4Date = document.getElementById("recent-date-4");
var recent5Date = document.getElementById("recent-date-5");
var recent6Date = document.getElementById("recent-date-6");
var recent7Date = document.getElementById("recent-date-7");
var recent8Date = document.getElementById("recent-date-8");
var recent9Date = document.getElementById("recent-date-9");

// gets event dates for the last search from local storage
recent1Date.textContent = localStorage.getItem("event-1-date");
recent2Date.textContent = localStorage.getItem("event-2-date");
recent3Date.textContent = localStorage.getItem("event-3-date");
recent4Date.textContent = localStorage.getItem("event-4-date");
recent5Date.textContent = localStorage.getItem("event-5-date");
recent6Date.textContent = localStorage.getItem("event-6-date");
recent7Date.textContent = localStorage.getItem("event-7-date");
recent8Date.textContent = localStorage.getItem("event-8-date");
recent9Date.textContent = localStorage.getItem("event-9-date");
