var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

function random(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function lineToCenter(positionX, positionY, color) {
  context.beginPath();
  context.moveTo(positionX, positionY);
  context.lineTo(canvas.width / 2, canvas.height / 2);
  context.strokeStyle = color;
  context.stroke();
}

for (var i = 0; i < 1000; i++) {
  lineToCenter(random(canvas.width, 0), random(canvas.height, 0), 'teal')
}