const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const questionElement = document.getElementById("question");
const correctAnswer = num1 * num2;
const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");
const scoreElement = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if (!score) {
  score = 0;
}

scoreElement.innerText = `score: ${score}`;

formElement.addEventListener("submit", () => {
  const userAnswer = +inputElement.value;
  if (userAnswer === correctAnswer) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
questionElement.innerText = `What is ${num1} multiplied by ${num2}?`;
