function language_selector() {
  let path = window.location.pathname;
  let temp = path.substr(path.length - 2, path.length);
  if (!localStorage.language) {
    localStorage.language = temp;
  } else {
    if (localStorage.language != temp) {
      localStorage.language = temp;
    }
  }
}
export { language_selector };
