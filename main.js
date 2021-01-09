const canvas = document.getElementById('canvas1')
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gameSpeed = 2;

const gradient = ctx.createLinearGradient(0,0,0,70);
gradient.addColorStop('0.4','#fff');
gradient.addColorStop('0.5', '#a9a9a9');
gradient.addColorStop('0.4','#e1e1e1');
gradient.addColorStop('0.5', '#727272');


function animate() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    handleObstacles();
    handleParticles();
    bird.update();
    bird.draw();
    ctx.font = '25px Georgia';
    ctx.fillStyle = gradient;
    ctx.strokeText('score: '+ score, 10, 10);
    ctx.fillText(score,10, 20);

    handleCollisions();
if (handleCollisions()) return;
    requestAnimationFrame(animate);
    angle+=0.12;
    hue++;
    frame++;
}
animate();

window.addEventListener('keydown', function (e){
    if (e.code === 'Space') spacePressed =true;
});
window.addEventListener('keyup', function (e){
    if (e.code === 'Space') spacePressed =false;
});

const bang = new Image();
bang.src = 'bang.png';

function  handleCollisions(){
  for ( let i = 0; i < obstaclesArray.length; i++){

      if (bird.x < obstaclesArray[i].x + obstaclesArray[i].width &&
          bird.x + bird.width > obstaclesArray[i].x &&
          (( bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) ||
          (bird.y > canvas.height - obstaclesArray[i].bottom &&
          bird.y + bird.height < canvas.height ))) {
          ctx.drawImage(bang, bird.x, bird.y, 50, 50);
          ctx.font = '25px Georgia';
          ctx.fillStyle = 'black';
          ctx.fillText('Game Over your score is '+ score, 160, canvas.height/2 -10)
          return true;
      }
    }
}
