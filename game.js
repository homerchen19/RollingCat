
	const innerWidth = window.innerWidth;
	const innerHeight = window.innerHeight;
	const gameRatio = innerWidth / innerHeight;
	const scaleWidth = innerWidth / 1920;
	const scaleHeight = innerHeight / 1080;
	var stone_v = -500;
	var redbeans, redbean;
	var stones, stone_1 , stone_2;
	var score = 0;
	var redbean_v = -1000;
	var mylatesttap; 
	var jumps = 2;
	var game = new Phaser.Game(innerWidth, innerHeight, Phaser.AUTO,'');
	var randomXPosition = game.rnd.integerInRange(innerWidth, innerWidth * 1.5);
  game.state.add('boot',bootState);
  game.state.add('load',loadState);
  game.state.add('menu',menuState);
  game.state.add('play',playState);
  game.state.add('over',overState);

  game.state.start('boot');
