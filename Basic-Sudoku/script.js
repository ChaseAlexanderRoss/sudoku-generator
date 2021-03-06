easyButton = document.querySelector('.easy');
mediumButton = document.querySelector('.medium');
hardButton = document.querySelector('.hard');
veryHardButton = document.querySelector('.veryHard');
insaneButton = document.querySelector('.insane');
inhumanButton = document.querySelector('.inhuman');
difficultyNumber = document.querySelector('.difficulty');
visiboard = document.querySelector('.sudokuBoard');
generateButton = document.querySelector('.generate');

//Difficulty Buttons (sets the difficulty for the puzzle)
easyButton.addEventListener('click', function() {
	let dN = 62;
	difficultyNumber.innerText = dN;
	difficultyNumber.style.display = 'none';
	return dN;
});

mediumButton.addEventListener('click', function() {
	let dN = 53;
	difficultyNumber.innerText = dN;
	difficultyNumber.style.display = 'none';
	return dN;
});

hardButton.addEventListener('click', function() {
	let dN = 44;
	difficultyNumber.innerText = dN;
	difficultyNumber.style.display = 'none';
	return dN;
});

veryHardButton.addEventListener('click', function() {
	let dN = 35;
	difficultyNumber.innerText = dN;
	difficultyNumber.style.display = 'none';
	return dN;
});

insaneButton.addEventListener('click', function() {
	let dN = 26;
	difficultyNumber.innerText = dN;
	difficultyNumber.style.display = 'none';
	return dN;
});

inhumanButton.addEventListener('click', function() {
	let dN = 17;
	difficultyNumber.innerText = dN;
	difficultyNumber.style.display = 'none';
	return dN;
});

//Generates the numbers for the board
generateButton.addEventListener('click', function() {
	visiboard.innerText = '';
	dN = parseInt(difficultyNumber.innerHTML, 10);
	board = sudoku.generate(dN);
	board = board.split('');
	for (let i = 0; i < board.length; i++) {
		let textarea = document.createElement('textarea');
		if (board[i] == '.') {
			textarea.innerText = '';
		} else {
			textarea.innerText = board[i];
		}
		textarea.setAttribute('data-letter-index', i);
		textarea.style.height = '40px';
		textarea.style.width = '40px';
		textarea.style.borderWidth = '1px';
		textarea.style.borderColor = 'black';
		textarea.style.borderStyle = 'solid';
		visiboard.appendChild(textarea);
	}
});
