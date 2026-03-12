export class MovableObject {
    x = 100;
    y = 280;
    height = 150;
    width = 100;
    img;
    imageCache = {};



    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(images) {
        images.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = path;
            
        });
    }

    moveRight() {
        console.log('test');
    }

    moveLeft() {
        
    }
}