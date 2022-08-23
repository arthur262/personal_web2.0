function changeLight() {
  document.documentElement.setAttribute("theme", "light");
  localStorage.setItem("theme", JSON.stringify("light"));
}
function changeDark() {
  document.documentElement.setAttribute("theme", "dark");
  localStorage.setItem("theme", JSON.stringify("dark"));
}

export { changeLight, changeDark };
