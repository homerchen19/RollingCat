var menuState = {
    create: function() {
        option_d = false;
        map = game.add.sprite(0, 0, 'map');
        map.scale.setTo(scaleWidth, scaleHeight);
        var Height = game.cache.getImage("ice").height;
        var Width = game.cache.getImage("ice").width;
        ice = game.add.sprite(innerWidth * 2.34 / 5 - Width * scaleWidth / 2, innerHeight / 2 - Height * scaleHeight / 2, 'ice');
        ice.scale.setTo(scaleWidth, scaleHeight);
        var Height_2 = game.cache.getImage("option").height;
        var Width_2 = game.cache.getImage("option").width;
        option = game.add.sprite(innerWidth / 20, 0, 'option');
        option.scale.setTo(scaleWidth, scaleHeight);
        //      var Spacekey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        var Width_3 = game.cache.getImage("sidemenu_1").width;
        sidemenu_1 = game.add.sprite(-Width_3, 0, 'sidemenu_1');
        sidemenu_1.scale.setTo(scaleWidth, scaleHeight);
        sidemenu_2 = game.add.sprite(-Width_3, sidemenu_1.height, 'sidemenu_2');
        sidemenu_2.scale.setTo(scaleWidth, scaleHeight);
        sidemenu_3 = game.add.sprite(-Width_3, sidemenu_1.height * 2, 'sidemenu_3');
        sidemenu_3.scale.setTo(scaleWidth, scaleHeight);
        sidemenu_3.inputEnabled = true;
        sidemenu_3.events.onInputDown.add(this.go_to_loadstory, this);
        sidemenu_4 = game.add.sprite(-Width_3, sidemenu_1.height * 3, 'sidemenu_4');
        sidemenu_4.scale.setTo(scaleWidth, scaleHeight);
        sidemenu_4.inputEnabled = true;
        sidemenu_4.events.onInputDown.add(this.go_to_food, this);
        sidemenu_5 = game.add.sprite(-Width_3, sidemenu_1.height * 4, 'sidemenu_5');
        sidemenu_5.scale.setTo(scaleWidth, scaleHeight);
        sidemenu_6 = game.add.sprite(-Width_3, sidemenu_1.height * 5, 'sidemenu_5');
        sidemenu_6.scale.setTo(scaleWidth, scaleHeight);
        ice.inputEnabled = true;
        ice.events.onInputDown.add(this.start, this);

        option.inputEnabled = true;
        option.events.onInputDown.add(this.jumpoption, this);
        game.input.onDown.add(menuState.contract, self);
    },
    contract: function(event) {
        if (option_d) {
            var w = sidemenu_1.width;
            if (event.x > w) {
                //CONTRACT
                game.add.tween(option).to({
                    y: 0
                }, 2000, Phaser.Easing.Cubic.Out, true, 0, 0, false);
                game.add.tween(sidemenu_1).to({
                    x: -w
                }, 2000, Phaser.Easing.Cubic.Out, true, 0, 0, false);
                game.add.tween(sidemenu_2).to({
                    x: -w
                }, 2000, Phaser.Easing.Cubic.Out, true, 0, 0, false);
                game.add.tween(sidemenu_3).to({
                    x: -w
                }, 2000, Phaser.Easing.Cubic.Out, true, 0, 0, false);
                game.add.tween(sidemenu_4).to({
                    x: -w
                }, 2000, Phaser.Easing.Cubic.Out, true, 0, 0, false);
                game.add.tween(sidemenu_5).to({
                    x: -w
                }, 2000, Phaser.Easing.Cubic.Out, true, 0, 0, false);
                game.add.tween(sidemenu_6).to({
                    x: -w
                }, 2000, Phaser.Easing.Cubic.Out, true, 0, 0, false);
                option_d = false;
            }
        }
    },
    start: function() {
        game.state.start('play');
    },
    jumpoption: function() {
        if (!option_d) {
            game.add.tween(option).to({
                y: -option.height / 2
            }, 2000, Phaser.Easing.Cubic.Out, true, 0, 0, false);
            game.add.tween(sidemenu_1).to({
                x: 0
            }, 2000, Phaser.Easing.Cubic.Out, true, 0, 0, false);
            game.add.tween(sidemenu_2).to({
                x: 0
            }, 2000, Phaser.Easing.Cubic.Out, true, 0, 0, false);
            game.add.tween(sidemenu_3).to({
                x: 0
            }, 2000, Phaser.Easing.Cubic.Out, true, 0, 0, false);
            game.add.tween(sidemenu_4).to({
                x: 0
            }, 2000, Phaser.Easing.Cubic.Out, true, 0, 0, false);
            game.add.tween(sidemenu_5).to({
                x: 0
            }, 2000, Phaser.Easing.Cubic.Out, true, 0, 0, false);
            game.add.tween(sidemenu_6).to({
                x: 0
            }, 2000, Phaser.Easing.Cubic.Out, true, 0, 0, false);
            option_d = true;
        }
    },
    go_to_food: function() {
        game.state.start('food');
    },
    go_to_loadstory: function() {
        game.state.start('loadstory');
    }

};
