const boxes = [
    document.querySelector('.box-1'),
    document.querySelector('.box-2'),
    document.querySelector('.box-3'),
    document.querySelector('.box-4')
];

const letters = ['P', 'L', 'A', 'Y'];

let correctOrder = ['P', 'L', 'A', 'Y'];
let currentAttempt = [];
let shuffledLetters = [];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function assignRandomLetters() {
    shuffledLetters = shuffleArray([...letters]); 
    boxes.forEach((box, index) => {
        box.textContent = shuffledLetters[index]; 
        box.style.color = 'white'; 
        box.style.fontSize = '128px'; 
        box.style.display = 'flex'; 
        box.style.justifyContent = 'center';
        box.style.alignItems = 'center'; 
        box.style.cursor = 'crosshair'; 
        box.style.visibility = 'visible'; 
    });
    currentAttempt = [];
}

function handleLetterClick(event) {
    const clickedLetter = event.target.textContent;
    currentAttempt.push(clickedLetter);
    const currentIndex = currentAttempt.length - 1;
    if (clickedLetter !== correctOrder[currentIndex]) {
        const container = document.querySelector('.container')
        container.style.borderColor = "#FF3C38"
        setTimeout(() => {
            container.style.borderColor = "transparent"
            assignRandomLetters();
        }, 550);
    } else {
        event.target.innerHTML = '';

        if (currentAttempt.length === correctOrder.length) {
            const container = document.querySelector('.container')
            container.style.borderColor = "#53FF45"
            setTimeout(() => {
                container.style.borderColor = "transparent"
                assignRandomLetters();
            }, 550);
        }
    }
}

boxes.forEach(box => {
    box.addEventListener('click', handleLetterClick);
});

assignRandomLetters();

const board = document.getElementById('board');
const distanceSlider = document.getElementById('distanceSlider');

function adjustBoardScale() {
    const scaleValue = 1 + (distanceSlider.value / 100);
    board.style.transform = `scale(${scaleValue})`; 
}

distanceSlider.addEventListener('input', adjustBoardScale);

adjustBoardScale();