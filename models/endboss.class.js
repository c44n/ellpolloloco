import { ImageHub } from "../manager_classes/image-hub.js";
import { MovableObject } from "./movable-object.class.js";

export class Endboss extends MovableObject {
    height = 400;
    width = 250;
    y = 55;

    imagesWalk = ImageHub.ENDBOSS.angry;

    constructor() {
        super().loadImage(this.imagesWalk[0]);
        this.loadImages(this.imagesWalk);

        this.x = 2500;

        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimations(this.imagesWalk);   
        }, 1000 / 15);
    }
}