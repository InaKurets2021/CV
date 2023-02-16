const themeChangeBtn = document.querySelector(".settings__theme-btn");
const lightThemeIcon = document.querySelector("#lightTheme");
const darkThemeIcon = document.querySelector("#darkTheme");

function changeTheme() {
  const themeLocalStorage = localStorage.getItem("theme") === "true";
  localStorage.setItem("theme", !themeLocalStorage);
  document.body.classList.toggle("dark", !themeLocalStorage);
  changeText();
}
function changeText() {
  const themeLocalStorage = localStorage.getItem("theme") === "true";
  if (themeLocalStorage) {
    lightThemeIcon.style.display = "block";
    darkThemeIcon.style.display = "none";
  } else {
    lightThemeIcon.style.display = "none";
    darkThemeIcon.style.display = "block";
  }
}
function onLoadTheme() {
  changeText();
  document.body.classList.toggle(
    "dark",
    localStorage.getItem("theme") === "true"
  );
}

document.addEventListener("DOMContentLoaded", onLoadTheme);
themeChangeBtn.addEventListener("click", changeTheme);
