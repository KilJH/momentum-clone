const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');

const settingIcon = document.querySelector('.setting');
const settingList = document.querySelector('.settingList');
const toggleOfIs24 = document.querySelector('#is24');

const SETTING_LS = 'setting';
const ENABLED_CN = 'enabled';
const DISABLED_CN = 'disabled';

const settings = {
	is24: true,
};

function showSettingList(event) {
	if (settingList.classList.contains(DISABLED_CN)) {
		settingList.classList.remove(DISABLED_CN);
		settingList.classList.add(ENABLED_CN);
		toggleOfIs24.addEventListener('click', (event) => {
			settings.is24 = event.target.checked;
			saveSettings();
		});
	} else {
		animateHide(settingList);
		setTimeout(() => hideComponent(settingList), 500);
	}
}

function saveSettings() {
	localStorage.setItem(SETTING_LS, JSON.stringify(settings));
}

function hideComponent(element) {
	element.classList.remove(ENABLED_CN);
	element.classList.add(DISABLED_CN);
}

function animateHide(element) {
	element.classList.add('fadeOut');
	setTimeout(() => element.classList.remove('fadeOut'), 500);
}

function loadSetting() {
	const loadedSetting = localStorage.getItem(SETTING_LS);
	if (loadedSetting !== null) {
		const parsedSetting = JSON.parse(loadedSetting);
		toggleOfIs24.checked = parsedSetting.is24;
		settings.is24 = parsedSetting.is24;
	}
}

function getTime() {
	const date = new Date();
	const minutes = date.getMinutes();
	let hours = date.getHours();
	const seconds = date.getSeconds();

	if (!settings.is24) {
		hours = hours > 12 ? hours - 12 : hours;
	}

	clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
		minutes < 10 ? `0${minutes}` : minutes
	}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
	loadSetting();
	getTime();
	settingIcon.addEventListener('click', showSettingList);
	setInterval(getTime, 1000);
}

init();
