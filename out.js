var canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext('2d');
    x = canvas.width/2;
    y = canvas.height-30;
    dx = 2;
    dy = -2;
    ballRadius = 20;
    paddleHeight = 20;
    paddleWidth = 150;
    paddleX = (canvas.width-paddleWidth) / 2;
    rightPressed = false;
    leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

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
    drawPaddle();

    x += dx;
    y += dy;

    if (y + dy < ballRadius) {
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
        alert("GAME OVER");
        document.location.reload();
        clearInterval(interval);
    }

    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 10;
    } else if (leftPressed && paddleX > 0) {
        paddleX -= 10;
    }
}
var interval = setInterval(draw, 10);