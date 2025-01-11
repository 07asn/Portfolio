// Select the toggle button and body
const toggleThemeButton = document.getElementById("toggle-theme");
const body = document.body;

// Check and Apply Saved Theme Preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark-mode");
}

// Toggle Dark Mode
toggleThemeButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    
    // Save Theme Preference
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } 
    else {
        localStorage.setItem("theme", "light");
    }
});