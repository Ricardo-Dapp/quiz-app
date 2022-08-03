// Variables
let correctCount = 0;
let onQuestion = 1;
const questions = [
  {
    question: "What is the capital of New York?",
    answers: [
      {
        text: "Los Angeles",
        correct: false,
      },
      {
        text: "New York",
        correct: true,
      },
      {
        text: "Washington D.C.",
        correct: false,
      },
      {
        text: "Chicago",
        correct: false,
      },
    ],
  },
  {
    question: "Does M&M stands for Mars and Murrie?",
    answers: [
      {
        text: "True",
        correct: true,
      },
      {
        text: "False",
        correct: false,
      },
    ],
  },
  {
    question: "What is 2 + 2 ?",
    answers: [
      {
        text: "5",
        correct: false,
      },
      {
        text: "0",
        correct: false,
      },
      {
        text: "1",
        correct: false,
      },
      {
        text: "4",
        correct: true,
      },
    ],
  },
  {
    question: "U.S presidents serves a 6 year term?",
    answers: [
      {
        text: "True",
        correct: false,
      },
      {
        text: "false",
        correct: true,
      },
    ],
  },
];

// DOM Elements
const questionCounterHeader = document.getElementById("questionCounter-header");
const questionHeader = document.getElementById("question-header");
const startButton = document.getElementById("start-button");
const QuestionContainer = document.getElementById("question-container");

// Functions

// Start the quiz and reset all the values
function startGame() {
  QuestionContainer.innerHTML = "";
  onQuestion = 1;
  correctCount = 0;
  display(0);
}

// displays the current question and answers to the DOM
function display(questionNumber) {
  // dynamically creates each answer as a button
  // when clicked nextQuestion() is called and will see if the answer is correct
  const displayAnswers = questions[questionNumber].answers.map((answer) => {
    return `<button onclick="nextQuestion(${answer.correct})">${answer.text}</button>`;
  });

  QuestionContainer.innerHTML = `
    <h2 id="questionCounter-header">
    Question ${onQuestion}/${questions.length}:</h2>
    <h4 id="question-header">${questions[questionNumber].question}</h4>
    ${displayAnswers.join("")}`;
}

// check to see if answer is correct and calls display() for the next question.
// if quiz is done showResults() is called
function nextQuestion(checkAnswer) {
  if (onQuestion < questions.length) {
    if (checkAnswer === true) {
      correctCount++;
      console.log(correctCount);
    }
    onQuestion++;
    display(onQuestion - 1);
  } else {
    if (checkAnswer === true) {
      correctCount++;
      console.log(correctCount);
    }
    showResults();
  }
}

// When quiz is over display correctCount and button to start quiz over.
function showResults() {
  QuestionContainer.innerHTML = `
  <h2>
  Correct Answers: ${correctCount} / ${questions.length}
  </h2>
  <button onclick="startGame()">Take Quiz Again</button>`;
}
