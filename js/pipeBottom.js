class Pipebottom {
    constructor(ctx, x, y) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.width = 80;
		this.height = this.ctx.canvas.height;
		this.img = new Image();
		this.img.src = "./images/obstacle_bottom.png";
		this.isReady = false;
		this.img.onload = () => {
			this.isReady = true;
		this.vx = 0  
		this.directions = {
			right: false,
		};
}
		this.tick = 0
    }
	draw (){
		if (this.isReady) {
            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
            this.tick ++;
		}
			
	}

	move() {
		this.x += this.vx;
		if (this.directions.right) {
			this.speed = 1
		} 
	}
}