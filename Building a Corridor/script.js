// BUILDING A CORRIDORS

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let ballX = canvas.width / 5;
let ballY = canvas.height / 10;
let ballRadius =5;
let ballSpeedX = 5;
let ballSpeedY = -9;
let paddleHeight = 75;
let paddleWidth = 10;
let player1Score = 0;
let player2Score = 0;
let player1Y = (canvas.height - paddleHeight) / 2;
let player2Y = (canvas.height - paddleHeight) / 2;
let keysDown = {};

function gameLoop() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballX - ballRadius < paddleWidth) {
    if (ballY > player1Y && ballY < player1 + paddleHeight) {
      ballSpeedX = -ballSpeedX;
    } else {
      player2Score++;
      resetBall();
    }
  } else if (ballX + ballRadius > canvas.width - paddleWidth) {
    if (ballY > player2Y && ballY < player2 + paddleHeight) {
      ballSpeedX = -ballSpeedX;
    } else {
      player1Score++;
      resetBall();
    }
  }


   ctx.beginPath();
   ctx.arc(ballY, ballY, ballRadius, -25, Math.PI * .75);
   ctx.arc(ballX, ballX, ballRadius, -25, Math.PI * .75);
   ctx.fillStyle = 'green';
   ctx.fill();
   ctx.closePath();

   ctx.beginPath();
   ctx.arc(ballY, ballY, ballRadius, -25, Math.PI * .95);
   ctx.arc(ballY, ballY, ballRadius, -25, Math.PI * .95);
   ctx.fillStyle = 'red';
   ctx.fill();
   ctx.closePath();

   ctx.beginPath();
   ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * .75);
   ctx.arc(ballY, ballY, ballRadius, 0, Math.PI * .75);
   ctx.fillStyle = 'green';
   ctx.fill();
   ctx.closePath();

   ctx.beginPath();
   ctx.arc(ballX, ballY, ballRadius, 3, Math.PI * .95);
   ctx.arc(ballX, ballX, ballRadius, 3, Math.PI * .95);
   ctx.fillStyle = 'green';
   ctx.fill();
   ctx.closePath();

   ctx.beginPath();
   ctx.arc(ballX, ballY, ballRadius, 1, Math.PI * .75);
   ctx.arc(ballX, ballX, ballRadius, 1, Math.PI * .75);
   ctx.fillStyle = 'red';
   ctx.fill();
   ctx.closePath();

   ctx.beginPath();
   ctx.arc(ballX, ballY, ballRadius, 3, Math.PI * .95);
   ctx.arc(ballX, ballX, ballRadius, 3, Math.PI * .95);
   ctx.fillStyle = 'green';
   ctx.fill();
   ctx.closePath();

   ctx.beginPath();
   ctx.arc(ballX, ballX, ballRadius, 1, Math.PI * .75);
   ctx.arc(ballY, ballX, ballRadius, 1, Math.PI * .75);
   ctx.fillStyle = 'red';
   ctx.fill();
   ctx.closePath(); 

   ctx.beginPath();
   ctx.arc(ballY, ballX, ballRadius, 1, Math.PI * .95);
   ctx.arc(ballY, ballY, ballRadius, 1, Math.PI + .75);
   ctx.fillStyle = 'green';
   ctx.fill();
   ctx.closePath(); 
 
   requestAnimationFrame(gameLoop);
 }
 
 function resetBall() {
   ballX = canvas.width / 10;
   ballY = canvas.height / 2;
   ballSpeedX = -ballSpeedX;
   ballSpeedY = -ballSpeedY;
 }
 
 requestAnimationFrame(gameLoop);
 