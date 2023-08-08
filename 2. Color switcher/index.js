const btn = document.querySelectorAll("button");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const back = document.getElementsByClassName("btn-back");


btn.forEach(function (e) {
    e.addEventListener("click", function (ev) {
        console.log(ev.target.id);
        if (ev.target.id == "color1-btn") {
            body.style.backgroundImage = "url(red.svg)";
            h1.style.backgroundImage = "var(--red)";
            back[0].style.fill = "hsl(0, 100%, 50%)";
        }
        if (ev.target.id == "color2-btn") {
            body.style.backgroundImage = "url(yellow.svg)";
            h1.style.backgroundImage = "var(--yellow)";
            back[0].style.fill = "hsl(52, 100%, 50%)";
        }
        if (ev.target.id == "color3-btn") {
            body.style.backgroundImage = "url(green.svg)";
            h1.style.backgroundImage = "var(--green)";
            back[0].style.fill = "hsl(102, 92%, 38%)";
        }
        if (ev.target.id == "color4-btn") {
            body.style.backgroundImage = "url(bg.svg)";
            h1.style.backgroundImage = "var(--blue)";
            back[0].style.fill = "hsl(206, 100%, 50%)";
        }
        if (ev.target.id == "color5-btn") {
            body.style.backgroundImage = "url(white.svg)";
            h1.style.backgroundImage = "var(--white)";
            back[0].style.fill = "hsl(0, 0%, 59%)";
        }
    })
})