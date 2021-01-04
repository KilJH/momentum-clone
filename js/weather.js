const weather = document.querySelector('.js-weather');
const city = document.querySelector('.js-city');

const API_KEY = 'b8ab0e3ff0cd1ae3f7d6315379858957';
const COORDS = 'coords';

function getWeather(lat, lon) {
	fetch(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
	)
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			const temperature = Math.round(json.main.temp);
			const place = json.name;
			const icon = new Image();
			icon.src = 'img/locationIcon.png';
			icon.classList.add('icon');
			weather.innerText = `${temperature}°C`;
			city.appendChild(icon);
			city.innerHTML = `${icon.outerHTML} ${place}`;
		});
}

function saveCoords(coordsObj) {
	localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function askForCoords() {
	navigator.geolocation.getCurrentPosition(
		(position) => {
			const latitude = position.coords.latitude;
			const longitude = position.coords.longitude;
			const coordsObj = {
				latitude,
				longitude,
			};
			saveCoords(coordsObj);
			getWeather(latitude, longitude);
		},
		() => {
			console.log("can't access geo location");
		}
	);
}

function loadCoords() {
	const loadedCoords = localStorage.getItem(COORDS);
	if (loadedCoords === null) {
		askForCoords();
	} else {
		// getWeather
		const parseCoords = JSON.parse(loadedCoords);
		getWeather(parseCoords.latitude, parseCoords.longitude);
	}
}

function init() {
	loadCoords();
}

init();
