import { BackgroundObject } from "./background-object.class.js";
import { Character } from "./character.class.js";
import { Chicken } from "./chicken.class.js";
import { Cloud } from "./cloud.class.js";

export class World {

    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ]
    clouds = [
        new Cloud(),
    ];
    backgroundObjects = [
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0,80)
    ];
    canvas;
    ctx;

    constructor(canvas) {
        // mit Context kann man viele Variablen aufrufen wie drawImage()
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.backgroundObjects);

        // self, weil this nicht funktioniert bei request - kennt aktuelle "welt" nicht drinnen
        let self = this;
        // Draw() wird immer wieder aufgerufen
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(mO) {
        this.ctx.drawImage(mO.img, mO.x, mO.y, mO.width, mO.height);
    }
}