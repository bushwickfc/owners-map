const map = L.map('map').setView([40.705315, -73.928369], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	maxZoom: 19
}).addTo(map);

L.geoJSON(ownersGeoJSON).addTo(map);
