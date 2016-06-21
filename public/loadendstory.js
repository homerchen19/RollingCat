var loadendstoryState = {
    preload: function() {
        var loadingLabel = game.add.text(innerWidth / 4, innerHeight / 2, 'loading....', {
            font: '30px Courier',
            fill: '#ffffff'
        });
        game.load.image('e1', 'assets/endstory_1.jpg');
        game.load.image('e2', 'assets/endstory_2.jpg');
        game.load.image('e3', 'assets/endstory_3.jpg');
        game.load.image('e4', 'assets/endstory_4.jpg');
        game.load.image('e5', 'assets/endstory_5.jpg');
        game.load.image('e6', 'assets/endstory_6.jpg');
        game.load.audio('m_story','assets/story.mp3');
    },
    create: function() {
        game.state.start('over');
    }

};
