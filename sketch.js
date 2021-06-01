var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;


function preload() {
  bgimg = loadImage("bg.png")
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-20);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(bgimg)
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
