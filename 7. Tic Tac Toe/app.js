let boxes = document.getElementsByClassName("box");
let turn = document.getElementById("turn");
let reset = document.getElementById("reset");

let turnO = false;
let count = 0;

let gameOver = false;

function checkWinner() {
    let box1 = boxes[0].innerHTML;
    let box2 = boxes[1].innerHTML;
    let box3 = boxes[2].innerHTML;
    let box4 = boxes[3].innerHTML;
    let box5 = boxes[4].innerHTML;
    let box6 = boxes[5].innerHTML;
    let box7 = boxes[6].innerHTML;
    let box8 = boxes[7].innerHTML;
    let box9 = boxes[8].innerHTML;
    if (box1 != "" && box1 == box2 && box2 == box3) {
        gameOver = true;
        turn.innerHTML = box1 + " Won 🎉";
    }
    else if (box4 != "" && box4 == box5 && box5 == box6) {
        gameOver = true;
        turn.innerHTML = box4 + " Won 🎉";
    }
    else if (box7 != "" && box7 == box8 && box8 == box9) {
        gameOver = true;
        turn.innerHTML = box7 + " Won 🎉";
    }
    else if (box1 != "" && box1 == box4 && box4 == box7) {
        gameOver = true;
        turn.innerHTML = box1 + " Won 🎉";
    }
    else if (box2 != "" && box2 == box5 && box5 == box8) {
        gameOver = true;
        turn.innerHTML = box2 + " Won 🎉";
    }
    else if (box3 != "" && box3 == box6 && box6 == box9) {
        gameOver = true;
        turn.innerHTML = box3 + " Won 🎉";
    }
    else if (box1 != "" && box1 == box5 && box5 == box9) {
        gameOver = true;
        turn.innerHTML = box1 + " Won 🎉";
    }
    else if (box3 != "" && box3 == box5 && box5 == box7) {
        gameOver = true;
        turn.innerHTML = box3 + " Won 🎉";
    }
    else if (count == 9) {
        gameOver = true;
        turn.innerHTML = "Draw 🥹";
    }
    if (gameOver) {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].innerHTML = "";
        }
    }
}

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", function () {
        if (!gameOver) {
            if (boxes[i].innerHTML == "") {
                if (!turnO) {
                    boxes[i].innerHTML = "O";
                    turn.innerHTML = "X's Turn";
                    turnO = true;
                }
                else {
                    boxes[i].innerHTML = "X";
                    turn.innerHTML = "O's Turn";
                    turnO = false;
                }
                count++;
                if (count >= 5) {
                    checkWinner();
                }
            }
        }
    })
}

reset.addEventListener("click", function () {
    gameOver = false;
    turnO = false;
    count = 0;
    turn.innerHTML = "O's Turn";
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
    }
})