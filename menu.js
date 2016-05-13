var menuState = {
   create:function(){
      score = 0; 
	    start = game.add.sprite(0, 0, 'start');
      start.scale.setTo(scaleWidth,scaleHeight);
      var Spacekey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
      Spacekey.onDown.add(this.start,this);

      //var Spacetext = game.add.text(innerWidth/2,innerHeight/2,'Space',{font:'30px Courier',fill:'#000000'});
   },
   start:function(){
     game.state.start('play');
   }

};
