HUD = function(game) {
    this.game = game;
    this.scoreText = null;
};

HUD.prototype = {
    
    preload: function() {
        
    },
    
    create: function() {
        
        this.scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    },
    
    update: function() {
        
    },
}