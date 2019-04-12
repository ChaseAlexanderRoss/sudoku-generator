visiboard = document.querySelector('.sudokuBoard');
generateButton = document.querySelector('.generate');
easyButton = document.querySelector('.easy');
mediumButton = document.querySelector('.medium');
hardButton = document.querySelector('.hard');
veryHardButton = document.querySelector('.veryHard');
insaneButton = document.querySelector('.insane');
inhumanButton = document.querySelector('.inhuman');
difficultyNumber = document.querySelector('.difficulty');

//Difficulty Buttons
easyButton.addEventListener('click', function() {
	let dN = 62;
	difficultyNumber.innerText = dN;
	return dN;
});

mediumButton.addEventListener('click', function() {
	let dN = 53;
	difficultyNumber.innerText = dN;
	return dN;
});

hardButton.addEventListener('click', function() {
	let dN = 44;
	difficultyNumber.innerText = dN;
	return dN;
});

veryHardButton.addEventListener('click', function() {
	let dN = 35;
	difficultyNumber.innerText = dN;
	return dN;
});

insaneButton.addEventListener('click', function() {
	let dN = 26;
	difficultyNumber.innerText = dN;
	return dN;
});

inhumanButton.addEventListener('click', function() {
	let dN = 17;
	difficultyNumber.innerText = dN;
	return dN;
});

generateButton.addEventListener('click', function() {
	dN = parseInt(difficultyNumber.innerHTML, 10);
	board = sudoku.generate(dN);
	visiboard.innerText = board;
});
