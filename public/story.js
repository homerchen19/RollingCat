var storyState = {
   create:function(){
        var storyimg13= game.add.sprite(0,0,13);
        storyimg13.scale.setTo(scaleWidth,scaleHeight);
        storyimg13.inputEnabled = true;
        storyimg13.events.onInputDown.add(this.start, this);
        var storyimg12= game.add.sprite(0,0,12);
        storyimg12.scale.setTo(scaleWidth,scaleHeight);
        storyimg12.inputEnabled = true;
        storyimg12.events.onInputDown.add(this.start, this);
        var storyimg11= game.add.sprite(0,0,11);
        storyimg11.scale.setTo(scaleWidth,scaleHeight);
        storyimg11.inputEnabled = true;
        storyimg11.events.onInputDown.add(this.start, this);
        var storyimg10= game.add.sprite(0,0,10);
        storyimg10.scale.setTo(scaleWidth,scaleHeight);
        storyimg10.inputEnabled = true;
        storyimg10.events.onInputDown.add(this.start, this);
        var storyimg9= game.add.sprite(0,0,9);
        storyimg9.scale.setTo(scaleWidth,scaleHeight);
        storyimg9.inputEnabled = true;
        storyimg9.events.onInputDown.add(this.start, this);
        var storyimg8= game.add.sprite(0,0,8);
        storyimg8.scale.setTo(scaleWidth,scaleHeight);
        storyimg8.inputEnabled = true;
        storyimg8.events.onInputDown.add(this.start, this);
        var storyimg7= game.add.sprite(0,0,7);
        storyimg7.scale.setTo(scaleWidth,scaleHeight);
        storyimg7.inputEnabled = true;
        storyimg7.events.onInputDown.add(this.start, this);
        //game.add.tween(storyimg7).to({alpha:0},5000,Phaser.Easing.Exponential.In,true,6000*6,0,false);
        var  storyimg6= game.add.sprite(0,0,6);
        storyimg6.scale.setTo(scaleWidth,scaleHeight);
        storyimg6.inputEnabled = true;
        storyimg6.events.onInputDown.add(this.start, this);
        //game.add.tween(storyimg6).to({alpha:0},5000,Phaser.Easing.Exponential.In,true,6000*5,0,false);
        var storyimg5= game.add.sprite(0,0,5);
        storyimg5.scale.setTo(scaleWidth,scaleHeight);
        //game.add.tween(storyimg5).to({alpha:0},5000,Phaser.Easing.Exponential.In,true,6000*4,0,false);
        storyimg5.inputEnabled = true;
        storyimg5.events.onInputDown.add(this.start, this);
        var storyimg4= game.add.sprite(0,0,4);
        storyimg4.scale.setTo(scaleWidth,scaleHeight);
        storyimg4.inputEnabled = true;
        storyimg4.events.onInputDown.add(this.start, this);
        var storyimg3= game.add.sprite(0,0,3);
        storyimg3.scale.setTo(scaleWidth,scaleHeight);
        storyimg3.inputEnabled = true;
        storyimg3.events.onInputDown.add(this.start, this);
        var storyimg2= game.add.sprite(0,0,2);
        storyimg2.scale.setTo(scaleWidth,scaleHeight);
        storyimg2.inputEnabled = true;
        storyimg2.events.onInputDown.add(this.start, this);
        var storyimg1= game.add.sprite(0,0,1);
        storyimg1.scale.setTo(scaleWidth,scaleHeight);
        storyimg1.inputEnabled = true;
        storyimg1.events.onInputDown.add(this.start, this);
   },
   start:function(obj){
    game.add.tween(obj).to({alpha:0},2000,Phaser.Easing.Quintic.Out,true,0,0,false);
    setTimeout(function(){
         obj.destroy();
    },1000);
    if(obj.key=='13'){
      game.state.start('menu');
    }
   }
};
