Level = function(game) {
    this.game = game;
    
    this.platforms = null;
    this.enemies = null;
};

Level.prototype = {
    
    preload: function() {
        this.game.load.image('level01', 'assets/level01.png');
        this.game.load.image('enemy', 'assets/lightning-bug.png');
        this.game.load.image('ground', 'assets/ground.png');
    },
    
    create: function() {
        // Level background
        this.game.stage.backgroundColor = '#ccc';
        this.game.add.sprite(0, 0, 'level01');
        
        // Create the ground
        this.platform = this.game.add.sprite(0, 680, 'ground');
        this.game.physics.arcade.enable(this.platform, Phaser.Physics.ARCADE);
        this.platform.body.immovable = true;
        this.platform.alpha = 0.0;
        this.platform.scale.setTo(1, 1);
        
        // Create enemies
        this.enemies = game.add.group();
        this.enemies.enableBody = true;
        for (var i = 0; i < 8; i++) {
            var enemy = this.enemies.create(i * 70, 0, 'enemy');
            game.physics.arcade.enable(enemy, Phaser.Physics.ARCADE);
            enemy.body.gravity.y = 500;
            xgrav = 199; //this.game.rnd.integerInRange(50, 58);
            //enemy.body.gravity.x = this.game.rnd.integerInRange(0,1)?xgrav:-xgrav;
            enemy.body.collideWorldBounds = true;
            enemy.body.bounce.setTo(1, 1);
            enemy.body.mass = 10;
            //enemy.body.maxVelocity.y = this.game.rnd.integerInRange(1000, 1600);
            //enemy.body.maxVelocity.x = this.game.rnd.integerInRange(1000, 1600);;
        }
        
        this.initEffects();
    },
    
    update: function() {
        this.updateEffects();
        this.collision();
    },
    
    collision: function() {
        this.game.physics.arcade.collide(this.enemies, this.platform);
        this.game.physics.arcade.collide(this.enemies, player1.sprite);
        this.game.physics.arcade.collide(this.enemies, player2.sprite);
        //this.game.physics.arcade.collide(this.enemies, this.enemies);
        this.game.physics.arcade.collide(player1.sprite, player2.sprite);
    },
    
    // EFFECTS INIT/UPDATER
    updateEffects: function() {
        this.shakeWorld();
    },
    initEffects: function() {
        this.shakeWorldTimer = 0;
    },
    
    // EFFECTS
    shakeWorld: function() {
        if (this.shakeWorldTimer > 0) {
            var rand1 = game.rnd.integerInRange(-10,10);
            var rand2 = game.rnd.integerInRange(-10,10);
            game.world.setBounds(rand1, rand2, game.width + rand1, game.height + rand2);
            this.shakeWorldTimer--;
            if (this.shakeWorldTimer == 0) {
                game.world.setBounds(0, 0, game.width, game.height); // normalize after shake?
            }
        }
    },
    shakeWorldFor: function(x) {
        this.shakeWorldTimer = x;    
    }
}