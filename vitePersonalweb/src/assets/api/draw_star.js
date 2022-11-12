//setup the background color into black
var canvas = null;
var ctx = null;
var canvasData = null;

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  canvasData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  // ctx.fillStyle = "black";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);
  draw_dots();
}

function draw_dots() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  var dot_numbers = 80;
  //70% are white dots
  for (var i = 0; i < dot_numbers; i++) {
    drawPixel(get_randome_dot(), get_randome_dot(), 245, 245, 245, 0.9);
  }
}

function get_randome_dot() {
  var heiwidmax = 0.8;
  var rand = Math.floor(Math.random() * 100) * heiwidmax;
  return rand;
}

function drawPixel(x, y, r, g, b, a) {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  ctx.fillRect(x,y,1,1);
}

export { init, draw_dots };
