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
        
        this.movements = {
			up: false,
            down: false,
		};

        this.gravity = 0.5;
        

    }
    
    draw() {

		if (this.isReady) {
			this.ctx.drawImage(
				this.img,
				this.x,
				this.y,
				this.width ,
				this.height
			);
		}
	}

	move() {
		this.y += this.ySpeed;
		this.ySpeed += this.gravity;

        if (this.movements.up) {
			this.y = this.ySpeed; // no consigo que no inicie en el top del canvas
		} else if (this.movements.down) {
			this.y = this.ySpeed;
		}
	}

    onKeyEvent(event) {
        
		const statusDow = event.type === "keydown";

        if (event.keyCode === 32) {
			this.movements.up = statusDow;
            game.flappy.ySpeed = -0.5;
            game.flappy.gravity = 1;
}
}
}