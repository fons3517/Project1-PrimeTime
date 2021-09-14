// create map
// let map;
// let map, infoWindow;
var map;
var service;
var infowindow;
var cuisine = [];


function initMap() {
  var sanantonio = new google.maps.LatLng(29.4241, -98.4936);

  infowindow = new google.maps.InfoWindow();

  map = new google.maps.Map(
      document.getElementById('googleMap'), {center: sanantonio, zoom: 10});

  // var request = {
  //   query: 'restaraunts',
  //   fields: ['name', 'formatted_address'],
  // };

  // var service = new google.maps.places.PlacesService(map);

  // service.findPlaceFromQuery(request, function(results, status) {
  //   if (status === google.maps.places.PlacesServiceStatus.OK) {
  //     for (var i = 0; i < results.length; i++) {
  //       createMarker(results[i]);
  //     }
  //     map.setCenter(results[0].geometry.location);
  //   }
  // });
}



function ajaxGetCuisine(restaraunts){

  if (restaraunts !== null){

  var restarauntsItalianQuery = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaraunts=italian&key=AIzaSyDiHU4F7Aio3MCBC0Uy0rIaQmQ3eX5Y8zU';
  var restarauntsSushiQuery = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaraunts=sushi&key=AIzaSyDiHU4F7Aio3MCBC0Uy0rIaQmQ3eX5Y8zU';
  var restarauntsMexicanQuery = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaraunts=mexican&key=AIzaSyDiHU4F7Aio3MCBC0Uy0rIaQmQ3eX5Y8zU';

  $.ajax({
    url: restarauntsItalianQuery,
    method: "GET",
    dataType: "json",
    success: function (data) {
      console.log(data);
    },
    error: function (error) {
      console.log(`Error ${error}`);
    }
  })

  
  }

}

// // There are two required options for every map: center and zoom.
// // function initMap() 
// function initAutocomplete() {
//   map = new google.maps.Map(document.getElementById("googleMap"), {
//     center: { lat: 29.4241, lng: -98.4936 },
//     zoom: 10,
//     mapTypeId: 'roadmap'
//   });

//   infowindow = new google.maps.InfoWindow();

//   var locationButton = document.createElement("button");
  
//   locationButton.textContent = "Pan for Current Location";
//   locationButton.classList.add("custom-map-control-button");
//   map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
//   locationButton.addEventListener("click", () => {
//     // Try HTML5 geolocation.
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           var pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };
//           var marker = new google.maps.Marker({
//             position: pos,
//             map: map,            
//         });

//           // infowindow.setPosition(pos);
//           // infowindow.setContent("Location found.");
//           infowindow.open(map);
//           map.setCenter(pos);
//         },
//         () => {
//           handleLocationError(true, infowindow, map.getCenter());
//         }
//       );
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infowindow, map.getCenter());
//     }
//   });
// }


// // Cuisine submit button functionality
// $("#cuisine-type").click(function () {
//   $("#search-results").empty();

//   var foodType = $('#cuisine-type :selected').text();

//   var localRestaurantsQuery = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaraunts=sushi&key=AIzaSyDiHU4F7Aio3MCBC0Uy0rIaQmQ3eX5Y8zU'

//   // var localRestaurantsQuery = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${foodType}&San%20Antonio&radius=10000&key=AIzaSyDiHU4F7Aio3MCBC0Uy0rIaQmQ3eX5Y8zU`;

//   if(foodType !== 'Select restaruant cuisine choices:') {
      
//       // Creating first AJAX call to get local restaurants
//       $.ajax({
//           url: localRestaurantsQuery,
//           method: "GET"
//       }).then(function (response) {

//         // For loop to create cards for restaurants
//         for (var i = 0; i < response.results.length; i++) {
//           var card = document.getElementById("searcch-results")
//           var card = `
//           <div class="col-3">
//           <div class="card" style="width: 18rem; margin-bottom: 0.5%">
//           <div class="card-body">
//               <h5 class="card-title">${response.results[i].name}</h5>
//               <p class="card-text">${response.results[i].formatted_address}</p>
//               <p class="card-text">Rating: ${response.results[i].rating}</p>
//           </div>
//       </div>
//           </div>
//         `
//         // Appending cards to the search-results div
//           $("#search-results").append(card);
//       }

//     }).fail(function (response) {
//       console.log("No Data Retrieved");
//   });

// }
// else{
//   alert("Must select a food type!")
// }

// });

// function handleLocationError(browserHasGeolocation, infowindow, pos) {
//   infowindow.setPosition(pos);
//   infowindow.setContent(
//     browserHasGeolocation
//       ? "Error: The Geolocation service failed."
//       : "Error: Your browser doesn't support geolocation."
//   );
//   infowindow.open(map);
// };

