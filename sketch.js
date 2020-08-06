var gameState = 0;
var carCode = 0;
var form ;

function setup() {
  createCanvas(displayWidth-20,displayHeight-30);
  form = new Form();

}

function draw() {
  background(255,255,255);  
  form.display();
  //console.log(carCode);
  drawSprites();
}