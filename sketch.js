var dong;
function setup() {
  createCanvas(400,400);
  dong = createSprite (200,200,20,20);

}

function draw() 
{
  background(30);

  if(keyIsDown (RIGHT_ARROW)){
dong.position.x=dong.position.x+2;}
if (keyIsDown (LEFT_ARROW)){
  dong.position.x=dong.position.x-2;}
  if (keyIsDown (UP_ARROW)){
    dong.position.y=dong.position.y-2;}
    if (keyIsDown (DOWN_ARROW)){
      dong.position.y=dong.position.y+2;}

  drawSprites ();
}




