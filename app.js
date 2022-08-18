const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
const titleEl = document.querySelector('h1');
// const circleEl = document.querySelector(".circle");
const labelEl = document.querySelector(".label");


inputEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
    if (inputEl.checked) {
        bodyEl.style.background = "black";
        titleEl.style.color = "white";
        titleEl.innerText = "Dark Mode";
        // circleEl.style.background = "black";
        labelEl.style.background = "white";


    } else {
        bodyEl.style.background = "white";
        titleEl.style.color = "black";
        titleEl.innerText = "Light Mode"
        // circleEl.style.background = "white";
        labelEl.style.background = "black";
    }

}

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputEl.checked));

}


inputEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
});