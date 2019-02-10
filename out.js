var canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    x = canvas.width/2;
    y = canvas.height-30;
    dx = 2;
    dy = -2;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}
setInterval(draw, 10);