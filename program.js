// Game variables
var game = null; 
var player1 = null;
var player2 = null;
var level = null;
var hud = null;
var pad1 = null;
var pad2 = null;
var controllers = null;

// Character list
var characters = {
    eric: "Eric",
    adam: "Adam",
};

// Setup game
game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');
game.global = {
    SCORE: 0,
    SPEED: 350,
    JUMP: 900
}

// Stretch to fill
//game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

// Keep original size
// game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;

// Maintain aspect ratio
//game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

game.state.add('menu', MenuState);
game.state.add('game', GameState);

game.state.start('menu');