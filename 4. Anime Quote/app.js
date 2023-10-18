// window.alert("Working");

window.addEventListener("load",getNew);

let btn = document.getElementById("btn");
let output = document.getElementById("quote-output");
let author = document.getElementById("author");
let anime = document.getElementsByClassName(".quote-img");
btn.addEventListener("click", ()=>{
    console.log("clicked")
})

async function getNew(){
    output.innerHTML = "Loading...";
    author.innerHTML = " ";
    fetch("https://animechan.xyz/api/random")
    .then(response => response.json())
    .then(data => {
        output.innerHTML = data.quote;
        author.innerHTML = "-" + data.character + " from " + data.anime;
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });
}