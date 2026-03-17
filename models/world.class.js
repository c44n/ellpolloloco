import { Character } from "./character.class.js";
import { level1 } from "/levels/level1.js";

export class World {

    character = new Character();
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        // mit Context kann man viele Variablen aufrufen wie drawImage()
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.draw();
    }

    setWorld() {
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

        this.ctx.translate(this.camera_x, 0);
        
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.clouds);
        this.addToMap(this.character);
        
        this.ctx.translate(-this.camera_x, 0);

        // Draw() wird immer wieder aufgerufen
        requestAnimationFrame( () => {this.draw()});
    }

    addObjectsToMap(objects) {
        objects.forEach(object => {
            this.addToMap(object);
        });
    }

    addToMap(mO) {
        if(mO.otherDirection) {
            this.ctx.save();
            // Bild verschieben -> aber verstehe ich nicht
            this.ctx.translate(mO.width, 0);
            // Spiegelt Bild
            this.ctx.scale(-1, 1);
            // kp
            mO.x = mO.x * -1;
        }
        this.ctx.drawImage(mO.img, mO.x, mO.y, mO.width, mO.height);

        if(mO.otherDirection) {
            mO.x = mO.x * -1;
            this.ctx.restore();
        }
    }
}