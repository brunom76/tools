let game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.CANVAS, 'game');

document.getElementById('game').style.position = 'relative';

window.addEventListener('resize', () => {

  game.scale.setGameSize(window.innerWidth, window.innerHeight);
  
});

let socket = io();
let global = {};

game.state.add('Game', gameState);

game.state.start('Game');
