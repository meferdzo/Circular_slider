console.log("Connected!");


function polarToCartesian(centerX, centerY, radius, angleInDegrees){
  let angleRadians = (angleInDegrees - 90) * Math.PI / 180.0;

  return{
    x: centerX + (radius * Math.cos(angleRadians)),
    y: centerY + (radius * Math.sin(angleRadians))
  };
}

function makeArc(x, y, radius, startAngle, endAngle){
  let start = polarToCartesian(x, y, radius, endAngle);
  let end = polarToCartesian(x, y, radius, startAngle);
  let arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

  return d = [
    "M", start.x, start.y,
    "A", radius, radius, 0, arcSweep, 0 , end.x, end.y,
    //"L", x, y, "Z"
  ].join(" ");
}



//draw arc paths
document.getElementById('arcpath1')
  .setAttribute("d", makeArc(250, 250, 120, 0, 359));



//draw arc
document.getElementById('arc1')
  .setAttribute("d", makeArc(250, 250, 120, 0, 110));
