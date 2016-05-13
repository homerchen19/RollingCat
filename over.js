var overState = {
  create:function(){
	  over = game.add.sprite(0, 0, 'over');
		over.scale.setTo(scaleWidth, scaleHeight);
    var Spacekey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    Spacekey.onDown.add(this.backtogame,this);
  },
  backtogame:function(){
    //game.paused
    game.state.start('menu');
  }
};
