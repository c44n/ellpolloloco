import { MovableObject } from "../models/movable-object.class.js";

let canvas;
let ctx;
let character = new MovableObject();


function init(){
    canvas = document.getElementById('canvas');
    // mit Context kann man viele Variablen aufrufen wie drawImage()
    ctx = canvas.getContext('2d');

    console.log('My Character is', character);
    
}

init();