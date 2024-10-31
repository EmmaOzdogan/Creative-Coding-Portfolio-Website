let rectangles = [];
let numRect = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numRect; i++) {
    rect[i] = {
      x: random(width),
      y: random(height),
      vel: createVector(0, 0),
    };
  }
}

function draw() {
 // background(220) //swap with other background for "non-brush" rectangles
 background(0,2,10,16)
  for (let i = 0; i < numRect; i++) {
    rect(rect[i].x, rect[i].y, 50, 50, 18); //can mess around with rectangle rounded edges

    rect[i].x = lerp(rect[i].x, mouseX, 0.05);
    rect[i].y = lerp(rect[i].y, mouseY, 0.5);

    rect[i].vel.x *= 0.98;
    rect[i].vel.y *= 0.98;

    rect[i].x += rect[i].vel.x;
    rect[i].y += rect[i].vel.y;

    for (let j = 0; j < numRect; j++) {
      if (j != i) {
       let col =  dist(rect[i].x, rect[i].y, rect[j].x, rect[j].y); 
        fill(col,random(0,180),255-col);
        stroke(255-col,random(0,180),col);
        
      }
    }
  }
}

function mouseClicked() {
  for (let i = 0; i < numRect; i++) {
    rect[i].vel.x = random(-50, 50);
    rect[i].vel.y = random(-50, 50)
  }
}
    
function mouseDragged(){
  for (let i = 0; i < numRect; i++) {
    rect[i].vel.x = random(-50, 50);
    rect[i].vel.y = random(-50, 50);
}
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
}