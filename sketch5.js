let R = 180 , G = 200; B = 120
let A = 50 , C = 100; D = 120
let XorY = true
function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(2);  
  background(0,0,0);
}

function draw() {

}
function mouseClicked(){
 // stroke(R,G,B) //makes circle have border color the same as previous fill
  R = random(0,255)
  G = random(0,255)
  B = random (0,255)
  A = random(0,255)
  C = random(0,255)
  D = random (0,255)
  stroke(A,C,D)
  XorY = !XorY
}
function mouseDragged(){
  if (!XorY){
  movement = mouseX
  } else{
    movement = mouseY
  }
  circle (pmouseX,pmouseY,movement); //movement sets size
  fill(R,G,B)
  
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
}