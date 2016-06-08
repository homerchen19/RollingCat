var menuState = {
   create:function(){
	    map = game.add.sprite(0, 0, 'map');
      map.scale.setTo(scaleWidth,scaleHeight);
		  var Height = game.cache.getImage("noodle").height;
		  var Width = game.cache.getImage("noodle").width;
      noodle = game.add.sprite(innerWidth*4/5-Width*scaleWidth/2,innerHeight/2-Height*scaleHeight/2,'noodle');
      noodle.scale.setTo(scaleWidth,scaleHeight);
		  var Height_2 = game.cache.getImage("option").height;
		  var Width_2 = game.cache.getImage("option").width;
      option = game.add.sprite(innerWidth/20,0,'option');
      option.scale.setTo(scaleWidth,scaleHeight);
//      var Spacekey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
//      Spacekey.onDown.add(this.start,this);
       noodle.inputEnabled = true;
       noodle.events.onInputDown.add(this.start,this);

		  var text1 = game.add.text(innerWidth*6/8, innerHeight*3/5, '阿瑞意麵', { fontSize :0.02*innerWidth+'px', fill :'#ff8888' } );
		  var text2 = game.add.text(innerWidth*11/16, innerHeight*18/20, '點擊關卡開始遊戲', { fontSize :0.03*innerWidth+'px', fill :'#888888' } );
      //var Spacetext = game.add.text(innerWidth/2,innerHeight/2,'Space',{font:'30px Courier',fill:'#000000'});
   },
   start:function(){
     game.state.start('play');
   }

};
