function changeLight() {
  document.documentElement.setAttribute("theme", "light");
  localStorage.theme = JSON.stringify("light");
}
function changeDark() {
  document.documentElement.setAttribute("theme", "dark");
  localStorage.theme = JSON.stringify("dark");
}

export { changeLight, changeDark };
