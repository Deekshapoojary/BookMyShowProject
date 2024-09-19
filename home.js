// script.js
document.getElementById("menu-icon").addEventListener("click", function() {
    document.getElementById("side-nav").classList.add("open");
});

document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("side-nav").classList.remove("open");
});
