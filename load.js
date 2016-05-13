var loadState = {
    preload:function(){
      var loadingLabel = game.add.text(innerWidth/2,innerHeight/2,'loading....',{font:'30px Courier',fill:'#ffffff'});
      game.load.image('background', 'assets/2.jpg');
      game.load.image('stone_2', 'assets/4.png');
      game.load.image('stone_1', 'assets/5.png');
      game.load.image('cat', 'assets/1.gif');
      game.load.image('redbean', 'assets/3.png');
      game.load.image('start', 'assets/start.png');
      game.load.image('over', 'assets/over.jpg');
    },
    create:function(){
      game.state.start('menu');
    }
};
