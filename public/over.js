var overState = {
  create:function(){
        var  estoryimg6= game.add.sprite(0,0,'e6');
        estoryimg6.scale.setTo(scaleWidth,scaleHeight);
        var estoryimg5= game.add.sprite(0,0,'e5');
        estoryimg5.scale.setTo(scaleWidth,scaleHeight);
        game.add.tween(estoryimg5).to({alpha:0},3000,Phaser.Easing.Exponential.In,true,3000*4,0,false);
        var estoryimg4= game.add.sprite(0,0,'e4');
        estoryimg4.scale.setTo(scaleWidth,scaleHeight);
        game.add.tween(estoryimg4).to({alpha:0},3000,Phaser.Easing.Exponential.In,true,3000*3,0,false);
        var estoryimg3= game.add.sprite(0,0,'e3');
        estoryimg3.scale.setTo(scaleWidth,scaleHeight);
        game.add.tween(estoryimg3).to({alpha:0},3000,Phaser.Easing.Exponential.In,true,3000*2,0,false);
        var estoryimg2= game.add.sprite(0,0,'e2');
        estoryimg2.scale.setTo(scaleWidth,scaleHeight);
        game.add.tween(estoryimg2).to({alpha:0},3000,Phaser.Easing.Exponential.In,true,3000*1,0,false);
        var estoryimg1= game.add.sprite(0,0,'e1');
        estoryimg1.scale.setTo(scaleWidth,scaleHeight);
        game.add.tween(estoryimg1).to({alpha:0},3000,Phaser.Easing.Exponential.In,true,0,0,false);
      setTimeout(function(){
         game.input.onDown.add(overState.start,self);
      },3000*6);
  },
  start:function(){
    game.state.start('menu');
  }
};
