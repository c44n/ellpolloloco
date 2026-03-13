import { ImageHub } from "../manager_classes/image-hub.js";
import { MovableObject } from "./movable-object.class.js";

export class Character extends MovableObject {
    height = 280;
    y = 155;
    imagesWalk = ImageHub.CHARACTER.walk;
    currentImage = 0;

    constructor() {
        // super().loadImage('img/2_character_pepe/2_walk/W-21.png');

        super().loadImages(this.imagesWalk);

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.imagesWalk.length;
            let path = this.imagesWalk[i];
            this.img = this.imageCache[path];       
            this.currentImage++;     
        }, 100);
    }


    jump() {

    }


}