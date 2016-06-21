var preloadState = {
    preload: function() {
        var loadingLabel = game.add.text(innerWidth / 4, innerHeight / 2, 'loading....', {
            font: '30px Courier',
            fill: '#ffffff'
        });
        game.load.image('Login', 'assets/login.png');
        game.load.image('login_back', 'assets/login_back.png');
        game.load.image('title', 'assets/title.png');
    },
    create: function() {
       game.state.start('login');
    }
};
