var storyState = {
   create:function(){
        var storyimg13= game.add.sprite(0,0,13);
        storyimg13.scale.setTo(scaleWidth,scaleHeight);
        //game.add.tween(storyimg13).to({alpha:0},5000,Phaser.Easing.Exponential.In,true,6000*12,0,false);
        var storyimg12= game.add.sprite(0,0,12);
        storyimg12.scale.setTo(scaleWidth,scaleHeight);
        game.add.tween(storyimg12).to({alpha:0},5000,Phaser.Easing.Exponential.In,true,6000*11,0,false);
        var storyimg11= game.add.sprite(0,0,11);
        storyimg11.scale.setTo(scaleWidth,scaleHeight);
        game.add.tween(storyimg11).to({alpha:0},5000,Phaser.Easing.Exponential.In,true,6000*10,0,false);
        var storyimg10= game.add.sprite(0,0,10);
        storyimg10.scale.setTo(scaleWidth,scaleHeight);
        game.add.tween(storyimg10).to({alpha:0},5000,Phaser.Easing.Exponential.In,true,6000*9,0,false);
        var storyimg9= game.add.sprite(0,0,9);
        storyimg9.scale.setTo(scaleWidth,scaleHeight);
        game.add.tween(storyimg9).to({alpha:0},5000,Phaser.Easing.Exponential.In,true,6000*8,0,false);
        var storyimg8= game.add.sprite(0,0,8);
        storyimg8.scale.setTo(scaleWidth,scaleHeight);
        game.add.tween(storyimg8).to({alpha:0},5000,Phaser.Easing.Exponential.In,true,6000*7,0,false);
        var storyimg7= game.add.sprite(0,0,7);
        storyimg7.scale.setTo(scaleWidth,scaleHeight);
        game.add.tween(storyimg7).to({alpha:0},5000,Phaser.Easing.Exponential.In,true,6000*6,0,false);
        var  storyimg6= game.add.sprite(0,0,6);
        storyimg6.scale.setTo(scaleWidth,scaleHeight);
        game.add.tween(storyimg6).to({alpha:0},5000,Phaser.Easing.Exponential.In,true,6000*5,0,false);
        var storyimg5= game.add.sprite(0,0,5);
        storyimg5.scale.setTo(scaleWidth,scaleHeight);
        game.add.tween(storyimg5).to({alpha:0},5000,Phaser.Easing.Exponential.In,true,6000*4,0,false);
        var storyimg4= game.add.sprite(0,0,4);
        storyimg4.scale.setTo(scaleWidth,scaleHeight);
        game.add.tween(storyimg4).to({alpha:0},5000,Phaser.Easing.Exponential.In,true,6000*3,0,false);
        var storyimg3= game.add.sprite(0,0,3);
        storyimg3.scale.setTo(scaleWidth,scaleHeight);
        game.add.tween(storyimg3).to({alpha:0},5000,Phaser.Easing.Exponential.In,true,6000*2,0,false);
        var storyimg2= game.add.sprite(0,0,2);
        storyimg2.scale.setTo(scaleWidth,scaleHeight);
        game.add.tween(storyimg2).to({alpha:0},5000,Phaser.Easing.Exponential.In,true,6000*1,0,false);
        var storyimg1= game.add.sprite(0,0,1);
        storyimg1.scale.setTo(scaleWidth,scaleHeight);
        game.add.tween(storyimg1).to({alpha:0},5000,Phaser.Easing.Exponential.In,true,0,0,false);
     //    var storyimg = game.add.sprite(0,0,2);
     //    storyimg.scale.setTo(scaleWidth,scaleHeight);
     //    game.add.tween(storyimg).to({alpha:0},5000,Phaser.Easing.Linear.None,true,10000,0,false);
	   // map = game.add.sprite(0, 0, 'map');
     // map.scale.setTo(scaleWidth,scaleHeight);
		 // var Height = game.cache.getImage("noodle").height;
		 // var Width = game.cache.getImage("noodle").width;
    //  storyimg.inputEnabled = true;
     // storyimg.events.onInputDown.add(this.start,this);
      setTimeout(function(){
         game.input.onDown.add(storyState.start,self);
      },12*6000+5000);
   },
   start:function(){
     game.state.start('menu');
   }
};
