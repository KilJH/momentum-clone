// const settingIcon = document.querySelector('.setting');
// const settingList = document.querySelector('.settingList');
// const toggleOfIs24 = document.querySelector('#is24');

// const SETTING_LS = 'setting';
// const ENABLED_CN = 'enabled';
// const DISABLED_CN = 'disabled';

// const settings = {
// 	is24: true,
// };

// function showSettingList(event) {
// 	if (settingList.classList.contains(DISABLED_CN)) {
// 		settingList.classList.remove(DISABLED_CN);
// 		settingList.classList.add(ENABLED_CN);
// 		toggleOfIs24.addEventListener('click', (event) => {
// 			settings.is24 = event.target.checked;
// 			saveSettings();
// 		});
// 	} else {
// 		animateHide(settingList);
// 		setTimeout(() => hideComponent(settingList), 500);
// 	}
// }

// function saveSettings() {
// 	localStorage.setItem(SETTING_LS, JSON.stringify(settings));
// }

// function hideComponent(element) {
// 	element.classList.remove(ENABLED_CN);
// 	element.classList.add(DISABLED_CN);
// }

// function animateHide(element) {
// 	element.classList.add('fadeOut');
// 	setTimeout(() => element.classList.remove('fadeOut'), 500);
// }

// function loadSetting() {
// 	const loadedSetting = localStorage.getItem(SETTING_LS);
// 	if (loadedSetting !== null) {
// 		const parsedSetting = JSON.parse(loadedSetting);
// 		toggleOfIs24.checked = parsedSetting.is24;
// 	}
// }

// function init() {
// 	loadSetting();
// 	settingIcon.addEventListener('click', showSettingList);
// }

// init();
