import tippy from 'tippy.js';
import L from 'leaflet';
import { addTileLayer, validateIp, markerIcon, getAddress} from './geolocation-helpers/index.js';

export const geolocation = () => {
	const ipForm = document.querySelector('.js-header-form');
	const ipInput = document.querySelector('.js-track-input');
	const ipBtn = document.querySelector('.js-track-btn');
	const errEl = document.querySelector('.js-form-error');

	const ipInfo = document.querySelector('.js-ip-address');
	const locationInfo = document.querySelector('.js-location');
	const timezoneInfo = document.querySelector('.js-timezone');
	const ispInfo = document.querySelector('.js-isp');

	const mapArea = document.querySelector('.js-map');

	if (ipForm) {
		ipForm.addEventListener('submit', (e) => {
			e.preventDefault();
		})
	}

	if (ipInput && ipBtn) {
		ipBtn.addEventListener('click', getData);
		ipInput.addEventListener('keydown', handleInput);
	}

	const map = L.map(mapArea, {
		center: [51.505, -0.09],
		zoom: 13,
	});
	addTileLayer(map);
	L.marker([51.505, -0.09], {icon: markerIcon}).addTo(map);

	function getData() {
		if (validateIp(ipInput.value)) {
			if (
				errEl &&
				errEl.classList.contains('header_form__error--active_state')
			) {
				errEl.classList.remove('header_form__error--active_state');
			}
			getAddress(ipInput.value) // асинхронные функции всегда возвращают промис
				.then((data) => renderInfo(data)); // или просто .then(renderInfo)
		} else {
			if (
				errEl &&
				!errEl.classList.contains('header_form__error--active_state')
			) {
				errEl.classList.add('header_form__error--active_state');
			}
			return false;
		}
	}

	function handleInput(e) {
		if (e.key === 'Enter') {
			getData();
		}
	}

	function renderInfo(data) {
		const {lat, lng, country, region, city, timezone} = data?.location;

		if (ipInfo) {
			ipInfo.textContent = data.ip;
		}
		if (locationInfo) {
			locationInfo.textContent = `${country}, ${region}, ${city}`;
		}
		if (timezoneInfo) {
			timezoneInfo.textContent = `UTC ${timezone}`;
		}
		if (ispInfo) {
			ispInfo.textContent = data?.isp;
		}

		if(lat && lng) {
			map.setView([lat, lng]);
			L.marker([lat, lng], {icon: markerIcon}).addTo(map);
		}
		console.log(data);
	}
	console.log('Geo func is connected');
};
