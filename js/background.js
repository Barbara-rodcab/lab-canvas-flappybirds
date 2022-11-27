class Background {
	constructor(ctx) {
		this.ctx = ctx;
		this.x = 0;
		this.y = 0;
        this.wi = this.ctx.canvas.width;
        this.he = this.ctx.canvas.height;

		this.img = new Image();
		this.img.src = "./images/bg.png"
		this.isReady = false;
		this.img.onload = () => {
			this.isReady = true;
		};

        this.speed = 0.5
	}

	draw() {
		if (this.isReady) {
			this.ctx.drawImage(this.img, this.x, this.y, this.wi, this.he);
            this.ctx.drawImage(this.img, this.x + this.wi, this.y, this.wi, this.he);
		}
	}

    move (){
        this.x -= this.speed;// negativa porque el speed es +
		if (this.x + this.wi <= 0 ) {
			this.x = 0;
		}
    }
}

