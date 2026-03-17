import { ImageHub } from "../manager_classes/image-hub.js";
import { IntervalHub } from "../manager_classes/intervall-hub.js";
import { MovableObject } from "./movable-object.class.js";

export class Character extends MovableObject {
    height = 280;
    y = 80;
    imagesWalk = ImageHub.CHARACTER.walk;
    speed = 20;
    world;

    constructor() {
        super().loadImage(this.imagesWalk[0]);
        this.loadImages(this.imagesWalk);
        this.applyGravity();
        IntervalHub.startInterval(this.startAndEndPoint, 1000 / 60);
        IntervalHub.startInterval(this.walkAnimation, 1000 / 15);
    }

    startAndEndPoint = () => {
        if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.x += this.speed;
            this.otherDirection = false;

        }

        if (this.world.keyboard.LEFT && this.x > 0) {
            this.x -= this.speed;
            this.otherDirection = true;

        }

        this.world.camera_x = -this.x + 100;
    }

    walkAnimation = () => {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            // Walk animation
            this.playAnimations(this.imagesWalk);
        }
    };


    jump() {

    }


}