var loadState = {
    preload: function() {
        var loadingLabel = game.add.text(innerWidth / 4, innerHeight / 2, 'loading....', {
            font: '30px Courier',
            fill: '#ffffff'
        });
        game.load.image('background', 'assets/background_2.jpg');
        game.load.image('cat', 'assets/cat_test.png');
        game.load.image('redbean', 'assets/redbean.png');
        game.load.image('greenbean', 'assets/greenbean.png');
        game.load.image('taro', 'assets/taro.png');
        game.load.image('desk', 'assets/desk.png');
        game.load.image('chair', 'assets/chair.png');
        game.load.image('chair_2', 'assets/chair_2.png');
        game.load.image('result_redbean', 'assets/result_redbean.png');
        game.load.image('result_greenbean', 'assets/result_greenbean.png');
        game.load.image('result_taro', 'assets/result_taro.png');
        game.load.image('restart', 'assets/restart.png');
        game.load.image('continue', 'assets/continue.png');
        game.load.image('Login', 'assets/login.png');
        game.load.image('option', 'assets/option.png');
        game.load.image('ice', 'assets/ice.png');
        game.load.image('sidemenu_1', 'assets/sidemenu_1.png');
        game.load.image('sidemenu_2', 'assets/sidemenu_2.png');
        game.load.image('sidemenu_3', 'assets/sidemenu_3.png');
        game.load.image('sidemenu_4', 'assets/sidemenu_4.png');
        game.load.image('sidemenu_5', 'assets/sidemenu_5.png');
        game.load.image('login_back', 'assets/login_back.png');
        game.load.image('back_contract', 'assets/back_contract.jpg');
        game.load.image('title', 'assets/title.png');
        game.load.image('map', 'assets/map.jpg');
        game.load.image('alterbox', 'assets/alterbox.png');
        game.load.image('redbean_info', 'assets/redbean_info.png');
        game.load.image('greenbean_info', 'assets/greenbean_info.png');
        game.load.image('taro_info', 'assets/taro_info.png');
        game.load.image('back_to_menu', 'assets/back_to_menu.png');
        game.load.image('up_arrow', 'assets/up_arrow.png');
        game.load.image('down_arrow', 'assets/down_arrow.png');
        game.load.image('btm', 'assets/btm.png');
    },
    create: function() {
        game.state.start('login');
//        game.state.start('menu');
    }
};
