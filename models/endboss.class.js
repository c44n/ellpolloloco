import { ImageHub } from "../manager_classes/image-hub.js";
import { IntervalHub } from "../manager_classes/intervall-hub.js";
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

        IntervalHub.startInterval(this.startAnimation, 1000/15);
    }

    startAnimation = () => {
        this.playAnimations(this.imagesWalk);
    };
}