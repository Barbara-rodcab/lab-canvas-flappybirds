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
        this.bottomArr= [];
        this.upArr = [];
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
    console.log ("down")
    this.bottomArr.forEach((pipeBottom) => { //aañadido y ya no me pinta el pipe
        pipeBottom.draw();
    });
    this.upArr.forEach((pipeUp) => {  //aañadido y ya no me pinta el pipe
        pipeUp.draw();
    });

    
    this.tick++;

    if (this.tick % 90 === 0) {
        this.addPipes();
    }

    }

move() {
    this.bg.move();
    this.flappy.move();
    this.bottomArr.forEach((pipeBottom) => { //aañadido y ya no me pinta el pipe
        pipeBottom.move();
    });
    this.upArr.forEach((pipeUp) => {  //aañadido y ya no me pinta el pipe
        pipeUp.move();
    });
    
    
}

clear() {
    this.ctx.clearRect(0, 0, this.wi, this.he);
}

addPipes() {
    const minSpace = this.flappy.height * 2;

    const randomPipe = Math.floor(Math.random() * (-minSpace + this.ctx.canvas.height) - this.ctx.canvas.height)

    const downPipe = new Pipebottom (this.ctx, this.ctx.canvas.width, randomPipe);
    const upPipe = new Pipeup (this.ctx, this.ctx.canvas.width, randomPipe);
    
    const upY = randomPipe + upPipe.height + minSpace;
    const  uppPipe = new Pipeup (this.ctx, this.ctx.canvas.width, upY);

    const bottomY = randomPipe + downPipe.height + minSpace;
    const bottomPipe = new Pipebottom (this.ctx, this.ctx.canvas.width, bottomY);

    this.upArr.push(uppPipe);
    this.bottomArr.push(bottomPipe);
}

}
/*addObstacle() {
    const randomWidth = Math.random() * 100 + 50;
    const randomX = Math.random() * (this.canvas.width - randomWidth);
    const pipeBottom = new Pipebottom (this.ctx, randomX, - this.flappy.height, randomWidth);
    this.pipeBottom.push(pipeBottom);
    console.log(this.pipeBottom);
}
}*/
