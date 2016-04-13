module Krakenator {

    export class GameSceneGholi extends Phaser.Sprite {
        game: Phaser.Game;
        nextFrame: Phaser.Sprite;



        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y, "bg", 0);
            this.game = game;
            this.nextFrame = new Phaser.Sprite(this.game, this.width, 0, "bg", 0);
            this.game.add.existing(this.nextFrame);
        }
    }
}
