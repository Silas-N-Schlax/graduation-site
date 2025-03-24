console.log(window.pageData.questions);

const quizContainer = document.getElementById("quiz-container");
const nextButton = document.getElementById("next-button");
const previousButton = document.getElementById("previous-button");
const questions = window.pageData.questions;
let qI = 0; // question Index

document.addEventListener("DOMContentLoaded", function () {
  showQuestion(); 
});

nextButton.addEventListener("click", function () {
  if (qI < questions.length - 1) {
    qI++;
    showQuestion();
  }
});

previousButton.addEventListener("click", function () {
  if (qI > 0) {
    qI--;
    showQuestion();
  }
});

function showQuestion() {
  document.getElementById("question-container").innerHTML = `
    <h2>${questions[qI][0]}</h2>`;

  const answersContainer = document.getElementById("answers-container");
  answersContainer.innerHTML = "";

  let choices = questions[qI][1];
  choices.forEach((choice, index) => {
    const answerElement = document.createElement("p");
    answerElement.classList.add("answer");
    answerElement.textContent = choice;

    answerElement.addEventListener("click", function () {
      if (index === questions[qI][2]) {
        console.log("Correct!");
        answerElement.style.backgroundColor = "#4B8B3B"; 
      } else {
        console.log("Incorrect!");
        answerElement.style.backgroundColor = "#9E4B3D";
      }
    });

    answersContainer.appendChild(answerElement);
  });
}
