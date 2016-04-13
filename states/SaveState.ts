module Krakenator{
    export class SaveState extends Phaser.State {


        textValue: Phaser.Text;
        updateCount: number;
        bg : Phaser.Sprite;
        level : number;
        constructor() {
            super();
        }

        init(args){
            this.level = args[0];
        }

        create() {
            this.bg = this.add.sprite(0,0,"bg3");
            var style = { font: "45px Arial", fill: "#fff", align: "center" };
            this.textValue = this.game.add.text(300, 300, "Level " + this.level + " finished.", style);
            this.updateCount = 0;
            this.game.time.events.add(Phaser.Timer.SECOND * 1, this.timeout, this);
        }

        timeout(){
        this.input.onTap.addOnce(this.titleClicked,this); // <-- that um, this is extremely important
        }

        titleClicked (){
            this.game.state.start("MainState", false, false, [0, true, this.level+1]);
        }

        update() {
            // this.textValue.text = (this.updateCount++).toString();
        }

        render() {
        }
    }
}
