var Controllers = function() {
    
}

Controllers.prototype = {
    
    preload: function() {
        game.load.image('controller', 'assets/controller.png');    
    },
    
    create: function() {
        game.input.gamepad.start();
        
        pad1 = game.input.gamepad.pad1;
        pad2 = game.input.gamepad.pad2;
        
        this.pad1Connected = game.add.image(10, 10, 'controller');
        this.pad2Connected = game.add.image(70, 10, 'controller'); 
    },
    
    update: function() {
        if (pad1.connected) {
            //this.pad1Connected.x = 10;    
            this.pad1Connected.alpha = 1;
        }
        else {
            //this.pad1Connected.x = -100;   
            this.pad1Connected.alpha = 0.3;
        }
        if (pad2.connected) {
            //this.pad2Connected.x = 70;   
            this.pad1Connected.alpha = 1;
        }
        else {
            //this.pad2Connected.x = -100;
            this.pad1Connected.alpha = 0.3;
        }  
    },
}