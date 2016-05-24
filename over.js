var overState = {
  create:function(){
	  //over = game.add.sprite(0, 0, 'over');
		//over.scale.setTo(scaleWidth, scaleHeight);
    con = game.add.sprite(innerWidth*2.75/10,innerHeight/16,'continue');
		con.scale.setTo(scaleWidth, scaleHeight);
    restart = game.add.sprite(innerWidth/10,innerHeight/16,'restart');
		restart.scale.setTo(scaleWidth, scaleHeight);
    num_1 = game.add.sprite(innerWidth*11/20,innerHeight/16,'result_taro');
		num_1.scale.setTo(scaleWidth, scaleHeight);
		n_taro = game.add.text(innerWidth*12/20, innerHeight/16, taro_num, { fontSize :'32px', fill :'ffffff' } );
    num_2 = game.add.sprite(innerWidth*11/20,innerHeight*6/16,'result_redbean');
		num_2.scale.setTo(scaleWidth, scaleHeight);
		n_redbean = game.add.text(innerWidth*12/20, innerHeight*6/16, redbean_num, { fontSize :'32px', fill :'#ffffff' } );
    num_3 = game.add.sprite(innerWidth*11/20,innerHeight*11/16,'result_greenbean');
		num_3.scale.setTo(scaleWidth, scaleHeight);
		n_greenbean = game.add.text(innerWidth*12/20, innerHeight*11/16, greenbean_num, { fontSize :'32px', fill :'#ffffff' } );
    var Spacekey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    Spacekey.onDown.add(this.backtogame,this);
  },
  backtogame:function(){
    //game.paused
    game.state.start('menu');
  }
};
