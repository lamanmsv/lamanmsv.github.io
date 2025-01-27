const shadesOfCyan = ['#00bcd4', '#00acc1', '#0097a7'];
const hints = [
    'Hint: This shade is often associated with a bright and vibrant cyan.',
    'Hint: This shade is slightly darker than the first one.',
    'Hint: This shade is the darkest among the three options.'
];
let correctAnswerIndex;

document.getElementById('main').onclick = function() {
    document.body.style.backgroundColor = shadesOfCyan[Math.floor(Math.random() * shadesOfCyan.length)];
    document.getElementById('main').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    loadQuiz();
};

function loadQuiz() {
    correctAnswerIndex = Math.floor(Math.random() * shadesOfCyan.length);
    document.getElementById('colorSquare').style.backgroundColor = shadesOfCyan[correctAnswerIndex];
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.textContent = shadesOfCyan[index];
    });
    document.getElementById('hint').textContent = hints[correctAnswerIndex];
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === correctAnswerIndex) {
        alert('Correct!');
    } else {
        alert('Wrong! Try again.');
    }
    loadQuiz();
}function checkAnswer(selectedIndex) {
    if (selectedIndex === correctAnswerIndex) {
        displayYesSign(); // Display "yes" sign on correct answer
    } else {
        alert('Wrong! Try again.');
    }
    loadQuiz();
}

function displayYesSign() {
    const yesSign = document.createElement('div');
    yesSign.textContent = 'YES!';
    yesSign.style.position = 'absolute';
    yesSign.style.top = '50%';
    yesSign.style.left = '50%';
    yesSign.style.transform = 'translate(-50%, -50%)';
    yesSign.style.fontSize = '3em';
    yesSign.style.color = 'green';
    yesSign.style.animation = 'fadeInOut 2s forwards';
    document.body.appendChild(yesSign);
    setTimeout(() => yesSign.remove(), 2000);
}

// Add keyframes for fadeInOut animation in styles.css
@keyframes fadeInOut {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
}
function startGame() {
    document.body.style.backgroundColor = shadesOfCyan[Math.floor(Math.random() * shadesOfCyan.length)];
    document.getElementById('main').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    loadQuiz();
}
