
var astronaut;
var bcground, bcgroundImg;
var eat, eatImg;
var sleeping, sleepImg;
var brush, brushImg;  
var gym, gymImg;
var drink, drinkImg;
var moveImg;

function preload(){
bcgroundImg = loadImage("iss.png");
eatImg = loadAnimation("eat1.png", "eat2.png");
sleepImg = loadAnimation("sleep.png");
brushImg = loadAnimation("brush.png");
drinkImg = loadAnimation("drink1.png","drink2.png");
gymImg = loadAnimation("gym1.png", "gym2.png", "gym11.png", "gym12.png");
moveImg = loadAnimation("move.png", "move1.png");
}

function setup() {
  createCanvas(800,400);
  
  bcground = createSprite(400, 200, 20, 20);
  bcground.addImage("bcground", bcgroundImg);
  bcground.scale = 0.2;
  
  astronaut = createSprite(400, 250, 40, 40);
  astronaut.addAnimation("sleep", sleepImg);
  astronaut.addAnimation("brush", brushImg);
  astronaut.addAnimation("drink", drinkImg);
  astronaut.addAnimation("eat", eatImg);
  astronaut.addAnimation("gym", gymImg);
  astronaut.addAnimation("move", moveImg);
  astronaut.scale = 0.1;

}

function draw() {
  background("red");  
  if(keyDown("UP_ARROW")) {
    astronaut.changeAnimation("brush", brushImg);
    astronaut.scale = 0.1
 }
  
 if(keyDown("DOWN_ARROW")) {
  astronaut.changeAnimation("eat", eatImg);
  astronaut.scale = 0.1
 }
 
 if(keyDown("LEFT_ARROW")) {
  astronaut.changeAnimation("drink", drinkImg);
  astronaut.scale = 0.1
 }
 if(keyDown("RIGHT_ARROW")) {
  astronaut.changeAnimation("gym", gymImg);
  astronaut.scale = 0.1
 }
 
 if(keyDown("m")){
  astronaut.addAnimation("move",moveImg) 
  astronaut.changeAnimation("move", moveImg);
  astronaut.scale = 0.1
  astronaut.velocityX = astronaut.velocityX =2
  astronaut.velocityY = astronaut.velocityY+1
 }
  
 drawSprites();

}