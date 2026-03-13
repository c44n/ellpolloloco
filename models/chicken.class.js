import { ImageHub } from "../manager_classes/image-hub.js";
import { MovableObject } from "./movable-object.class.js";

export class Chicken extends MovableObject {
    height = 60;
    width = 60;
    y = 365;
    imagesWalk = ImageHub.CHICKEN.walk;

    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
        this.loadImages(this.imagesWalk);

        this.x = 200 + Math.random() * 500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.imagesWalk.length;
            let path = this.imagesWalk[i];
            this.img = this.imageCache[path];       
            this.currentImage++;     
        }, 1000 / 15);
    }

    
}