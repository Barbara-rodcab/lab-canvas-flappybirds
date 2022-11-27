class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d"); 
        this.wi = this.ctx.canvas.width; 
        this.he = this.ctx.canvas.height;
        this.intervalId = null;
        this.flappy = new Flappy (this.ctx, 100 , 100);
        this.bg = new Background(this.ctx);
        
		
}

start() {
    this.intervalId = setInterval(() => {
        this.clear();
        this.draw ();
        this.move();
    } , 1000/60 )
}

draw (){
    this.bg.draw();
    this.flappy.draw();
}

move() {
    this.bg.move();
    this.flappy.move();
}

clear() {
    this.ctx.clearRect(0, 0, this.wi, this.he);
}

}