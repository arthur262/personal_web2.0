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
  function drawLightStar(x, y, r, g, b, a){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    var x_begin = (x * canvas.width) / 100;
    var y_begin = (y * canvas.height) / 100;
  
    ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + a + ")";
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        ctx.fillRect(x_begin+i, y_begin+j, 1, 1);
        
      }
    }
  
  }
  
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
  export {drawPixel, drawLightStar, drawStar };