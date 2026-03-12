import { MovableObject } from "./movable-object.class.js";

export class BackgroundObject extends MovableObject {

    width = 720;
    height = 400;
    constructor(imagePath, x, y) {
        super().loadImage(imagePath);
        this.y = y;
        this.x = x;
    }
}