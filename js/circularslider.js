let canvas = document.getElementById('mycanvas');
let angle = 0;

// making sure that canvas is connected to HTML
if (canvas.getContext) {
  let ctx = canvas.getContext('2d');

  // prepairing draw function and parameters
  function drawbase() {
    for (let i = 0; i < 5; i++) {
      //setting parameters for circle
      let centerx = canvas.width / 2;
      let centery = canvas.height / 2;
      let offset = 1.5 * Math.PI;
      let radius = 50 * (i + 1);

      //draw base circle stlyes
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

  function drawSlider() {
    for (let i = 0; i < 5; i++) {
      let canvas = document.getElementById('mycanvas');
      let ctx = canvas.getContext('2d');
      let offsetY = 50 * (i + 1);
      let centerx = canvas.width / 2;
      let centery = canvas.height / 2 - offsetY;

      ctx.beginPath();
      ctx.globalAlpha = 1;
      ctx.arc(centerx, centery, 20, -0.5 * Math.PI, 2 * Math.PI, false);
      ctx.fillStyle = '#8f9399';
      ctx.fill();
      ctx.setLineDash([0, 0]);
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'grey';
      ctx.stroke();
      ctx.closePath();

    }
    console.log("Slider working!")
  }

  drawbase();
  drawSlider();

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
      radius: 250,
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
      radius: 250,
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
      color: '#ff9900',
      max: 3000,
      min: 0,
      step: 1,
      startValue: 150,
      description: 'healhtcare',
      radius: 50,
      part: -0.5 * Math.PI
    },
  ]


}
