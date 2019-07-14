// ball and move speed
const GRAVITY = 0.5;
const DEFAULT_VELOCITY = 5;
//basics
var gameScreen;
var score;
//player is the slider
var player;
var playerStartX, playerStartY;
//the blocks obviously
var blocks;

window.addEventListener("keydown", function(e)){
  var key =  e.which || e.keyCode;
  var gameKeys = [37,39];
  if(gameKeys.indexOf(key) >= 0) {
    e.preventDefault();
  }
}
function preload(){
  player = loadImage("slider.png");
  blocks =
}
function setup(){
  gameScreen = createCanvas(1200,720);
  gameScreen.parent("#game-screen");
  playerStartX = 600;
  playerStartY = 650;
}
function draw(){
  applyGravity();
  checkCollision();
  updatePLayer();
  updateDisplay();
  updateBlocks();
  drawSprites();
}
function resetGame(){
  allSprites.clear();
  buildLevel();
  createPlayer();
  score = 0;
  gamePaused=false;
  loop();
}
function buildLevel(){

}
function updateDisplay(){
  //background stuff
  background(0,0,0);
  image(backgroundImage, 0,0);;
  //update the score
  textSize(32);
  fill(255);
  text("Score" + 30,50);
}
function executeLoss(){
  noLoop();
  setTimeout(resetGame,1000);
}
function executeWin(){
  backgroundImage = loadImage("nm.jpeg");
}
function pause(){
  if(keyIsDown == "p"){
    paused=true;
  }else if(keyIsDown == "p"){
    gamePaused=false;
  }
}
