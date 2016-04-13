module Game {
    export class DebugginGame {
        game : Phaser.Game;

        constructor() {
            this.game = new Phaser.Game(1000, 545, Phaser.AUTO, 'content', {
                create: this.create
            });
 
        }

        create() {
            this.game.state.add("HelpState", Krakenator.HelpState, false);
            this.game.state.add("SaveState", Krakenator.SaveState, false);
            this.game.state.add("MainState", Krakenator.MainState, false);
            this.game.state.add("TitleScreenState", Krakenator.TitleScreenState, false);
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.state.start("TitleScreenState", true, true);
        }

    }
}

window.onload = () => {
    var game = new Game.DebugginGame();
}
