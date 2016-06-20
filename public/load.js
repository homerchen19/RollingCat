var loadState = {
    preload: function() {
        var loadingLabel = game.add.text(innerWidth / 4, innerHeight / 2, 'loading....', {
            font: '30px Courier',
            fill: '#ffffff'
        });
        game.load.image('background', './public/assests/background_2.jpg');
        game.load.image('cat', './public/assests/cat_test.png');
        game.load.image('redbean', './public/assests/redbean.png');
        game.load.image('greenbean', './public/assests/greenbean.png');
        game.load.image('taro', './public/assests/taro.png');
        game.load.image('desk', './public/assests/desk.png');
        game.load.image('chair', './public/assests/chair.png');
        game.load.image('chair_2', './public/assests/chair_2.png');
        game.load.image('result_redbean', './public/assests/result_redbean.png');
        game.load.image('result_greenbean', './public/assests/result_greenbean.png');
        game.load.image('result_taro', './public/assests/result_taro.png');
        game.load.image('restart', './public/assests/restart.png');
        game.load.image('continue', './public/assests/continue.png');
        game.load.image('Login', './public/assests/login.png');
        game.load.image('option', './public/assests/option.png');
        game.load.image('ice', './public/assests/ice.png');
        game.load.image('sidemenu_1', './public/assests/sidemenu_1.png');
        game.load.image('sidemenu_2', './public/assests/sidemenu_2.png');
        game.load.image('sidemenu_3', './public/assests/sidemenu_3.png');
        game.load.image('sidemenu_4', './public/assests/sidemenu_4.png');
        game.load.image('sidemenu_5', './public/assests/sidemenu_5.png');
        game.load.image('login_back', './public/assests/login_back.png');
        game.load.image('back_contract', './public/assests/back_contract.jpg');
        game.load.image('title', './public/assests/title.png');
        game.load.image('map', './public/assests/map.jpg');
        game.load.image('alterbox', './public/assests/alterbox.png');
        game.load.image('redbean_info', './public/assests/redbean_info.png');
        game.load.image('greenbean_info', './public/assests/greenbean_info.png');
        game.load.image('taro_info', './public/assests/taro_info.png');
        game.load.image('back_to_menu', './public/assests/back_to_menu.png');
        game.load.image('up_arrow', './public/assests/up_arrow.png');
        game.load.image('down_arrow', './public/assests/down_arrow.png');
        game.load.image('btm', './public/assests/btm.png');
    },
    create: function() {
        //game.state.start('login');
        game.state.start('menu');
    }
};
