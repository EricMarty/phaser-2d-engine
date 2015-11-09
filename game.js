var GameState = function() {
    
};

GameState.prototype = {
    preload: function() {
        level = new Level(game);
        level.preload();
        
        controllers = new Controllers();
        controllers.preload();
        
        player1 = new Player1(game);
        player1.preload();
        player2 = new Player2(game);
        player2.preload();
        
        hud = new HUD(game);
        hud.preload();
    },
    
    create: function() {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        level.create();
        controllers.create();
        player1.create(100, 100);
        player2.create(100, 400);
        hud.create();
    },
    
    update: function() { 
        level.update();
        player1.update();
        player2.update();
        hud.update();
    },
    
    render: function() {
        //game.debug.bodyInfo(player1, 16, 24);   
    }
    
}