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
}