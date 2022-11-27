class Flappy {
    constructor (ctx , x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = 50;
		this.height = 50;
		this.ySpeed = 0;
		this.img = new Image();
		this.img.src = "./images/flappy.png";
        this.isReady = false;
		this.img.onload = () => {
			this.isReady = true;
		};

        this.gravity = 0.3;

    }
    draw() {
        console.log("eentro")
		if (this.imgReady) {
			this.ctx.drawImage(
				this.img,
				this.x,
				this.y,
				this.width * this.ratio,
				this.height
			);
		}
	}

	move() {
		this.y += this.ySpeed;
		this.ySpeed += this.gravity;
	}


}