var loadState = {
	preload:function(){
		var loadingLabel = game.add.text(innerWidth/4,innerHeight/2,'loading....',{font:'30px Courier',fill:'#ffffff'});
		game.load.image('background', 'assets/background.jpg');
		game.load.image('cat', 'assets/cat.png');
        game.load.image('redbean', 'assets/redbean.png');
	    game.load.image('greenbean','assets/greenbean.png');
	    game.load.image('taro','assets/taro.png');
	    game.load.image('start', 'assets/start.png');
	    game.load.image('over', 'assets/over.jpg');
	    game.load.image('desk','assets/desk.png');
	    game.load.image('chair','assets/chair.png');
	    game.load.image('result_redbean','assets/result_redbean.png');
	    game.load.image('result_greenbean','assets/result_greenbean.png');
	    game.load.image('result_taro','assets/result_taro.png');
	    game.load.image('restart','assets/restart.png');
	    game.load.image('continue','assets/continue.png');
	},
	create:function(){
	    game.state.start('menu');
	}
};
