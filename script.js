// Reveal hidden fact when button is clicked
document.getElementById("revealFact").addEventListener("click", function() {
    document.getElementById("hiddenFact").style.display = "block";
});

// Automatically update the year in the footer
document.getElementById("currentYear").textContent = new Date().getFullYear();