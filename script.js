const themeToggle = document.querySelector("body");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme() {
  themeToggle.setAttribute(
    "data-bs-theme",
    prefersDark.matches ? "dark" : "light",
  );
}

prefersDark.addEventListener("change", applyTheme);
applyTheme();
