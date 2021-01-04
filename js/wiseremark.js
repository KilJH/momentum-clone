// const wiseRemark = document.querySelector('.js-wiseRemark');

function getRandomWiseRemark() {
	fetch('https://api.adviceslip.com/advice')
		.then((response) => {
			return response.json();
		})
		.then((json) => {
			const advice = json.slip.advice;
			const wiseRemark = document.createElement('p');
			wiseRemark.classList.add('wiseRemark');
			wiseRemark.innerText = `\"${advice}\"`;
			body.appendChild(wiseRemark);
		});
}

function init() {
	getRandomWiseRemark();
}

init();
