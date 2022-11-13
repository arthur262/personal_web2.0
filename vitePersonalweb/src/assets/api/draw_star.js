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
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, window.innerHeight);
  draw_dots();
}

function draw_dots() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  var dot_numbers = 200;
  //70% are white dots
  for (var i = 0; i < dot_numbers*0.7; i++) {
    drawPixel(get_randome_dot(), get_randome_dot(), 245, 245, 245, 0.8);
  }
  for (var i = 0; i < dot_numbers*0.2; i++) {
    drawPixel(get_randome_dot(), get_randome_dot(), 147,112,219, 0.4);
  }
}

function get_randome_dot() {
  var rand = Math.floor(Math.random() * 90) ;
  return rand;
}

function drawPixel(x, y, r, g, b, a) {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  var x_begin = (x * canvas.width) / 100;
  var y_begin = (y * canvas.height) / 100;

  //start to draw the shadow of the stars
  ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.fillRect(x_begin+i, y_begin+j, 1, 1);
      
    }
  }
}

export { init, draw_dots };
