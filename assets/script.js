// getters
const question = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

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
}, {
    question: "Which song did ABBA win the Eurovision Song Contest with in 1974?",
    answers: [{
            text: "Mamma Mia",
            correct: false
        },
        {
            text: "Dancing Queen",
            correct: false
        },
        {
            text: "Waterloo",
            correct: true
        },
        {
            text: "S.O.S.",
            correct: false
        },
    ]
}, {
    question: "Which Canadian superstar won the Eurovision Song Contest 1988, representing Switzerland?",
    answers: [{
            text: "Shania Twain",
            correct: false
        },
        {
            text: "Avril Lavigne",
            correct: false
        },
        {
            text: "Céline Dion",
            correct: true
        },
        {
            text: "Alanis Morissette",
            correct: false
        },
    ]
}, {
    question: "Which band won the Eurovision Song Contest 2006 while wearing monster costumes?",
    answers: [{
            text: "Rammstein",
            correct: false
        },
        {
            text: "Lordi",
            correct: true
        },
        {
            text: "Slipknot",
            correct: false
        },
        {
            text: "Kiss",
            correct: false
        },
    ]
}, {
    question: "Which two countries have won the Eurovision Song Contest the same number of times as each other?",
    answers: [{
            text: "Sweden and Ireland",
            correct: true
        },
        {
            text: "France and United Kingdom",
            correct: false
        },
        {
            text: "Israel and Netherlands",
            correct: false
        },
        {
            text: "Luxembourg and Italy",
            correct: false
        },
    ]
}, {
    question: "Which year did they start using televoting for the final?",
    answers: [{
            text: "1977",
            correct: false
        },
        {
            text: "1987",
            correct: false
        },
        {
            text: "1997",
            correct: true
        },
        {
            text: "2007",
            correct: false
        },
    ]
}, {
    question: "Which instrument did Norway’s Alexander Rybak play on stage in his performance of Fairytale?",
    answers: [{
            text: "Guitar",
            correct: false
        },
        {
            text: "Piano",
            correct: false
        },
        {
            text: "Violin",
            correct: true
        },
        {
            text: "Accordion",
            correct: false
        },
    ]
}, {
    question: "Which non-European country joined the competition in 2015?",
    answers: [{
            text: "Australia",
            correct: true
        },
        {
            text: "Canada",
            correct: false
        },
        {
            text: "Japan",
            correct: false
        },
        {
            text: "Morocco",
            correct: false
        },
    ]
}, {
    question: "Which country holds the record for the most points received in a single contest?",
    answers: [{
            text: "Norway",
            correct: false
        },
        {
            text: "Portugal",
            correct: false
        },
        {
            text: "Bulgaria",
            correct: false
        },
        {
            text: "Ukraine",
            correct: true
        },
    ]
}, {
    question: "Which country will host Eurovision 2024?",
    answers: [{
            text: "England",
            correct: false
        },
        {
            text: "Ireland",
            correct: false
        },
        {
            text: "Sweden",
            correct: true
        },
        {
            text: "Germany",
            correct: false
        },
    ]
}
];

function startQuiz() {
    questionNumber = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
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

function showScore() {
    resetState();
    if (score < 4) {
        question.innerHTML = `You scored ${score} out of ${questions.length}, better luck next time!`;
    } else if (score => 4 && score < 8){
        question.innerHTML = `You scored ${score} out of ${questions.length}, well done!`;
    } else {
        question.innerHTML = `You scored ${score} out of ${questions.length}, you're a star!`;
    }
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = "block";
}

function handleNextButton() {
    questionNumber++;
    if (questionNumber < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener ("click", () => {
    if (questionNumber < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();