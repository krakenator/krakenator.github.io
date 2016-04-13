var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Krakenator;
(function (Krakenator) {
    var GameOver = (function (_super) {
        __extends(GameOver, _super);
        function GameOver() {
            _super.call(this);
        }
        GameOver.prototype.create = function () {
            this.bg = this.add.sprite(0, 0, "bg6");
            this.game.time.events.add(Phaser.Timer.SECOND * 1, this.timeout, this);
        };
        GameOver.prototype.timeout = function () {
            this.input.onTap.addOnce(this.titleClicked, this);
        };
        GameOver.prototype.titleClicked = function () {
            this.game.state.start("MainState", false, false, [0, false, 1]);
        };
        return GameOver;
    }(Phaser.State));
    Krakenator.GameOver = GameOver;
})(Krakenator || (Krakenator = {}));
