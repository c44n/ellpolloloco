import { MovableObject } from "./movable-object.class.js";

export class Cloud extends MovableObject {
    x = 0 + Math.random() * 500;
    y = 25;
    width = 500;
    height = 300;

    constructor() {
        super().loadImage('img/5_background/layers/4_clouds/1.png');

        this.animate();
    }

    animate() {
        this.moveLeft();
    }

    
}