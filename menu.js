var menuState = {
   create:function(){
      redbean_num=0;
      greenbean_num=0;
      taro_num=0;
	start = game.add.sprite(0, 0, 'start');
      start.scale.setTo(scaleWidth,scaleHeight);

      game.input.mouse.capture = true;
      //var Spacekey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);


      //var Spacetext = game.add.text(innerWidth/2,innerHeight/2,'Space',{font:'30px Courier',fill:'#000000'});
   },
    update : function() {
        console.log(game.input.activePointer.isDown);
        if(game.input.activePointer.isDown)
            game.state.start('play');
    }

};
