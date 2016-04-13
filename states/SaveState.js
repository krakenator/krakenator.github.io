var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Krakenator;
(function (Krakenator) {
    var SaveState = (function (_super) {
        __extends(SaveState, _super);
        function SaveState() {
            _super.call(this);
        }
        SaveState.prototype.init = function (args) {
            this.level = args[0];
        };
        SaveState.prototype.create = function () {
            this.bg = this.add.sprite(0, 0, "bg3");
            var style = { font: "65px Arial", fill: "#ff0000", align: "center" };
            this.textValue = this.game.add.text(0, 0, "Level " + this.level + " finished.", style);
            this.updateCount = 0;
            this.game.time.events.add(Phaser.Timer.SECOND * 1, this.timeout, this);
        };
        SaveState.prototype.timeout = function () {
            this.input.onTap.addOnce(this.titleClicked, this);
        };
        SaveState.prototype.titleClicked = function () {
            this.game.state.start("MainState", false, false, [0, true, this.level + 1]);
        };
        SaveState.prototype.update = function () {
        };
        SaveState.prototype.render = function () {
        };
        return SaveState;
    }(Phaser.State));
    Krakenator.SaveState = SaveState;
})(Krakenator || (Krakenator = {}));
