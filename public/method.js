var methodState = {
    create: function() {
        method_2 = game.add.sprite(0, 0, 'method_2');
        method_2.scale.setTo(scaleWidth, scaleHeight);
        method_2.inputEnabled = true;
        method_2.events.onInputDown.add(this.start, this);

        method_1 = game.add.sprite(0, 0, 'method_1');
        method_1.scale.setTo(scaleWidth, scaleHeight);
        method_1.inputEnabled = true;
        method_1.events.onInputDown.add(this.start, this);

        var back_to_menu = game.add.sprite(innerWidth * 0.85, innerHeight * 0.7, 'back_to_menu');
        back_to_menu.scale.setTo(scaleWidth, scaleHeight);
        back_to_menu.inputEnabled = true;
        back_to_menu.events.onInputDown.add(this.go_menu, this);
    },
    go_menu: function() {
        game.state.start('menu');
    },
    start: function(obj) {
        game.add.tween(obj).to({
            alpha: 0
        }, 2000, Phaser.Easing.Quintic.Out, true, 0, 0, false);
        setTimeout(function() {
            obj.destroy();
        }, 1000);
        if (obj.key == 'method_2') {
              game.state.start('menu');
        }
    }

}
