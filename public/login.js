var loginState = {

    create: function() {
        game.stage.backgroundColor = 'rgb(255,204,102)';
        var Height = game.cache.getImage("Login").height;
        var Width = game.cache.getImage("Login").width;
        login = game.add.sprite(game.world.centerX - Width * scaleWidth / 2, game.world.centerY - Height * scaleHeight / 2, 'Login');
        login.scale.setTo(scaleWidth, scaleHeight);
        //    var Spacekey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        //    Spacekey.onDown.add(this.start,this);
        login.inputEnabled = true;
        login.events.onInputDown.add(loginState.start, this);
    },
    start: function() {
        FB.getLoginStatus(function(res) {
            loginState.statusChangeCallback(res);
        });
        //game.state.start('menu');
        //game.stage.backgroundColor ='#000000';
    },
    statusChangeCallback: function(res) {
        //console.log('Yoyoman');
        //console.log(res);
        if (res.status === 'connected') {
            FB.api('/me', function(res) {
                username = res.name;
                $.post('/userdata', res, function(data) {
                    //console.log('Succeed!');
                    redbean_num = parseInt(data.redbean);
                    greenbean_num = parseInt(data.greenbean);
                    taro_num = parseInt(data.taro);
                    game.state.start('menu');
                    game.stage.backgroundColor = '#000000';
                });
            });
        } else if (res.status === 'not_authorized') {
            console.log('Type2');
        } else {
            FB.login(function(res) {
                if (res.status === 'connected') {
                    FB.api('/me', function(res) {
                        username = res.name;
                        $.post('/userdata', res, function(data) {
                            //console.log('Succeed!');
                            redbean_num = data.redbean;
                            greenbean_num = data.greenbean;
                            taro_num = data.taro;
                            game.state.start('loadstory');
                            game.stage.backgroundColor = '#000000';
                        });
                    });
                }
            }, {
                scope: 'public_profile,email'
            });
            console.log('Type3');
        }
    }
};
