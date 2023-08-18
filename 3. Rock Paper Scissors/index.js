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
    if (userChoice.innerHTML === computerChoice.innerHTML) {
        // draw
        result.innerHTML = "Draw!!";
    }
    if (userChoice.innerHTML === "Rock" && computerChoice.innerHTML === "Scissors") {
        // win
        result.innerHTML = "You Win!!";
    }
    if (userChoice.innerHTML === "Paper" && computerChoice.innerHTML === "Rock") {
        // win
        result.innerHTML = "You Win!!";
    }
    if (userChoice.innerHTML === "Scissors" && computerChoice.innerHTML === "Paper") {
        // win
        result.innerHTML = "You Win!!";
    }
    if (userChoice.innerHTML === "Rock" && computerChoice.innerHTML === "Paper") {
        // Lost
        result.innerHTML = "You Lost!!";
    }
    if (userChoice.innerHTML === "Paper" && computerChoice.innerHTML === "Scissors") {
        // Lost
        result.innerHTML = "You Lost!!";
    }
    if (userChoice.innerHTML === "Scissors" && computerChoice.innerHTML === "Rock") {
        // Lost
        result.innerHTML = "You Lost!!";
    }
}