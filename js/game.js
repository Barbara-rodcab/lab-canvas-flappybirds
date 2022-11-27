class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d"); 
        this.wi = this.ctx.canvas.width; 
        this.he = this.ctx.canvas.height;

        this.flappy = new Flappy (this.ctx, 100 , 100);
        this.pipeBottom = new Pipebottom (this.ctx, 0, 0);
        this.pipeUp = new Pipeup (this.ctx, 0, 0);
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
    this.flappy.draw();
    this.pipeBottom.draw();
    this.pipeUp.draw();
   

    this.tick++;
}

move() {
    this.bg.move();
    this.flappy.move();
    this.pipeBottom.move();
    this.pipeUp.move();
    
    
}

clear() {
    this.ctx.clearRect(0, 0, this.wi, this.he);
}


/*addObstacle() {
    const randomWidth = Math.random() * 100 + 50;
    const randomX = Math.random() * (this.canvas.width - randomWidth);
    const pipeBottom = new Pipebottom (this.ctx, randomX, - this.flappy.height, randomWidth);
    this.pipeBottom.push(pipeBottom);
    console.log(this.pipeBottom);
}
}*/

}