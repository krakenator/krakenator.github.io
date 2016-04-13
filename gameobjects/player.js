var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Krakenator;
(function (Krakenator) {
    (function (PlayerState) {
        PlayerState[PlayerState["IDLE"] = 0] = "IDLE";
        PlayerState[PlayerState["WALKING"] = 1] = "WALKING";
    })(Krakenator.PlayerState || (Krakenator.PlayerState = {}));
    var PlayerState = Krakenator.PlayerState;
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y) {
            _super.call(this, game, x, y, "kraken", 0);
            this.anchor.set(0.5, 0.5);
            this.pivot.set(0.5, 0.5);
            this.StartWalking();
        }
        Player.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        Player.prototype.StartWalking = function () {
            this.loadTexture("kraken", 0);
            this.animations.add("wiggle");
        };
        Player.MAX_SPEED = 30;
        return Player;
    }(Phaser.Sprite));
    Krakenator.Player = Player;
})(Krakenator || (Krakenator = {}));
