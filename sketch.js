var canvas, backgroundImage;
var database;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;


var form, player, game;

var cars, car1, car2, car3, car4;
var car1i,car2i,car3i,car4i
var track,ground

function preload() {
  car1i=loadImage("images/Surfer 1.png")
  car2i=loadImage("images/Surfer 2.png")
  car3i=loadImage("images/Surfer 3.png")
  car4i=loadImage("images/Surfer 4..png")
  
  track=loadImage("images/Oceanbg.jpg")
  ground=loadImage("images/ground.png")
}
function setup(){
  canvas = createCanvas(displayWidth , displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState==2){
    game.end()
  }
}
