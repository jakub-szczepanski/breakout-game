var canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.rect(40, 40, 50, 50);
ctx.fillStyle = "#000099";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(300, 200, 40, 0, Math.PI*2, false);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(200, 40, 100, 40);
ctx.strokeStyle = "rgba(0, 0, 255, .5)";
ctx.stroke();
ctx.closePath();