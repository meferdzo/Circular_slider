var canvas = document.getElementById('mycanvas');
var angle = 0;


var ctx = canvas.getContext('2d');

// making sure that canvas is connected to HTML
if(canvas.getContext){
    var ctx = canvas.getContext('2d');

    // prepairing draw function and parameters
    function drawbase(){
      for(var i = 0; i < 5; i++){
      //setting parameters for circle
      var centerx = canvas.width / 2;
      var centery = canvas.height/ 2;
      var offset = 1.5 * Math.PI;
      var radius = 50 * (i + 1);

      //draw circle stlyes
      ctx.beginPath();
      ctx.arc(centerx, centery, radius, 1.5 * Math.PI, 3.5 * Math.PI, false);
      ctx.lineWidth = 35;
      ctx.setLineDash([12, 1]);
      ctx.lineDashOffset = 1;
      ctx.strokeStyle = '#bcbcbc';
      ctx.stroke();
      ctx.closePath();
      }
    }
    drawbase();

}

console.log(canvas);
