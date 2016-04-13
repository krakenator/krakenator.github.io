module Krakenator{
    export class GameOver extends Phaser.State {

        updateCount: number;
        bg : Phaser.Sprite;
        constructor() {
            super();
        }

        create() {
            this.bg = this.add.sprite(0,0,"bg6");
            this.game.time.events.add(Phaser.Timer.SECOND * 1, this.timeout, this);
        }

        timeout(){
        this.input.onTap.addOnce(this.titleClicked,this); // <-- that um, this is extremely important
        }

        titleClicked (){
            this.game.state.start("MainState", false, false, [0, false,1]);
        }
    }
}
