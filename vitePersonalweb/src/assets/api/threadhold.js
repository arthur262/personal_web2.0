function threadhold(callback, delay) {
  var timber = 0;
  return function () {
    clearTimeout(timber);
    timber = setTimeout(function () {
      callback();
    }, delay);
  };
}
