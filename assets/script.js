// getters
const question = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const wrapper = document.getElementById('wrapper');

// variables to keep track
let questionNumber = 0;
let score = 0;

// questions
const questions = [{
    question: "Who won the first ever Eurovision Song Contest in 1956?",
    answers: [{
            text: "Switzerland",
            correct: true
        },
        {
            text: "United Kingdom",
            correct: false
        },
        {
            text: "France",
            correct: false
        },
        {
            text: "Italy",
            correct: false
        },
    ]
}];

function startQuiz() {
    questionNumber = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[questionNumber];
    let questionNo = questionNumber + 1;
    question.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild)  {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display = "block";
}


startQuiz();