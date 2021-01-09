class Bird {
    constructor() {
        this.x = 150;
        this.y = 200;
        this.vy = 0;
        this.width = 33;
        this.height = 33;
        this.weight = 1;
        this.birdSize =  50;

    }
    update() {
        let curve = Math.sin(angle) * 20;
        if (this.y > canvas.height - (this.height * 3) + curve) {
            this.y = canvas.height - (this.height * 3) + curve;
            this.vy = 0;
        } else {
            this.vy += this.weight;
            this.vy *= 0.9;
            this.y += this.vy;
        }
        if (this.y <  this.height){
            this.y =  this.height;
            this.vy = 0;
        }
        if (spacePressed && this.y > this.height * 3) this.flap();
    }

    draw(){
        const bird = new Image();
        bird.src = 'bird.png';
        context.drawImage(bird, this.x, this.y, this.birdSize, this.birdSize);

        // context.fillStyle = 'red';
        // context.fillRect(this.x, this.y, this.width, this.height);
    }
    flap(){
        this.vy -= 2;
    }
}
const bird = new Bird();
