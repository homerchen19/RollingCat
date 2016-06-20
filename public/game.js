	var innerWidth = window.innerWidth;
	var innerHeight = window.innerHeight;
	var gameRatio = innerWidth / innerHeight;
	var scaleWidth = innerWidth / 1920;
	var scaleHeight = innerHeight / 1080;
	var redbeans, redbean;
	var greenbeans, greenbean;
	var taros, taro;
	var desks, desk;
	var chairs, chair;
	var chair_2s, chair_2;
	var redbean_num = 0;
	var greenbean_num = 0;
	var taro_num = 0;
	var levelSpeed = 1;
	var redbean_v = -1400 * scaleWidth;
	var greenbean_v = -1400 * scaleWidth;
	var taro_v = -1400 * scaleWidth;
	var desk_v = -1400 * scaleWidth;
	var chair_v = -1400 * scaleWidth;
	var mylatesttap;
	var jumps = 2,
	    jumpHeight = 3;
	var al = false,
	    jumping = false;
	var option_d = false;
	var username;
	var game = new Phaser.Game(innerWidth, innerHeight, Phaser.AUTO, '');
	var randomXPosition = game.rnd.integerInRange(innerWidth, innerWidth * 1.5);
	var current_page = 1;
	var finalnum = 50;

	game.state.add('boot', bootState);
	game.state.add('load_node', loadState);
	//game.state.add('load', loadState);
	game.state.add('login', loginState);
	game.state.add('loadstory', loadstoryState);
	game.state.add('story', storyState);
	game.state.add('menu', menuState);
	game.state.add('food', foodState);
	game.state.add('play', playState);
	game.state.add('loadendstory', loadendstoryState);
	game.state.add('over', overState);
	game.state.start('boot');
