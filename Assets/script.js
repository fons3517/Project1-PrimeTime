// Google APIkey variable
var googleAPIkey = "&key=AIzaSyDBtZUssCPFYlXLTWnLuM_C1eoULB1B2KA";

// URL's for API calls
//var googleMapsQueryURL = "https://maps.googleapis.com/maps/api/js?q=key=AIzaSyDBtZUssCPFYlXLTWnLuM_C1eoULB1B2KA&callback=initMap";
var googePlaceDetailsQueryURL1 = "https://maps.googleapis.com/maps/api/place/details/output?q="
var googlePhotosQueryURL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference={}"//question '{}'
var googePlaceDetailsQueryURL2 = "https://maps.googleapis.com/maps/api/place/details/output?place_id={}&fields=q="


// Global variables for google functions
var priceLevel = "&price_level=${price_level}";


// listDetails function to grab place_id and other values... Incomplete and needs work
function listDetails(place_id){
 $.support.cors = true

$.ajaxPrefilter(function(options) {
 if (options.crossDomain && $.support.cors) {
     options.url = 'https://thingproxy.freeboard.io/fetch/' + options.url;
 }
});

 $.ajax({
   url: `https://maps.googleapis.com/maps/api/place/details/output?place_id=${place_id}&fields=rating,price_level,review${googleAPIkey}`,
   crossDomain:true

 }).then(function(response){
   console.log(response);
 })
};

// displayPhotos function for generating media from API call to our application's media section
function displayPhoto(photo_reference){
  $.ajax({
    url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxwidth}&photo_reference=${photo_reference}&${googleAPIkey}`,
    
    
  }).then(function(response){
    console.log(response)
  })

};

// Get a handle on text area
var searchInfoEl = document.getElementById("search-info");
var userInput = searchInfoEl.innerHTML;

 // Google map function
let map;
let service;
let infowindow;

function initMap() {
 const city = new google.maps.LatLng(29.424349, -98.491142); 

 infowindow = new google.maps.InfoWindow();

 map = new google.maps.Map(document.getElementById("map"), {
   center: city,
   zoom: 15,
 });

 const request = {
   query: "Alamo",
   fields: ["name", "geometry", "opening_hours", ],
 };

 service = new google.maps.places.PlacesService(map);
 service.findPlaceFromQuery(request, (results, status) => {
   if (status === google.maps.places.PlacesServiceStatus.OK && results) {
     for (let i = 0; i < results.length; i++) {
   createMarker(results[i]);
   console.log(results[i]);
     }

     map.setCenter(results[0].geometry.location);
   }
 });
}

// createMarker function to drop pin at specified location

function createMarker(place) {
 if (!place.geometry || !place.geometry.location) return;

 const marker = new google.maps.Marker({
   map,
   position: place.geometry.location,
 });

 google.maps.event.addListener(marker, "click", () => {
   infowindow.setContent(place.name || "");
   infowindow.open(map);
 });
}



// Local Storage 
 localStorage.setItem('googleAPIkey', googleAPIkey)
 localStorage.getItem(googleAPIkey)
 localStorage.setItem('User Input', userInput)
 localStorage.getItem(userInput)
