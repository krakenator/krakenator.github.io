module Krakenator {
    export enum PlayerState { IDLE, WALKING }

    export class Player extends Phaser.Sprite {
        game: Phaser.Game;

        public static MAX_SPEED: number = 30;

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, "kraken", 0);

            this.anchor.set(0.5, 0.5);
            this.pivot.set(0.5,0.5);
            this.StartWalking();
        }

        update() {
            // if (this.playerState == PlayerState.WALKING) {
            //     this.x += (this.walkingSpeed / Player.MAX_SPEED) * (60 / this.game.time.elapsedMS);

                // This logic depends on scene being added first.
                // var stageWidth = this.game.stage.getChildAt(0).getBounds().width;
                // if (this.x > stageWidth * .75)
                //     this.x = stageWidth * .25;
            // }
            // if (this.walkingSpeed > 0)
            //     this.animations.currentAnim.speed = this.walkingSpeed;
            super.update();
        }




        StartWalking() {
            this.loadTexture("kraken", 0);
            this.animations.add("wiggle");
            //this.animations.play("walk", this.walkingSpeed, true);
        }



    }
}
