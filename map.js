$(document).ready(function() {
  var mymap = L.map("mapid").setView([45.75, 4.85], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 18
  }).addTo(mymap);

  $.ajax({
    type: "GET",
    url:
      "https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=253b4171d2b9be2ed31b66b6c3c60e34779b677c",
    contentType: "application/json",
    async: true,
    success: function(points) {
      points.forEach(function(n) {
        var marker = L.marker([n.position.lat, n.position.lng]).addTo(mymap);
        var popup = L.popup()
          .setLatLng([n.position.lat, n.position.lng])
          .setContent("I am a standalone popup.")
          .openOn(mymap);
      });
    }
  });
});
