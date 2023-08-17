const computerChoice = document.getElementById("computer-choice")
const userChoice = document.getElementById("user-choice")
const result = document.getElementById("result")
const possibleChoices = document.querySelectorAll(".btn")
let user

console.log(possibleChoices)
possibleChoices.forEach(el => el.addEventListener("click", (e) => {
    userChoice.innerHTML = e.target.id
    generateComputerChoice()
    if (userChoice == computerChoice) {
        // draw
    }
    else {
        if (userChoice == "Scissor") {
            if (computerChoice == "Paper") {
                // win
            }
            else {
                // lose
            }
        }
        else if (userChoice == "Rock") {
            if (computerChoice == "Paper") {
                // loose
            }
            else {
                // win
            }
        }
        else {
            if (computerChoice == "Rock") {
                // loose
            }
            else {
                // win
            }
        }
    }
}))

function generateComputerChoice() {
    const randomNumber = Math.random() * 3
    if (Math.floor(randomNumber) == 0) {
        computerChoice.innerHTML = "Rock"
    }
    if (Math.floor(randomNumber) == 1) {
        computerChoice.innerHTML = "Paper"
    }
    if (Math.floor(randomNumber) == 2) {
        computerChoice.innerHTML = "Scissor"
    }
}