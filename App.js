var Game;
(function (Game) {
    var DebugginGame = (function () {
        function DebugginGame() {
            this.game = new Phaser.Game(1000, 545, Phaser.AUTO, 'content', {
                create: this.create
            });
        }
        DebugginGame.prototype.create = function () {
            this.game.state.add("HelpState", Krakenator.HelpState, false);
            this.game.state.add("GameOver", Krakenator.GameOver, false);
            this.game.state.add("SaveState", Krakenator.SaveState, false);
            this.game.state.add("MainState", Krakenator.MainState, false);
            this.game.state.add("TitleScreenState", Krakenator.TitleScreenState, false);
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.state.start("TitleScreenState", true, true);
        };
        return DebugginGame;
    }());
    Game.DebugginGame = DebugginGame;
})(Game || (Game = {}));
window.onload = function () {
    var game = new Game.DebugginGame();
};
