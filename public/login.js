var loginState = {

    create: function() {
        
      if(window.location.href.match(/story/)){
          game.state.start('loadstory');
      }
      else{
          login_back = game.add.sprite(0, 0, 'login_back');
          login_back.scale.setTo(scaleWidth, scaleHeight);
          var Height = game.cache.getImage("Login").height;
          var Width = game.cache.getImage("Login").width;
          login = game.add.sprite(game.world.centerX - Width * scaleWidth / 2, game.world.centerY, 'Login');
          login.scale.setTo(scaleWidth, scaleHeight);
          var Height_2 = game.cache.getImage("title").height;
          var Width_2 = game.cache.getImage("title").width;
          title = game.add.sprite(game.world.centerX - Width_2 * scaleWidth / 2, game.world.centerY - Height_2 * scaleHeight, 'title');
          title.scale.setTo(scaleWidth, scaleHeight);
          login.inputEnabled = true;
          login.events.onInputDown.add(loginState.start, this);
        }
    },
    start: function() {
        FB.getLoginStatus(function(res) {
            loginState.statusChangeCallback(res);
        });
    },
    statusChangeCallback: function(res) {
        if (res.status === 'connected') {
            FB.api('/me', function(res) {
                username = res.name;
                $.post('/userdata', res, function(data) {
                    redbean_num = parseInt(data.redbean);
                    greenbean_num = parseInt(data.greenbean);
                    taro_num = parseInt(data.taro);
                    die_num = parseInt(data.die);
                    game.state.start('load_node');
                });
            });
        }
        else {
           /* FB.login(function(res) {
                if (res.status === 'connected') {
                    FB.api('/me', function(res) {
                        username = res.name;
                        $.post('/userdata', res, function(data) {
                            redbean_num = parseInt(data.redbean);
                            greenbean_num = parseInt(data.greenbean);
                            taro_num = parseInt(data.taro);
                            die_num = parseInt(data.die);
                            window.location.href='https://www.facebook.com/';
                            first=true;
                            //game.state.start('menu');
                        });
                    });
                }
            }, {
                scope: 'public_profile,email',
                redirect_uri:"luffy.ee.ncku.edu.tw:8801"
            });*/
            window.location.href = 'https://www.facebook.com/dialog/oauth?client_id=499968586875221&scope=email,public_profile&redirect_uri=http://luffy.ee.ncku.edu.tw:8801/story';
        }
    }
};
