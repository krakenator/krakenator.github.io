var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Krakenator;
(function (Krakenator) {
    (function (EnemyType) {
        EnemyType[EnemyType["RED"] = 0] = "RED";
        EnemyType[EnemyType["BLACK"] = 1] = "BLACK";
    })(Krakenator.EnemyType || (Krakenator.EnemyType = {}));
    var EnemyType = Krakenator.EnemyType;
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy(game, x, y) {
            _super.call(this, game, x, y, "enemy", 0);
            this.game = game;
            this.anchor.set(0.5, 0.5);
            this.pivot.set(0.5, 0.5);
            this.StartWalking();
        }
        Enemy.prototype.update = function () {
            _super.prototype.update.call(this);
        };
        Enemy.prototype.StartWalking = function () {
        };
        Enemy.prototype.GameOver = function () {
            this.game.state.start("GameOverState");
        };
        Enemy.MAX_SPEED = 30;
        return Enemy;
    }(Phaser.Sprite));
    Krakenator.Enemy = Enemy;
})(Krakenator || (Krakenator = {}));
