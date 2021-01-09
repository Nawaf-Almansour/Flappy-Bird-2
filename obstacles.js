const obstaclesArray = []

class Obstacles {
    constructor() {
        this.top = (Math.random() * canvas.height/3) +20;
        this.bottom = (Math.random() * canvas.height/3 ) +20;
        this.x = canvas.width;
        this.width = 20;
        // this.color = 'blue';
        this.color = `hsla(${hue}, 90%, 40%, 1)`;

    }
    update() {
        this.x -= gameSpeed;
        this.draw();
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 0, this.width, this.top);
        ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
    }
}

function handleObstacles() {
    if (frame%50 === 0){
        obstaclesArray.unshift(new Obstacles);
    }
    for (i = 0; i < obstaclesArray.length; i++){
        obstaclesArray[i].update();

    }
    if (obstaclesArray.length > 20){
        obstaclesArray.pop(obstaclesArray[0])
    }
}
