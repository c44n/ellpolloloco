import { ImageHub } from "../manager_classes/image-hub.js";
import { MovableObject } from "./movable-object.class.js";

export class Character extends MovableObject {
    height = 280;
    y = 155;
    imagesWalk = ImageHub.CHARACTER.walk;
    speed = 20;
    world;

    constructor() {
        super().loadImage(this.imagesWalk[0]);

        this.loadImages(this.imagesWalk);

        this.animate();
    }

    animate() {
        setInterval(() => {
            if(this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
                
            }

            if(this.world.keyboard.LEFT && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
                
            }

            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);


        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                // Walk animation
                this.playAnimations(this.imagesWalk);
            }
        }, 45);
    }


    jump() {

    }


}