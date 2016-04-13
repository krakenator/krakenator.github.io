module Krakenator{
    export class TitleScreenState extends Phaser.State {
        game : Phaser.Game;
         TitleScreenImage : Phaser.Sprite;
        // nextStateText : Phaser.Text;
        constructor(){
            super();
        }

        preload() {
            //image
            this.game.load.image("bg", "assets/bg.png");
            this.game.load.image("bg2", "assets/bg2.png");
            this.game.load.image("bg3", "assets/bg3.png");
            this.game.load.image("bg4", "assets/bg4.png");
            this.game.load.image("bg5", "assets/bg5.png");
            this.game.load.image("bg6", "assets/bg6.png");
        }

        create(){
            this.TitleScreenImage = this.add.sprite(0,0,"bg5");
            // this.TitleScreenImage.scale.setTo(this.game.width/ this.TitleScreenImage.width,
            // this.game.height/this.TitleScreenImage.height);
            // this.game.input.onDown.add(this.mouseDown);
            // var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
            // this.nextStateText = this.game.add.text(0,0, "Click to begin the game!", style);
            // this.input.onTap.addOnce(this.titleClicked,this); // <-- that um, this is extremely important
            this.game.time.events.add(500, this.timeout, this);
        }

        timeout(){
            this.input.onTap.addOnce(this.titleClicked,this); // <-- that um, this is extremely important
        }
        // mouseDown(event:MouseEvent) {
        //     //alert("sth");
        //     this.game.state.start("HelpState");
        // }

        titleClicked (){
            this.game.state.start("HelpState");
        }

    }
}
