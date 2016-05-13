var playState = {
  	 hitstone:function(cat,stone){
    	//cat.kill();
    	//game.paused = true;
      game.state.start('over');
  	}
    ,
  	hitbound:function(bound, obj){
     	obj.kill();
  	}
    ,
	  collectBeans:function(cat, redbean){
		redbean.kill();
		score = score + 10;
		scoreText.text = 'Score:'+score;
	  }
    ,
  	createElement:function(num) {
    	var max_x = innerWidth;
    	const half_innerWidth = innerWidth / 2;
    	for(var i = 0 ; i < num ; i++){
      		var x = game.rnd.integerInRange(1, 3);

		    if( x == 1){
		      	max_x += half_innerWidth + game.rnd.integerInRange(redbean.width, half_innerWidth);
		        redbean = redbeans.create(max_x, game.rnd.integerInRange(0, innerHeight - redbean.height), 'redbean');
				    redbean.scale.setTo(scaleWidth, scaleHeight);
		        redbean.body.velocity.x = redbean_v;
		        redbean.body.allowGravity = false;
		    }
		    else if(x == 2){
		      	max_x += half_innerWidth + game.rnd.integerInRange(stone_1.width, half_innerWidth)
		        stone_1 = stones.create(max_x, innerHeight - stone_1.height, 'stone_1'); 
		        stone_1.scale.setTo(scaleWidth,scaleHeight);
		        stone_1.body.velocity.x = stone_v;  
		        stone_1.body.allowGravity = false;       
		    }
		    else{
		      	max_x += half_innerWidth + game.rnd.integerInRange(stone_2.width, half_innerWidth)
		        stone_2 = stones.create(max_x, innerHeight - stone_2.height, 'stone_2'); 
		        stone_2.scale.setTo(scaleWidth,scaleHeight);
		        stone_2.body.velocity.x = stone_v;    
		        stone_2.body.allowGravity = false;    
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
		// stones
		stones = game.add.group();
		stones.enableBody = true;
    
		var stone1Height = game.cache.getImage("stone_1").height;
		var stone1Width = game.cache.getImage("stone_1").width;
		var stone2Height = game.cache.getImage("stone_2").height;
		var stone2Width = game.cache.getImage("stone_2").width;

		//stone_1
		stone_1 = stones.create(randomXPosition + 1000 , game.world.height - stone1Height * scaleHeight, 'stone_1');
		stone_1.scale.setTo(scaleWidth, scaleHeight); //重設大小
    	stone_1.body.velocity.x = stone_v;
    	stone_1.body.allowGravity = false;
		//stone_1.body.immovable = true;

		//stone_2
		stone_2 = stones.create(randomXPosition +  stone2Width + 1500, game.world.height - stone2Height * scaleHeight , 'stone_2');
		stone_2.scale.setTo(scaleWidth, scaleHeight);
	  	stone_2.body.velocity.x = stone_v;
	  	stone_2.body.allowGravity = false;
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
		scoreText = game.add.text(16, 16, 'Score:0', { fontSize :'32px', fill :'#000' } );

		redbeans = game.add.group();
		redbeans.enableBody = true;
    	game.physics.arcade.enable(redbeans);
		
		for (var i = 0 ; i < 2 ; i++){
		  	redbean = redbeans.create((i + 1) *2800, 0, 'redbean');
		   	redbean.scale.setTo(scaleWidth, scaleHeight);
       		redbean.body.velocity.x = redbean_v;
       		redbean.body.allowGravity = false;
		}

		game.input.keyboard.addKeyCapture([
	        Phaser.Keyboard.UP
	    ]);


	}
  ,
	update:function() {
		//game.physics.arcade.collide(cat, stones);
	  	game.physics.arcade.overlap(cat, redbeans, playState.collectBeans, null, this);
	  	game.physics.arcade.overlap(cat, stones, playState.hitstone, null, this);
	    game.physics.arcade.overlap(bound, redbeans, playState.hitbound, null, this);
	    game.physics.arcade.overlap(bound, stones, playState.hitbound, null, this);

	  	background.tilePosition.x += -50;
    	cat.body.velocity.x = 0;
   		cat.angle += 10; //旋轉

	    if(redbeans.total == 0 && stones.total == 0){
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
