module Krakenator{
    export class MainState extends Phaser.State {
        game : Phaser.Game;
        player : Krakenator.Player;
        gamescene : Krakenator.GameSceneGholi;
        animation : Phaser.Tween;
        speed : number = 500;
        duration: number;
        bugs : Phaser.Group;
        bug : Phaser.Sprite;
        newBugTime : number = 0;
        redbugs : Phaser.Group;
        redbug : Phaser.Sprite;
        rednewBugTime : number = 0;
        redbugAlive : number = 0;
        score: number = 0;
        scoreText : Phaser.Text;
        timeText : Phaser.Text;
        redBugsEnabled : boolean;
        rotationAnimation : Phaser.Tween;
        bg: Phaser.Sprite;
        level: number;
        constructor() {
            super();
        }

        init(args){
            this.score = args[0];
            this.redBugsEnabled = args[1];
            this.level = args[2];
        }
        preload(){
            // this.game.load.image("gholi", "assets/space.jpg");
            //Spritesheets
            this.bg = this.add.sprite(0,0,"bg");
            this.game.load.image("enemy", "assets/blackbug.png");
            this.game.load.image("redbug", "assets/redbug.png");
            this.game.load.spritesheet("kraken", "assets/kraken.png", 60,60, 4);
        }

        create() {
            // this.score = 0;
            this.game.physics.startSystem(Phaser.Physics.ARCADE);

            this.gamescene = new Krakenator.GameSceneGholi(this.game, 0, 0);
            this.game.add.existing(this.gamescene);
            this.game.world.setBounds(0,0,this.gamescene.width,
                this.gamescene.height);
            this.player = new Krakenator.Player(this.game, 0, this.game.height - 50);
            this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
            this.game.add.existing(this.player);
            this.game.camera.follow(this.player);
            // this.input.onTap.addOnce(this.titleClicked,this);
            this.input.onTap.add(this.titleClicked,this);
            // normal bugs
            this.bugs = this.game.add.group();
            this.bugs.enableBody = true;
            this.bugs.physicsBodyType = Phaser.Physics.ARCADE;
            this.bugs.createMultiple(3, 'enemy');

            // red bugs
            this.redbugs = this.game.add.group();
            this.redbugs.enableBody = true;
            this.redbugs.physicsBodyType = Phaser.Physics.ARCADE;
            this.redbugs.createMultiple(1, 'redbug');

            this.scoreText = this.game.add.text(5, 5, 'Score:', {font: '32px Arial', fill: '#14a95a'});
            this.timeText = this.game.add.text(800, 5, 'Time Left:', {font: '32px Arial', fill: '#14a95a'});

            this.game.time.events.add( (Phaser.Timer.SECOND * 33 - this.level*3000), this.timeout, this);
        }

        timeout(){
            this.game.state.start("GameOver");
        }
        titleClicked (){
            // this.game.state.start("TitleScreenState");
            // this.animation.stop(true);
            var duration = (Phaser.Point.distance(this.player.position, this.game.input.mousePointer.position ) / this.speed) * 1000;
            if(this.animation!=null)
                this.animation.stop();
            this.animation = this.game.add.tween(this.player);
            this.animation.to(
                {x: this.game.input.mousePointer.x, y: this.game.input.mousePointer.y},
                duration,
                Phaser.Easing.Quintic.InOut,
                false,
                0,
                0,
                false);
            this.player.animations.play("wiggle", 10, true);
            this.animation.onComplete.add(this.reachedThere, this);
            this.animation.start();
        }

        reachedThere(){
            this.player.animations.stop("wiggle", true);
        }

        update() {
            this.timeText.text = "Time Left:" + Math.floor(this.game.time.events.duration/1000);
            this.scoreText.text = 'Score:' + this.score;
            if(this.score>=10){
                this.game.state.start("SaveState", false, false, [this.level]);
                // alert("sht");
            }
            if(this.redBugsEnabled)
                this.game.physics.arcade.overlap(this.player, this.redbugs ,this.redcollisionHandler, null, this);
            this.game.physics.arcade.overlap(this.player, this.bugs ,this.collisionHandler, null, this);
            if(this.game.time.now > this.newBugTime){
                this.bug = this.bugs.getFirstExists(false);
                if(this.bug){
                    this.bug.anchor.set(0.5, 0.5);
                    this.bug.pivot.set(0.5, 0.5);
                    this.bug.reset(
                        20 + this.game.rnd.integerInRange(0,950),
                        20 + this.game.rnd.integerInRange(0,500));
                    this.newBugTime = this.game.time.now + 200;
                    this.rotationAnimation = this.game.add.tween(this.bug).to(
                         { angle: 360 },
                         this.game.rnd.integerInRange(2,7)*100,
                         Phaser.Easing.Linear.None, false, 0,10,true);
                    this.rotationAnimation.onComplete.add(this.rotationCompleted, this);
                    this.rotationAnimation.start();
                }
            }
            if(this.redBugsEnabled){
                if(this.game.time.now > this.rednewBugTime){
                    this.redbug = this.redbugs.getFirstExists(false);
                    if(this.redbug){
                        this.redbug.anchor.set(0.5, 0.5);
                        this.redbug.pivot.set(0.5, 0.5);
                        this.redbug.reset(
                            20 + this.game.rnd.integerInRange(0,950),
                            20 + this.game.rnd.integerInRange(0,500));
                        this.rednewBugTime = this.game.time.now + 10000;
                        this.redbugAlive += 1;
                    }
                }
            }
        }

        collisionHandler(player, bug){
            if(this.redBugsEnabled && this.redbugAlive>0)
                return;
            bug.kill();
            this.score += 1;
        }

        rotationCompleted(bug){
            bug.kill();
        }
        redcollisionHandler(player, redbug){
            redbug.kill();
            this.redbugAlive -= 1;
            this.score += 4;
        }
        render() {

        }
    }
}
