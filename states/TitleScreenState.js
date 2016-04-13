var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Krakenator;
(function (Krakenator) {
    var TitleScreenState = (function (_super) {
        __extends(TitleScreenState, _super);
        function TitleScreenState() {
            _super.call(this);
        }
        TitleScreenState.prototype.preload = function () {
            this.game.load.image("bg", "assets/bg.png");
            this.game.load.image("bg2", "assets/bg2.png");
            this.game.load.image("bg3", "assets/bg3.png");
            this.game.load.image("bg4", "assets/bg4.png");
            this.game.load.image("bg5", "assets/bg5.png");
            this.game.load.image("bg6", "assets/bg6.png");
        };
        TitleScreenState.prototype.create = function () {
            this.TitleScreenImage = this.add.sprite(0, 0, "bg5");
            this.game.time.events.add(500, this.timeout, this);
        };
        TitleScreenState.prototype.timeout = function () {
            this.input.onTap.addOnce(this.titleClicked, this);
        };
        TitleScreenState.prototype.titleClicked = function () {
            this.game.state.start("HelpState");
        };
        return TitleScreenState;
    }(Phaser.State));
    Krakenator.TitleScreenState = TitleScreenState;
})(Krakenator || (Krakenator = {}));
