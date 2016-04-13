var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Krakenator;
(function (Krakenator) {
    var MainState = (function (_super) {
        __extends(MainState, _super);
        function MainState() {
            _super.call(this);
            this.speed = 500;
            this.newBugTime = 0;
            this.rednewBugTime = 0;
            this.redbugAlive = 0;
            this.score = 0;
        }
        MainState.prototype.init = function (args) {
            this.score = args[0];
            this.redBugsEnabled = args[1];
            this.level = args[2];
        };
        MainState.prototype.preload = function () {
            this.bg = this.add.sprite(0, 0, "bg");
            this.game.load.image("enemy", "assets/blackbug.png");
            this.game.load.image("redbug", "assets/redbug.png");
            this.game.load.spritesheet("kraken", "assets/kraken.png", 60, 60, 4);
        };
        MainState.prototype.create = function () {
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.gamescene = new Krakenator.GameSceneGholi(this.game, 0, 0);
            this.game.add.existing(this.gamescene);
            this.game.world.setBounds(0, 0, this.gamescene.width, this.gamescene.height);
            this.player = new Krakenator.Player(this.game, 0, this.game.height - 50);
            this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
            this.game.add.existing(this.player);
            this.game.camera.follow(this.player);
            this.input.onTap.add(this.titleClicked, this);
            this.bugs = this.game.add.group();
            this.bugs.enableBody = true;
            this.bugs.physicsBodyType = Phaser.Physics.ARCADE;
            this.bugs.createMultiple(3, 'enemy');
            this.redbugs = this.game.add.group();
            this.redbugs.enableBody = true;
            this.redbugs.physicsBodyType = Phaser.Physics.ARCADE;
            this.redbugs.createMultiple(1, 'redbug');
            this.scoreText = this.game.add.text(5, 5, 'Score:', { font: '32px Arial', fill: '#14a95a' });
            this.timeText = this.game.add.text(800, 5, 'Time Left:', { font: '32px Arial', fill: '#14a95a' });
            this.game.time.events.add((Phaser.Timer.SECOND * 33 - this.level * 3000), this.timeout, this);
        };
        MainState.prototype.timeout = function () {
            this.game.state.start("GameOver");
        };
        MainState.prototype.titleClicked = function () {
            var duration = (Phaser.Point.distance(this.player.position, this.game.input.mousePointer.position) / this.speed) * 1000;
            if (this.animation != null)
                this.animation.stop();
            this.animation = this.game.add.tween(this.player);
            this.animation.to({ x: this.game.input.mousePointer.x, y: this.game.input.mousePointer.y }, duration, Phaser.Easing.Quintic.InOut, false, 0, 0, false);
            this.player.animations.play("wiggle", 10, true);
            this.animation.onComplete.add(this.reachedThere, this);
            this.animation.start();
        };
        MainState.prototype.reachedThere = function () {
            this.player.animations.stop("wiggle", true);
        };
        MainState.prototype.update = function () {
            this.timeText.text = "Time Left:" + Math.floor(this.game.time.events.duration / 1000);
            this.scoreText.text = 'Score:' + this.score;
            if (this.score >= 10) {
                this.game.state.start("SaveState", false, false, [this.level]);
            }
            if (this.redBugsEnabled)
                this.game.physics.arcade.overlap(this.player, this.redbugs, this.redcollisionHandler, null, this);
            this.game.physics.arcade.overlap(this.player, this.bugs, this.collisionHandler, null, this);
            if (this.game.time.now > this.newBugTime) {
                this.bug = this.bugs.getFirstExists(false);
                if (this.bug) {
                    this.bug.anchor.set(0.5, 0.5);
                    this.bug.pivot.set(0.5, 0.5);
                    this.bug.reset(20 + this.game.rnd.integerInRange(0, 950), 20 + this.game.rnd.integerInRange(0, 500));
                    this.newBugTime = this.game.time.now + 200;
                    this.rotationAnimation = this.game.add.tween(this.bug).to({ angle: 360 }, this.game.rnd.integerInRange(2, 7) * 100, Phaser.Easing.Linear.None, false, 0, 10, true);
                    this.rotationAnimation.onComplete.add(this.rotationCompleted, this);
                    this.rotationAnimation.start();
                }
            }
            if (this.redBugsEnabled) {
                if (this.game.time.now > this.rednewBugTime) {
                    this.redbug = this.redbugs.getFirstExists(false);
                    if (this.redbug) {
                        this.redbug.anchor.set(0.5, 0.5);
                        this.redbug.pivot.set(0.5, 0.5);
                        this.redbug.reset(20 + this.game.rnd.integerInRange(0, 950), 20 + this.game.rnd.integerInRange(0, 500));
                        this.rednewBugTime = this.game.time.now + 10000;
                        this.redbugAlive += 1;
                    }
                }
            }
        };
        MainState.prototype.collisionHandler = function (player, bug) {
            if (this.redBugsEnabled && this.redbugAlive > 0)
                return;
            bug.kill();
            this.score += 1;
        };
        MainState.prototype.rotationCompleted = function (bug) {
            bug.kill();
        };
        MainState.prototype.redcollisionHandler = function (player, redbug) {
            redbug.kill();
            this.redbugAlive -= 1;
            this.score += 4;
        };
        MainState.prototype.render = function () {
        };
        return MainState;
    }(Phaser.State));
    Krakenator.MainState = MainState;
})(Krakenator || (Krakenator = {}));
