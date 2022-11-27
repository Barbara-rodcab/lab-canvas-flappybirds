class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d"); 
        this.wi = this.ctx.canvas.width; 
        this.he = this.ctx.canvas.height;

        this.flappy = new Flappy (this.ctx, 100 , 100);
        this.bg = new Background(this.ctx);
        this.intervalId = null;
        this.tick = 0;    
		
}

start() {
    this.intervalId = setInterval(() => {
        this.clear();
        this.move();
        this.draw ();
        
    } , 1000/60 )
}

draw (){
    this.bg.draw();
    console.log ("entro")
    this.flappy.draw();
    this.tick++;
}

move() {
    this.bg.move();
    this.flappy.move();
}

clear() {
    this.ctx.clearRect(0, 0, this.wi, this.he);
}

}