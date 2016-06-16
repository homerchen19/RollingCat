var loadState = {
    preload: function() {
        var loadingLabel = game.add.text(innerWidth / 4, innerHeight / 2, 'loading....', {
            font: '30px Courier',
            fill: '#ffffff'
        });
        game.load.image('background', './public/assets/background_2.jpg');
        game.load.image('cat', './public/assets/blue_cat.png');
        game.load.image('redbean', './public/assets/redbean.png');
        game.load.image('greenbean', './public/assets/greenbean.png');
        game.load.image('taro', './public/assets/taro.png');
        game.load.image('start', './public/assets/start.png');
        game.load.image('over', './public/assets/over.jpg');
        game.load.image('desk', './public/assets/desk.png');
        game.load.image('chair', './public/assets/chair.png');
        game.load.image('chair_2', './public/assets/chair_2.png');
        game.load.image('result_redbean', './public/assets/result_redbean.png');
        game.load.image('result_greenbean', './public/assets/result_greenbean.png');
        game.load.image('result_taro', './public/assets/result_taro.png');
        game.load.image('restart', './public/assets/restart.png');
        game.load.image('continue', './public/assets/continue.png');
        game.load.image('Login', './public/assets/button.png');
        game.load.image('option', './public/assets/option.png');
        game.load.image('map', './public/assets/map.jpg');
        game.load.image('alterbox', './public/assets/alterbox.png');
        game.load.image('redbean_info', './public/assets/redbean_info.png');
        game.load.image('greenbean_info', './public/assets/greenbean_info.png');
        game.load.image('taro_info', './public/assets/taro_info.png');
        game.load.image('back_to_menu', './public/assets/back_to_menu.png');
        game.load.image('up_arrow', './public/assets/up_arrow.png');
        game.load.image('down_arrow', './public/assets/down_arrow.png');
        game.load.image('ice', './public/assets/ice.png');
        game.load.image('sidemenu_1', './public/assets/sidemenu_1.png');
        game.load.image('sidemenu_2', './public/assets/sidemenu_2.png');
        game.load.image('sidemenu_3', './public/assets/sidemenu_3.png');
        game.load.image('sidemenu_4', './public/assets/sidemenu_4.png');
        game.load.image('sidemenu_5', './public/assets/sidemenu_5.png');
        game.load.image('login_back', './public/assets/login_back.png');
    },
    create: function() {
        //game.state.start('login');
        game.state.start('menu');
    }
};
