var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Krakenator;
(function (Krakenator) {
    var HelpState = (function (_super) {
        __extends(HelpState, _super);
        function HelpState() {
            _super.call(this);
        }
        HelpState.prototype.create = function () {
            this.bg = this.add.sprite(0, 0, "bg2");
            this.game.time.events.add(500, this.timeout, this);
        };
        HelpState.prototype.timeout = function () {
            this.input.onTap.addOnce(this.titleClicked, this);
        };
        HelpState.prototype.titleClicked = function () {
            this.game.state.start("MainState", false, false, [0, false, 1]);
        };
        return HelpState;
    }(Phaser.State));
    Krakenator.HelpState = HelpState;
})(Krakenator || (Krakenator = {}));
