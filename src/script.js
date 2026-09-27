 

const GameViewPort = {

WIDTH:  1280,
HEIGHT: 720,


};

window.onload = function(){
const canvasEl= document.querySelector("canvas");

const ctx = canvasEl.getContext("2d");

canvasEl.width = GameViewPort.WIDTH;
canvasEl.height = GameViewPort.HEIGHT;

const playerCarImg = document.querySelector('img');

ctx.strokeStyle = 'yellow';
ctx.moveTo(0, 0);
ctx.lineTo(GameViewPort.WIDTH, GameViewPort.HEIGHT);
ctx.moveTo(GameViewPort.WIDTH, 0);
ctx.lineTo(0, GameViewPort.HEIGHT);
ctx.stroke();

ctx.drawImage(playerCarImg, 0, 0);
}



let x = 100
let y = 300
let radius = 50

let vx = 2
let vy = 2
let friction =0.90



