Player2 = function(game) {
    this.game = game;
    this.sprite = null;
    this.jumpTimer = 0;
};

Player2.prototype = {
    
    preload: function() {
        game.load.image('player2', 'assets/eric.png');
    },
        
    create: function(x, y) {
        this.sprite = game.add.sprite(x, y, 'player2');
        this.sprite.anchor.setTo(0.5, 0.5);
        this.game.physics.arcade.enable(this.sprite, Phaser.Physics.ARCADE);
        this.sprite.body.collideWorldBounds = true;
        this.sprite.body.gravity.y = 1500;
        this.sprite.body.bounce.setTo(0.2, 0.2);
        this.sprite.body.drag.x = 1000;
        this.sprite.body.mass = 100;
    },
        
    update: function() {
        this.collision();
        this.input();
    },
    
    input: function() {
        if (pad2.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) || pad2.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1)
        {
            this.sprite.body.velocity.x = -this.game.global.SPEED;
        }
        if (pad2.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || pad2.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1)
        {
            this.sprite.body.velocity.x = this.game.global.SPEED;
        }
        if (pad2.isDown(Phaser.Gamepad.XBOX360_DPAD_UP) || pad2.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -0.1)
        {
            //sprite.y--;
        }
        if (pad2.isDown(Phaser.Gamepad.XBOX360_DPAD_DOWN) || pad2.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.1)
        {
            this.sprite.body.velocity.y = this.game.global.JUMP;
        }
        if (pad2.justPressed(Phaser.Gamepad.XBOX360_A) && game.time.now > this.jumpTimer) {
            if (this.sprite.body.onFloor() || this.sprite.body.touching.down) {
                this.sprite.body.velocity.y = -this.game.global.JUMP;
                this.jumpTimer = game.time.now + 750;
            }
        }
        if (pad2.justPressed(Phaser.Gamepad.XBOX360_B)) {
            level.shakeWorldFor(10);
        }
    },
    
    collision: function() {
        this.game.physics.arcade.collide(this.sprite, level.platform);
        //this.game.physics.arcade.collide(this.sprite, player1.sprite);
    },
}