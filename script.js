const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');

let shuffledQuestions, currentQuestionIndex, score;

const questions = [
    {
        question: 'What year was our school founded?',
        answers: [
            { text: '1995', correct: false },
            { text: '2001', correct: true },
            { text: '2010', correct: false },
            { text: '1987', correct: false }
        ]
    },
    {
        question: 'Who is the principal of our school?',
        answers: [
            { text: 'Mr. Smith', correct: false },
            { text: 'Mrs. Johnson', correct: false },
            { text: 'Dr. Brown', correct: true },
            { text: 'Ms. Lee', correct: false }
        ]
    },
    {
        question: 'Which sport did our school team win a championship in last year?',
        answers: [
            { text: 'Basketball', correct: true },
            { text: 'Soccer', correct: false },
            { text: 'Baseball', correct: false },
            { text: 'Swimming', correct: false }
        ]
    },
    {
        question: 'What\'s the name of our school\'s mascot?',
        answers: [
            { text: 'Tiger', correct: true },
            { text: 'Eagle', correct: false },
            { text: 'Lion', correct: false },
            { text: 'Bear', correct: false }
        ]
    }
];

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hide');
    restartButton.classList.add('hide');
    scoreContainer.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        setNextQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    questionContainer.classList.add('hide');
    scoreContainer.classList.remove('hide');
    scoreElement.innerText = score;
    restartButton.classList.remove('hide');
}
