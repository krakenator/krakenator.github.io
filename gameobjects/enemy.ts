module Krakenator {
    export enum EnemyType { RED, BLACK }

    export class Enemy extends Phaser.Sprite {
        game: Phaser.Game;
        playerState: PlayerState;
        RIGHT_ARROW: Phaser.Key;
        LEFT_ARROW: Phaser.Key;
        ESCAPE: Phaser.Key;
        walkingSpeed: number;

        public static MAX_SPEED: number = 30;

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, "enemy", 0);
            this.game = game;
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
            // this.playerState = PlayerState.WALKING;
            // this.walkingSpeed = 0;
            // this.loadTexture("HERO_WALKING", 0);
            // this.animations.add("walk");
            //this.animations.play("walk", this.walkingSpeed, true);
        }


        GameOver() {
            this.game.state.start("GameOverState");
        }

    }
}
