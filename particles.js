const particlesArray = [];

class Particle {
    constructor() {
        this.x = bird.x;
        this.y = bird.y + 20;
        this.size = Math.random() * 7 + 3;
        this.speedY = (Math.random()) - 1;
        this.color = `hsla(${hue}, 100%, 50%, 0.5)`;
    }

    update() {
        this.x -= gameSpeed;
        this.y += this.speedY;
    }

    draw() {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x , this.y, this.size, 0, Math.PI * 3);
        context.fill();
    }
}

function handleParticles() {
 particlesArray.unshift(new Particle);
 for (i = 0; i < particlesArray.length; i++){
     particlesArray[i].update();
     particlesArray[i].draw();
 }
 // if more than 200, remove 20
    if (particlesArray.length > 200){
        for (let i= 0; i < 20; i++){
            particlesArray.pop(particlesArray[i]);
        }
    }
}


