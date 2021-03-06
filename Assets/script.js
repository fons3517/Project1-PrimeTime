// Google APIkey variable
var googleAPIkey = "&key=AIzaSyDBtZUssCPFYlXLTWnLuM_C1eoULB1B2KA";

// URL's for API calls

// Global variables for google functions
// var priceLevel = "&price_level=${price_level}";


// listDetails function to grab place_id and other values... Incomplete and needs work
// function listDetails(place_id){
//  $.support.cors = true

// $.ajaxPrefilter(function(options) {
//  if (options.crossDomain && $.support.cors) {
//      options.url = 'https://thingproxy.freeboard.io/fetch/' + options.url;
//  }
// });

//  $.ajax({
//    url: `https://maps.googleapis.com/maps/api/place/details/output?place_id=${place_id}&fields=rating,price_level,review${googleAPIkey}`,
//    crossDomain:true

//  }).then(function(response){
//    console.log(response);
//  })
// };

// displayPhotos function for generating media from API call to our application's media section
// function displayPhoto(photo_reference){
//   $.ajax({
//     url: `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${maxwidth}&photo_reference=${photo_reference}&${googleAPIkey}`,
    
    
//   }).then(function(response){
//     console.log(response)
//   })

// };
var googleMapsQueryURL =
  "https://maps.googleapis.com/maps/api/js?q=key=AIzaSyDBtZUssCPFYlXLTWnLuM_C1eoULB1B2KA&callback=initMap";
var googePlaceDetailsQueryURL1 =
  "https://maps.googleapis.com/maps/api/place/details/output?q=";
var googlePhotosQueryURL =
  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${}";
var googePlaceDetailsQueryURL2 =
  "https://maps.googleapis.com/maps/api/place/details/output?place_id={}&fields=q=";

  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 29.4241,
      lng: -98.4936,
    },
    zoom: 10,
  });

var latLng = new google.maps.LatLng(29.4241, -98.4936);
console.log(latLng);
// currrent position
navigator.geolocation.getCurrentPosition(position);
function position(myPosition) {
  console.log(myPosition);

    latLng = new google.maps.LatLng(
    myPosition.coords.latitude,
    myPosition.coords.longitude
  );
  console.log(latLng);
}

// Get a handle on text area and search button
var searchInfoEl = document.getElementById("search-info");
var searchButtonEl = document.getElementById("search");


let infowindow;

function initMap() {
  var search = searchInfoEl.value
  if (searchInfoEl.value === "") {
    search = "radius 5000";
  }
  let service = new google.maps.places.PlacesService(map);
  let geoRequest = {
    query: search,
    location: latLng,
  } 
  console.log(geoRequest);

  service.textSearch(geoRequest, (results, status) => {
    if (status === "OK") {
      createMap(results);
      console.log(results);
    }
  });
  
}
function createMap(results) {
  map.fitBounds(results[0].geometry.viewport);
}
infowindow = new google.maps.InfoWindow();


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

// addEventListener to searchButtonEl
searchButtonEl.addEventListener("click", function () {
  initMap();
});

setTimeout(function () {
  initMap();
}, 2000);

// Local Storage
localStorage.setItem("googleAPIkey", googleAPIkey);
localStorage.getItem(googleAPIkey);
localStorage.setItem("Location List", searchInfoEl);
localStorage.getItem(searchInfoEl);
