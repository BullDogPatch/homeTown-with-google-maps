let map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53.13333, lng: -1.2 },
    zoom: 12
  });
  // map.setTilt(45);
}
initMap();
