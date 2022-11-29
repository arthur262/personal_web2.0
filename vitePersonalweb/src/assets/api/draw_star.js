//setup the background color into black
var canvas = null;
var ctx = null;
var canvasData = null;

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  

  canvas.width = window.innerWidth-8;
  canvas.height = window.innerHeight-8;
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.innerHeight);
  draw_dots();
}

function draw_dots() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  var dot_numbers = 200;
  setup_star(dot_numbers);
  ctx.save();
  ctx.rotate(30 * Math.PI / 180);
  setTimeout(()=>{
    ctx.restore();
    ctx.beginPath();
    
    ctx.closePath();
  },1000)
  
  
}

function setup_star(dot_numbers){
  //70% are white dots
  for (var i = 0; i < dot_numbers*0.1; i++) {
    drawStar(get_randome_dot(),get_randome_dot(),4,4,1,245, 245, 245, 1);
  }
  for (var i = 0; i < dot_numbers*0.1; i++) {
    drawPixel(get_randome_dot(), get_randome_dot(), 245, 245, 245, 1);
  }
  for (var i = 0; i < dot_numbers*0.4; i++) {
    drawPixel(get_randome_dot(), get_randome_dot(), 245, 245, 245, 0.3);
  }
  for (var i = 0; i < dot_numbers*0.2; i++) {
    drawPixel(get_randome_dot(), get_randome_dot(), 245, 245, 245, 0.7);
  }
  for (var i = 0; i < dot_numbers*0.2; i++) {
    drawPixel(get_randome_dot(), get_randome_dot(), 147,112,219, 0.4);
  }
}
function get_randome_dot() {
  var rand = Math.floor(Math.random() * 100) ;
  return rand;
}
//function to draw normal star
function drawPixel(x, y, r, g, b, a) {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  var x_begin = (x * canvas.width) / 100;
  var y_begin = (y * canvas.height) / 100;

  //start to draw the shadow of the stars
  ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if(j!==2&&i!==2){
      ctx.fillRect(x_begin+i, y_begin+j, 1, 1);
      }
      
    }
  }
  ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a+0.2 + ")";
  ctx.fillRect(x_begin+2, y_begin+2, 1, 1);
}
//function to draw light star
function drawStar(cxo,cyo,spikes,outerRadius,innerRadius,r, g, b, a){
  var rot=Math.PI/2*3;
  let cx=cxo * (canvas.width/100);
  let cy=cyo * (canvas.height/100);
  var x=cx;
  var y=cy;
  var step=Math.PI/spikes;
  ctx.beginPath();
  ctx.moveTo(cx,cy-outerRadius)
  for(let i=0;i<spikes;i++){
    x=cx+Math.cos(rot)*outerRadius;
    y=cy+Math.sin(rot)*outerRadius;
    ctx.lineTo(x,y)
    rot+=step
    x=cx+Math.cos(rot)*innerRadius;
    y=cy+Math.sin(rot)*innerRadius;
    ctx.lineTo(x,y)
    rot+=step
  }
  ctx.lineTo(cx,cy-outerRadius);
  ctx.closePath();
  ctx.lineWidth=1;
  ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
  ctx.fill();
}



export { init, draw_dots };
