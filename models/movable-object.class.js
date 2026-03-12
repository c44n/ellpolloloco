export class MovableObject {
    x = 400;
    y = 120;
    img;
    height = 250;
    width = 100;



    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('test');
    }

    moveLeft() {
        
    }
}