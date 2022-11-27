const game = new Game("my-canvas")
const startBtn = document.getElementById('start-button')
startBtn.addEventListener('click', () => {
	game.start();
})

document.addEventListener('keydown', (event) => {
	game.flappy.onKeyEvent(event);
  game.flappy.gravity = 0.1;
});
