var loadState = {
    preload:function(){
      var loadingLabel = game.add.text(innerWidth/4,innerHeight/2,'loading....',{font:'30px Courier',fill:'#ffffff'});
      game.load.image('background', './public/assets/background.jpg');
      game.load.image('cat', './public/assets/cat.png');
      game.load.image('redbean', './public/assets/redbean.png');
      game.load.image('greenbean','./public/assets/greenbean.png');
      game.load.image('taro','./public/assets/taro.png');
      game.load.image('start', './public/assets/start.png');
      game.load.image('over', './public/assets/over.jpg');
      game.load.image('desk','./public/assets/desk.png');
      game.load.image('chair','./public/assets/chair.png');
      game.load.image('result_redbean','./public/assets/result_redbean.png');
      game.load.image('result_greenbean','./public/assets/result_greenbean.png');
      game.load.image('result_taro','./public/assets/result_taro.png');
      game.load.image('restart','./public/assets/restart.png');
      game.load.image('continue','./public/assets/continue.png');
      game.load.image('Login','./public/assets/button.png');
    },
    create:function(){
      game.state.start('login');
    }
};
