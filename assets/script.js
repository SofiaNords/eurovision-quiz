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

/**
 * This function starts the quiz.
 * Resets questionNumber and score to 0.
 * Change text in nextButton to "Next".
 * Calls the showQuestion function:
 * 
 */
function startQuiz() {
    questionNumber = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

/**
 * This function show current question and answer options.
 * It first resets the state of the quiz by calling resetState function.
 * Then it retrieves the current question based on the question number.
 * The question is displayed with its number, and each answer is displayed as a button.
 * If answer is correct, it is marked with a 'data-correct' attribute.
 * An event listener is added to each button to handle the 'click' event with the 'selectAnswer()' function.
 * 
 */
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

/**
 * This function resets the state of the quiz for the next question.  
 * It hides the 'next-button', removes all existing answer buttons, and resets the confetti effect.
 * 
 */
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild)  {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    resetConfetti();
}

/**
 * This function handles the click of the answer that is selected
 * @param: event this is the button object that called this function
 * 
 * The function first determines wheater the selected answer is correct by checking the 'data-correct' attribute of the clicked button.
 * If the answer is correct, it increments the score and adds the 'correct' class to the button.
 * If the answer is incorrect, it adds the 'incorrect' class to the button.
 * 
 * Then, it iterates over all the answer buttons. For each button, if answer is correct, it adds the 'correct' class to the button.
 * All buttons are disabled to prevent further clicks.
 * 
 * Finally, the 'next' button is displayed for the user to proceed to the next question.
 */
function selectAnswer(event) {
    const selectedBtn = event.target;
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

/** 
 * This function displays the final score to the quiz to the user.
 * It first resets the state of the quiz by calling the function resetState, then checks the final score.
 * Depending on the score, it displays a corresponding message to the user.
 * If the score is high enough, it also creates a confetti effect.
 * Finally, it changes the text of the 'nextButton' to 'Play Again' and makes it visible,
 * indicating that the user can start a new round of the quiz.
*/
function showScore() {
    resetState();
    if (score >= 8) {
        question.innerHTML = `You scored ${score} out of ${questions.length}, you're a star!`;
        createConfetti();
    } else if (score < 4) {
        question.innerHTML = `You scored ${score} out of ${questions.length}, better luck next time!`;
    } else {
        question.innerHTML = `You scored ${score} out of ${questions.length}, well done!`;
    }
    nextButton.innerHTML = 'Play Again';
    nextButton.style.display = "block";
}

/**
 * This function creates a confetti effect by adding multiple colored div elements to a container.
 * It first gets the container element by its ID, 'confetti-container'.
 * It then creates 50 pieces of confetti (as set by 'confettiCount') inside a for loop.
 * Each piece of confetti is a div element with the class 'confetti'.
 * The color of each piece is randomly set to either blue och yellow.
 * The horizontal position of each piece is also set randomly.
 * An animation delay is applied to each piece, again set randomly.
 * Finally, each piece of confetti is appended to the container.
 * 
 */
function createConfetti() {
    const container = document.getElementById("confetti-container");
    const confettiCount = 50; // Number of confetti

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        // Random colours
        const randomColor = Math.random() < 0.5 ? "#0A2DE1" : "#f39c12"; // Two different colours

        confetti.style.left = Math.random() * 100 + "vw"; // Random horizontal position
        confetti.style.backgroundColor = randomColor; // Use random colour
        confetti.style.animationDelay = Math.random() * 3 + "s"; // Random delay

        container.appendChild(confetti);
    }
}

/**
 * This function resets the confetti effect by removing all confetti elements from the container.
 * It first gets the container by its ID, 'confetti-container'.
 * Then, it sets the inner HTML of the container to an empty string, removing all child elements (the confetti pieces).
 */
function resetConfetti() {
    const container = document.getElementById("confetti-container");
    container.innerHTML = ""; // Remove confetti elements
}

/**
 * This function handles the progression of the quix when the 'Next' button is clicked.
 * It first increments the question number to move to the next question.
 * If there are more questions left in the quiz, it calls the 'showQuestion()' function to display the next question.
 * If there are no more questions left, it calls the 'showScore()' function to display the final score to the user.
 */
function handleNextButton() {
    questionNumber++;
    if (questionNumber < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

/**
 * This code adds a click event listener to the 'nextButton'.
 * When the button is clicked, it checks if there are more questions left in the quiz.
 * If there are, it calls the 'handleNextButton()' function to proceed to the next question.
 * If there are no more questions left, it calls the 'startQuiz()' function to reset and start the quiz from the begining.
 */
nextButton.addEventListener ("click", () => {
    if (questionNumber < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

/**
 * This calls the 'startQuiz' function.
 */
startQuiz();

/**
 * 
 */
document.getElementById("infoButton").addEventListener("click", function() {
    var popup = document.getElementById("infoPopup");
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
});