const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greeting');
const todo = document.querySelector('.js-toDoForm');

const USER_LS = 'currentUser',
	SHOWING_CN = 'showing';
// localStorage.setItem()
// localStorage.getItem()

function askForName() {
	todo.classList.add('form');
	form.classList.add(SHOWING_CN);
	greeting.classList.remove(SHOWING_CN);
	form.addEventListener('submit', (event) => {
		// first step - preventDefault()
		event.preventDefault();
		const currentValue = input.value;
		localStorage.setItem(USER_LS, currentValue);
		paintGreeting(currentValue);
	});
}

function paintGreeting(text) {
	form.classList.remove(SHOWING_CN);
	todo.classList.remove('form');
	greeting.classList.add(SHOWING_CN);
	greeting.innerText = `Hi! ${text}`;
}

function loadName() {
	const currentUser = localStorage.getItem(USER_LS);

	if (currentUser === null) {
		// dosen't exist
		askForName();
	} else {
		paintGreeting(currentUser);
	}
}

function init() {
	loadName();
}

init();
