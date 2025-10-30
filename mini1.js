const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

// Default mode is light
let darkMode = false;

toggleBtn.addEventListener("click", () => {
  darkMode = !darkMode;

  if (darkMode) {
    body.classList.add("dark-mode");
    toggleBtn.textContent = "Switch to Light Mode";
  } else {
    body.classList.remove("dark-mode");
    toggleBtn.textContent = "Switch to Dark Mode";
  }
});
