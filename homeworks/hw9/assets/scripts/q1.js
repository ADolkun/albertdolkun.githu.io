/**
 * Sets the background color of #q1-container
 *
 * @param {string} color The background color that #q1-container should change to
 */
let container = document.getElementById("q1-container");

function setBackgroundColor(color) {
    // TODO: Get the element with the id "q1-container" and set its background color to the input color
    container.style.backgroundColor = color;
}

function redButtonClicked() {
    // TODO: Use the setBackgroundColor() to set the background color to #EF476F (or another color of your choice)
    setBackgroundColor("#EF476F");
}

document.getElementById("q1-btn-red").onclick = redButtonClicked;

document.getElementById("q1-btn-yellow").onclick = function() {
    setBackgroundColor("#FFD166");
}

document.getElementById("q1-btn-green").onclick = function() {
    setBackgroundColor("#06D6A0");
}

document.getElementById("q1-btn-lightblue").onclick = function() {
    setBackgroundColor("#118AB2");
}

document.getElementById("q1-btn-blue").onclick = function() {
    setBackgroundColor("#073B4C");
}