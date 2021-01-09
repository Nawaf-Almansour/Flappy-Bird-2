const obstaclesArray = []

class Obstacles {
    constructor() {
        this.top = Math.random() * (canvas.height / 2.1 - canvas.height / 4) + canvas.height / 4;
        this.bottom = Math.random() * (canvas.height / 2 - canvas.height / 4) + canvas.height / 4;
        this.x = canvas.width;
        this.width = 38;
        this.color = `hsla(${hue}, 90%, 40%, 1)`;
        this.conuted = false;

    }

    update() {
        this.x -= gameSpeed;
        if (!this.conuted && this.x < bird.x) {
            score++;
            this.conuted = true;
        }
        this.draw();
    }

    draw() {
        context.fillStyle = this.color;
        context.fillRect(this.x, 0, this.width, this.top);
        context.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    }
}

function handleObstacles() {
    if (frame % 150 === 0) {
        obstaclesArray.unshift(new Obstacles);
    }
    for (i = 0; i < obstaclesArray.length; i++) {
        obstaclesArray[i].update();

    }
    if (obstaclesArray.length > 20) {
        obstaclesArray.pop(obstaclesArray[0])
    }
}
