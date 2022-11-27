class Flappy {
    constructor (ctx , x, y, width, height) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = 50;
		this.height = 50;

		this.img = new Image();
		this.img.src = "./images/flappy.png";
        this.isReady = false;
		this.img.onload = () => {
			this.isReady = true;
            this.ratio = this.img.width / this.img.height;
		};

        this.gravity = 0.3;
        this.ySpeed = 0;

    }
    
    draw() {

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