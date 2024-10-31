let R = 0 , G = 0; B = 0
let W = 3

function setup() {
  createCanvas(windowWidth, windowHeight);  
  background(220,220,220);
}

function draw() {

}
function mouseClicked(){
  R = random(0,255)
  G = random(0,255)
  B = random (0,255)
  stroke(R,G,B)
}
function mouseDragged(){
  strokeWeight(W);
  line (pmouseX,pmouseY,mouseX,mouseY);
  W = random(0,20)
  
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
}
