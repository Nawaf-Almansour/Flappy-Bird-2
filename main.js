const canvas = document.getElementById('canvas1')
const context = canvas.getContext('2d');
// canvas.width = 600;
// canvas.height = 400;
canvas.width = canvasSizeWidth = pipeX = window.innerWidth - 90;
canvas.height = canvasSizeHeight = window.innerHeight - 90;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let bestScore = localStorage.getItem('bestScore');
let gameSpeed = 2;

const gradient = context.createLinearGradient(0, 0, 0, 70);
gradient.addColorStop('0.4', '#fff');
gradient.addColorStop('0.33', '#001e5d');
gradient.addColorStop('0.8', '#2d89e8');
gradient.addColorStop('0.5', '#00c6f7');
gradient.addColorStop('0.7', '#fff');


function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    handleObstacles();
    handleParticles();
    bird.update();
    bird.draw();
    context.font = '25px Georgia';
    context.fillStyle = gradient;
    context.strokeText('score: ' + score, 18, 38);
    context.fillText('score: ' + score, 20, 40);
    bestScore = bestScore < score ? score : bestScore;
    window.localStorage.setItem('bestScore', bestScore)
    context.fillText(`Best score: ${bestScore}`, 20, 80);
    handleCollisions();
    if (handleCollisions()) return;
    requestAnimationFrame(animate);
    angle += 0.12;
    hue++;
    frame++;
}

animate();
window.addEventListener('keydown', function (e) {
    if (e.code === 'Space') spacePressed = true;
});
window.addEventListener('keyup', function (e) {
    if (e.code === 'Space') spacePressed = false;
});
canvas.addEventListener("click", function () {
    bird.onClickFlap();
    console.log('hey')
});
const bang = new Image();
bang.src = 'bird-2.png';

function handleCollisions() {
    for (let i = 0; i < obstaclesArray.length; i++) {

        if (bird.x < obstaclesArray[i].x + obstaclesArray[i].width &&
            bird.x + bird.width > obstaclesArray[i].x &&
            ((bird.y < 0 + obstaclesArray[i].top && bird.y + bird.height > 0) ||
                (bird.y > canvas.height - obstaclesArray[i].bottom &&
                    bird.y + bird.height < canvas.height))) {
            context.drawImage(bang, bird.x - 10, bird.y - 10, 60, 60);
            context.font = '25px Georgia';
            context.fillStyle = '#eee';
            context.fillText('Game Over your score is ' + score, canvas.width / 2 - 150, canvas.height / 2 - 10)
            document.getElementById('startBtn').style.display = "block";

            return true;
        }
    }


}


function onClickPlay() {
    location.reload();

}
