var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Krakenator;
(function (Krakenator) {
    var GameSceneGholi = (function (_super) {
        __extends(GameSceneGholi, _super);
        function GameSceneGholi(game, x, y) {
            _super.call(this, game, x, y, "bg", 0);
            this.game = game;
            this.nextFrame = new Phaser.Sprite(this.game, this.width, 0, "bg", 0);
            this.game.add.existing(this.nextFrame);
        }
        return GameSceneGholi;
    }(Phaser.Sprite));
    Krakenator.GameSceneGholi = GameSceneGholi;
})(Krakenator || (Krakenator = {}));
