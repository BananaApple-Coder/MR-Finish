var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var img1, img2, img3, img4, ground, track
var show = false
var text

function preload(){
  img1 = loadImage("images/car1.png")
  img2 = loadImage("images/car2.png")
  img3 = loadImage("images/car3.png")
  img4 = loadImage("images/car4.png")
  ground = loadImage("images/ground.png")
  track = loadImage("images/track.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(track)
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }

  if (show === true){
    console.log("player won")
    text(text, width/2, height/2)
  }
  console.log(mouseX)
}
