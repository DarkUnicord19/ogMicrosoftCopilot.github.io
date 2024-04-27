// script.js
const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question-container');
const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const idkButton = document.getElementById('idk-button');
const result = document.getElementById('result');
const heartMessage = document.getElementById('heart-message');

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    questionContainer.classList.remove('hidden');
    askQuestion();
});

function askQuestion() {
    // Replace with your own questions for Squidward
    const questions = [
        'Do you enjoy clarinet music?',
        'Are you a fan of Krabby Patties?',
        'What do you think of my nose?',
    ];

    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById('question').textContent = randomQuestion;

    // Handle user responses (yes, no, idk)
    // You can customize this part based on your game logic
    yesButton.addEventListener('click', () => showResult('Squidward loves your enthusiasm!'));
    noButton.addEventListener('click', () => showResult('Squidward is unimpressed.'));
    idkButton.addEventListener('click', () => showResult('Squidward is confused.'));
}

function showResult(message) {
    questionContainer.style.display = 'none';
    result.classList.remove('hidden');
    heartMessage.textContent = message;
}
