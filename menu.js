var MenuState = function() {
    
};

MenuState.prototype = {
    preload: function() {
        controllers = new Controllers();
        controllers.preload();
    },
    
    create: function() {
        this.readyFullScreen();
        
        controllers.create();
        
        var title = game.add.text(game.world.centerX, game.world.centerY-35,
                                       'GAME TITLE',
                                       { font: '45px Arial', fill: '#ffffff'});
        title.anchor.setTo(0.5, 0.5);
        
        var pressStart = game.add.text(game.world.centerX, game.world.centerY+35,
                                       'Press Down',
                                       { font: '25px Arial', fill: '#ffffff'});
        pressStart.anchor.setTo(0.5, 0.5);
        var startTween = game.add.tween(pressStart);
        startTween.to({alpha: 0}, 400);
        startTween.to({alpha: 1.0}, 800);
        startTween.loop();
        startTween.start();
        
        var upKey = game.input.keyboard.addKey(Phaser.Keyboard.UP);
        upKey.onDown.addOnce(this.fullScreenMode, this);
        
    },
    
    update: function() {

        // Start game
        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
           this.start();
        }
        if (pad1.justPressed(Phaser.Gamepad.XBOX360_START)) {
            this.start();
        }
        if (pad2.justPressed(Phaser.Gamepad.XBOX360_START)) {
            this.start();
        }
        // Full screen mode
        if (pad1.justPressed(Phaser.Gamepad.XBOX360_SELECT)) {
            this.fullScreenMode();
        }
        if (pad2.justPressed(Phaser.Gamepad.XBOX360_SELECT)) {
            this.fullScreenMode();
        }
        
        controllers.update();
    },
    
    start: function() {
        game.state.start('game');    
    },
    
    readyFullScreen: function() {
        // Stretch to fill
        //game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;

        // Keep original size
        // game.scale.fullScreenScaleMode = Phaser.ScaleManager.NO_SCALE;

        // Maintain aspect ratio
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;  
    },
    
    fullScreenMode: function() {
        game.scale.startFullScreen();
    },
}