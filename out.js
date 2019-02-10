var canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    x = canvas.width/2;
    y = canvas.height-30;
    dx = 0;
    dy = -2;
    ballRadius = 20;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;

    if (y + dy > canvas.height || y + dy < 0) {
        dy = -dy;
    }
}
setInterval(draw, 10);