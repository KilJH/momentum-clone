const toDoForm = document.querySelector('.js-toDoForm'),
	toDoInput = toDoForm.querySelector('input'),
	toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
const FADEOUT_CN = 'fadeOut';

let toDos = [];
let idNumbers = 1;

function deleteToDo(event) {
	const btn = event.target;
	const li = btn.parentNode;

	// 사라지는 애니메이션 적용
	li.classList.add(FADEOUT_CN);
	// 애니메이션 종료 후 삭제
	setTimeout(() => {
		toDoList.removeChild(li);
	}, 300);

	const cleanToDos = toDos.filter((toDo) => {
		return toDo.id !== parseInt(li.id);
	});
	toDos = cleanToDos;
	saveToDos();
}

function blurToDo(event) {
	const btn = event.target;
	const li = btn.parentNode;
	event.type === 'mouseover'
		? li.classList.add('blur')
		: li.classList.remove('blur');
}

function saveToDos() {
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function loadToDos() {
	const loadedToDos = localStorage.getItem(TODOS_LS);
	if (loadedToDos !== null) {
		const parsedToDos = JSON.parse(loadedToDos);
		parsedToDos.forEach((toDo) => {
			paintToDo(toDo.text);
		});
	}
}

function paintToDo(text) {
	const li = document.createElement('li');
	const delBtn = document.createElement('button');
	const span = document.createElement('span');
	const newId = idNumbers++;

	delBtn.innerText = '❌';
	delBtn.addEventListener('click', deleteToDo);
	delBtn.addEventListener('mouseover', blurToDo);
	delBtn.addEventListener('mouseout', blurToDo);
	span.innerText = text;
	li.appendChild(delBtn);
	li.appendChild(span);
	li.id = newId;
	toDoList.appendChild(li);

	const toDoObj = {
		text,
		id: newId,
	};
	toDos.push(toDoObj);
}

function init() {
	loadToDos();
	toDoForm.addEventListener('submit', (event) => {
		event.preventDefault();
		const currentValue = toDoInput.value;
		paintToDo(currentValue);
		saveToDos();
		toDoInput.value = '';
	});
}

init();
