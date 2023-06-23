import L from 'leaflet';

export function addTileLayer(map) {
	L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(map);
}

export const markerIcon = L.icon({
	iconUrl: '../assets/images/icon-location.svg',
	iconSize: [30, 40],
	// iconAnchor: [22, 94],
	popupAnchor: [-3, -76],
	// shadowUrl: 'my-icon-shadow.png',
	shadowSize: [68, 95],
	shadowAnchor: [22, 94]
})
