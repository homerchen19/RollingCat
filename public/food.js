var foodState = {
    create: function() {
        var redbean_info = game.add.sprite(0, 0, 'redbean_info');
        redbean_info.scale.setTo(scaleWidth, scaleHeight);

        var up_arrow = game.add.sprite(innerWidth * 0.11, innerHeight * 0.15, 'up_arrow');
        up_arrow.scale.setTo(scaleWidth, scaleHeight);
        up_arrow.inputEnabled = true;
        up_arrow.events.onInputDown.add(this.change_page, this);

        var down_arrow = game.add.sprite(innerWidth * 0.11, innerHeight * 0.65, 'down_arrow');
        down_arrow.scale.setTo(scaleWidth, scaleHeight);
        down_arrow.inputEnabled = true;
        down_arrow.events.onInputDown.add(this.change_page, this);

        var back_to_menu = game.add.sprite(innerWidth * 0.85, innerHeight * 0.7, 'back_to_menu');
        back_to_menu.scale.setTo(scaleWidth, scaleHeight);
        back_to_menu.inputEnabled = true;
        back_to_menu.events.onInputDown.add(this.go_menu, this);
    },
    go_menu: function() {
        game.state.start('menu');
    },
    change_page: function() {
        switch (current_page) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;

        }
    }

}
