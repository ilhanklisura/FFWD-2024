// Leaflet Map

const map = L.map("map").setView([43.8406108, 18.322777], 17);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
   maxZoom: 19,
   attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);
