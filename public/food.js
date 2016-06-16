var foodState = {
    create: function() {
        redbean_info = game.add.sprite(0, 0, 'redbean_info');
        redbean_info.scale.setTo(scaleWidth, scaleHeight);

        greenbean_info = game.add.sprite(0, game.cache.getImage("greenbean_info").height * scaleHeight, 'greenbean_info');
        greenbean_info.scale.setTo(scaleWidth, scaleHeight);

        taro_info = game.add.sprite(0, game.cache.getImage("taro_info").height * scaleHeight, 'taro_info');
        taro_info.scale.setTo(scaleWidth, scaleHeight);

        var up_arrow = game.add.sprite(innerWidth * 0.11, innerHeight * 0.15, 'up_arrow');
        up_arrow.scale.setTo(scaleWidth, scaleHeight);
        up_arrow.inputEnabled = true;
        up_arrow.events.onInputDown.add(this.change_page_up, this);

        var down_arrow = game.add.sprite(innerWidth * 0.11, innerHeight * 0.65, 'down_arrow');
        down_arrow.scale.setTo(scaleWidth, scaleHeight);
        down_arrow.inputEnabled = true;
        down_arrow.events.onInputDown.add(this.change_page_down, this);

        var back_to_menu = game.add.sprite(innerWidth * 0.85, innerHeight * 0.7, 'back_to_menu');
        back_to_menu.scale.setTo(scaleWidth, scaleHeight);
        back_to_menu.inputEnabled = true;
        back_to_menu.events.onInputDown.add(this.go_menu, this);
    },
    go_menu: function() {
        game.state.start('menu');
    },
    change_page_up: function() {
        switch (current_page) {
            case 1:
                break;
            case 2:
                game.add.tween(redbean_info).to({
                    y: 0
                }, 1000, Phaser.Easing.Exponential.Out, true, 0, 0, false);

                game.add.tween(greenbean_info).to({
                    y: greenbean_info.height
                }, 1000, Phaser.Easing.Exponential.Out, true, 0, 0, false);
                current_page -= 1;
                break;
            case 3:
                game.add.tween(greenbean_info).to({
                    y: 0
                }, 1000, Phaser.Easing.Exponential.Out, true, 0, 0, false);

                game.add.tween(taro_info).to({
                    y: taro_info.height
                }, 1000, Phaser.Easing.Exponential.Out, true, 0, 0, false);
                current_page -= 1;
                break;
        }
    },
    change_page_down: function() {
        switch (current_page) {
            case 1:
                game.add.tween(redbean_info).to({
                    y: -redbean_info.height
                }, 1000, Phaser.Easing.Exponential.Out, true, 0, 0, false);

                game.add.tween(greenbean_info).to({
                    y: 0
                }, 1000, Phaser.Easing.Exponential.Out, true, 0, 0, false);
                current_page += 1;
                break;
            case 2:
                game.add.tween(greenbean_info).to({
                    y: -greenbean_info.height
                }, 1000, Phaser.Easing.Exponential.Out, true, 0, 0, false);

                game.add.tween(taro_info).to({
                    y: 0
                }, 1000, Phaser.Easing.Exponential.Out, true, 0, 0, false);
                current_page += 1;
                break;
            case 3:
                break;
        }
    }

}
