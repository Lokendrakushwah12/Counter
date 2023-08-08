const btn = document.querySelectorAll("button");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");

btn.forEach(function (e) {
    e.addEventListener("click", function (ev) {
        console.log(ev.target.id);
        if (ev.target.id == "color1-btn") {
            body.style.backgroundImage = "url(red.svg)";
            h1.style.backgroundImage = "var(--red)";
        }
        if (ev.target.id == "color2-btn") {
            body.style.backgroundImage = "url(yellow.svg)";
            h1.style.backgroundImage = "var(--yellow)";
        }
        if (ev.target.id == "color3-btn") {
            body.style.backgroundImage = "url(green.svg)";
            h1.style.backgroundImage = "var(--green)";
        }
        if (ev.target.id == "color4-btn") {
            body.style.backgroundImage = "url(bg.svg)";
            h1.style.backgroundImage = "var(--blue)";
        }
        if (ev.target.id == "color5-btn") {
            body.style.backgroundImage = "url(white.svg)";
            h1.style.backgroundImage = "var(--white)";
        }
    })
})