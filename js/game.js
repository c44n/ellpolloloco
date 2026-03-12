import { World } from "../models/world.class.js";

let canvas;
let ctx;
let world = new World();


function init(){
    canvas = document.getElementById('canvas');
    // mit Context kann man viele Variablen aufrufen wie drawImage()
    ctx = canvas.getContext('2d');

    window.character = world.character;
    window.enemies = world.enemies;
    console.log('My Character is', world.character);
    
}

init();