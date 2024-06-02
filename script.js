const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');

let currentQuestionIndex, score;

const questions = [
    {
        question: '1. What year was the Manhasset Common School District established?',
        answers: [
            { text: '1733', correct: false },
            { text: '1762', correct: false },
            { text: '1813', correct: true },
            { text: '1866', correct: false }
        ]
    },
    {
        question: '2. How many people graduated from the Manhasset High School class of 1921?',
        answers: [
            { text: '0', correct: false },
            { text: '2', correct: true },
            { text: '36', correct: false },
            { text: '225', correct: false }
        ]
    },
    {
        question: '3. What is the name of the official Manhasset High School song?',
        answers: [
            { text: '"O Stately Tower of Manhasset"', correct: true },
            { text: '"The Orange and Blue"', correct: false },
            { text: '"Our School, Our Pride"', correct: false },
            { text: '"Forever Manhasset"', correct: false }
        ]
    },
    {
        question: '4. Manhasset was the first high school on Long Island to introduce which sport?',
        answers: [
            { text: 'Ice hockey', correct: false },
            { text: 'Bowling', correct: false },
            { text: 'Badminton', correct: false },
            { text: 'Lacrosse', correct: true }
        ]
    },
    {
        question: '5. What is the official Manhasset High School motto?',
        answers: [
            { text: 'Strive for Greatness', correct: false },
            { text: 'Excellence Through Effort', correct: true },
            { text: 'Knowledge is Power', correct: false },
            { text: 'Aim High', correct: false }
        ]
    },
    {
        question: '6. When will the student government officer voting occur?',
        answers: [
            { text: 'Thursday, June 6', correct: false },
            { text: 'Friday, June 7', correct: true },
            { text: 'Monday, June 10', correct: false },
            { text: 'Wednesday, June 12', correct: false }
        ]
    },
    {
        question: '7. Why is it important to vote for a reliable student government secretary?',
        answers: [
            { text: 'To ensure accurate meeting minutes are kept', correct: true },
            { text: 'To have more school events', correct: false },
            { text: 'To increase school funding', correct: false },
            { text: 'To improve sports team performance', correct: false }
        ]
    },
    {
        question: '8. What quality is most important for a student government secretary to have?',
        answers: [
            { text: 'Athletic ability', correct: false },
            { text: 'Organizational skills', correct: true },
            { text: 'Artistic talent', correct: false },
            { text: 'Proficiency in playing the trumpet', correct: false }
        ]
    },
    {
        question: '9. Which of the following is NOT one of Vikram Gauld\'s skills?',
        answers: [
            { text: 'Keeping precise meeting attendance on Google Sheets', correct: false },
            { text: 'Creating fun games like this one', correct: false },
            { text: 'Managing Canvas pages', correct: false },
            { text: 'Being insane at rhyming', correct: true }
        ]
    },
    {
        question: '10. Who will you vote for Class Secretary?',
        answers: [
            { text: 'Vikram Gauld', correct: true },
            { text: 'Vikram Gauld', correct: true },
            { text: 'Vikram Gauld', correct: true },
            { text: 'Vikram Gauld', correct: true }
        ]
    }
];

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);

function startGame() {
    startButton.classList.add('hide');
    restartButton.classList.add('hide');
    scoreContainer.classList.add('hide');
    currentQuestionIndex = 0;
    score = 0;
    questionContainer.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(questions[currentQuestionIndex]);
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
    if (currentQuestionIndex < questions.length) {
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
