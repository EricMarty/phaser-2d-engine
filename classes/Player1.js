Player1 = function(game) {
    this.game = game;
    this.sprite = null;
    this.jumpTimer = 0;
};

Player1.prototype = {
    
    preload: function() {
        game.load.image('player1', '../assets/adam.png');
    },
        
    create: function(x, y) {
        this.sprite = game.add.sprite(x, y, 'player1');
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
        // Keyboard
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
           this.sprite.body.velocity.x = -this.game.global.SPEED;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
          this.sprite.body.velocity.x = this.game.global.SPEED;
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.UP) && game.time.now > this.jumpTimer) {
            if (this.sprite.body.onFloor() || this.sprite.body.touching.down) {
                this.sprite.body.velocity.y = -this.game.global.JUMP;
                this.jumpTimer = game.time.now + 750;
            }
        }
        if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
          level.shakeWorldFor(10);
        }
      
        // Xbox 360 Controller
        if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_LEFT) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) < -0.1) {
            this.sprite.body.velocity.x = -this.game.global.SPEED;
        }
        if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_RIGHT) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_X) > 0.1) {
            this.sprite.body.velocity.x = this.game.global.SPEED;
        }
        if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_UP) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) < -0.1) {
            //sprite.y--;
        }
        if (pad1.isDown(Phaser.Gamepad.XBOX360_DPAD_DOWN) || pad1.axis(Phaser.Gamepad.XBOX360_STICK_LEFT_Y) > 0.1) {
            this.sprite.body.velocity.y = this.game.global.JUMP;
        }
        if (pad1.justPressed(Phaser.Gamepad.XBOX360_A) && game.time.now > this.jumpTimer) {
            if (this.sprite.body.onFloor() || this.sprite.body.touching.down) {
                this.sprite.body.velocity.y = -this.game.global.JUMP;
                this.jumpTimer = game.time.now + 750;
            }
        }
        if (pad1.justPressed(Phaser.Gamepad.XBOX360_B)) {
            level.shakeWorldFor(10);
        }
    },
    
    collision: function() {
        this.game.physics.arcade.collide(this.sprite, level.platform);
        //this.game.physics.arcade.collide(this.sprite, player2.sprite);
    },
}