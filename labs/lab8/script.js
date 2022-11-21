
let lightsOff = document.getElementById("toggleButton");

function toggleTheme() {
    document.querySelector("body").classList.toggle("dark-mode");
}

lightsOff.onclick = toggleTheme;