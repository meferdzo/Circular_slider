const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
let angle = 0;
let sliders


// function for drawing sliders
function drawsliders(circles) {
    for (let i = 0; i < circles.length; i++) {
      let offsetY = circles[i].radius;
      let x = canvas.width / 2;
      let y = canvas.height / 2 - offsetY;
      let radius = 20;

      ctx.beginPath();
      ctx.globalAlpha = 1;
      ctx.arc(x, y, radius, -0.5 * Math.PI, 2 * Math.PI, false);
      ctx.fillStyle = '#8f9399';
      ctx.fill();
      ctx.setLineDash([0, 0]);
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'grey';
      ctx.stroke();
      ctx.closePath();
    }

    this.update = function(){
      if(mouseX - x < 25){
        ctx.strokeStyle = 'red';
      }
    }
}

// prepairing draw function and parameters
function drawbase(circles) {
  for (let i = 0; i < circles.length; i++) {
    //setting parameters for circle
    let centerx = canvas.width / 2;
    let centery = canvas.height / 2;
    let offset = 1.5 * Math.PI;
    let radius = circles[i].radius;

    //draw base circle stlyes
    ctx.beginPath();
    ctx.arc(centerx, centery, radius, 1.5 * Math.PI, 3.5 * Math.PI, false);
    ctx.lineWidth = 35;
    ctx.setLineDash([12, 1]);
    ctx.lineDashOffset = 1;
    ctx.strokeStyle = "#a9a9a9";
    ctx.stroke();
    ctx.closePath();
  }
}

function drawColoredCircles(circles) {
  for (let i = 0; i < circles.length; i++) {
    //setting parameters for circle
    let centerx = canvas.width / 2;
    let centery = canvas.height / 2;
    let offset = 1.5 * Math.PI;
    let radius = circles[i].radius;

    //draw base circle stlyes
    ctx.beginPath();
    ctx.arc(centerx, centery, radius, 1.5 * Math.PI, 3.5 * Math.PI, false);
    ctx.lineWidth = 35;
    ctx.setLineDash([12, 1]);
    ctx.lineDashOffset = 1;
    ctx.strokeStyle = circles[i].color;
    ctx.stroke();
    ctx.closePath();
  }
}

// object options
let options = [{
    container: 'slider',
    color: '#51A5C3',
    max: 3000,
    min: 0,
    step: 1,
    startValue: 250,
    description: 'transportation',
    radius: 250,
    part: -0.5 * Math.PI
  },
  {
    container: 'slider',
    color: '#224160',
    max: 3000,
    min: 0,
    step: 1,
    startValue: 200,
    description: 'food',
    radius: 200,
    part: -0.5 * Math.PI
  },
  {
    container: 'slider',
    color: '#ab3636',
    max: 3000,
    min: 0,
    step: 1,
    startValue: 150,
    description: 'insurance',
    radius: 150,
    part: -0.5 * Math.PI
  },
  {
    container: 'slider',
    color: '#ff9900',
    max: 3000,
    min: 0,
    step: 1,
    startValue: 150,
    description: 'entertainment',
    radius: 100,
    part: -0.5 * Math.PI
  },
  {
    container: 'slider',
    color: '#783868',
    max: 3000,
    min: 0,
    step: 1,
    startValue: 150,
    description: 'healhtcare',
    radius: 50,
    part: -0.5 * Math.PI
  },
];


// event listeners
let mouseX = undefined;
let mouseY = undefined;


canvas.addEventListener('mousedown', function(event) {
  let rect = canvas.getBoundingClientRect();
  mouseX = Math.ceil(event.clientX - rect.left);
  mouseY = Math.ceil(event.clientY - rect.top);
  console.log("x: " + mouseX + " y: " + mouseY);
  return mouseX;
});


function update() {
  if(mouseX - radius < 25){

  }
}



drawbase(options);

drawColoredCircles(options);
drawsliders(options);
