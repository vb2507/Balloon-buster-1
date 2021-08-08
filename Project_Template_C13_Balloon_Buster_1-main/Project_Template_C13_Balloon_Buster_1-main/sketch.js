var background1,backgroundImage;
var redballoon,redballoonImage;
var blueballoon,blueballoonImage;
var greenballoon,greenballoonImage;
var bow,bowImage;
var pinkballoon,pinkballoonImage;
var arrow,arrowImage
function preload(){
 //load your images here 
 backgroundImage = loadImage("background0.png")
  redballoonImage = loadImage("red_balloon0.png")
  blueballoonImage = loadImage("blue_balloon0.png")
  greenballoonImage = loadImage("green_balloon0.png")
  pinkballoonImage = loadImage("pink_balloon0.png")

  bowImage = loadImage("bow0.png")
  arrowImage = loadImage("arrow0.png")
}

function setup() {
  createCanvas(600,600);
  background1 = createSprite(300,100,0,0);
  background1.addImage("background1",backgroundImage);
  background1.velocityX = -4;
  background1.scale=3
    bow = createSprite(580,mouseY,10,10)
    bow.addImage(bowImage); 

   var select_balloon = Math.round(random(1,4));
  console.log(select_balloon)
  if (World.framecount % 80 == 0) {
     if (select_balloon = 1){
    redBalloon();
     }else if(select_balloon == 2){
       greenBalloon();
     }else if(select_balloon == 3 ){
        blueBalloon();
   }else{
     pinkBalloon();
   }
  }
  
  for(var i=150;i<490;i=i+60){
  redballoon = createSprite(50, i, 1, 1);
  redballoon.addImage(redballoonImage);
  redballoon.scale = 0.1
  }
  for(var i=170;i<450;i=i+60){ 
  blueballoon = createSprite(100, i, 1, 1);
  blueballoon.addImage(blueballoonImage);
  blueballoon.scale = 0.1
  }
  
  for(var i=200;i<400;i=i+60){
  greenballoon = createSprite(150, i, 1, 1);
  greenballoon.addImage(greenballoonImage);
  greenballoon.scale = 0.08
  }
  for(var i=250;i<370;i=i+50){
  pinkballoon = createSprite(200, i, 1, 1);
  pinkballoon.addImage(pinkballoonImage);
  pinkballoon.scale = 1
  }
}

function draw() {
  background("red")
  bow.y=mouseY;
  if(background1.x<0){
    background1.x=background1.width/2
  }
 
  if (keyDown("space")){
    var temp_arrow = createArrow();
    temp_arrow.addImage(arrowImage);
    temp_arrow.y = bow.y;
  }
  
  
  drawSprites();
}
function redBalloon(){
  var red = createSprite(0,Math.round(random(20,370)),10,10)
  red.addImage(redballoonImage)
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1
}


function createArrow() {
   
  
  arrow= createSprite (360,100,5,10);
    arrow.velocityX = -6;
  arrow.scale = 0.3;
  return arrow; 
}
