const theme = document.getElementById('themeSwitch');
const { body } = document;

theme.addEventListener("change", e => {
  e.preventDefault;
  body.classList.toggle('dark-theme');
})