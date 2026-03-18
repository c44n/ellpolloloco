import { IntervalHub } from "../manager_classes/intervall-hub.js";

export class MovableObject {
    x = 100;
    y = 280;
    height = 150;
    width = 100;
    img;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 60);
    }

    isAboveGround() {
        return this.y < 150;
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(images) {
        images.forEach(imagePath => {
            this.img = new Image();
            this.img.src = imagePath;
            this.imageCache[imagePath] = this.img;

        });
    }

    playAnimations(images) {
        let i = this.currentImage % this.imagesWalk.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = false;
    }

    jump() {
        this.speedY = 30;
    }
}