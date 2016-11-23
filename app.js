
if ("geolocation" in navigator) {
  console.log("geolocation is avalaible!");
  var button = document.getElementById('where-am-i');
  document.addEventListener('click', getLocation);
}else{
  console.log("geolocation is NOT avalaible!");
}

var options = {
  enableHighAccuracy: true
};

function getLocation() {
  navigator.geolocation.getCurrentPosition(onLocation, onError, options);
}

function onLocation(position) {
  console.log('Your latitude is ' + position.coords.latitude);
  console.log('Your longitude is ' + position.coords.longitude);
  document.getElementById('location').innerHTML = "Lat:" + position.coords.latitude + ", lon:" + position.coords.longitude;
  displayMap(position.coords.latitude, position.coords.longitude);
}

function onError (error) {
  console.error(error);
}

function displayMap(lat,lon) {
  var urlmap = "https://maps.googleapis.com/maps/api/staticmap?center=";
  var urlParams = "&zoom=15&size=800x600";
  var url = urlmap + lat + "," + lon + urlParams;
  var map = document.getElementById('map');
  map.setAttribute("src", url);
  console.log(url);
  displayMarker();
}

// function displayMarker(){
//   console.log('displayMarker');
//   var marker = new google.maps.Marker({
//     position: {lat: position.coords.latitude, lon: position.coords.longitude},
//     map: map,
//     title: 'Hello World!'
//   });
// }
