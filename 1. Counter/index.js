let countEl = document.getElementById("count")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count = count + 1
    countEl.textContent = count
}
function decrement() {

    if (count > 0) {
        count = count - 1
        countEl.textContent = count
    }
}

function save() {
    saveEl.textContent += count
    saveEl.textContent += " - "

    countEl.textContent = 0
    count = 0
}
