const computerChoice = document.getElementById("computer-choice");
const userChoice = document.getElementById("user-choice");
const result = document.getElementById("result");
const possibleChoices = document.querySelectorAll(".btn");

possibleChoices.forEach(el => el.addEventListener("click", (e) => {
    userChoice.innerHTML = e.target.outerText;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNumber = Math.random() * 3;
    if (Math.floor(randomNumber) == 0) {
        computerChoice.innerHTML = "Rock";
    }
    if (Math.floor(randomNumber) == 1) {
        computerChoice.innerHTML = "Paper";
    }
    if (Math.floor(randomNumber) == 2) {
        computerChoice.innerHTML = "Scissors";
    }
}

function getResult() {
    result.classList.remove("visible");
    if (userChoice === computerChoice) {
        // draw
        result.innerHTML = "Draw!!";
    }
    if (userChoice === "Rock" && computerChoice === "Scissors") {
        // win
        result.innerHTML = "You Win!!";
    }
    if (userChoice === "Paper" && computerChoice === "Rock") {
        // win
        result.innerHTML = "You Win!!";
    }
    if (userChoice === "Scissors" && computerChoice === "Paper") {
        // win
        result.innerHTML = "You Win!!";
    }
    if (userChoice === "Rock" && computerChoice === "Paper") {
        // Lost
        result.innerHTML = "You Lost!!";
    }
    if (userChoice === "Paper" && computerChoice === "Scissors") {
        // Lost
        result.innerHTML = "You Lost!!";
    }
    if (userChoice === "Scissors" && computerChoice === "Rock") {
        // Lost
        result.innerHTML = "You Lost!!";
    }
}