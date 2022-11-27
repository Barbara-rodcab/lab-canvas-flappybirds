class Pipeup {
    constructor(ctx, y) {
		this.ctx = ctx;
		this.x = 100;
		this.y = y;
		this.width = 55;
		this.img = new Image();
		this.img.src = "./images/obstacle_top.png";
		this.isReady = false;
		this.img.onload = () => {
            this.height = this.width * this.img.height / this.img.width;
			this.isReady = true;
		this.vx = 2  
		this.directions = {
			right: false,
		};
}
    }
	draw (){
		if (this.isReady) {
            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		}
			
	}

	move() {

		this.x += this.vx;
		if (this.directions.right) {
			this.speed = 1
		} 
	}
}