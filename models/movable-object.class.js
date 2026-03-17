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
        console.log('test');
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }
}