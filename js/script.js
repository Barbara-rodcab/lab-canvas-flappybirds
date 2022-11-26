const game = new Game("my-canvas")
const startBtn = document.getElementById('start-button')
startBtn.addEventListener('click', () => {
	game.start();
})
