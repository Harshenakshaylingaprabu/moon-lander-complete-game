let ground;
let lander;
var lander_img;
var bg_img,invisibleland
var isMoving=true
var obstaclesGroup
var gameOver
var gameState='play'
var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  gameOver=loadImage("gameover.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1
  lander.setCollider("circle",0,0,300  )
  invisibleland=createSprite(400,560,300,20);
  invisibleland.visible=true
  obstaclesGroup= new Group(); 
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  //push()
  //fill(255);
  //text("Vertical Position: "+round(lander.y),800,75);
  //pop();
  textSize(50)
  fill("red");
  text("MOON LANDER",450,150);
if(isMoving===true){
 
  if(keyDown(LEFT_ARROW)){
    lander.x-=4
  }

  if(keyDown(RIGHT_ARROW)){
    lander.x+=4
  }
  if(keyDown(UP_ARROW)){
    lander.y-=4
  }
  if(keyDown(DOWN_ARROW)){
    lander.y+=4
  }
}
  invisibleland.debug=false
  lander.debug=false
  
 

 if(lander.isTouching(invisibleland) ){
   console.log("working")
 text("You Landed safely",500,350)
 isMoving=false
 obstaclesGroup.destroyEach()
 obstaclesGroup.setVelocityXEach(0)
 }

 if(obstaclesGroup.isTouching(lander)){
   console.log("hello")
   text("Signal lost",500,350)
   gameState='end'
   isMoving=false
   obstaclesGroup.destroyEach()
   lander.addImage(gameOver)
   lander.scale=0.5
   lander.y=250
   lander.x=500
   lander.setCollider("circle",0,0,100  )
 }
if(gameState==='play'){
  spawnObstacles();
}
 
  drawSprites();
}

function spawnObstacles(){
  if(frameCount%60===0){
  obstacle=createSprite(1050,350,10,10)
  obstacle.velocityX=-10
  obstacle.y=Math.round(random(200,500))
  obstacle.life=100
  obstaclesGroup.add(obstacle)
  }

}


