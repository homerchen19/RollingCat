var playState = {
  	 die:function(cat,stone){
    	//cat.kill();
    	//game.paused = true;
      game.physics.arcade.isPaused = (game.physics.arcade.isPaused)? false :true;
      //game.state.start('over');
  	}
    ,
  	hitbound:function(bound, obj){
     	obj.kill();
  	}
    ,
	  collectRedBeans:function(cat, redbean){
		redbean.kill();
		redbean_num = redbean_num+ 1;
		scoreText_redbean.text = 'Red Bean:'+redbean_num;
	  }
    ,
	  collectGreenBeans:function(cat, greenbean){
		greenbean.kill();
		greenbean_num = greenbean_num+ 1;
		scoreText_greenbean.text = 'Green Bean:'+greenbean_num;
	  }
    ,
	  collectTaros:function(cat, taro){
		taro.kill();
		taro_num = taro_num+ 1;
		scoreText_taro.text = 'Taro:'+taro_num;
	  }
    ,
  	createElement:function(num) {
    	var max_x = innerWidth;
    	const half_innerWidth = innerWidth / 2;
    	for(var i = 0 ; i < num ; i++){
      		var x = game.rnd.integerInRange(1, 5);

		    if( x == 1){
		      	max_x += half_innerWidth + game.rnd.integerInRange(redbean.width, half_innerWidth);
		        redbean = redbeans.create(max_x, game.rnd.integerInRange(0, innerHeight - redbean.height), 'redbean');
				    redbean.scale.setTo(scaleWidth, scaleHeight);
		        redbean.body.velocity.x = redbean_v;
		        redbean.body.allowGravity = false;
		    }
		    else if(x == 2){
		      	max_x += half_innerWidth + game.rnd.integerInRange(desk.width, half_innerWidth)
		        desk = desks.create(max_x, innerHeight - desk.height, 'desk'); 
		        desk.scale.setTo(scaleWidth,scaleHeight);
		        desk.body.velocity.x = desk_v;  
		        desk.body.allowGravity = false;       
		    }
		    else if(x == 3){
		      	max_x += half_innerWidth + game.rnd.integerInRange(chair.width, half_innerWidth)
		        chair = chairs.create(max_x, innerHeight - chair.height, 'chair'); 
		        chair.scale.setTo(scaleWidth,scaleHeight);
		        chair.body.velocity.x = chair_v;    
		        chair.body.allowGravity = false;    
		    }
		    else if(x == 4){
		      	max_x += half_innerWidth + game.rnd.integerInRange(greenbean.width, half_innerWidth)
		        greenbean = greenbeans.create(max_x, game.rnd.integerInRange(0, innerHeight - greenbean.height), 'greenbean');
		        greenbean.scale.setTo(scaleWidth,scaleHeight);
		        greenbean.body.velocity.x = greenbean_v;    
		        greenbean.body.allowGravity = false;    
		    }
		    else {
		      	max_x += half_innerWidth + game.rnd.integerInRange(taro.width, half_innerWidth)
		        taro = taros.create(max_x, game.rnd.integerInRange(0, innerHeight - taro.height), 'taro');
		        taro.scale.setTo(scaleWidth,scaleHeight);
		        taro.body.velocity.x = taro_v;    
		        taro.body.allowGravity = false;    
		    }
		    //console.log(max_x);
	    }
	},

   create:function() {
		// background
		game.physics.arcade.gravity.y = 1500; //地圖重力

		background = game.add.tileSprite(0, 0, 1920, 1080, 'background');
	  background.scale.setTo(scaleWidth, scaleHeight);
	  bound = game.add.sprite(-innerWidth-300, 0, 'background');
	  bound.scale.setTo(scaleWidth, scaleHeight);
	  game.physics.arcade.enable(bound);
	  bound.body.allowGravity = false;
		// obstacle groups
		desks = game.add.group();
		//game.physics.arcade.enable(desks);
		desks.enableBody = true;
    chairs = game.add.group();
		//game.physics.arcade.enable(chairs);
    chairs.enableBody = true;
		var deskHeight = game.cache.getImage("desk").height;
		var deskWidth = game.cache.getImage("desk").width;
		var chairHeight = game.cache.getImage("chair").height;
		var chairWidth = game.cache.getImage("chair").width;

		//desk
		desk = desks.create(randomXPosition + 1000 , game.world.height - deskHeight * scaleHeight, 'desk');
		desk.scale.setTo(scaleWidth, scaleHeight); //重設大小
    desk.body.velocity.x = desk_v;
    desk.body.allowGravity = false;
		//stone_1.body.immovable = true;

		//chair
		chair = chairs.create(randomXPosition +  chairWidth + 2500, game.world.height - chairHeight * scaleHeight , 'chair');
		chair.scale.setTo(scaleWidth, scaleHeight);
	  chair.body.velocity.x = chair_v;
	  chair.body.allowGravity = false;
		//stone_2.body.immovable = true;
		// cat
		cat = game.add.sprite(game.world.width * 0.2, game.world.height - 500, 'cat');
		cat.scale.setTo(scaleWidth, scaleHeight);
		cat.anchor.setTo(0.5, 0.5);
		game.physics.arcade.enable(cat);
		cat.body.gravity.y = innerHeight;
		cat.body.collideWorldBounds = true;

		/*cat.animations.add('left',[0,1,2,3],10,true);
		cat.animations.add('right',[5,6,7,8],10,true);
	    */

		// scoreText
		scoreText_redbean = game.add.text(16, 16, 'Red Bean: 0', { fontSize :'32px', fill :'#000' } );
		scoreText_greenbean = game.add.text(226, 16, 'Green Bean: 0', { fontSize :'32px', fill :'#000' } );
		scoreText_taro = game.add.text(486, 16, 'Taro: 0', { fontSize :'32px', fill :'#000' } );

		redbeans = game.add.group();
		redbeans.enableBody = true;
   // game.physics.arcade.enable(redbeans);
		greenbeans = game.add.group();
		greenbeans.enableBody = true;
	 //game.physics.arcade.enable(greenbeans);
    taros = game.add.group();
    taros.enableBody = true;
   // game.physics.arcade.enable(taros);
    
		//for (var i = 0 ; i < 2 ; i++){
		redbean = redbeans.create(2800, 0, 'redbean');
		redbean.scale.setTo(scaleWidth, scaleHeight);
    redbean.body.velocity.x = redbean_v;
    redbean.body.allowGravity = false;
		//}

		greenbean = greenbeans.create(2800*2, 0, 'greenbean');
		greenbean.scale.setTo(scaleWidth, scaleHeight);
    greenbean.body.velocity.x = greenbean_v;
    greenbean.body.allowGravity = false;
		taro = taros.create(2800*3, 0, 'taro');
		taro.scale.setTo(scaleWidth, scaleHeight);
    taro.body.velocity.x = taro_v;
    taro.body.allowGravity = false;
		game.input.keyboard.addKeyCapture([
	        Phaser.Keyboard.UP
	    ]);


	}
  ,
	update:function() {
		//game.physics.arcade.collide(cat, stones);
	  	game.physics.arcade.overlap(cat, redbeans, playState.collectRedBeans, null, this);
	  	game.physics.arcade.overlap(cat, desks, playState.die, null, this);
	    game.physics.arcade.overlap(bound, [redbeans,greenbeans,taros,desks,chairs], playState.hitbound, null, this);
	    game.physics.arcade.overlap(cat, chairs, playState.die, null, this);
	  	game.physics.arcade.overlap(cat, greenbeans, playState.collectGreenBeans, null, this);
	  	game.physics.arcade.overlap(cat, taros, playState.collectTaros, null, this);
	  	//game.physics.arcade.overlap(cat, redbeans, playState.collectBeans, null, this);
	  	background.tilePosition.x += -50;
    	cat.body.velocity.x = 0;
   		cat.angle += 10; //旋轉

	    if(redbeans.total == 0 && greenbeans.total == 0&&taros.total==0&&desks.total == 0&&chairs.total==0){
	       playState.createElement(5);
	    }

	    //偵測有沒有碰到地板
		var onTheGround = cat.body.blocked.down;

	    if (onTheGround) {
	    	//限定只能跳兩次
	        jumps = 2;
	    }

	    // Jump!
	    if (jumps > 0 && playState.upInputIsActive(5)) {
	        cat.body.velocity.y = -innerHeight * 2;
	        jumps--;
	    }
	  }
  ,  
	upInputIsActive : function(duration) {
	    var isActive = false;
	    isActive = game.input.keyboard.downDuration(Phaser.Keyboard.UP, duration);
	    return isActive;
	}
};
