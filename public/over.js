var overState = {
    create: function() {
        var estoryimg6 = game.add.sprite(0, 0, 'e6');
        estoryimg6.scale.setTo(scaleWidth, scaleHeight);
        estoryimg6.inputEnabled = true;
        estoryimg6.events.onInputDown.add(this.start, this);
        var estoryimg5 = game.add.sprite(0, 0, 'e5');
        estoryimg5.scale.setTo(scaleWidth, scaleHeight);
        estoryimg5.inputEnabled = true;
        estoryimg5.events.onInputDown.add(this.start, this);
        var estoryimg4 = game.add.sprite(0, 0, 'e4');
        estoryimg4.scale.setTo(scaleWidth, scaleHeight);
        estoryimg4.inputEnabled = true;
        estoryimg4.events.onInputDown.add(this.start, this);
        var estoryimg3 = game.add.sprite(0, 0, 'e3');
        estoryimg3.scale.setTo(scaleWidth, scaleHeight);
        estoryimg3.inputEnabled = true;
        estoryimg3.events.onInputDown.add(this.start, this);
        var estoryimg2 = game.add.sprite(0, 0, 'e2');
        estoryimg2.scale.setTo(scaleWidth, scaleHeight);
        estoryimg2.inputEnabled = true;
        estoryimg2.events.onInputDown.add(this.start, this);
        //game.add.tween(estoryimg2).to({alpha:0},3000,Phaser.Easing.Exponential.In,true,3000*1,0,false);
        var estoryimg1 = game.add.sprite(0, 0, 'e1');
        estoryimg1.scale.setTo(scaleWidth, scaleHeight);
        estoryimg1.inputEnabled = true;
        estoryimg1.events.onInputDown.add(this.start, this);
        music_2 = game.add.audio('m_story');
        music_2.loop = true;
        music_2.play();
    },
    start: function(obj) {
        game.add.tween(obj).to({
            alpha: 0
        }, 2000, Phaser.Easing.Quintic.Out, true, 0, 0, false);
        setTimeout(function() {
            obj.destroy();
        }, 1000);
        if (obj.key == 'e6') {
            music_2.destroy();
            game.state.start('menu');
        }
    }
};
