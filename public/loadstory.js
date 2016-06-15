var loadstoryState = {
    preload: function() {
        var loadingLabel = game.add.text(innerWidth / 4, innerHeight / 2, 'loading....', {
            font: '30px Courier',
            fill: '#ffffff'
        });
        game.load.image('1', 'assets/1.jpg');
        game.load.image('2', 'assets/2.jpg');
        game.load.image('3', 'assets/3.jpg');
        game.load.image('4', 'assets/4.jpg');
        game.load.image('5', 'assets/5.jpg');
        game.load.image('6', 'assets/6.jpg');
        game.load.image('7', 'assets/7.jpg');
        game.load.image('8', 'assets/8.jpg');
        game.load.image('9', 'assets/9.jpg');
        game.load.image('10', 'assets/10.jpg');
        game.load.image('11', 'assets/11.jpg');
        game.load.image('12', 'assets/12.jpg');
        game.load.image('13', 'assets/13.jpg');
    },
    create: function() {
        game.state.start('story');
    }
};
