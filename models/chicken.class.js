import { ImageHub } from "../manager_classes/image-hub.js";
import { IntervalHub } from "../manager_classes/intervall-hub.js";
import { MovableObject } from "./movable-object.class.js";

export class Chicken extends MovableObject {
    height = 60;
    width = 60;
    y = 365;
    imagesWalk = ImageHub.CHICKEN.walk;

    constructor() {
        super().loadImage(this.imagesWalk[0]);
        this.loadImages(this.imagesWalk);

        this.x = 200 + Math.random() * 500;
        this.speed = 0.15 + Math.random() * 0.45;

        this.moveLeft();
        IntervalHub.startInterval(this.walkAnimation, 1000 / 15);
    }

    walkAnimation = () => {
        this.playAnimations(this.imagesWalk);
    };

    
}